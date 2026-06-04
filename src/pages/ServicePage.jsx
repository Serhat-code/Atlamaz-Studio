import { Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getServiceBySlug } from '../data/services';
import { getVilleById } from '../data/villes';
import styles from '../styles/ServicePage.module.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const OG_IMAGE = import.meta.env.VITE_OG_IMAGE;

export default function ServicePage({ serviceSlug }) {
  const service = getServiceBySlug(serviceSlug);

  if (!service) return <Navigate to="/" replace />;

  const canonicalUrl = `${BASE_URL}/${service.slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.nom,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Atlamaz Studio',
      url: BASE_URL,
    },
    offers: {
      '@type': 'Offer',
      price: service.prix.replace(/[^0-9]/g, '') || undefined,
      priceCurrency: 'EUR',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: service.nom, item: canonicalUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.reponse },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
        <div className="container">
          <ol className={styles.breadcrumbList}>
            <li><Link to="/">Accueil</Link></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">{service.nom}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <span className="section-label">Service</span>
          <h1 className={styles.heroTitle}>{service.nom}</h1>
          <p className={styles.heroTagline}>{service.tagline}</p>
          <p className={styles.heroDesc}>{service.description}</p>
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeLabel}>Prix</span>
              <strong>{service.prix}</strong>
            </span>
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeLabel}>Délai</span>
              <strong>{service.delai}</strong>
            </span>
          </div>
          <div className={styles.heroCtas}>
            <a href="/#contact" className="btn btn--primary">Démarrer ce projet</a>
            <a href="/#packs" className="btn btn--secondary">Voir tous les services</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className={`section ${styles.introSection}`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <h2 className={styles.introTitle}>Pourquoi choisir ce service ?</h2>
              <p className={styles.introText}>{service.intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className={`section ${styles.inclusSection}`}>
        <div className="container">
          <span className="section-label">Inclus</span>
          <h2 className="section-title">Tout ce qui est <strong>inclus</strong></h2>
          <div className={styles.inclusList}>
            {service.inclus.map((item, i) => (
              <div key={i} className={styles.inclusItem}>
                <span className={styles.inclusCheck} aria-hidden="true">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className={`section ${styles.processusSection}`}>
        <div className="container">
          <span className="section-label">Process</span>
          <h2 className="section-title">Comment ça <strong>fonctionne ?</strong></h2>
          <div className={styles.processusGrid}>
            {service.processus.map((step) => (
              <div key={step.numero} className={styles.processusCard}>
                <span className={styles.processusNumero}>{step.numero}</span>
                <h3 className={styles.processusTitre}>{step.titre}</h3>
                <p className={styles.processusDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prix */}
      <section className={`section ${styles.prixSection}`}>
        <div className="container">
          <div className={styles.prixCard}>
            <div className={styles.prixLeft}>
              <h2 className={styles.prixTitle}>{service.nom}</h2>
              <p className={styles.prixTagline}>{service.tagline}</p>
            </div>
            <div className={styles.prixRight}>
              <span className={styles.prixAmount}>{service.prix}</span>
              <span className={styles.prixDelai}>Livraison : {service.delai}</span>
              <a href="/#contact" className="btn btn--primary">Démarrer ce projet</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <span className="section-label">Questions fréquentes</span>
          <h2 className="section-title">FAQ — <strong>{service.nom}</strong></h2>
          <div className={styles.faqList}>
            {service.faq.map((item, i) => (
              <div key={i} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqReponse}>{item.reponse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villes liées */}
      {service.villesLiees && service.villesLiees.length > 0 && (
        <section className={`section ${styles.villesSection}`}>
          <div className="container">
            <span className="section-label">Disponible dans votre ville</span>
            <h2 className="section-title">Villes d'<strong>intervention</strong></h2>
            <div className={styles.villesGrid}>
              {service.villesLiees.map((villeId) => {
                const ville = getVilleById(villeId);
                if (!ville) return null;
                return (
                  <Link
                    key={villeId}
                    to={`/creation-site-web-${villeId}`}
                    className={styles.villeCard}
                  >
                    <strong>{ville.nom}</strong>
                    <span>{ville.departement}</span>
                  </Link>
                );
              })}
              <Link to="/nos-villes" className={`${styles.villeCard} ${styles.villeCardMore}`}>
                <strong>Toutes les villes →</strong>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Prêt à lancer votre <strong>{service.nom} ?</strong>
            </h2>
            <p className={styles.ctaSubtitle}>
              Devis gratuit sous 24h. Premier échange offert. {service.delai} de délai.
            </p>
            <div className={styles.ctaCtas}>
              <a href="/#contact" className="btn btn--primary">Démarrer mon projet</a>
              <a href="mailto:atlamazstudio@gmail.com" className="btn btn--secondary">atlamazstudio@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
