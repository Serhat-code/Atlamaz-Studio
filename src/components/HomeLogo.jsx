import { Link } from 'react-router-dom';
import styles from '../styles/HomeLogo.module.css';

export default function HomeLogo({ t }) {
  return (
    <Link to="/" className={styles.logo} aria-label="Atlamaz Studio — accueil">
      {t.navbar.logo}
      <span className={styles.logoStudio}> Studio</span>
    </Link>
  );
}
