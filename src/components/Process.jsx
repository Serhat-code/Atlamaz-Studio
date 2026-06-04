import Reveal from './Reveal';
import styles from '../styles/Process.module.css';

export default function Process({ t }) {
  const { process } = t;

  return (
    <section className="section" id="process">
      <div className="container">
        <div className={styles.header}>
          <Reveal as="span" className="section-label">{process.label}</Reveal>
          <Reveal delay={1}>
            <h2 className="section-title">
              {process.title} <strong>{process.titleStrong}</strong>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="section-subtitle">{process.subtitle}</p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {process.steps.map((step, i) => (
            <Reveal key={step.number} delay={Math.min(i + 1, 5)}>
              <div className={styles.step}>
                <div className={styles.stepMeta}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <span className={styles.stepLine} aria-hidden="true" />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
