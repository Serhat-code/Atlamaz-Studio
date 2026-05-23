import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

export default function Navbar({ t, lang, onLangToggle }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Sur la page d'accueil → ancres smooth scroll
  // Sur les autres pages → retour à l'accueil + ancre
  const resolveHref = (link) => {
    if (link.isAnchor) return isHome ? link.href : `/${link.href}`;
    return link.href;
  };

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo} aria-label="Atlamaz Studio — accueil">
          {t.navbar.logo}
        </Link>

        {/* Navigation centrale */}
        <nav className={styles.nav} aria-label="Navigation principale">
          {t.navbar.links.map((link) =>
            link.isAnchor ? (
              <a key={link.href} href={resolveHref(link)} className={styles.navLink}>
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`${styles.navLink} ${location.pathname === link.href ? styles.navLinkActive : ''}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Actions droite */}
        <div className={styles.actions}>
          <button
            className={styles.langToggle}
            onClick={onLangToggle}
            aria-label={`Passer en ${t.navbar.langSwitch}`}
          >
            {t.navbar.langSwitch}
          </button>
          <a
            href={isHome ? t.navbar.ctaHref : `/${t.navbar.ctaHref}`}
            className="btn btn--primary"
          >
            {t.navbar.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
