import styles from '../styles/PackCard.module.css';

export default function PackCard({ card, ctaLabel, ctaLabelPopular, ctaContact }) {
  const isPopular = card.featured;
  // Packs sans prix fixe (urgence, mobile premium) → label spécifique
  const isContactOnly = !card.stripeKey;

  const cta = isContactOnly
    ? ctaContact
    : isPopular
      ? ctaLabelPopular
      : ctaLabel;

  return (
    <article className={`${styles.card} ${isPopular ? styles.cardFeatured : ''}`}>
      {/* En-tête */}
      <div className={styles.cardHeader}>
        <div className={styles.cardTop}>
          <h3 className={styles.cardName}>{card.name}</h3>
          {card.badge && (
            <span className={`badge badge--${card.badgeType}`}>
              {card.badge}
            </span>
          )}
        </div>
        <div className={styles.cardPricing}>
          <span className={styles.cardPrice}>{card.price}</span>
          <span className={styles.cardDelivery}>{card.delivery}</span>
        </div>
      </div>

      {/* Features */}
      <ul className={styles.features}>
        {card.features.map((feat, i) => (
          <li key={i} className={styles.feature}>
            <span className={styles.featureCheck} aria-hidden="true">✓</span>
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA → toujours vers le formulaire de contact */}
      <div className={styles.cardFooter}>
        <a
          href="#contact"
          className={`btn ${isPopular ? 'btn--inverse' : 'btn--secondary'} ${styles.cardCta}`}
        >
          {cta}
        </a>
      </div>
    </article>
  );
}
