import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://atlamazstudio.fr',
      // Pages statiques indexables
      dynamicRoutes: [
        '/',
        '/realisations',
        '/mentions-legales',
        '/politique-confidentialite',
      ],
      // Exclure les pages non indexables
      exclude: ['/merci', '/404'],
      // Priorités et fréquences
      changefreq: 'monthly',
      priority: 0.8,
      // Priorité maximale pour l'accueil
      routesConfig: {
        '/': { changefreq: 'weekly', priority: 1.0 },
        '/realisations': { changefreq: 'weekly', priority: 0.9 },
      },
    }),
  ],
});
