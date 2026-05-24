import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { faqs, FAQ_CATEGORIES } from '../data/faq';
import styles from '../styles/FAQ.module.css';

const BASE_URL = 'https://atlamazstudio.fr';
const OG_IMAGE = 'https://atlamazstudio.fr/og-image.svg';

function AccordionItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}>
      <button
        className={styles.accordionBtn}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.accordionQuestion}>{faq.question}</span>
        <span className={styles.accordionIcon} aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={styles.accordionBody}
        style={{ maxHeight: isOpen ? '500px' : '0' }}
        aria-hidden={!isOpen}
      >
        <p className={styles.accordionReponse}>{faq.reponse}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [openId, setOpenId] = useState(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.reponse },
    })),
  };

  const filteredFaqs =
    activeCategory === 'tous'
      ? faqs
      : faqs.filter((f) => f.categorie === activeCategory);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Helmet>
        <title>FAQ — Questions fréquentes | Atlamaz Studio</title>
        <meta
          name="description"
          content="Toutes les réponses à vos questions sur la création de sites web, les délais, les tarifs, la maintenance et les applications mobiles. FAQ complète Atlamaz Studio."
        />
        <link rel="canonical" href={`${BASE_URL}/faq`} />
        <meta property="og:title" content="FAQ — Questions fréquentes | Atlamaz Studio" />
        <meta property="og:description" content="Réponses à toutes vos questions sur la création de sites web et applications mobiles." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={`${BASE_URL}/faq`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <span className="section-label">Aide</span>
          <h1 className={styles.heroTitle}>
            Questions <strong>fréquentes</strong>
          </h1>
          <p className={styles.heroSubtitle}>
            Toutes les réponses à vos questions sur nos services, tarifs, délais et processus.
          </p>
        </div>
      </section>

      {/* FAQ avec filtres */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          {/* Filtres catégories */}
          <div className={styles.filters} role="group" aria-label="Filtrer par catégorie">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenId(null);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordéon */}
          <div className={styles.accordionList} role="list">
            {filteredFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA bas de page */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Vous ne trouvez pas <strong>votre réponse ?</strong>
            </h2>
            <p className={styles.ctaSubtitle}>
              Contactez-nous directement. Nous répondons sous 24h à toutes les demandes.
            </p>
            <div className={styles.ctaCtas}>
              <a href="/#contact" className="btn btn--primary">Poser une question</a>
              <a href="mailto:atlamazstudio@gmail.com" className="btn btn--secondary">
                atlamazstudio@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
