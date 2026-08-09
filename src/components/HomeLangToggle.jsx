import styles from '../styles/HomeLangToggle.module.css';

// La home n'affiche pas la Navbar (chrome dédiée : logo fixe + pill-nav bas),
// or c'est la Navbar qui porte le sélecteur de langue. Sans ce bouton, un
// visiteur passé en anglais restait bloqué : la préférence est persistée en
// localStorage et plus rien ne permettait de revenir.
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
