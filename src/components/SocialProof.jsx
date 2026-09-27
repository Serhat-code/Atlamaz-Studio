import styles from '../styles/SocialProof.module.css';

const DEFAULT_TEXT = 'Réponse sous 48h · Premier échange sans engagement · Livraison en 1 à 12 semaines';

export default function SocialProof({ variant = 'default', text = DEFAULT_TEXT }) {
  return (
    <p className={`${styles.wrapper} ${styles[variant]}`}>
      {text}
    </p>
  );
}
