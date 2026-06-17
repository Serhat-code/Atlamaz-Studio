import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { realisations, REALISATION_CATS } from '../data/realisations';
import RealisationCard from '../components/RealisationCard';
import Reveal from '../components/Reveal';
import styles from '../styles/Realisations.module.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const OG_IMAGE = import.meta.env.VITE_OG_IMAGE;

export default function Realisations({ t }) {
  const { realisations: rt } = t;
  const [activeFilter, setActiveFilter] = useState('tous');

  const filtered = activeFilter === 'tous'
    ? realisations
    : realisations.filter((r) => r.cat === activeFilter);

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

      {/* Filtres */}
      <div className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filters} role="group" aria-label="Filtrer par catégorie">
            {REALISATION_CATS.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(cat.id)}
                aria-pressed={activeFilter === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grille */}
      <section className={styles.gridSection}>
        <div className="container">
          {filtered.length === 0 ? (
            <p className={styles.empty}>Aucun projet dans cette catégorie pour l&apos;instant.</p>
          ) : (
            <div className={styles.grid}>
              {filtered.map((r, i) => (
                <Reveal key={r.id} delay={Math.min(i + 1, 4)}>
                  <RealisationCard realisation={r} featured={i === 0 && activeFilter === 'tous'} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
