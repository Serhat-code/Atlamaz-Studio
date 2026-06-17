import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { realisations } from '../data/realisations';
import Reveal from './Reveal';
import styles from '../styles/HomeRealisations.module.css';

function ProjectCard({ r, featured = false }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty('--mx', `${x}%`);
    cardRef.current.style.setProperty('--my', `${y}%`);
  };

  return (
    <Link
      to={`/realisations/${r.slug}`}
      ref={cardRef}
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      onMouseMove={handleMouseMove}
      style={!r.image ? { background: r.couleur } : undefined}
      aria-label={`Voir le projet ${r.nom}`}
    >
      {r.image && (
        <img
          src={r.image}
          alt={`Aperçu du site ${r.nom}`}
          className={styles.bg}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className={styles.overlay} />
      <div className={styles.halo} />
      <div className={styles.cardContent}>
        <div className={styles.cardMeta}>
          <span className={styles.cardCat}>{r.secteur}</span>
          <span className={styles.cardYear}>{r.annee}</span>
        </div>
        <div className={styles.cardBottom}>
          <h3 className={styles.cardTitle}>{r.nom}</h3>
          <div className={styles.cardStack}>
            {r.technologies?.slice(0, 3).map((t) => (
              <span key={t} className={styles.cardTag}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <span className={styles.cardArrow} aria-hidden="true">↗</span>
    </Link>
  );
}

export default function HomeRealisations() {
  const featured = realisations[0];
  const rest = realisations.slice(1);

  return (
    <section className={styles.section} id="realisations-home">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Reveal as="span" className="section-label">Réalisations</Reveal>
            <Reveal delay={1}>
              <h2 className="section-title">
                Quelques projets <strong>dont on est fiers.</strong>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2} className={styles.headerRight}>
            <Link to="/realisations" className={`btn btn--emerald ${styles.allLink}`}>
              Tous les projets →
            </Link>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {featured && (
            <Reveal>
              <ProjectCard r={featured} featured />
            </Reveal>
          )}
          <div className={styles.gridRight}>
            {rest.map((r, i) => (
              <Reveal key={r.id} delay={Math.min(i + 1, 3)}>
                <ProjectCard r={r} />
              </Reveal>
            ))}
            {/* Placeholder si moins de 2 projets secondaires */}
            {rest.length === 0 && (
              <div className={`${styles.card} ${styles.placeholder}`}>
                <span className={styles.placeholderLabel}>Bientôt</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
