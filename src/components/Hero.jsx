import SocialProof from './SocialProof';
import styles from '../styles/Hero.module.css';

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

export default function Hero({ t }) {
  const { hero } = t;

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>

        {/* Badge disponibilité */}
        <div className={`badge badge--available animate-fade-up delay-0 ${styles.badge}`}>
          <span className="pulse-dot" aria-hidden="true" />
          {hero.badge}
        </div>

        {/* Eyebrow */}
        <p className={`animate-fade-up delay-1 ${styles.eyebrow}`}>
          {hero.eyebrow}
        </p>

        {/* Titre principal */}
        <h1 className={`animate-fade-up delay-2 ${styles.title}`}>
          {hero.titleLight}{' '}
          <strong>{hero.titleStrong}</strong>
        </h1>

        {/* Sous-titre */}
        <p className={`animate-fade-up delay-3 ${styles.subtitle}`}>
          {hero.subtitle}
        </p>

        {/* Social proof */}
        <div className={`animate-fade-up delay-3 ${styles.socialProofWrap}`}>
          <SocialProof />
        </div>

        {/* Boutons CTA */}
        <div className={`animate-fade-up delay-4 ${styles.ctas}`}>
          <a href={hero.ctaPrimaryHref} className="btn btn--primary">
            {hero.ctaPrimary}
          </a>
          {CALENDLY_URL ? (
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              Réserver 30 min offertes
            </a>
          ) : (
            <a href={hero.ctaSecondaryHref} className="btn btn--secondary">
              {hero.ctaSecondary}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
