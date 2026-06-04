import { useState } from 'react';
import ContactModal from './ContactModal';
import Reveal from './Reveal';
import styles from '../styles/CTA.module.css';

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

export default function CTA({ t }) {
  const { cta } = t;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={`section ${styles.wrapper}`} id="cta">
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <h2 className={styles.title}>
            {cta.titleLight}{' '}
            <strong>{cta.titleStrong}</strong>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className={styles.subtitle}>{cta.subtitle}</p>
        </Reveal>
        <Reveal delay={2} className={styles.ctas}>
          <button className="btn btn--primary" onClick={() => setModalOpen(true)}>
            {cta.ctaPrimary}
          </button>
          {CALENDLY_URL && (
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              Réserver 30 min offertes
            </a>
          )}
        </Reveal>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
