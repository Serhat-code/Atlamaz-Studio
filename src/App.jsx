import { useEffect, useSyncExternalStore, Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { fr } from './i18n/fr';
import { en } from './i18n/en';
import { subscribeLang, getLang, getServerLang, setLang } from './i18n/langStore';

import Footer         from './components/Footer';
import CookieBanner   from './components/CookieBanner';
import ScrollToTop    from './components/ScrollToTop';
import HomeLangToggle from './components/HomeLangToggle';
import HomeLogo       from './components/HomeLogo';
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
const VillePage                = lazy(() => import('./pages/VillePage'));
const NosVilles                = lazy(() => import('./pages/NosVilles'));
const ServicePage              = lazy(() => import('./pages/ServicePage'));
const FAQ                      = lazy(() => import('./pages/FAQ'));
const Blog                     = lazy(() => import('./pages/Blog'));
const BlogArticle              = lazy(() => import('./pages/BlogArticle'));

const translations = { fr, en };

function Layout({ t, lang, onLangToggle, children }) {
  // Chrome unique sur tout le site : la marque et le sélecteur de langue,
  // tous deux flottants. Les pages internes portaient auparavant une Navbar
  // sticky avec menu complet et numéro de téléphone — un registre de
  // prestataire qui contredisait la retenue de l'accueil. Le maillage interne
  // reste assuré par le fil d'Ariane de chaque page et par le footer, qui
  // liste villes, services et pages légales.
  const isHome = useLocation().pathname === '/';

  return (
    <>
      <HomeLogo />
      <HomeLangToggle lang={lang} onToggle={onLangToggle} />
      {/* La home ouvre sur un hero plein écran ; les autres pages démarrent
          par un fil d'Ariane qui passerait sous la chrome fixe. */}
      <main className={isHome ? undefined : 'main-offset'}>{children}</main>
      <Footer t={t} />
      <CookieBanner />
    </>
  );
}

export default function App() {
  // Le HTML statique est produit en français ; un visiteur ayant choisi
  // l'anglais bascule juste après l'hydratation (cf. langStore).
  const lang = useSyncExternalStore(subscribeLang, getLang, getServerLang);
  const t = translations[lang];

  // index.html déclare lang="fr" en dur : sans ça, la page reste annoncée
  // comme française aux lecteurs d'écran et aux moteurs une fois passée en EN.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleLangToggle = () => setLang(lang === 'fr' ? 'en' : 'fr');

  return (
    <>
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
            {/* La grille tarifaire publique a été retirée : le devis est établi
                au cas par cas. /tarifs était indexé — on redirige vers la FAQ,
                qui porte désormais la fourchette de prix. Vercel émet en plus
                un vrai 301 (cf. vercel.json) pour les moteurs. */}
            <Route path="/tarifs"                         element={<Navigate to="/faq" replace />} />
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
    </>
  );
}
