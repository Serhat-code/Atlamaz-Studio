import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { realisations, REALISATION_TYPES } from '../data/realisations';
import RealisationCard from '../components/RealisationCard';
import styles from '../styles/Realisations.module.css';

export default function Realisations({ t }) {
  const { realisations: rt } = t;
  const [activeFilter, setActiveFilter] = useState('tous');

  const filtered = activeFilter === 'tous'
    ? realisations
    : realisations.filter((p) => p.typeId === activeFilter);

  return (
    <>
      <Helmet>
        <title>{rt.meta.title}</title>
        <meta name="description"      content={rt.meta.description} />
        <link rel="canonical"         href="https://atlamazstudio.fr/realisations" />
        <meta property="og:title"     content={rt.meta.title} />
        <meta property="og:description" content={rt.meta.description} />
        <meta property="og:url"       content="https://atlamazstudio.fr/realisations" />
        <meta property="og:image"     content="https://atlamazstudio.fr/og-image.svg" />
        <meta name="twitter:card"     content="summary_large_image" />
        <meta name="twitter:image"    content="https://atlamazstudio.fr/og-image.svg" />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">{rt.hero.eyebrow}</span>
          <h1 className={styles.heroTitle}>{rt.hero.title}</h1>
          <p className={styles.heroSubtitle}>{rt.hero.subtitle}</p>
        </div>
      </section>

      {/* Filtres */}
      <section className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filters} role="group" aria-label={rt.filters.label}>
            {REALISATION_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`${styles.filterBtn} ${activeFilter === type.id ? styles.filterBtnActive : ''}`}
                aria-pressed={activeFilter === type.id}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille */}
      <section className={`section ${styles.gridSection}`}>
        <div className="container">
          {filtered.length === 0 ? (
            <p className={styles.empty}>{rt.empty}</p>
          ) : (
            <div className={styles.grid}>
              {filtered.map((projet) => (
                <RealisationCard
                  key={projet.slug}
                  projet={projet}
                  ctaLabel={rt.card.cta}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
