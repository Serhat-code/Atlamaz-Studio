import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { buildSrcSet } from '../utils/images';
import styles from '../styles/RealisationCard.module.css';

export default function RealisationCard({ realisation: r, featured = false }) {
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
      style={!r.image ? { background: r.couleur } : undefined}
      onMouseMove={handleMouseMove}
      aria-label={`Voir le projet ${r.nom}`}
    >
      {r.image && (
        <img
          src={r.image}
          srcSet={buildSrcSet(r.image)}
          sizes="(max-width: 640px) 100vw, 50vw"
          alt={`Aperçu du site ${r.nom}`}
          className={styles.bg}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className={styles.overlay} />
      <div className={styles.halo} />

      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.cat}>{r.secteur}</span>
          <span className={styles.year}>{r.annee}</span>
        </div>
        <div className={styles.bottom}>
          <h3 className={styles.nom}>{r.nom}</h3>
          <p className={styles.type}>{r.type}</p>
          <div className={styles.stack}>
            {r.technologies?.slice(0, 3).map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <span className={styles.arrow} aria-hidden="true">↗</span>
    </Link>
  );
}
