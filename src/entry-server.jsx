import { StrictMode } from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

// React scinde le flux dès que la coquille dépasse ce seuil : le contenu des
// frontières Suspense encore en cours part alors dans un <div hidden> replacé
// par script, invisible pour un crawler sans JS. La valeur par défaut (12,8 ko)
// coupait toutes les pages longues — accueil, FAQ, villes, services. On la
// relève pour garantir un document entièrement inline.
const NO_CHUNK_SPLIT = 100_000_000;

// react-helmet-async 3 n'alimente plus le contexte serveur : il s'appuie sur le
// hissage natif des métadonnées de React 19, qui rend <title>/<meta>/<link>
// comme de vrais éléments, groupés en tête du flux. On les détache donc du
// corps pour les replacer dans le <head> du document.
const HOISTABLE = /^(<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*?>|<link\b[^>]*?>)/i;

function extractHoistables(markup) {
  let head = '';
  let body = markup;
  let match;

  while ((match = body.match(HOISTABLE)) !== null) {
    head += match[1];
    body = body.slice(match[0].length);
  }

  return { head, body };
}

function collect(stream) {
  return new Promise((resolve, reject) => {
    let output = '';
    stream.on('data', (chunk) => {
      output += chunk;
    });
    stream.on('end', () => resolve(output));
    stream.on('error', reject);
  });
}

/**
 * Rend une route en HTML statique complet.
 *
 * prerenderToNodeStream (react-dom/static) et non renderToPipeableStream :
 * c'est l'API React 19 dédiée à la génération statique, qui attend la
 * résolution de tout l'arbre — y compris les pages chargées via React.lazy —
 * avant de produire le document.
 *
 * @returns {Promise<{ html: string, head: string }>}
 */
export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <HelmetProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
    {
      progressiveChunkSize: NO_CHUNK_SPLIT,
      onError(error) {
        // Remonté ici plutôt qu'avalé : sans ça, une page en erreur produirait
        // un HTML tronqué que le build accepterait silencieusement.
        throw error;
      },
    },
  );

  const { head, body } = extractHoistables(await collect(prelude));
  return { html: body, head };
}
