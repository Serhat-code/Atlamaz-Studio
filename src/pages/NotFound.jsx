import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from '../styles/NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page introuvable · Atlamaz Studio</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className={styles.wrapper}>
        <span className={`animate-fade-up delay-0 ${styles.code}`}>404</span>
        <h1 className={`animate-fade-up delay-1 ${styles.title}`}>
          Page introuvable
        </h1>
        <p className={`animate-fade-up delay-2 ${styles.subtitle}`}>
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className={`animate-fade-up delay-3 ${styles.actions}`}>
          <Link to="/" className="btn btn--primary">
            Retour à l'accueil
          </Link>
          <Link to="/realisations" className="btn btn--secondary">
            Voir les réalisations
          </Link>
        </div>
      </div>
    </>
  );
}
