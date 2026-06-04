import styles from '../styles/SocialProof.module.css';

export default function SocialProof({ variant = 'default' }) {
  return (
    <div className={`${styles.wrapper} ${styles[variant]}`} aria-label="Preuves sociales">
      <span className={styles.stars} aria-label="5 étoiles sur 5">★★★★★</span>
      <span className={styles.text}>
        Devis sous 24h · Livraison en 5–14 jours · Satisfaction garantie
      </span>
    </div>
  );
}
