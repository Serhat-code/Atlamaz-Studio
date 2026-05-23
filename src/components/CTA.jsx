import styles from '../styles/CTA.module.css';

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
          <a href={`mailto:${cta.ctaSecondary}`} className="btn btn--secondary">
            {cta.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
