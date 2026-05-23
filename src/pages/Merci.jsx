import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from '../styles/Merci.module.css';

export default function Merci({ t }) {
  const { merci } = t;

  return (
    <>
      <Helmet>
        <title>{merci.meta.title}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className={styles.wrapper}>
        <div className={`animate-fade-up delay-0 ${styles.icon}`} aria-hidden="true">✓</div>
        <h1 className={`animate-fade-up delay-1 ${styles.title}`}>{merci.title}</h1>
        <p className={`animate-fade-up delay-2 ${styles.subtitle}`}>{merci.subtitle}</p>
        <div className={`animate-fade-up delay-3 ${styles.actions}`}>
          <Link to="/" className="btn btn--primary">{merci.backBtn}</Link>
          <Link to="/realisations" className="btn btn--secondary">{merci.realisationsBtn}</Link>
        </div>
      </div>
    </>
  );
}
