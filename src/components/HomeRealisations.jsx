import { Link } from 'react-router-dom';
import { realisations } from '../data/realisations';
import { buildSrcSet } from '../utils/images';
import Reveal from './Reveal';
import styles from '../styles/HomeRealisations.module.css';

function ProjectCard({ r }) {
  return (
    <Reveal
      as={Link}
      to={`/realisations/${r.slug}`}
      className={styles.card}
      aria-label={`Voir le projet ${r.nom}`}
    >
      <div className={styles.media} style={!r.image ? { background: r.couleur } : undefined}>
        {r.image ? (
          <img
            src={r.image}
            srcSet={buildSrcSet(r.image)}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt={`Aperçu du site ${r.nom}`}
            className={styles.mediaImg}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className={styles.mediaLabel}>{r.nom}</span>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.tag}>{r.secteur || r.type}</div>
        <h3 className={styles.title}>{r.nom}</h3>
        <p className={styles.text}>{r.description}</p>
      </div>
    </Reveal>
  );
}

export default function HomeRealisations({ t }) {
  const { homeRealisations } = t;

  return (
    <section className={styles.section} id="realisations">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Reveal as="span" className="section-label">{homeRealisations.eyebrow}</Reveal>
            <Reveal delay={1}>
              <h2 className="section-title">{homeRealisations.title}</h2>
            </Reveal>
          </div>
          <Reveal delay={2} className={styles.headerRight}>
            <Link to="/realisations" className={`btn btn--emerald ${styles.allLink}`}>
              {homeRealisations.allLink} →
            </Link>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {realisations.map((r) => (
            <ProjectCard key={r.id} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
