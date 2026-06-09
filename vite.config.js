import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import { villes } from './src/data/villes.js';
import { services } from './src/data/services.js';
import { articles } from './src/data/articles.js';

const BASE_URL = 'https://atlamaz-studio.fr';

const villeRoutes   = villes.map((v)   => `/creation-site-web-${v.villeId}`);
const serviceRoutes = services.map((s) => `/${s.slug}`);

const blogRoutes = articles.map((a) => `/blog/${a.slug}`);

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            return 'deps';
          }
        },
      },
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
  plugins: [
    react(),
    sitemap({
      hostname: BASE_URL,
      dynamicRoutes: [
        '/',
        '/nos-villes',
        ...villeRoutes,
        ...serviceRoutes,
        '/blog',
        ...blogRoutes,
        '/tarifs',
        '/faq',
        '/realisations',
        '/mentions-legales',
        '/politique-confidentialite',
      ],
      exclude: ['/merci', '/404'],
      changefreq: 'monthly',
      priority: 0.7,
      routesConfig: {
        '/':           { changefreq: 'weekly',  priority: 1.0 },
        '/nos-villes': { changefreq: 'monthly', priority: 0.9 },
        '/realisations': { changefreq: 'weekly', priority: 0.7 },
        '/blog':       { changefreq: 'weekly',  priority: 0.8 },
        '/tarifs':     { changefreq: 'monthly', priority: 0.9 },
        '/faq':        { changefreq: 'monthly', priority: 0.7 },
        '/mentions-legales':          { changefreq: 'yearly', priority: 0.3 },
        '/politique-confidentialite': { changefreq: 'yearly', priority: 0.3 },
        ...Object.fromEntries(villeRoutes.map((r)   => [r, { changefreq: 'monthly', priority: 0.9 }])),
        ...Object.fromEntries(serviceRoutes.map((r) => [r, { changefreq: 'monthly', priority: 0.9 }])),
        ...Object.fromEntries(blogRoutes.map((r)    => [r, { changefreq: 'monthly', priority: 0.8 }])),
      },
    }),
  ],
});
