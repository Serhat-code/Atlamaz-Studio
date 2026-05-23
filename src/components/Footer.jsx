import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

export default function Footer({ t }) {
  const { footer } = t;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Gauche */}
        <span className={styles.copy}>{footer.copy}</span>

        {/* Centre — liens légaux */}
        <nav className={styles.links} aria-label="Liens footer">
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

        {/* Droite — email */}
        <a href={`mailto:${footer.email}`} className={`${styles.link} ${styles.email}`}>
          {footer.email}
        </a>
      </div>
    </footer>
  );
}
