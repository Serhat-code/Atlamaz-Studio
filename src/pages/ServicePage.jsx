import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getServiceBySlug, localizeService, services } from '../data/services';
import { getVilleById } from '../data/villes';
import SocialProof from '../components/SocialProof';
import ContactModal from '../components/ContactModal';
import Reveal from '../components/Reveal';
import ParticleShape from '../components/Hero/ParticleShape';
import { useSpotlight } from '../hooks/useSpotlight';
import styles from '../styles/ServicePage.module.css';

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

const BASE_URL = import.meta.env.VITE_BASE_URL;
const OG_IMAGE = import.meta.env.VITE_OG_IMAGE;

// "De 1 500€ à 15 000€" → [1500, 15000] ; "149€/mois" → [149].
// Les espaces séparent les milliers ; \s couvre aussi les insécables.
const parsePrices = (label) =>
  (label.match(/\d[\d\s]*/g) || []).map((n) => Number(n.replace(/\D/g, '')));

function buildOffer(prix) {
  const [low, high] = parsePrices(prix);
  if (high) return { '@type': 'AggregateOffer', lowPrice: low, highPrice: high, priceCurrency: 'EUR' };
  return { '@type': 'Offer', price: low, priceCurrency: 'EUR' };
}

export default function ServicePage({ serviceSlug, t, lang }) {
  const base = getServiceBySlug(serviceSlug);
  const [modalOpen, setModalOpen] = useState(false);
  const { ref: prixRef, onMouseMove: prixOnMouseMove } = useSpotlight();

  if (!base) return <Navigate to="/" replace />;

  const service = localizeService(base, lang);
  const sp = t.servicePage;
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
    offers: buildOffer(base.prix),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: sp.home, item: BASE_URL },
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

  const autres = services
    .filter((s) => s.slug !== service.slug)
    .map((s) => localizeService(s, lang));

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

      {/* Hero sombre : fil d'Ariane, texte et forme en particules du métier */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label={sp.breadcrumbAria}>
            <ol className={styles.breadcrumbList}>
              <li><Link to="/">{sp.home}</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page">{service.nom}</li>
            </ol>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <Reveal as="span" className={`section-label ${styles.heroLabel}`}>{sp.label}</Reveal>
              <Reveal delay={1} className={styles.heroTitleWrap}><h1 className={styles.heroTitle}>{service.nom}</h1></Reveal>
              <Reveal delay={2} className={styles.heroTaglineWrap}><p className={styles.heroTagline}>{service.tagline}</p></Reveal>
              <Reveal delay={2} className={styles.heroDescWrap}><p className={styles.heroDesc}>{service.description}</p></Reveal>
              <div className={styles.heroBadges}>
                <span className={styles.heroBadge}>
                  <span className={styles.heroBadgeLabel}>{sp.delai}</span>
                  <strong>{service.delai}</strong>
                </span>
              </div>
              <div className={styles.heroSocialProof}>
                <SocialProof variant="inline" text={sp.socialProof} />
              </div>
              <div className={styles.heroCtas}>
                <button className="btn btn--primary" onClick={() => setModalOpen(true)}>
                  {sp.start}
                </button>
                {CALENDLY_URL && (
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                    {sp.book}
                  </a>
                )}
              </div>
            </div>

            <ParticleShape shape={service.shape} className={styles.heroShape} />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className={`section ${styles.introSection}`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <h2 className={styles.introTitle}>{sp.whyTitle}</h2>
              <p className={styles.introText}>{service.intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className={`section ${styles.inclusSection}`}>
        <div className="container">
          <span className="section-label">{sp.inclusLabel}</span>
          <h2 className="section-title">{sp.inclusTitle[0]}<strong>{sp.inclusTitle[1]}</strong></h2>
          <div className={styles.inclusList}>
            {service.inclus.map((item, i) => (
              <Reveal key={item} delay={Math.min(i + 1, 5)}>
              <div className={styles.inclusItem}>
                <span className={styles.inclusCheck} aria-hidden="true">✓</span>
                <span>{item}</span>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className={`section ${styles.processusSection}`}>
        <div className="container">
          <span className="section-label">{sp.processLabel}</span>
          <h2 className="section-title">{sp.processTitle[0]}<strong>{sp.processTitle[1]}</strong></h2>
          <div className={styles.processusGrid}>
            {service.processus.map((step, i) => (
              <Reveal key={step.numero} delay={Math.min(i + 1, 5)}>
              <div className={styles.processusCard}>
                <span className={styles.processusNumero}>{step.numero}</span>
                <h3 className={styles.processusTitre}>{step.titre}</h3>
                <p className={styles.processusDesc}>{step.description}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prix */}
      <section className={`section ${styles.prixSection}`}>
        <div className="container">
          <div ref={prixRef} onMouseMove={prixOnMouseMove} className={`card-spotlight ${styles.prixCard}`}>
            <div className={styles.prixLeft}>
              <h2 className={styles.prixTitle}>{service.nom}</h2>
              <p className={styles.prixTagline}>{service.tagline}</p>
            </div>
            <div className={styles.prixRight}>
              <span className={styles.prixAmount}>{service.prix}</span>
              <span className={styles.prixDelai}>{sp.delivery} {service.delai}</span>
              <button className="btn btn--primary" onClick={() => setModalOpen(true)}>{sp.start}</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <span className="section-label">{sp.faqLabel}</span>
          <h2 className="section-title">{sp.faqTitle} <strong>{service.nom}</strong></h2>
          <div className={styles.faqList}>
            {service.faq.map((item, i) => (
              <Reveal key={item.question} delay={Math.min(i + 1, 5)}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqReponse}>{item.reponse}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Villes liées */}
      {service.villesLiees && service.villesLiees.length > 0 && (
        <section className={`section ${styles.villesSection}`}>
          <div className="container">
            <span className="section-label">{sp.villesLabel}</span>
            <h2 className="section-title">{sp.villesTitle[0]}<strong>{sp.villesTitle[1]}</strong></h2>
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
                <strong>{sp.allCities}</strong>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Nos autres services */}
      <section className={`section ${styles.autresServices}`}>
        <div className="container">
          <span className="section-label">{sp.moreLabel}</span>
          <h2 className="section-title">{sp.moreTitle[0]}<strong>{sp.moreTitle[1]}</strong></h2>
          <div className={styles.autresGrid}>
            {autres.map((s) => (
              <Link key={s.slug} to={`/${s.slug}`} className={styles.autreCard}>
                <h3 className={styles.autreNom}>{s.nom}</h3>
                <p className={styles.autreTagline}>{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              {sp.ctaTitle} <strong>{service.nom}{sp.questionMark}</strong>
            </h2>
            <p className={styles.ctaSubtitle}>
              {sp.ctaSubtitle(service.delai)}
            </p>
            <div className={styles.ctaCtas}>
              <button className="btn btn--primary" onClick={() => setModalOpen(true)}>
                {sp.ctaStart}
              </button>
              {CALENDLY_URL && (
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                  {sp.book}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
