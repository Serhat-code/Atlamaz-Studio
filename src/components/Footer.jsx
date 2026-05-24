import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

export default function Footer({ t }) {
  const { footer } = t;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Grille principale : 4 colonnes */}
        <div className={styles.grid}>
          {/* Colonne 1 : Studio */}
          <div className={styles.col}>
            <span className={styles.colTitle}>ATLAMAZ STUDIO</span>
            <p className={styles.colDesc}>
              Développeur web freelance en Auvergne-Rhône-Alpes. Sites web, applications mobiles et landing pages livrés clé en main.
            </p>
            <a href={`mailto:${footer.email}`} className={styles.email}>
              {footer.email}
            </a>
          </div>

          {/* Colonne 2 : Liens légaux */}
          <div className={styles.col}>
            <span className={styles.colTitle}>Liens</span>
            <nav className={styles.colLinks} aria-label="Liens footer">
              {footer.links.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} to={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Colonne 3 : Nos villes */}
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

          {/* Colonne 4 : Services */}
          {footer.services && (
            <div className={styles.col}>
              <span className={styles.colTitle}>{footer.services.title}</span>
              <nav className={styles.colLinks} aria-label="Services">
                {footer.services.links.map((link) => (
                  <Link key={link.href} to={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Barre de bas de footer */}
        <div className={styles.bottom}>
          <span className={styles.copy}>{footer.copy}</span>
          <span className={styles.copyRight}>Fait avec ♥ à Lyon</span>
        </div>
      </div>
    </footer>
  );
}
