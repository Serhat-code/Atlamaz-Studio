import { Helmet } from 'react-helmet-async';
import { realisations } from '../data/realisations';
import RealisationCard from '../components/RealisationCard';
import Reveal from '../components/Reveal';
import styles from '../styles/Realisations.module.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const OG_IMAGE = import.meta.env.VITE_OG_IMAGE;

export default function Realisations({ t }) {
  const { realisations: rt } = t;

  return (
    <>
      <Helmet>
        <title>{rt.meta.title}</title>
        <meta name="description"        content={rt.meta.description} />
        <link rel="canonical"           href={`${BASE_URL}/realisations`} />
        <meta property="og:title"       content={rt.meta.title} />
        <meta property="og:description" content={rt.meta.description} />
        <meta property="og:url"         content={`${BASE_URL}/realisations`} />
        <meta property="og:image"       content={OG_IMAGE} />
        <meta name="twitter:card"       content="summary_large_image" />
        <meta name="twitter:image"      content={OG_IMAGE} />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal as="span" className="section-label">{rt.hero.eyebrow}</Reveal>
          <Reveal delay={1}><h1 className={styles.heroTitle}>{rt.hero.title}</h1></Reveal>
          <Reveal delay={2}><p className={styles.heroSubtitle}>{rt.hero.subtitle}</p></Reveal>
        </div>
      </section>

      {/* Grille flip 3D */}
      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {realisations.map((r, i) => (
              <Reveal key={r.id} delay={Math.min(i + 1, 5)}>
                <RealisationCard realisation={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
