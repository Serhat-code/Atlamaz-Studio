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
