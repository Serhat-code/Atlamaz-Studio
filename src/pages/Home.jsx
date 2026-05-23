import { Helmet } from 'react-helmet-async';
import Hero    from '../components/Hero';
import Stats   from '../components/Stats';
import Packs   from '../components/Packs';
import Process from '../components/Process';
import Contact from '../components/Contact';
import CTA     from '../components/CTA';

const OG_IMAGE = 'https://atlamazstudio.fr/og-image.svg';
const BASE_URL  = 'https://atlamazstudio.fr';

export default function Home({ t }) {
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

      <Hero    t={t} />
      <Stats   t={t} />
      <Packs   t={t} />
      <Process t={t} />
      <Contact t={t} />
      <CTA     t={t} />
    </>
  );
}
