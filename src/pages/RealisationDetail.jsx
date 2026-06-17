import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { realisations } from '../data/realisations';
import { buildSrcSet } from '../utils/images';
import Reveal from '../components/Reveal';
import ContactModal from '../components/ContactModal';
import styles from '../styles/RealisationDetail.module.css';

export default function RealisationDetail({ t }) {
  const { slug } = useParams();
  const { realisationDetail: rd } = t;
  const projet = realisations.find((p) => p.slug === slug);
  const [modalOpen, setModalOpen] = useState(false);

  if (!projet) return <Navigate to="/realisations" replace />;

  const nextProjet = realisations[(realisations.indexOf(projet) + 1) % realisations.length];

  return (
    <>
      <Helmet>
        <title>{projet.nom} — Atlamaz Studio</title>
        <meta name="description" content={projet.description} />
      </Helmet>

      {/* ── Breadcrumb ─────────────────────────────────────── */}
      <div className="container">
        <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
          <Link to="/" className={styles.breadcrumbLink}>{rd.breadcrumb.home}</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">›</span>
          <Link to="/realisations" className={styles.breadcrumbLink}>{rd.breadcrumb.realisations}</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">›</span>
          <span className={styles.breadcrumbCurrent}>{projet.nom}</span>
        </nav>
      </div>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal>
            <span className="section-label">{projet.secteur}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className={styles.heroTitle}>{projet.nom}</h1>
          </Reveal>
          <Reveal delay={2}>
            <p className={styles.heroType}>{projet.type}</p>
          </Reveal>

          <Reveal delay={3} className={styles.heroMeta}>
            {projet.technologies?.map((tech) => (
              <span key={tech} className={styles.tag}>{tech}</span>
            ))}
            <span className={styles.metaSep} aria-hidden="true" />
            <span className={styles.metaItem}>{projet.annee}</span>
            <span className={styles.metaItem}>·</span>
            <span className={styles.metaItem}>{projet.delaiLivraison}</span>
          </Reveal>

          {projet.lien && projet.lien !== '#' && (
            <Reveal delay={4}>
              <a
                href={projet.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--emerald"
              >
                {rd.visitBtn} ↗
              </a>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Image principale ───────────────────────────────── */}
      <div className="container">
        <div className={styles.imageWrapper}>
          {projet.image ? (
            <img
              src={projet.image}
              srcSet={buildSrcSet(projet.image)}
              sizes="(max-width: 1100px) 100vw, 1100px"
              alt={`Aperçu du site ${projet.nom}`}
              className={styles.image}
              width="1100"
              height="619"
            />
          ) : (
            <div className={styles.imagePlaceholder} style={{ background: projet.couleur }} aria-hidden="true">
              <span className={styles.placeholderText}>{projet.nom}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Stats inline ───────────────────────────────────── */}
      <div className="container">
        <div className={styles.statsRow}>
          {projet.stats?.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Blocs narratifs ────────────────────────────────── */}
      <div className="container">
        <div className={styles.narrative}>

          {projet.defi && (
            <Reveal className={styles.block}>
              <div className={styles.blockLabel}>01 — {rd.sections?.defi || 'Le défi'}</div>
              <p className={styles.blockText}>{projet.defi}</p>
            </Reveal>
          )}

          {projet.approche && (
            <Reveal className={styles.block}>
              <div className={styles.blockLabel}>02 — {rd.sections?.approche || 'Notre approche'}</div>
              <p className={styles.blockText}>{projet.approche}</p>
            </Reveal>
          )}

          {projet.resultatNarratif && (
            <Reveal className={styles.block}>
              <div className={styles.blockLabel}>03 — {rd.sections?.resultat || 'Le résultat'}</div>
              <p className={styles.blockText}>{projet.resultatNarratif}</p>
            </Reveal>
          )}

        </div>
      </div>

      {/* ── Projet suivant ─────────────────────────────────── */}
      {nextProjet && nextProjet.slug !== projet.slug && (
        <section className={styles.nextSection}>
          <div className="container">
            <Reveal>
              <span className="section-label">{rd.nextLabel || 'Projet suivant'}</span>
            </Reveal>
            <Reveal delay={1}>
              <Link to={`/realisations/${nextProjet.slug}`} className={styles.nextCard}>
                <div
                  className={styles.nextBg}
                  style={nextProjet.image
                    ? { backgroundImage: `url(${nextProjet.image})` }
                    : { background: nextProjet.couleur }}
                />
                <div className={styles.nextOverlay} />
                <div className={styles.nextContent}>
                  <span className={styles.nextType}>{nextProjet.type}</span>
                  <h2 className={styles.nextTitle}>{nextProjet.nom}</h2>
                  <span className={styles.nextArrow} aria-hidden="true">↗</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── CTA bas de page ────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <Reveal>
            <h3 className={styles.ctaTitle}>{rd.sections?.cta || 'Envie d\'un projet similaire ?'}</h3>
            <p className={styles.ctaSubtitle}>{rd.ctaText}</p>
          </Reveal>
          <Reveal delay={1}>
            <button className="btn btn--primary" onClick={() => setModalOpen(true)}>
              {rd.ctaButton}
            </button>
          </Reveal>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
