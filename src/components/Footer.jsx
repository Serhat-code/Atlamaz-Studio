import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

export default function Footer({ t }) {
  const { footer } = t;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Grille principale : 2 colonnes */}
        <div className={styles.grid}>
          {/* Colonne 1 : Studio */}
          <div className={styles.col}>
            <span className={styles.colTitle}>ATLAMAZ STUDIO</span>
            <p className={styles.colDesc}>{footer.tagline}</p>
            <a href={`mailto:${footer.email}`} className={styles.email}>
              {footer.email}
            </a>
          </div>

          {/* Colonne 2 : Nos villes */}
          {footer.nosVilles && (
            <div className={styles.col}>
              <span className={styles.colTitle}>{footer.nosVilles.title}</span>
              <nav className={styles.colLinks} aria-label="Nos villes">
                {footer.nosVilles.links.map((link) => (
                  <Link key={link.href} to={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                ))}
                <Link to="/nos-villes" className={`${styles.link} ${styles.linkAll}`}>
                  Voir toutes →
                </Link>
              </nav>
            </div>
          )}
        </div>

        {/* Barre de bas de footer */}
        <div className={styles.bottom}>
          <span className={styles.copy}>{footer.copy}</span>
          <span className={styles.copyRight}>Studio basé à Lyon</span>
        </div>
      </div>
    </footer>
  );
}
