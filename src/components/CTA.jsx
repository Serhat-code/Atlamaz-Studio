import styles from '../styles/CTA.module.css';

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

export default function CTA({ t }) {
  const { cta } = t;

  return (
    <section className={`section ${styles.wrapper}`} id="cta">
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          {cta.titleLight}{' '}
          <strong>{cta.titleStrong}</strong>
        </h2>
        <p className={styles.subtitle}>{cta.subtitle}</p>
        <div className={styles.ctas}>
          <a href={cta.ctaPrimaryHref} className="btn btn--primary">
            {cta.ctaPrimary}
          </a>
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
    </section>
  );
}
