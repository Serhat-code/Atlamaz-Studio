import styles from '../styles/Stats.module.css';

export default function Stats({ t }) {
  return (
    <section className={styles.wrapper} aria-label="Chiffres clés">
      <div className="container">
        <div className={styles.grid}>
          {t.stats.map((stat, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
