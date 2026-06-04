import { Link } from 'react-router-dom';
import styles from '../styles/PackCard.module.css';

export default function PackCard({ card, ctaLabel, ctaLabelPopular, ctaContact }) {
  const isPopular    = card.featured;
  const isContactOnly = !card.stripeKey;

  const cta = isContactOnly
    ? ctaContact
    : isPopular
      ? ctaLabelPopular
      : ctaLabel;

  const cardContent = (
    <>
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

      {/* CTA */}
      <div className={styles.cardFooter}>
        <span className={`btn ${isPopular ? 'btn--inverse' : 'btn--secondary'} ${styles.cardCta}`}>
          {cta}
        </span>
      </div>
    </>
  );

  const cardClass = `${styles.card} ${isPopular ? styles.cardFeatured : ''}`;

  if (card.serviceSlug) {
    return (
      <Link to={`/${card.serviceSlug}`} className={cardClass} aria-label={`Voir ${card.name}`}>
        {cardContent}
      </Link>
    );
  }

  return (
    <article className={cardClass}>
      {cardContent}
    </article>
  );
}
