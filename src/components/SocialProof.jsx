import styles from '../styles/SocialProof.module.css';

export default function SocialProof({ variant = 'default' }) {
  return (
    <p className={`${styles.wrapper} ${styles[variant]}`} aria-label="Preuves sociales">
      Réponse sous 48h · Premier échange sans engagement · Livraison en 5–14 jours
    </p>
  );
}
