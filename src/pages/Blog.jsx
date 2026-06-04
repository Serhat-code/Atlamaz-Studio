import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles, CATEGORIES_BLOG } from '../data/articles';
import styles from '../styles/Blog.module.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const OG_IMAGE = import.meta.env.VITE_OG_IMAGE;

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('tous');

  const filteredArticles =
    activeCategory === 'tous'
      ? articles
      : articles.filter((a) => a.categorieId === activeCategory);

  return (
    <>
      <Helmet>
        <title>Blog — Conseils web, SEO et freelance | Atlamaz Studio</title>
        <meta
          name="description"
          content="Conseils pratiques sur la création de sites web, le SEO local, les applications mobiles et le freelance. Blog d'Atlamaz Studio, développeur web freelance."
        />
        <link rel="canonical" href={`${BASE_URL}/blog`} />
        <meta property="og:title" content="Blog — Conseils web, SEO et freelance | Atlamaz Studio" />
        <meta property="og:description" content="Conseils pratiques sur la création de sites web, le SEO et le freelance." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={`${BASE_URL}/blog`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <span className="section-label">Articles & Ressources</span>
          <h1 className={styles.heroTitle}>
            Blog — <strong>Conseils web, SEO et freelance</strong>
          </h1>
          <p className={styles.heroSubtitle}>
            Conseils pratiques, guides et actualités pour les entrepreneurs qui veulent développer leur présence en ligne.
          </p>
        </div>
      </section>

      {/* Articles avec filtres */}
      <section className={`section ${styles.articlesSection}`}>
        <div className="container">
          {/* Filtres catégories */}
          <div className={styles.filters} role="group" aria-label="Filtrer par catégorie">
            {CATEGORIES_BLOG.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grille articles */}
          <div className={styles.articlesGrid}>
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className={styles.articleCard}
              >
                <div className={styles.articleCardHeader}>
                  <span className="badge badge--tag">{article.categorie}</span>
                  <span className={styles.articleCardTemps}>{article.tempsLecture}</span>
                </div>
                <h2 className={styles.articleCardTitle}>{article.titre}</h2>
                <p className={styles.articleCardExtrait}>{article.extrait}</p>
                <div className={styles.articleCardFooter}>
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                  <span className={styles.articleCardLire}>Lire l'article →</span>
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <p className={styles.empty}>Aucun article dans cette catégorie pour l'instant.</p>
          )}
        </div>
      </section>
    </>
  );
}
