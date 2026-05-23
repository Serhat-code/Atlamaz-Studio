import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { realisations } from '../data/realisations';
import styles from '../styles/RealisationDetail.module.css';

export default function RealisationDetail({ t }) {
  const { slug } = useParams();
  const { realisationDetail: rd } = t;
  const projet = realisations.find((p) => p.slug === slug);

  if (!projet) return <Navigate to="/realisations" replace />;

  return (
    <>
      <Helmet>
        <title>{projet.nom} — Atlamaz Studio</title>
        <meta name="description" content={projet.description} />
      </Helmet>

      <div className="container">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
          <Link to="/" className={styles.breadcrumbLink}>{rd.breadcrumb.home}</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">›</span>
          <Link to="/realisations" className={styles.breadcrumbLink}>{rd.breadcrumb.realisations}</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">›</span>
          <span className={styles.breadcrumbCurrent}>{projet.nom}</span>
        </nav>

        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.heroLeft}>
            <span className={`badge badge--tag ${styles.typeBadge}`}>{projet.type}</span>
            <h1 className={styles.heroTitle}>{projet.nom}</h1>
            <p className={styles.heroSecteur}>{projet.secteur}</p>
          </div>
          <div className={styles.heroRight}>
            {projet.lien && projet.lien !== '#' && (
              <a
                href={projet.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                {rd.visitBtn} ↗
              </a>
            )}
          </div>
        </header>

        {/* Grande image */}
        <div className={styles.imageWrapper}>
          {projet.image ? (
            <img
              src={projet.image}
              alt={`Aperçu du site ${projet.nom}`}
              className={styles.image}
              width="1100"
              height="619"
            />
          ) : (
            <div className={styles.imagePlaceholder} aria-hidden="true">
              <span className={styles.placeholderText}>{projet.nom}</span>
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className={styles.content}>
          {/* Colonne principale */}
          <div className={styles.main}>
            {/* Contexte */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{rd.sections.context}</h2>
              <p className={styles.description}>{projet.description}</p>
            </section>

            {/* Technologies */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{rd.sections.technologies}</h2>
              <div className={styles.techList}>
                {projet.technologies.map((tech) => (
                  <span key={tech} className="badge badge--tag">{tech}</span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar résultats */}
          <aside className={styles.sidebar}>
            <h2 className={styles.sectionTitle}>{rd.sections.results}</h2>
            <div className={styles.results}>
              <div className={styles.resultItem}>
                <span className={styles.resultValue}>{projet.pageSpeed}/100</span>
                <span className={styles.resultLabel}>{rd.resultsLabels.pageSpeed}</span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultValue}>{projet.delaiLivraison}</span>
                <span className={styles.resultLabel}>{rd.resultsLabels.delivery}</span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultValue}>{projet.revisions}</span>
                <span className={styles.resultLabel}>{rd.resultsLabels.revisions}</span>
              </div>
            </div>
            {projet.resultat && (
              <blockquote className={styles.resultatQuote}>
                "{projet.resultat}"
              </blockquote>
            )}
          </aside>
        </div>

        {/* CTA similaire */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaTitle}>{rd.sections.cta}</h3>
            <p className={styles.ctaSubtitle}>{rd.ctaText}</p>
          </div>
          <Link to="/#contact" className="btn btn--primary">
            {rd.ctaButton}
          </Link>
        </div>

        {/* Retour */}
        <div className={styles.backWrapper}>
          <Link to="/realisations" className={styles.backLink}>
            {rd.backBtn}
          </Link>
        </div>
      </div>
    </>
  );
}
