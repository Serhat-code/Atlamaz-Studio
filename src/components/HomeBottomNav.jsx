import { useState } from 'react';
import ContactModal from './ContactModal';
import styles from '../styles/HomeBottomNav.module.css';

export default function HomeBottomNav({ t }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav} aria-label="Navigation rapide">
        <a href="#services" className={styles.link}>{t.homeNav.services}</a>
        <a href="#realisations" className={styles.link}>{t.homeNav.realisations}</a>
        <a href="#faq" className={styles.link}>{t.homeNav.faq}</a>
        <button type="button" className={styles.cta} onClick={() => setModalOpen(true)}>
          {t.navbar.cta}
        </button>
      </nav>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
