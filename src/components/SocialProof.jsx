import styles from '../styles/SocialProof.module.css';

export default function SocialProof({ variant = 'default' }) {
  return (
    <p className={`${styles.wrapper} ${styles[variant]}`} aria-label="Preuves sociales">
      Devis sous 24h · Livraison en 5–14 jours · Satisfaction garantie
    </p>
  );
}
