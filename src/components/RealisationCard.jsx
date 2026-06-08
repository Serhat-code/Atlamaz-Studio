import { useState } from 'react';
import styles from '../styles/RealisationCard.module.css';

export default function RealisationCard({ realisation }) {
  const [flipped, setFlipped] = useState(false);

  const frontStyle = realisation.image
    ? {
        backgroundImage: `url(${realisation.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }
    : { background: realisation.couleur };

  return (
    <div
      className={styles.cardWrapper}
      onClick={() => setFlipped((f) => !f)}
      aria-label={`Voir les détails de ${realisation.nom}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setFlipped((f) => !f); }}
    >
      <div className={`${styles.card} ${flipped ? styles.flipped : ''}`}>

        {/* Recto */}
        <div className={styles.front} style={frontStyle}>
          {realisation.image && <div className={styles.imgOverlay} />}
          <div className={styles.bgNumber}>
            {String(realisation.id).padStart(2, '0')}
          </div>
          <div className={styles.frontContent}>
            <span className={styles.secteur}>{realisation.secteur}</span>
            <h3 className={styles.nom}>{realisation.nom}</h3>
            <span className={styles.type}>{realisation.type}</span>
          </div>
          <div className={styles.flipHint}>Cliquer pour voir →</div>
        </div>

        {/* Verso */}
        <div className={styles.back} style={{ background: realisation.couleur }}>
          <div className={styles.backContent}>
            <div className={styles.backHeader}>
              <span className={styles.secteur}>{realisation.secteur}</span>
              <h3 className={styles.nom}>{realisation.nom}</h3>
            </div>
            <p className={styles.description}>{realisation.description}</p>
            <div className={styles.backMeta}>
              <span>{realisation.delai}</span>
              <span>{realisation.techno}</span>
              <span>{realisation.annee}</span>
            </div>
            {realisation.lien && realisation.lien !== '#' && (
              <a
                href={realisation.lien}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.lien}
                onClick={(e) => e.stopPropagation()}
              >
                Voir le site →
              </a>
            )}
            {(!realisation.lien || realisation.lien === '#') && (
              <span className={styles.lienDisabled}>Site en cours →</span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
