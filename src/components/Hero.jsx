import { useState } from 'react';
import SocialProof from './SocialProof';
import ContactModal from './ContactModal';
import styles from '../styles/Hero.module.css';

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

export default function Hero({ t }) {
  const { hero } = t;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>

        <div className={`badge badge--available animate-fade-up delay-0 ${styles.badge}`}>
          <span className="pulse-dot" aria-hidden="true" />
          {hero.badge}
        </div>

        <p className={`animate-fade-up delay-1 ${styles.eyebrow}`}>
          {hero.eyebrow}
        </p>

        <h1 className={`animate-fade-up delay-2 ${styles.title}`}>
          {hero.titleLight}{' '}
          <strong>{hero.titleStrong}</strong>
        </h1>

        <p className={`animate-fade-up delay-3 ${styles.subtitle}`}>
          {hero.subtitle}
        </p>

        <div className={`animate-fade-up delay-3 ${styles.socialProofWrap}`}>
          <SocialProof />
        </div>

        <div className={`animate-fade-up delay-4 ${styles.ctas}`}>
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
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
