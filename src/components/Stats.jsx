import Reveal from './Reveal';
import styles from '../styles/Stats.module.css';

export default function Stats({ t }) {
  return (
    <section className={styles.wrapper} aria-label="Chiffres clés">
      <div className="container">
        <div className={styles.grid}>
          {t.stats.map((stat, i) => (
            <Reveal key={i} delay={Math.min(i + 1, 5)}>
              <div className={styles.item}>
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.label}>{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
