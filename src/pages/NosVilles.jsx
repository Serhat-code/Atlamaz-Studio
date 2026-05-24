import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { villes } from '../data/villes';
import styles from '../styles/NosVilles.module.css';

const BASE_URL = 'https://atlamazstudio.fr';
const OG_IMAGE = 'https://atlamazstudio.fr/og-image.svg';

export default function NosVilles() {
  return (
    <>
      <Helmet>
        <title>Nos villes d'intervention — Atlamaz Studio | Développeur web freelance</title>
        <meta
          name="description"
          content="Atlamaz Studio intervient dans toute la région Auvergne-Rhône-Alpes pour la création de sites web professionnels. Lyon, Grenoble, Saint-Étienne, Annecy et plus encore."
        />
        <link rel="canonical" href={`${BASE_URL}/nos-villes`} />
        <meta property="og:title" content="Nos villes d'intervention — Atlamaz Studio" />
        <meta property="og:description" content="Création de sites web professionnels dans toute la région Auvergne-Rhône-Alpes." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={`${BASE_URL}/nos-villes`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <span className="section-label">Interventions locales</span>
          <h1 className={styles.heroTitle}>
            Nos villes <strong>d'intervention</strong>
          </h1>
          <p className={styles.heroSubtitle}>
            Atlamaz Studio crée des sites web professionnels pour les entreprises de toute la région Auvergne-Rhône-Alpes. Référencement local, design sur mesure, livraison rapide.
          </p>
        </div>
      </section>

      {/* Grille des villes */}
      <section className={`section ${styles.villesSection}`}>
        <div className="container">
          <div className={styles.villesGrid}>
            {villes.map((ville) => (
              <Link
                key={ville.villeId}
                to={`/${ville.slug}`}
                className={styles.villeCard}
              >
                <div className={styles.villeCardContent}>
                  <h2 className={styles.villeCardNom}>{ville.nom}</h2>
                  <span className={styles.villeCardRegion}>{ville.region}</span>
                  <span className={styles.villeCardDept}>{ville.departement}</span>
                </div>
                <span className={styles.villeCardCta}>Voir la page →</span>
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
              Votre ville n'est <strong>pas dans la liste ?</strong>
            </h2>
            <p className={styles.ctaSubtitle}>
              Nous travaillons avec des clients dans toute la France. Contactez-nous pour discuter de votre projet.
            </p>
            <a href="/#contact" className="btn btn--primary">Demander un devis gratuit</a>
          </div>
        </div>
      </section>
    </>
  );
}
