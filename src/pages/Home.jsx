import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero             from '../components/Hero';
import HomeLogo          from '../components/HomeLogo';
import PainPoints        from '../components/PainPoints';
import Process           from '../components/Process';
import MaskTransition    from '../components/MaskTransition';
import HomeRealisations  from '../components/HomeRealisations';
import HomeFAQ           from '../components/HomeFAQ';
import FinalCTA          from '../components/FinalCTA';
import HomeBottomNav     from '../components/HomeBottomNav';
import ScrollTrail       from '../components/ScrollTrail';
import styles from '../styles/Home.module.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const OG_IMAGE = import.meta.env.VITE_OG_IMAGE;

// Entité du site, déclarée sur la seule page d'accueil : c'est l'URL que
// Google retient comme identité de l'organisation. Les pages villes portent
// leur propre LocalBusiness géolocalisé — deux entités concurrentes sur une
// même page brouilleraient le rattachement.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#organization`,
  name: 'Atlamaz Studio',
  description:
    'Studio de création web freelance à Lyon — sites vitrines, landing pages, boutiques en ligne, applications mobiles React Native.',
  url: BASE_URL,
  email: 'atlamazstudio@gmail.com',
  image: OG_IMAGE,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lyon',
    addressRegion: 'Rhône',
    addressCountry: 'FR',
  },
  areaServed: [
    { '@type': 'City', name: 'Lyon' },
    { '@type': 'Country', name: 'France' },
  ],
  knowsAbout: [
    'Création de site web',
    'React',
    'SEO',
    'Application mobile',
    'React Native',
  ],
  sameAs: ['https://www.linkedin.com/company/atlamaz-studio'],
};

export default function Home({ t }) {
  const wrapperRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>Atlamaz Studio — Création de sites web à Lyon</title>
        <meta name="description" content="Studio de création web à Lyon. Sites vitrines, landing pages, boutiques en ligne, applications mobiles. Livraison rapide, prix clairs, résultats garantis." />
        <link rel="canonical" href={`${BASE_URL}/`} />
        <meta property="og:title"       content="Atlamaz Studio — Création de sites web à Lyon" />
        <meta property="og:description" content="Studio de création web à Lyon. Sites vitrines, landing pages, boutiques en ligne, applications mobiles." />
        <meta property="og:url"         content={`${BASE_URL}/`} />
        <meta property="og:image"       content={OG_IMAGE} />
        <meta name="twitter:card"       content="summary_large_image" />
        <meta name="twitter:image"      content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <HomeLogo />

      <div ref={wrapperRef} className={styles.wrapper}>
        <ScrollTrail containerRef={wrapperRef} />
        <Hero            t={t} />
        <PainPoints      t={t} />
        <Process         t={t} />
        <MaskTransition  t={t} />
        <HomeRealisations t={t} />
        <HomeFAQ         t={t} />
        <FinalCTA        t={t} />
      </div>

      <HomeBottomNav t={t} />
    </>
  );
}
