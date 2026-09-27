import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Le sitemap est écrit par scripts/prerender.js à partir de src/routes.js.
// vite-plugin-sitemap a été retiré : il scannait dist/, qui contient désormais
// un fichier HTML par route, et produisait un sitemap incorrect (accueil en
// double, fichier de vérification Search Console indexé, priorités ignorées).
// Il réécrivait de surcroît robots.txt en perdant la règle Disallow: /merci.

// Le build SSR ne produit qu'un bundle Node consommé par le pré-rendu :
// le découpage en chunks n'y a pas de sens.
export default defineConfig(({ isSsrBuild }) => ({
  build: isSsrBuild
    ? {}
    : {
        // Une seule feuille, liée dans le <head> de chaque page pré-rendue.
        // Découpée par page, la CSS des routes en React.lazy n'arrivait
        // qu'avec leur chunk JS : le HTML statique s'affichait d'abord sans
        // styles (hero sombre des pages services peint en blanc). Coût :
        // ~14 ko gzip au total contre ~8 ko pour la seule feuille commune.
        cssCodeSplit: false,
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                if (
                  id.includes('react') ||
                  id.includes('react-dom') ||
                  id.includes('react-router-dom')
                ) {
                  return 'vendor';
                }
                return 'deps';
              }
            },
          },
        },
      },
  plugins: [react()],
}));
