import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../data/services';
import ContactModal from '../components/ContactModal';
import styles from '../styles/Services.module.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const OG_IMAGE = import.meta.env.VITE_OG_IMAGE;

const SERVICES_TITLE = 'Nos services — Atlamaz Studio | Agence web';

const SERVICES_DESCRIPTION =
  'Sites vitrines, landing pages, boutiques en ligne, applications mobiles, refonte et maintenance : découvrez tous les services web proposés par Atlamaz Studio.';

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{SERVICES_TITLE}</title>
        <meta name="description" content={SERVICES_DESCRIPTION} />
        <link rel="canonical" href={`${BASE_URL}/services`} />
        <meta property="og:title" content={SERVICES_TITLE} />
        <meta property="og:description" content={SERVICES_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={`${BASE_URL}/services`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <span className="section-label">Nos prestations</span>
          <h1 className={styles.heroTitle}>
            Des sites et applications <strong>conçus pour convertir</strong>
          </h1>
          <p className={styles.heroSubtitle}>
            Chaque service ci-dessous détaille le prix, le délai et ce qui est inclus — pas de devis à rallonge avant de savoir à quoi s'attendre.
          </p>
        </div>
      </section>

      {/* Grille des services */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service) => (
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
                  <span className={styles.serviceCardCta}>Voir la page →</span>
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
              Votre projet <strong>ne rentre pas dans une case ?</strong>
            </h2>
            <p className={styles.ctaSubtitle}>
              Parlons-en directement — le premier échange sert à cadrer précisément votre besoin, sans engagement.
            </p>
            <button className="btn btn--primary" onClick={() => setModalOpen(true)}>Discutons de votre projet</button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
