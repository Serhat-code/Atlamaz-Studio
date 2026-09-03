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
import { indexableRoutes, prerenderRoutes, sitemapEntries } from '../src/routes.js';
import { villes } from '../src/data/villes.js';
import { services } from '../src/data/services.js';
import { articles } from '../src/data/articles.js';
import { realisations } from '../src/data/realisations.js';

const SITE_URL = 'https://www.atlamaz-studio.fr';

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
 * Deux balises sont volontairement absentes du gabarit, car un défaut y est
 * plus nuisible qu'utile une fois recopié sur 46 pages :
 *   - <link rel="canonical"> : une page ayant oublié la sienne héritait de
 *     celle de l'accueil et se déclarait donc comme un doublon à désindexer
 *     (c'était le cas des trois /realisations/:slug). Le contrôle plus bas
 *     fait échouer le build si une route indexable n'en pose pas.
 *   - le JSON-LD LocalBusiness, ancré sur Lyon : il se dupliquait sur chaque
 *     page ville, qui déclare déjà le sien — /creation-site-web-annecy
 *     annonçait deux LocalBusiness contradictoires. Il vit dans Home.jsx.
 *
 * index.html porte les autres valeurs SEO par défaut (title, description, OG…).
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

/**
 * llms.txt — index en clair destiné aux assistants IA.
 *
 * Dérivé des mêmes données que les pages, et non maintenu à la main : la
 * version manuscrite annonçait encore une landing page à 490€ et un site
 * vitrine à 990€ (réels : 999€), et ignorait les 20 villes et 6 articles.
 * C'est précisément le fichier qu'un assistant lit pour répondre « combien
 * coûte Atlamaz Studio » — il ne peut pas diverger du contenu du site.
 */
function buildLlmsTxt() {
  /** Première phrase seulement : llms.txt vise la densité, pas l'exhaustivité. */
  const firstSentence = (text) => {
    const match = text.match(/^[\s\S]*?[.!?](?=\s|$)/);
    return (match ? match[0] : text).trim();
  };

  const section = (title, items) =>
    `## ${title}\n\n${items.join('\n')}\n`;

  const link = (path, label, description) =>
    `- [${label}](${SITE_URL}${path}): ${description}`;

  return `# Atlamaz Studio

> Studio de création de sites web basé à Lyon (France). Sites vitrines, landing pages, boutiques en ligne et applications mobiles, livrés rapidement avec un code sur mesure.

Atlamaz Studio est un studio de création web fondé par Serhat Atlamaz, basé à Lyon et intervenant en Auvergne-Rhône-Alpes. Un seul interlocuteur du brief à la mise en ligne, sans intermédiaire commercial. Le devis est établi au cas par cas ; les fourchettes indicatives figurent ci-dessous et dans la FAQ.

${section('Pages principales', [
  link('/', 'Accueil', 'Présentation du studio, des services et des réalisations.'),
  link('/studio', 'Studio', "Présentation du fondateur et de l'approche du studio."),
  link('/realisations', 'Réalisations', 'Portfolio des projets livrés.'),
  link('/nos-villes', "Nos villes d'intervention", 'Zones desservies en Auvergne-Rhône-Alpes.'),
  link('/services', 'Nos services', 'Liste de toutes les prestations, avec prix et délais.'),
  link('/blog', 'Blog', 'Articles sur la création de sites web et le référencement local.'),
  link('/faq', 'FAQ', 'Questions fréquentes sur les prestations, les tarifs et le déroulement des projets.'),
])}
${section(
  'Services',
  services.map((s) =>
    link(`/${s.slug}`, s.nom, `${firstSentence(s.description)} Tarif : ${s.prix}. Délai : ${s.delai}.`),
  ),
)}
${section(
  "Villes d'intervention",
  villes.map((v) =>
    link(`/${v.slug}`, `Création site web ${v.nom}`, `${v.departement} — ${firstSentence(v.description)}`),
  ),
)}
${section(
  'Articles',
  articles.map((a) => link(`/blog/${a.slug}`, a.titre, a.metaDescription)),
)}
${section(
  'Projets',
  realisations.map((r) => link(`/realisations/${r.slug}`, r.nom, firstSentence(r.description))),
)}
${section('Optional', [
  link('/mentions-legales', 'Mentions légales', "Informations légales sur l'éditeur du site."),
  link('/politique-confidentialite', 'Politique de confidentialité', 'Traitement des données personnelles et cookies.'),
  link('/sitemap.xml', 'Sitemap', "Plan complet du site pour l'indexation."),
])}`;
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

  const indexable = new Set(indexableRoutes);
  const targets = [
    ...prerenderRoutes.map((route) => ({
      route,
      out: outputPathFor(route),
      canonical: indexable.has(route)
        ? `${SITE_URL}${route === '/' ? '/' : route}`
        : null,
    })),
    // Servi par Vercel sur les URLs inconnues, avec un vrai statut 404.
    { route: NOT_FOUND_PROBE, out: join(distDir, '404.html'), canonical: null },
  ];

  console.log(`→ Pré-rendu de ${targets.length} routes…`);
  const failures = [];

  for (const { route, out, canonical } of targets) {
    try {
      const result = await render(route);
      if (!result.html.trim()) {
        throw new Error('rendu vide — route non résolue ?');
      }
      // Le <title> doit exister ET porter du texte : React 19 hisse la balise
      // nativement et exige un enfant texte unique. Un titre composé
      // (« {projet.nom} — Atlamaz Studio ») produisait un <title> vide que le
      // simple test de présence laissait passer, et la page héritait alors des
      // Open Graph par défaut du gabarit.
      const title = result.head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
      if (title === undefined) {
        throw new Error('aucun <title> — la page ne déclare pas ses métadonnées');
      }
      if (!title.trim()) {
        throw new Error('<title> vide — enfant texte unique attendu (cf. hissage React 19)');
      }
      // Une page indexable doit poser sa propre canonique, et pointer sur
      // elle-même : le gabarit n'en fournit plus par défaut, et une canonique
      // erronée demande la désindexation de la page au profit d'une autre.
      if (canonical) {
        const declared = result.head
          .match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)?.[0]
          .match(/href=["']([^"']+)["']/i)?.[1];
        if (!declared) {
          throw new Error('aucune <link rel="canonical">');
        }
        if (declared.replace(/\/$/, '') !== canonical.replace(/\/$/, '')) {
          throw new Error(`canonique ${declared} au lieu de ${canonical}`);
        }
        // og:url doit désigner la même page que la canonique. Une page qui
        // n'émet pas ses Open Graph hérite de ceux du gabarit, ancrés sur
        // l'accueil : le partage social annonce alors la mauvaise page.
        const ogUrl = result.head
          .match(/<meta\b[^>]*property=["']og:url["'][^>]*>/i)?.[0]
          .match(/content=["']([^"']+)["']/i)?.[1];
        if (!ogUrl) {
          throw new Error('aucune <meta property="og:url">');
        }
        if (ogUrl.replace(/\/$/, '') !== canonical.replace(/\/$/, '')) {
          throw new Error(`og:url ${ogUrl} au lieu de ${canonical}`);
        }
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
  // Écrit après la copie de public/ par Vite : c'est bien la version générée
  // qui est publiée, pas un éventuel llms.txt figé dans public/.
  await writeFile(join(distDir, 'llms.txt'), buildLlmsTxt(), 'utf8');

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
