import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

// ── Slugs générés depuis les données ──────────────────────
const villeIds = [
  'lyon', 'villeurbanne', 'bron', 'venissieux', 'caluire',
  'decines', 'mions', 'chassieu',
  'saint-etienne', 'roanne', 'firminy', 'andrezieux',
  'grenoble', 'echirolles', 'bourgoin', 'voiron',
  'annecy', 'chambery', 'clermont-ferrand', 'valence',
];

const serviceSlugs = [
  'creation-landing-page',
  'creation-site-vitrine',
  'creation-boutique-en-ligne',
  'creation-application-mobile',
  'refonte-site-web',
  'maintenance-site-web',
  'creation-site-restaurant',
];

const articleSlugs = [
  'combien-coute-site-web-professionnel',
  'seo-local-comment-apparaitre-google-maps',
  'freelance-vs-agence-qui-choisir',
  'application-mobile-react-native-guide',
  'design-web-tendances-2026',
  'vitesse-chargement-site-web-importance',
];

const villeRoutes = villeIds.map((id) => `/creation-site-web-${id}`);
const serviceRoutes = serviceSlugs.map((slug) => `/${slug}`);
const blogRoutes = articleSlugs.map((slug) => `/blog/${slug}`);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://atlamazstudio.fr',
      dynamicRoutes: [
        // Priorité 1.0 — Accueil
        '/',
        // Priorité 0.9 — Villes et services
        '/nos-villes',
        ...villeRoutes,
        ...serviceRoutes,
        // Priorité 0.8 — Blog
        '/blog',
        ...blogRoutes,
        // Priorité 0.7 — FAQ et réalisations
        '/faq',
        '/realisations',
        // Priorité 0.6 — Légal
        '/mentions-legales',
        '/politique-confidentialite',
      ],
      // Exclure les pages non indexables
      exclude: ['/merci', '/404'],
      // Priorités et fréquences
      changefreq: 'monthly',
      priority: 0.7,
      // Priorités personnalisées
      routesConfig: {
        '/': { changefreq: 'weekly', priority: 1.0 },
        '/nos-villes': { changefreq: 'monthly', priority: 0.9 },
        '/realisations': { changefreq: 'weekly', priority: 0.7 },
        '/blog': { changefreq: 'weekly', priority: 0.8 },
        '/faq': { changefreq: 'monthly', priority: 0.7 },
        '/mentions-legales': { changefreq: 'yearly', priority: 0.3 },
        '/politique-confidentialite': { changefreq: 'yearly', priority: 0.3 },
        // Villes : 0.9
        ...Object.fromEntries(villeRoutes.map((r) => [r, { changefreq: 'monthly', priority: 0.9 }])),
        // Services : 0.9
        ...Object.fromEntries(serviceRoutes.map((r) => [r, { changefreq: 'monthly', priority: 0.9 }])),
        // Blog articles : 0.8
        ...Object.fromEntries(blogRoutes.map((r) => [r, { changefreq: 'monthly', priority: 0.8 }])),
      },
    }),
  ],
});
