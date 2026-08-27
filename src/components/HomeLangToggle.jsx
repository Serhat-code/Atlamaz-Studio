import styles from '../styles/HomeLangToggle.module.css';

// Sélecteur de langue du site, monté par le Layout sur toutes les pages en
// pendant de la marque. La préférence est persistée en localStorage : sans ce
// bouton présent partout, un visiteur passé en anglais resterait bloqué.
export default function HomeLangToggle({ lang, onToggle }) {
  const next = lang === 'fr' ? 'EN' : 'FR';

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      aria-label={`Passer en ${lang === 'fr' ? 'anglais' : 'français'}`}
    >
      {next}
    </button>
  );
}
