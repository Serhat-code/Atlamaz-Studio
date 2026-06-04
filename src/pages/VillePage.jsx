import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getVilleById } from '../data/villes';
import { services } from '../data/services';
import SocialProof from '../components/SocialProof';
import styles from '../styles/VillePage.module.css';

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

const BASE_URL = import.meta.env.VITE_BASE_URL;
const OG_IMAGE = import.meta.env.VITE_OG_IMAGE;

export default function VillePage() {
  const { villeId } = useParams();
  const ville = getVilleById(villeId);

  if (!ville) return <Navigate to="/nos-villes" replace />;

  const canonicalUrl = `${BASE_URL}/creation-site-web-${ville.villeId}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Atlamaz Studio — Création site web ${ville.nom}`,
    description: ville.description,
    url: canonicalUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: ville.nom,
      addressRegion: ville.region,
      addressCountry: 'FR',
    },
    email: 'atlamazstudio@gmail.com',
    priceRange: '€€',
    areaServed: ville.nom,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Nos villes', item: `${BASE_URL}/nos-villes` },
      { '@type': 'ListItem', position: 3, name: ville.nom, item: canonicalUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ville.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.reponse },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{ville.metaTitle}</title>
        <meta name="description" content={ville.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={ville.metaTitle} />
        <meta property="og:description" content={ville.metaDescription} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ville.metaTitle} />
        <meta name="twitter:description" content={ville.metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
        <div className="container">
          <ol className={styles.breadcrumbList}>
            <li><Link to="/">Accueil</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link to="/nos-villes">Nos villes</Link></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">{ville.nom}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <span className="section-label">{ville.region} · {ville.departement}</span>
          <h1 className={styles.heroTitle}>
            Création de site web à <strong>{ville.nom}</strong>
          </h1>
          <p className={styles.heroSubtitle}>{ville.description}</p>
          <div className={styles.heroSocialProof}>
            <SocialProof />
          </div>
          <div className={styles.heroCtas}>
            <a href="/#contact" className="btn btn--primary">Devis gratuit sous 24h</a>
            {CALENDLY_URL && (
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                Réserver 30 min offertes
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <h2 className={styles.introTitle}>Votre partenaire digital à {ville.nom}</h2>
              <p className={styles.introText}>{ville.intro}</p>
            </div>
            <div className={styles.introStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>+80</span>
                <span className={styles.statLabel}>Score PageSpeed garanti</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>5–14j</span>
                <span className={styles.statLabel}>Délai de livraison</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>3</span>
                <span className={styles.statLabel}>Révisions incluses</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>24h</span>
                <span className={styles.statLabel}>Devis gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services disponibles */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <span className="section-label">Services</span>
          <h2 className="section-title">Nos services à <strong>{ville.nom}</strong></h2>
          <p className="section-subtitle">Des solutions web clé en main adaptées aux entreprises de {ville.nom} et de la région {ville.region}.</p>
          <div className={styles.servicesGrid}>
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} to={`/${service.slug}`} className={styles.serviceCard}>
                <div className={styles.serviceCardHeader}>
                  <h3 className={styles.serviceCardTitle}>{service.nom}</h3>
                  <span className={styles.serviceCardPrice}>{service.prix}</span>
                </div>
                <p className={styles.serviceCardDesc}>{service.tagline}</p>
                <span className={styles.serviceCardDelai}>Livraison : {service.delai}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Arguments */}
      <section className={`section ${styles.arguments}`}>
        <div className="container">
          <span className="section-label">Pourquoi nous choisir</span>
          <h2 className="section-title">Nos avantages à <strong>{ville.nom}</strong></h2>
          <div className={styles.argumentsGrid}>
            {ville.arguments.map((arg, i) => (
              <div key={arg.titre} className={styles.argumentCard}>
                <span className={styles.argumentNumber}>0{i + 1}</span>
                <h3 className={styles.argumentTitle}>{arg.titre}</h3>
                <p className={styles.argumentText}>{arg.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ locale */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <span className="section-label">Questions fréquentes</span>
          <h2 className="section-title">FAQ — Création site web à <strong>{ville.nom}</strong></h2>
          <div className={styles.faqList}>
            {ville.faq.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqReponse}>{item.reponse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villes proches */}
      {ville.villesProches && ville.villesProches.length > 0 && (
        <section className={`section ${styles.villesProches}`}>
          <div className="container">
            <span className="section-label">Proximité</span>
            <h2 className="section-title">Nous intervenons aussi <strong>à proximité</strong></h2>
            <div className={styles.villesPochesGrid}>
              {ville.villesProches.map((id) => (
                <Link key={id} to={`/creation-site-web-${id}`} className={styles.villeProcheCard}>
                  Création site web {id.replace(/-/g, ' ')} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Prêt à lancer votre site web à <strong>{ville.nom}</strong> ?
            </h2>
            <p className={styles.ctaSubtitle}>
              Devis gratuit sous 24h. Premier échange offert. Livraison en 5 à 14 jours.
            </p>
            <div className={styles.ctaCtas}>
              <a href="/#contact" className="btn btn--primary">Démarrer mon projet</a>
              {CALENDLY_URL && (
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                  Réserver 30 min offertes
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
