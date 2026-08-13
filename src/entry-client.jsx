import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/global.css';
import App from './App.jsx';

const container = document.getElementById('root');

const tree = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// En production le conteneur contient le markup pré-rendu au build : on hydrate.
// En dev, `vite dev` sert index.html tel quel — le placeholder <!--app-html--> est
// un simple nœud commentaire, donc aucun élément à hydrater. On monte alors
// normalement, sinon React échouerait sur un conteneur vide.
if (container.childElementCount > 0) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
