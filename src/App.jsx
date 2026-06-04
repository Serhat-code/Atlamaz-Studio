import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { fr } from './i18n/fr';
import { en } from './i18n/en';

import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import CookieBanner from './components/CookieBanner';

import Home                    from './pages/Home';
import Realisations            from './pages/Realisations';
import RealisationDetail       from './pages/RealisationDetail';
import MentionsLegales         from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Merci                   from './pages/Merci';
import NotFound                from './pages/NotFound';
import Tarifs                 from './pages/Tarifs';
import VillePage               from './pages/VillePage';
import NosVilles               from './pages/NosVilles';
import ServicePage             from './pages/ServicePage';
import FAQ                     from './pages/FAQ';
import Blog                    from './pages/Blog';
import BlogArticle             from './pages/BlogArticle';
import { services }            from './data/services';

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
        <Layout t={t} lang={lang} onLangToggle={handleLangToggle}>
          <Routes>
            <Route path="/"                               element={<Home t={t} />} />
            <Route path="/realisations"                   element={<Realisations t={t} />} />
            <Route path="/realisations/:slug"             element={<RealisationDetail t={t} />} />
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
            <Route path="/creation-site-web-:villeId"    element={<VillePage />} />
            {/* 404 */}
            <Route path="*"                               element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
