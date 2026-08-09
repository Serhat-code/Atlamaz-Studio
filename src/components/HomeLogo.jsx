import { Link } from 'react-router-dom';
import BrandMark from './BrandMark';
import styles from '../styles/HomeLogo.module.css';

export default function HomeLogo() {
  return (
    <Link to="/" className={styles.logo} aria-label="Atlamaz Studio — accueil">
      <BrandMark />
    </Link>
  );
}
