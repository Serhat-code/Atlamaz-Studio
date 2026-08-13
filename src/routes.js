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
  '/mentions-legales',
  '/politique-confidentialite',
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
  '/mentions-legales': { changefreq: 'yearly', priority: '0.3' },
  '/politique-confidentialite': { changefreq: 'yearly', priority: '0.3' },
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

/**
 * Routes à pré-rendre = les indexables + celles volontairement hors sitemap.
 * /merci est exclue du sitemap (robots.txt la bloque) mais reste atteignable
 * après envoi du formulaire : sans HTML statique, un rechargement direct de
 * cette URL retournerait un 404 Vercel une fois le fallback SPA retiré.
 */
export const prerenderRoutes = [...indexableRoutes, '/merci'];
