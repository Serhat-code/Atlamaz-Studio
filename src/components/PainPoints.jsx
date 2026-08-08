import Reveal from './Reveal';
import styles from '../styles/PainPoints.module.css';

export default function PainPoints({ t }) {
  const { painPoints } = t;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.head}`}>
        <Reveal as="span" className="section-label">{painPoints.eyebrow}</Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">{painPoints.title}</h2>
        </Reveal>
      </div>

      <div className={`container ${styles.grid}`}>
        {painPoints.items.map((item, i) => (
          <Reveal key={item.title} delay={Math.min(i + 1, 3)} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
