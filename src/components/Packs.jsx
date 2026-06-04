import PackCard from './PackCard';
import Reveal from './Reveal';
import styles from '../styles/Packs.module.css';

export default function Packs({ t }) {
  const { packs } = t;

  return (
    <section className="section" id="packs">
      <div className="container">
        {/* Section header */}
        <div className={styles.header}>
          <Reveal as="span" className="section-label">{packs.label}</Reveal>
          <Reveal delay={1}>
            <h2 className="section-title">
              {packs.title} <strong>{packs.titleStrong}</strong>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className={`section-subtitle ${styles.subtitle}`}>{packs.subtitle}</p>
          </Reveal>
        </div>

        {/* Rangées de packs */}
        {packs.rows.map((row) => (
          <div key={row.label} className={styles.row}>

            <Reveal>
              <p className={styles.rowLabel}>{row.label}</p>
            </Reveal>

            {row.sectionTitle && (
              <Reveal>
                <div className={styles.rowSectionHeader}>
                  <h3 className={styles.rowSectionTitle}>{row.sectionTitle}</h3>
                  <p className={styles.rowSectionSubtitle}>{row.sectionSubtitle}</p>
                </div>
              </Reveal>
            )}

            <div className={styles.grid}>
              {row.cards.map((card, i) => (
                <Reveal key={card.id} delay={Math.min(i + 1, 5)}>
                  <PackCard
                    card={card}
                    ctaLabel={packs.ctaCard}
                    ctaLabelPopular={packs.ctaCardPopular}
                    ctaContact={packs.ctaContact}
                  />
                </Reveal>
              ))}
            </div>

            {row.options && row.options.length > 0 && (
              <Reveal>
                <div className={styles.optionsWrapper}>
                  <p className={styles.optionsLabel}>{row.optionsLabel}</p>
                  <ul className={styles.optionsList}>
                    {row.options.map((opt) => (
                      <li key={opt.label} className={styles.optionItem}>
                        <span className={styles.optionName}>{opt.label}</span>
                        <span className={styles.optionPrice}>{opt.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>
        ))}

        {/* Bandeau sur mesure */}
        <Reveal>
          <div className={styles.custom}>
            <div className={styles.customText}>
              <h3 className={styles.customTitle}>{packs.custom.title}</h3>
              <p className={styles.customSubtitle}>{packs.custom.subtitle}</p>
            </div>
            <a href="#contact" className="btn btn--primary">
              {packs.custom.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
