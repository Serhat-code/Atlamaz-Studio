import { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { fr } from './i18n/fr';
import { en } from './i18n/en';

import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop  from './components/ScrollToTop';
import { services } from './data/services';

// Home reste en import statique : c'est la page d'entrée la plus fréquente,
// inutile de la faire transiter par un chunk séparé + un aller-retour réseau.
import Home from './pages/Home';

const Realisations             = lazy(() => import('./pages/Realisations'));
const RealisationDetail        = lazy(() => import('./pages/RealisationDetail'));
const Studio                   = lazy(() => import('./pages/Studio'));
const MentionsLegales          = lazy(() => import('./pages/MentionsLegales'));
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'));
const Merci                    = lazy(() => import('./pages/Merci'));
const NotFound                 = lazy(() => import('./pages/NotFound'));
const Tarifs                   = lazy(() => import('./pages/Tarifs'));
const VillePage                = lazy(() => import('./pages/VillePage'));
const NosVilles                = lazy(() => import('./pages/NosVilles'));
const ServicePage              = lazy(() => import('./pages/ServicePage'));
const FAQ                      = lazy(() => import('./pages/FAQ'));
const Blog                     = lazy(() => import('./pages/Blog'));
const BlogArticle              = lazy(() => import('./pages/BlogArticle'));

const translations = { fr, en };

function Layout({ t, lang, onLangToggle, children }) {
  return (
    <>
      <Navbar t={t} lang={lang} onLangToggle={onLangToggle} />
      <main>{children}</main>
      <Footer t={t} />
      <CookieBanner />
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState(
    () => localStorage.getItem('lang') || 'fr'
  );
  const t = translations[lang];

  const handleLangToggle = () => {
    setLang((prev) => {
      const next = prev === 'fr' ? 'en' : 'fr';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout t={t} lang={lang} onLangToggle={handleLangToggle}>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/"                               element={<Home t={t} />} />
              <Route path="/realisations"                   element={<Realisations t={t} />} />
              <Route path="/realisations/:slug"             element={<RealisationDetail t={t} />} />
              <Route path="/studio"                         element={<Studio t={t} />} />
              <Route path="/mentions-legales"               element={<MentionsLegales />} />
              <Route path="/politique-confidentialite"      element={<PolitiqueConfidentialite />} />
              <Route path="/merci"                          element={<Merci t={t} />} />
              {/* SEO pages */}
              <Route path="/tarifs"                         element={<Tarifs t={t} />} />
              <Route path="/nos-villes"                     element={<NosVilles />} />
              <Route path="/faq"                            element={<FAQ />} />
              <Route path="/blog"                           element={<Blog />} />
              <Route path="/blog/:slug"                     element={<BlogArticle />} />
              {services.map((s) => (
                <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage serviceSlug={s.slug} />} />
              ))}
              {/* React Router exige que :param soit le segment entier — on capture le slug
                  complet ("creation-site-web-lyon") et on résout la ville par slug. */}
              <Route path="/:slug"                          element={<VillePage />} />
              {/* 404 */}
              <Route path="*"                               element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
