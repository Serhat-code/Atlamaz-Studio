import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

export default function Navbar({ t, lang, onLangToggle }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  // Ferme le menu au changement de route
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Bloque le scroll body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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

        {/* Navigation centrale — desktop */}
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

        {/* Actions droite — desktop */}
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
            className={`btn btn--primary ${styles.ctaDesktop}`}
          >
            {t.navbar.cta}
          </a>
        </div>

        {/* Bouton burger — mobile */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineTop : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineMid : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineBot : ''}`} />
        </button>
      </div>

      {/* Menu mobile overlay */}
      {menuOpen && (
        <div className={styles.mobileMenu} aria-label="Menu mobile">
          <nav className={styles.mobileNav}>
            {t.navbar.links.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={resolveHref(link)}
                  className={styles.mobileNavLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`${styles.mobileNavLink} ${location.pathname === link.href ? styles.mobileNavLinkActive : ''}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className={styles.mobileActions}>
            <button
              className={styles.langToggle}
              onClick={() => { onLangToggle(); setMenuOpen(false); }}
              aria-label={`Passer en ${t.navbar.langSwitch}`}
            >
              {t.navbar.langSwitch}
            </button>
            <a
              href={isHome ? t.navbar.ctaHref : `/${t.navbar.ctaHref}`}
              className="btn btn--primary"
              onClick={() => setMenuOpen(false)}
            >
              {t.navbar.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
