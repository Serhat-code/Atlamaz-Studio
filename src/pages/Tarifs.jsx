import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../data/services';
import SocialProof from '../components/SocialProof';
import styles from '../styles/Tarifs.module.css';

const BASE_URL     = import.meta.env.VITE_BASE_URL;
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tarifs création site web — Atlamaz Studio',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Offer',
      name: s.nom,
      price: s.prix.replace(/[^\d]/g, '') || '0',
      priceCurrency: 'EUR',
      description: s.tagline,
      url: `${BASE_URL}/${s.slug}`,
    },
  })),
};

const faqTarifs = [
  {
    question: 'Les prix sont-ils fixes ou à la tête du client ?',
    reponse: 'Tous nos tarifs sont publics et fixes. Vous savez exactement ce que vous payez avant de signer. Aucune surprise en cours de projet.',
  },
  {
    question: "Que comprend la livraison ?",
    reponse: "Chaque pack inclut le design, le développement, l'hébergement 1 an, le SSL, les mentions légales et 3 révisions. Pas d'options cachées.",
  },
  {
    question: 'Pourquoi pas de forfait mensuel obligatoire ?',
    reponse: "Votre site vous appartient dès la livraison. Le pack maintenance à 49€/mois est optionnel. Vous n'êtes jamais prisonnier d'un abonnement.",
  },
  {
    question: 'Peut-on négocier les prix ?',
    reponse: 'Les tarifs affichés sont déjà au plus juste. En revanche, des remises sont possibles sur les projets combinés (ex : site vitrine + application mobile).',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqTarifs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.reponse },
  })),
};

export default function Tarifs() {
  return (
    <>
      <Helmet>
        <title>Tarifs création site web — Atlamaz Studio | À partir de 490€</title>
        <meta
          name="description"
          content="Tarifs clairs et publics pour la création de sites web, landing pages, boutiques en ligne et applications mobiles. Aucune surprise. À partir de 490€."
        />
        <link rel="canonical" href={`${BASE_URL}/tarifs`} />
        <meta property="og:title" content="Tarifs création site web — Atlamaz Studio" />
        <meta property="og:description" content="Tarifs clairs et publics. Sites vitrines, landing pages, boutiques, apps mobiles. À partir de 490€. Devis gratuit sous 24h." />
        <meta property="og:url" content={`${BASE_URL}/tarifs`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(offerSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">Tarifs</span>
          <h1 className={styles.heroTitle}>Tarifs clairs, sans surprise</h1>
          <p className={styles.heroSubtitle}>
            Nos prix sont fixes et affichés. Pas de devis qui traîne 3 semaines, pas d'options cachées.
          </p>
          <div className={styles.heroSocialProof}>
            <SocialProof />
          </div>
        </div>
      </section>

      {/* Grille des packs */}
      <section className={`section ${styles.packsSection}`}>
        <div className="container">
          <div className={styles.packsGrid}>
            {services.map((service) => (
              <div key={service.slug} className={styles.packCard}>
                <div className={styles.packTop}>
                  <h2 className={styles.packName}>{service.nom}</h2>
                  <p className={styles.packTagline}>{service.tagline}</p>
                </div>
                <div className={styles.packPrice}>
                  <span className={styles.packAmount}>{service.prix}</span>
                  <span className={styles.packDelai}>Livraison : {service.delai}</span>
                </div>
                <ul className={styles.packInclus}>
                  {service.inclus.slice(0, 5).map((item, i) => (
                    <li key={i} className={styles.packInclusItem}>
                      <span className={styles.packCheck} aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                  {service.inclus.length > 5 && (
                    <li className={styles.packMore}>+{service.inclus.length - 5} inclus</li>
                  )}
                </ul>
                <Link to={`/${service.slug}`} className={`btn btn--secondary ${styles.packCta}`}>
                  Voir le détail →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Tarifs */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <span className="section-label">Transparence</span>
          <h2 className="section-title">Questions sur les <strong>tarifs</strong></h2>
          <div className={styles.faqList}>
            {faqTarifs.map((f) => (
              <div key={f.question} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{f.question}</h3>
                <p className={styles.faqReponse}>{f.reponse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Calendly */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Vous hésitez encore ?{' '}
              <strong>Parlons-en.</strong>
            </h2>
            <p className={styles.ctaSubtitle}>
              30 minutes offertes pour discuter de votre projet. Sans engagement, sans commercial.
            </p>
            <div className={styles.ctaCtas}>
              {CALENDLY_URL && (
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Réserver 30 min offertes
                </a>
              )}
              <a href="/#contact" className="btn btn--secondary">
                Envoyer un message
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
