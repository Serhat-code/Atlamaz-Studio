import { useState } from 'react';
import SocialProof from './SocialProof';
import ContactModal from './ContactModal';
import Reveal from './Reveal';
import styles from '../styles/Hero.module.css';

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

export default function Hero({ t }) {
  const { hero } = t;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>

        <Reveal>
          <div className={`badge badge--available ${styles.badge}`}>
            <span className="pulse-dot" aria-hidden="true" />
            {hero.badge}
          </div>
        </Reveal>

        <Reveal delay={1}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
        </Reveal>

        <Reveal delay={2}>
          <h1 className={styles.title}>
            {hero.titleLight}{' '}
            <strong>{hero.titleStrong}</strong>
          </h1>
        </Reveal>

        <Reveal delay={3}>
          <p className={styles.subtitle}>{hero.subtitle}</p>
        </Reveal>

        <Reveal delay={3} className={styles.socialProofWrap}>
          <SocialProof />
        </Reveal>

        <Reveal delay={4} className={styles.ctas}>
          <button className="btn btn--primary" onClick={() => setModalOpen(true)}>
            Démarrer un projet
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
