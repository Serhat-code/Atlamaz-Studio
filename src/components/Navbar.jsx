import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const PHONE         = import.meta.env.VITE_PHONE;
const PHONE_DISPLAY = import.meta.env.VITE_PHONE_DISPLAY;
const CALENDLY_URL  = import.meta.env.VITE_CALENDLY_URL;

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

export default function Navbar({ t, lang, onLangToggle }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const resolveHref = (link) => {
    if (link.isAnchor) return isHome ? link.href : `/${link.href}`;
    return link.href;
  };

  return (
    <>
      <header className={styles.navbar}>
        <div className={`container ${styles.inner}`}>

          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="Atlamaz Studio — accueil">
            {t.navbar.logo}
          </Link>

          {/* Nav centrale — desktop */}
          <nav className={styles.nav} aria-label="Navigation principale">
            {t.navbar.links.map((link) =>
              link.isAnchor ? (
                <a key={link.href + link.label} href={resolveHref(link)} className={styles.navLink}>
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
            {PHONE && PHONE_DISPLAY && (
              <a href={`tel:${PHONE}`} className={styles.navPhone} aria-label="Appeler Atlamaz Studio">
                <PhoneIcon />
                {PHONE_DISPLAY}
              </a>
            )}
            {CALENDLY_URL && (
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navCalendly}
              >
                Appel gratuit
              </a>
            )}
            <button
              className={styles.langToggle}
              onClick={onLangToggle}
              aria-label={`Passer en ${lang === 'fr' ? 'anglais' : 'français'}`}
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            <a
              href={isHome ? t.navbar.ctaHref : `/${t.navbar.ctaHref}`}
              className={`btn btn--primary ${styles.ctaDesktop}`}
            >
              {t.navbar.cta}
            </a>
          </div>

          {/* Groupe mobile : langToggle + burger — toujours visible */}
          <div className={styles.navActions}>
            <button
              className={styles.langToggleMobile}
              onClick={onLangToggle}
              aria-label={`Passer en ${lang === 'fr' ? 'anglais' : 'français'}`}
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
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

        </div>

        {/* Menu mobile overlay */}
        {menuOpen && (
          <div className={styles.mobileMenu} aria-label="Menu mobile">
            <nav className={styles.mobileNav}>
              {t.navbar.links.map((link) =>
                link.isAnchor ? (
                  <a
                    key={link.href + link.label}
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
            <div className={styles.mobileMenuBottom}>
              <a
                href={isHome ? t.navbar.ctaHref : `/${t.navbar.ctaHref}`}
                className="btn btn--primary"
                onClick={() => setMenuOpen(false)}
              >
                {t.navbar.cta}
              </a>
              {PHONE && PHONE_DISPLAY && (
                <a href={`tel:${PHONE}`} className={styles.mobilePhone} onClick={() => setMenuOpen(false)}>
                  <PhoneIcon />
                  {PHONE_DISPLAY}
                </a>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Bouton téléphone flottant — mobile uniquement */}
      {PHONE && (
        <a
          href={`tel:${PHONE}`}
          className={styles.floatingPhone}
          aria-label="Appeler Atlamaz Studio"
        >
          <PhoneIcon />
        </a>
      )}
    </>
  );
}
