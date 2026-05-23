import { Link } from 'react-router-dom';
import styles from '../styles/RealisationCard.module.css';

export default function RealisationCard({ projet, ctaLabel }) {
  return (
    <article className={styles.card}>
      {/* Image / aperçu */}
      <div className={styles.imageWrapper}>
        {projet.image ? (
          <img
            src={projet.image}
            alt={`Aperçu du projet ${projet.nom}`}
            className={styles.image}
            loading="lazy"
            width="600"
            height="338"
          />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <span className={styles.placeholderText}>{projet.nom}</span>
          </div>
        )}
        {/* Badge type */}
        <span className={`badge badge--tag ${styles.typeBadge}`}>{projet.type}</span>
      </div>

      {/* Contenu */}
      <div className={styles.content}>
        <div className={styles.meta}>
          <h3 className={styles.nom}>{projet.nom}</h3>
          <p className={styles.secteur}>{projet.secteur}</p>
        </div>
        <Link to={`/realisations/${projet.slug}`} className={`btn btn--secondary ${styles.cta}`}>
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
