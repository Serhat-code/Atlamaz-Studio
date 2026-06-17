import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';
import Reveal from './Reveal';
import styles from '../styles/Hero.module.css';

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
            {hero.titleEm && (
              <em className={styles.titleEm}>{hero.titleEm}</em>
            )}{' '}
            <strong>{hero.titleStrong}</strong>
          </h1>
        </Reveal>

        <Reveal delay={3}>
          <p className={styles.subtitle}>{hero.subtitle}</p>
        </Reveal>

        <Reveal delay={4} className={styles.ctas}>
          <button className="btn btn--primary" onClick={() => setModalOpen(true)}>
            {hero.ctaPrimary}
          </button>
          <Link to={hero.ctaSecondaryHref || '/realisations'} className="btn btn--secondary">
            {hero.ctaSecondary}
          </Link>
        </Reveal>

      </div>

      {/* Indicateur de scroll */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
