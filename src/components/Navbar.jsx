import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';
import styles from '../styles/Navbar.module.css';

const PHONE         = import.meta.env.VITE_PHONE;
const PHONE_DISPLAY = import.meta.env.VITE_PHONE_DISPLAY;

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

export default function Navbar({ t, lang, onLangToggle }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>

          {/* Logo */}
          <Link to="/" className={styles.logo} onClick={closeMenu} aria-label="Atlamaz Studio — accueil">
            {t.navbar.logo}
            <span className={styles.logoStudio}> Studio</span>
          </Link>

          {/* Nav centrale desktop */}
          <nav className={styles.nav} aria-label="Navigation principale">
            {t.navbar.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`${styles.navLink} ${location.pathname === link.href ? styles.navLinkActive : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions desktop */}
          <div className={styles.actions}>
            {PHONE && PHONE_DISPLAY && (
              <a href={`tel:${PHONE}`} className={styles.navPhone} aria-label="Appeler Atlamaz Studio">
                <PhoneIcon />
                {PHONE_DISPLAY}
              </a>
            )}
            <button
              className={styles.langToggle}
              onClick={onLangToggle}
              aria-label={`Passer en ${lang === 'fr' ? 'anglais' : 'français'}`}
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className={`btn btn--emerald ${styles.ctaDesktop}`}
            >
              {t.navbar.cta}
            </button>
          </div>

          {/* Groupe mobile */}
          <div className={styles.navActions}>
            <button className={styles.langToggleMobile} onClick={onLangToggle}
              aria-label={`Passer en ${lang === 'fr' ? 'anglais' : 'français'}`}>
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
      </header>

      {/* Menu mobile — hors du <header> pour éviter le stacking context backdrop-filter */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-label="Menu mobile">
          <nav className={styles.mobileNav}>
            {t.navbar.links.map((link) => (
              <Link key={link.href} to={link.href}
                className={`${styles.mobileNavLink} ${location.pathname === link.href ? styles.mobileNavLinkActive : ''}`}
                onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.mobileMenuBottom}>
            <button
              onClick={() => { closeMenu(); setModalOpen(true); }}
              className="btn btn--emerald"
              style={{ textAlign: 'center', justifyContent: 'center', width: '100%' }}
            >
              {t.navbar.cta}
            </button>
            {PHONE && PHONE_DISPLAY && (
              <a href={`tel:${PHONE}`} className={styles.mobilePhone} onClick={closeMenu}>
                <PhoneIcon />
                {PHONE_DISPLAY}
              </a>
            )}
          </div>
        </div>
      )}

      {PHONE && (
        <a href={`tel:${PHONE}`} className={styles.floatingPhone} aria-label="Appeler Atlamaz Studio">
          <PhoneIcon />
        </a>
      )}

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
