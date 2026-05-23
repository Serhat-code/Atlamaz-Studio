import PackCard from './PackCard';
import styles from '../styles/Packs.module.css';

export default function Packs({ t }) {
  const { packs } = t;

  return (
    <section className="section" id="packs">
      <div className="container">
        {/* Section header */}
        <div className={styles.header}>
          <span className="section-label">{packs.label}</span>
          <h2 className="section-title">
            {packs.title} <strong>{packs.titleStrong}</strong>
          </h2>
          <p className={`section-subtitle ${styles.subtitle}`}>{packs.subtitle}</p>
        </div>

        {/* Rangées de packs */}
        {packs.rows.map((row) => (
          <div key={row.label} className={styles.row}>

            {/* Label de rangée */}
            <p className={styles.rowLabel}>{row.label}</p>

            {/* Header spécial (rangée Application mobile) */}
            {row.sectionTitle && (
              <div className={styles.rowSectionHeader}>
                <h3 className={styles.rowSectionTitle}>{row.sectionTitle}</h3>
                <p className={styles.rowSectionSubtitle}>{row.sectionSubtitle}</p>
              </div>
            )}

            {/* Grille de cards */}
            <div className={styles.grid}>
              {row.cards.map((card) => (
                <PackCard
                  key={card.id}
                  card={card}
                  ctaLabel={packs.ctaCard}
                  ctaLabelPopular={packs.ctaCardPopular}
                  ctaContact={packs.ctaContact}
                />
              ))}
            </div>

            {/* Options à la carte (rangée mobile uniquement) */}
            {row.options && row.options.length > 0 && (
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
            )}
          </div>
        ))}

        {/* Bandeau sur mesure */}
        <div className={styles.custom}>
          <div className={styles.customText}>
            <h3 className={styles.customTitle}>{packs.custom.title}</h3>
            <p className={styles.customSubtitle}>{packs.custom.subtitle}</p>
          </div>
          <a href="#contact" className="btn btn--primary">
            {packs.custom.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
