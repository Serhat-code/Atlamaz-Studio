import { Link } from 'react-router-dom';
import { realisations } from '../data/realisations';
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
      <div className={styles.media}>
        <img
          src={r.cover.image}
          alt={r.cover.alt}
          width={r.cover.width}
          height={r.cover.height}
          className={styles.mediaImg}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.tag}>{r.secteur || r.type}</div>
        <h3 className={styles.title}>{r.nom}</h3>
        <p className={styles.text}>{r.accroche}</p>
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
