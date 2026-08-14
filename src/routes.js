// ============================================================
// ATLAMAZ STUDIO — Manifeste des routes
// ============================================================
// Source unique de vérité pour le sitemap (vite.config.js) et le
// pré-rendu statique (scripts/prerender.js). Les deux listes étaient
// auparavant dérivées séparément : une route ajoutée à l'un pouvait
// manquer à l'autre, avec à la clé une URL indexée mais servie vide.

import { villes } from './data/villes.js';
import { services } from './data/services.js';
import { articles } from './data/articles.js';
import { realisations } from './data/realisations.js';

export const villeRoutes = villes.map((v) => `/${v.slug}`);
export const serviceRoutes = services.map((s) => `/${s.slug}`);
export const blogRoutes = articles.map((a) => `/blog/${a.slug}`);
export const realisationRoutes = realisations.map((r) => `/realisations/${r.slug}`);

/**
 * Routes publiques destinées à l'indexation — alimente le sitemap.
 * /studio et les pages détail de réalisations sont routées et maillées
 * depuis le site, mais étaient absentes du sitemap : elles doivent de
 * toute façon être pré-rendues pour ne pas retourner un 404.
 */
export const indexableRoutes = [
  '/',
  '/studio',
  '/realisations',
  ...realisationRoutes,
  '/nos-villes',
  '/blog',
  '/faq',
  ...villeRoutes,
  ...serviceRoutes,
  ...blogRoutes,
];

/**
 * Routes pré-rendues mais volontairement hors sitemap.
 *
 * Les trois portent une <meta name="robots" content="noindex"> : les lister
 * dans le sitemap revenait à demander l'indexation de pages qui la refusent,
 * ce que Search Console signale en « Soumise mais marquée noindex ». Elles
 * doivent en revanche exister en HTML statique — /merci est atteinte après
 * l'envoi du formulaire, et les pages légales sont liées depuis le footer :
 * sans fichier, un accès direct retournerait un 404.
 */
export const noindexRoutes = [
  '/mentions-legales',
  '/politique-confidentialite',
  '/merci',
];

const asMap = (routes, config) =>
  Object.fromEntries(routes.map((r) => [r, config]));

const SITEMAP_DEFAULT = { changefreq: 'monthly', priority: '0.7' };

const SITEMAP_OVERRIDES = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/nos-villes': { changefreq: 'monthly', priority: '0.9' },
  '/realisations': { changefreq: 'weekly', priority: '0.7' },
  '/studio': { changefreq: 'monthly', priority: '0.6' },
  '/blog': { changefreq: 'weekly', priority: '0.8' },
  '/faq': { changefreq: 'monthly', priority: '0.7' },
  ...asMap(villeRoutes, { changefreq: 'monthly', priority: '0.9' }),
  ...asMap(serviceRoutes, { changefreq: 'monthly', priority: '0.9' }),
  ...asMap(blogRoutes, { changefreq: 'monthly', priority: '0.8' }),
  ...asMap(realisationRoutes, { changefreq: 'monthly', priority: '0.6' }),
};

/** Entrées du sitemap, dérivées des routes indexables. */
export const sitemapEntries = indexableRoutes.map((route) => ({
  route,
  ...SITEMAP_DEFAULT,
  ...SITEMAP_OVERRIDES[route],
}));

/** Toutes les routes à figer en HTML au build. */
export const prerenderRoutes = [...indexableRoutes, ...noindexRoutes];
