import Reveal from './Reveal';
import styles from '../styles/Process.module.css';

export default function Process({ t }) {
  const { process } = t;

  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.head}>
          <Reveal as="span" className="section-label">{process.eyebrow}</Reveal>
          <Reveal delay={1}>
            <h2 className="section-title">{process.title}</h2>
          </Reveal>
        </div>

        <div className={styles.list}>
          {process.steps.map((step, i) => (
            <Reveal key={step.num} delay={Math.min(i + 1, 3)} className={styles.item}>
              <div className={styles.num}>{step.num}</div>
              <div>
                <h3 className={styles.itemTitle}>{step.title}</h3>
                <p className={styles.itemText}>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className={styles.tagRow}>
          {process.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
