import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getArticleBySlug, getArticlesSimilaires } from '../data/articles';
import { getServiceBySlug } from '../data/services';
import styles from '../styles/BlogArticle.module.css';

const BASE_URL = 'https://atlamazstudio.fr';
const OG_IMAGE = 'https://atlamazstudio.fr/og-image.svg';

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogArticle() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) return <Navigate to="/blog" replace />;

  const canonicalUrl = `${BASE_URL}/blog/${article.slug}`;
  const similaires = getArticlesSimilaires(article.categorieId, article.slug);
  const serviceLie = article.serviceLie ? getServiceBySlug(article.serviceLie) : null;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.titre,
    description: article.extrait,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: 'Atlamaz Studio',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Atlamaz Studio',
      url: BASE_URL,
    },
    url: canonicalUrl,
    image: OG_IMAGE,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: article.titre, item: canonicalUrl },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
        <div className="container">
          <ol className={styles.breadcrumbList}>
            <li><Link to="/">Accueil</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link to="/blog">Blog</Link></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">{article.titre}</li>
          </ol>
        </div>
      </nav>

      <div className={`section ${styles.articleWrapper}`}>
        <div className="container">
          <div className={styles.articleLayout}>
            {/* Contenu principal */}
            <article className={styles.articleMain}>
              <header className={styles.articleHeader}>
                <div className={styles.articleMeta}>
                  <span className="badge badge--tag">{article.categorie}</span>
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                  <span>{article.tempsLecture} de lecture</span>
                </div>
                <h1 className={styles.articleTitle}>{article.titre}</h1>
                <p className={styles.articleExtrait}>{article.extrait}</p>
              </header>

              <div
                className={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: article.contenu }}
              />
            </article>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* CTA service lié */}
              {serviceLie && (
                <div className={styles.sidebarCard}>
                  <span className={styles.sidebarCardLabel}>Service associé</span>
                  <h3 className={styles.sidebarCardTitle}>{serviceLie.nom}</h3>
                  <p className={styles.sidebarCardDesc}>{serviceLie.tagline}</p>
                  <p className={styles.sidebarCardPrice}>{serviceLie.prix}</p>
                  <Link to={`/${serviceLie.slug}`} className="btn btn--secondary btn--sm">
                    Découvrir ce service
                  </Link>
                </div>
              )}

              {/* CTA contact */}
              <div className={`${styles.sidebarCard} ${styles.sidebarCardCta}`}>
                <h3 className={styles.sidebarCardTitle}>Un projet web ?</h3>
                <p className={styles.sidebarCardDesc}>Devis gratuit sous 24h. Premier échange offert.</p>
                <a href="/#contact" className="btn btn--primary btn--sm">Démarrer un projet</a>
              </div>

              {/* Liens utiles */}
              <div className={styles.sidebarCard}>
                <span className={styles.sidebarCardLabel}>Liens utiles</span>
                <nav className={styles.sidebarLinks}>
                  <Link to="/faq" className={styles.sidebarLink}>Toutes nos FAQ →</Link>
                  <Link to="/nos-villes" className={styles.sidebarLink}>Nos villes d'intervention →</Link>
                  <Link to="/realisations" className={styles.sidebarLink}>Nos réalisations →</Link>
                </nav>
              </div>
            </aside>
          </div>

          {/* Articles similaires */}
          {similaires.length > 0 && (
            <section className={styles.similaires}>
              <h2 className={styles.similairesTitle}>Articles similaires</h2>
              <div className={styles.similairesGrid}>
                {similaires.map((art) => (
                  <Link key={art.slug} to={`/blog/${art.slug}`} className={styles.similaireCard}>
                    <span className="badge badge--tag">{art.categorie}</span>
                    <h3 className={styles.similaireCardTitle}>{art.titre}</h3>
                    <p className={styles.similaireCardExtrait}>{art.extrait}</p>
                    <span className={styles.similaireCardTemps}>{art.tempsLecture}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
