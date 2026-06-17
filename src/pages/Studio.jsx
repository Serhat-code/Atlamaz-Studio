import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Reveal from '../components/Reveal';
import HomeStudio from '../components/HomeStudio';
import ContactModal from '../components/ContactModal';
import styles from '../styles/Studio.module.css';

const BASE_URL     = import.meta.env.VITE_BASE_URL;
const OG_IMAGE      = import.meta.env.VITE_OG_IMAGE;
const CALENDLY_URL  = import.meta.env.VITE_CALENDLY_URL;

export default function Studio({ t }) {
  const s = t.studio;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{s.meta.title}</title>
        <meta name="description"        content={s.meta.description} />
        <link rel="canonical"           href={`${BASE_URL}/studio`} />
        <meta property="og:title"       content={s.meta.title} />
        <meta property="og:description" content={s.meta.description} />
        <meta property="og:url"         content={`${BASE_URL}/studio`} />
        <meta property="og:image"       content={OG_IMAGE} />
        <meta name="twitter:card"       content="summary_large_image" />
        <meta name="twitter:image"      content={OG_IMAGE} />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal as="span" className="section-label">{s.pageEyebrow}</Reveal>
          <Reveal delay={1}><h1 className={styles.heroTitle}>{s.pageTitle}</h1></Reveal>
          <Reveal delay={2}><p className={styles.heroSubtitle}>{s.pageSubtitle}</p></Reveal>
        </div>
      </section>

      {/* Citation + valeurs (réutilise le bloc de la home) */}
      <HomeStudio t={t} />

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <Reveal><h2 className={styles.ctaTitle}>{s.ctaTitle}</h2></Reveal>
          <Reveal delay={1}><p className={styles.ctaSubtitle}>{s.ctaSubtitle}</p></Reveal>
          <Reveal delay={2} className={styles.ctaButtons}>
            <button className="btn btn--primary" onClick={() => setModalOpen(true)}>{s.ctaButton}</button>
            {CALENDLY_URL && (
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                {s.ctaButtonSecondary}
              </a>
            )}
          </Reveal>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
