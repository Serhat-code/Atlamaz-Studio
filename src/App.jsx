import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { fr } from './i18n/fr';
import { en } from './i18n/en';

import Navbar  from './components/Navbar';
import Footer  from './components/Footer';

import Home                    from './pages/Home';
import Realisations            from './pages/Realisations';
import RealisationDetail       from './pages/RealisationDetail';
import MentionsLegales         from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Merci                   from './pages/Merci';
import NotFound                from './pages/NotFound';

const translations = { fr, en };

function Layout({ t, lang, onLangToggle, children }) {
  return (
    <>
      <Navbar t={t} lang={lang} onLangToggle={onLangToggle} />
      <main>{children}</main>
      <Footer t={t} />
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState('fr');
  const t = translations[lang];

  const handleLangToggle = () => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
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
            {/* 404 */}
            <Route path="*"                               element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
