import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services, localizeService } from '../data/services';
import ContactModal from '../components/ContactModal';
import styles from '../styles/Services.module.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const OG_IMAGE = import.meta.env.VITE_OG_IMAGE;

export default function Services({ t, lang }) {
  const [modalOpen, setModalOpen] = useState(false);
  const p = t.servicesPage;

  return (
    <>
      <Helmet>
        <title>{p.title}</title>
        <meta name="description" content={p.description} />
        <link rel="canonical" href={`${BASE_URL}/services`} />
        <meta property="og:title" content={p.title} />
        <meta property="og:description" content={p.description} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={`${BASE_URL}/services`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <span className="section-label">{p.label}</span>
          <h1 className={styles.heroTitle}>
            {p.heroTitle[0]}<strong>{p.heroTitle[1]}</strong>
          </h1>
          <p className={styles.heroSubtitle}>
            {p.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Grille des services */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((s) => localizeService(s, lang)).map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className={styles.serviceCard}
              >
                <div className={styles.serviceCardContent}>
                  <h2 className={styles.serviceCardNom}>{service.nom}</h2>
                  <p className={styles.serviceCardTagline}>{service.tagline}</p>
                </div>
                <div className={styles.serviceCardFooter}>
                  <span className={styles.serviceCardPrix}>{service.prix}</span>
                  <span className={styles.serviceCardCta}>{p.cardCta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              {p.ctaTitle[0]}<strong>{p.ctaTitle[1]}</strong>
            </h2>
            <p className={styles.ctaSubtitle}>
              {p.ctaSubtitle}
            </p>
            <button className="btn btn--primary" onClick={() => setModalOpen(true)}>{p.ctaButton}</button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
