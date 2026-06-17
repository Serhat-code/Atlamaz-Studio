import Reveal from './Reveal';
import styles from '../styles/HomeStudio.module.css';

export default function HomeStudio({ t }) {
  const s = t.studio;

  return (
    <section className={styles.section} id="studio">
      <div className="container">
        <Reveal as="span" className="section-label">{s.label}</Reveal>

        <div className={styles.grid}>
          {/* Gauche — citation */}
          <div className={styles.left}>
            <Reveal delay={1}>
              <blockquote className={styles.quote}>
                <span className={styles.quoteChar} aria-hidden="true">"</span>
                {s.quote}
                <span className={styles.quoteChar} aria-hidden="true">"</span>
              </blockquote>
            </Reveal>
            <Reveal delay={2} className={styles.author}>
              <span className={styles.authorName}>{s.author}</span>
              <span className={styles.authorRole}>{s.role}</span>
            </Reveal>
          </div>

          {/* Droite — valeurs */}
          <ul className={styles.values}>
            {s.values.map((v, i) => (
              <Reveal key={v.number} as="li" delay={Math.min(i + 1, 3)} className={styles.valueItem}>
                <span className={styles.valueNum}>{v.number}</span>
                <div className={styles.valueBody}>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
