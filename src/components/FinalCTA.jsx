import { useState } from 'react';
import ContactModal from './ContactModal';
import Reveal from './Reveal';
import styles from '../styles/FinalCTA.module.css';

export default function FinalCTA({ t }) {
  const { finalCta } = t;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={`section ${styles.wrapper}`}>
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <h2 className={styles.title}>{finalCta.title}</h2>
        </Reveal>
        <Reveal delay={1}>
          <p className={styles.subtitle}>{finalCta.subtitle}</p>
        </Reveal>
        <Reveal delay={2}>
          <button className="btn btn--primary" onClick={() => setModalOpen(true)}>
            {finalCta.ctaLabel}
          </button>
        </Reveal>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
