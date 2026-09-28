import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { realisations } from '../data/realisations';
import Reveal from '../components/Reveal';
import ContactModal from '../components/ContactModal';
import ImageLightbox from '../components/ImageLightbox';
import styles from '../styles/RealisationDetail.module.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * Liste ordonnée de toutes les captures de la page (cover, fonctionnalités,
 * mobiles) : la visionneuse navigue dans cet ordre.
 */
function buildGallery(projet) {
  return [
    { src: projet.cover.image, alt: projet.cover.alt },
    ...projet.fonctionnalites.map((f) => ({ src: f.image, alt: `${projet.nom} — ${f.titre}` })),
    ...projet.mobiles.map((m) => ({ src: m.image, alt: `${projet.nom} sur mobile — ${m.legende}` })),
  ];
}

function Shot({ src, alt, width, height, index, onOpen, className = '', eager = false }) {
  return (
    <button
      type="button"
      className={`${styles.shot} ${className}`.trim()}
      onClick={() => onOpen(index)}
      aria-label={`Agrandir : ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? undefined : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
      />
    </button>
  );
}

export default function RealisationDetail({ t }) {
  const { slug } = useParams();
  const { realisationDetail: rd } = t;
  const projet = realisations.find((p) => p.slug === slug);
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const closeLightbox = () => setLightboxIndex(null);

  if (!projet) return <Navigate to="/realisations" replace />;

  const nextProjet = realisations[(realisations.indexOf(projet) + 1) % realisations.length];
  const gallery = buildGallery(projet);
  const featureOffset = 1;
  const mobileOffset = featureOffset + projet.fonctionnalites.length;

  // Titre assemblé hors JSX : React 19 hisse <title> nativement et exige un
  // enfant texte unique. Écrit « {projet.nom} — Atlamaz Studio », le titre
  // partait en plusieurs enfants et le HTML statique recevait un <title> vide,
  // les études de cas héritant alors des OG de l'accueil.
  const pageTitle = `${projet.nom} — ${projet.type} | Atlamaz Studio`;
  const canonicalUrl = `${BASE_URL}/realisations/${projet.slug}`;
  const ogImage = `${BASE_URL}${projet.cover.image}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={projet.accroche} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={projet.accroche} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={projet.accroche} />
        <meta name="twitter:image" content={ogImage} />
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
          <Reveal delay={2}>
            <p className={styles.heroLead}>{projet.accroche}</p>
          </Reveal>

          <Reveal delay={3} className={styles.heroMeta}>
            {projet.technologies.map((tech) => (
              <span key={tech} className={styles.tag}>{tech}</span>
            ))}
            <span className={styles.metaSep} aria-hidden="true" />
            <span className={styles.metaItem}>{projet.annee}</span>
          </Reveal>

          <Reveal delay={4}>
            {projet.lien ? (
              <a
                href={projet.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--emerald"
              >
                {rd.visitBtn} ↗
              </a>
            ) : (
              <span className={styles.liveOff}>{projet.lienLabel}</span>
            )}
          </Reveal>
        </div>
      </section>

      {/* ── Cover ──────────────────────────────────────────── */}
      <div className="container">
        <div className={styles.imageWrapper}>
          <Shot
            src={projet.cover.image}
            alt={projet.cover.alt}
            width={projet.cover.width}
            height={projet.cover.height}
            index={0}
            onOpen={setLightboxIndex}
            className={styles.coverShot}
            eager
          />
        </div>
      </div>

      {/* ── Fiche technique ────────────────────────────────── */}
      <div className="container">
        <h2 className={styles.srOnly}>{rd.sections.fiche}</h2>
        <dl className={styles.fiche}>
          {projet.fiche.map((f) => (
            <div key={f.label} className={styles.ficheItem}>
              <dt className={styles.ficheLabel}>{f.label}</dt>
              <dd className={styles.ficheValue}>{f.valeur}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ── Chiffres clés ──────────────────────────────────── */}
      <div className="container">
        <div className={styles.statsRow}>
          {projet.chiffres.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Contexte / Défi / Réponse ──────────────────────── */}
      <div className="container">
        <div className={styles.narrative}>
          {[
            ['01', rd.sections.contexte, projet.contexte],
            ['02', rd.sections.defi, projet.defi],
            ['03', rd.sections.reponse, projet.reponse],
          ].map(([num, label, text]) => (
            <Reveal key={num} className={styles.block}>
              <h2 className={styles.blockLabel}>{num} — {label}</h2>
              <p className={styles.blockText}>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Fonctionnalités ────────────────────────────────── */}
      <section className={styles.featuresSection}>
        <div className="container">
          <Reveal>
            <h2 className={styles.sectionTitle}>{rd.sections.construit}</h2>
          </Reveal>
          <div className={`${styles.features} ${projet.featuresPortrait ? styles.featuresPortrait : ''}`}>
            {projet.fonctionnalites.map((f, i) => (
              <figure key={f.image} className={styles.feature}>
                <Shot
                  src={f.image}
                  alt={gallery[featureOffset + i].alt}
                  width={f.width}
                  height={f.height}
                  index={featureOffset + i}
                  onOpen={setLightboxIndex}
                  className={projet.featuresPortrait ? styles.phoneShot : ''}
                />
                <figcaption>
                  <h3 className={styles.featureTitle}>{f.titre}</h3>
                  <p className={styles.featureText}>{f.texte}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {projet.mobiles.length > 0 && (
            <>
              <div className={styles.phones}>
                {projet.mobiles.map((m, i) => (
                  <figure key={m.image} className={styles.phone}>
                    <Shot
                      src={m.image}
                      alt={gallery[mobileOffset + i].alt}
                      width={m.width}
                      height={m.height}
                      index={mobileOffset + i}
                      onOpen={setLightboxIndex}
                      className={styles.phoneShot}
                    />
                    <figcaption className={styles.phoneCaption}>{m.legende}</figcaption>
                  </figure>
                ))}
              </div>
              {projet.noteMobile && <p className={styles.phonesNote}>{projet.noteMobile}</p>}
            </>
          )}
        </div>
      </section>

      {/* ── Sous le capot ──────────────────────────────────── */}
      <section className={styles.underSection}>
        <div className="container">
          <Reveal>
            <h2 className={styles.sectionTitle}>{rd.sections.capot}</h2>
          </Reveal>
          <ul className={styles.underList}>
            {projet.sousLeCapot.map((item) => (
              <li key={item} className={styles.underItem}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

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
                  style={{ backgroundImage: `url(${nextProjet.cover.image})` }}
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

      <ImageLightbox
        images={gallery}
        index={lightboxIndex}
        onChange={setLightboxIndex}
        onClose={closeLightbox}
      />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
