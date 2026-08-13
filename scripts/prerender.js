// ============================================================
// ATLAMAZ STUDIO — Génération statique (SSG)
// ============================================================
// Produit un index.html complet par route : HTML réel + <title> et
// <meta name="description"> propres à la page, sans exécution de JS côté
// client. L'app reste une SPA hydratée — seul le premier rendu est figé.
//
// Enchaînement :
//   1. build client  → dist/ (assets + index.html servant de gabarit)
//   2. build SSR     → .ssr-build/ (bundle Node, jeté en fin de script)
//   3. rendu de chaque route, injection dans le gabarit, écriture sur disque

import { build } from 'vite';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { prerenderRoutes, sitemapEntries } from '../src/routes.js';

const SITE_URL = 'https://atlamaz-studio.fr';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(projectRoot, 'dist');
const ssrDir = join(projectRoot, '.ssr-build');

// Chemin volontairement à deux segments : les routes à segment unique sont
// captées par /:slug (VillePage), qui redirige les slugs inconnus au lieu de
// rendre NotFound. Deux segments inconnus tombent bien sur la route « * ».
const NOT_FOUND_PROBE = '/__introuvable__/__introuvable__';

/**
 * Fusionne le <head> du gabarit avec celui produit par react-helmet-async.
 *
 * index.html porte des valeurs SEO par défaut (title, description, OG…).
 * Les concaténer aux balises de la page donnerait deux <title> et deux
 * meta description dans le HTML statique. On retire donc du gabarit les
 * balises que la page redéfinit — les défauts ne subsistent que pour combler
 * les trous (les pages légales n'ont ni OG ni canonical, par exemple).
 * C'est la sémantique qu'applique Helmet côté client.
 */
function mergeHead(templateHead, helmetHead) {
  const identify = (tag) => {
    const attr = tag.match(/\b(name|property)\s*=\s*["']([^"']+)["']/i);
    return attr ? `${attr[1].toLowerCase()}:${attr[2]}` : null;
  };

  const overridden = new Set();
  for (const tag of helmetHead.match(/<meta\b[^>]*>/gi) ?? []) {
    const key = identify(tag);
    if (key) overridden.add(key);
  }
  const hasTitle = /<title[\s>]/i.test(helmetHead);
  const hasCanonical = /<link\b[^>]*rel\s*=\s*["']canonical["']/i.test(helmetHead);

  let head = templateHead;
  if (hasTitle) {
    head = head.replace(/[ \t]*<title>[\s\S]*?<\/title>[ \t]*\n?/i, '');
  }
  if (hasCanonical) {
    head = head.replace(
      /[ \t]*<link\b[^>]*rel\s*=\s*["']canonical["'][^>]*>[ \t]*\n?/i,
      '',
    );
  }
  head = head.replace(/[ \t]*<meta\b[^>]*>[ \t]*\n?/gi, (tag) => {
    const key = identify(tag);
    return key && overridden.has(key) ? '' : tag;
  });

  return head;
}

function buildDocument(template, { html, head: headTags }) {
  const splitAt = template.indexOf('</head>');
  const head = mergeHead(template.slice(0, splitAt), headTags);
  const rest = template.slice(splitAt);

  return (head + rest)
    .replace('<!--app-head-->', headTags)
    .replace('<!--app-html-->', html);
}

function buildSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = sitemapEntries
    .map(({ route, changefreq, priority }) => {
      // Le sitemap doit annoncer l'URL canonique déclarée par chaque page ;
      // '/' est le seul chemin à conserver sa barre oblique finale.
      const loc = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

/** '/' → dist/index.html ; '/blog/x' → dist/blog/x/index.html */
function outputPathFor(route) {
  if (route === '/') return join(distDir, 'index.html');
  return join(distDir, route.replace(/^\/+|\/+$/g, ''), 'index.html');
}

async function main() {
  console.log('→ Build client…');
  await build({ root: projectRoot, logLevel: 'warn' });

  console.log('→ Build SSR…');
  await build({
    root: projectRoot,
    logLevel: 'warn',
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: '.ssr-build',
      emptyOutDir: true,
    },
  });

  const { render } = await import(
    pathToFileURL(join(ssrDir, 'entry-server.js')).href
  );

  // Lu avant toute écriture : la route '/' écrase ce même fichier.
  const template = await readFile(join(distDir, 'index.html'), 'utf8');

  const targets = [
    ...prerenderRoutes.map((route) => ({ route, out: outputPathFor(route) })),
    // Servi par Vercel sur les URLs inconnues, avec un vrai statut 404.
    { route: NOT_FOUND_PROBE, out: join(distDir, '404.html') },
  ];

  console.log(`→ Pré-rendu de ${targets.length} routes…`);
  const failures = [];

  for (const { route, out } of targets) {
    try {
      const result = await render(route);
      if (!result.html.trim()) {
        throw new Error('rendu vide — route non résolue ?');
      }
      if (!/<title[\s>]/i.test(result.head)) {
        throw new Error('aucun <title> — la page ne déclare pas ses métadonnées');
      }
      // Filet contre une régression du seuil de flush : si React réintroduisait
      // des frontières Suspense différées, le texte repartirait dans un
      // <div hidden> et redeviendrait invisible pour un crawler sans JS.
      if (/<template id="B:|<div hidden id="S:/.test(result.html)) {
        throw new Error('contenu différé dans une frontière Suspense');
      }
      await mkdir(dirname(out), { recursive: true });
      await writeFile(out, buildDocument(template, result), 'utf8');
    } catch (error) {
      failures.push({ route, error });
      console.error(`  ✗ ${route} — ${error.message}`);
    }
  }

  await writeFile(join(distDir, 'sitemap.xml'), buildSitemap(), 'utf8');

  await rm(ssrDir, { recursive: true, force: true });

  if (failures.length > 0) {
    throw new Error(
      `${failures.length} route(s) non pré-rendue(s) : ${failures
        .map((f) => f.route)
        .join(', ')}`,
    );
  }

  console.log(`✓ ${targets.length} routes pré-rendues dans dist/`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
