import styles from '../styles/Process.module.css';

export default function Process({ t }) {
  const { process } = t;

  return (
    <section className="section" id="process">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">{process.label}</span>
          <h2 className="section-title">
            {process.title} <strong>{process.titleStrong}</strong>
          </h2>
          <p className="section-subtitle">{process.subtitle}</p>
        </div>

        {/* Étapes */}
        <div className={styles.grid}>
          {process.steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepMeta}>
                <span className={styles.stepNumber}>{step.number}</span>
                <span className={styles.stepLine} aria-hidden="true" />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
