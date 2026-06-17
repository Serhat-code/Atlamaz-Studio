import { Link } from 'react-router-dom';
import { services } from '../data/services';
import Reveal from './Reveal';
import styles from '../styles/HomeServices.module.css';

const FEATURED = [
  { slug: 'creation-landing-page',   num: '01' },
  { slug: 'creation-site-vitrine',   num: '02' },
  { slug: 'creation-application-mobile', num: '03' },
];

export default function HomeServices() {
  const items = FEATURED.map(({ slug, num }) => ({
    num,
    service: services.find((s) => s.slug === slug),
  })).filter((x) => x.service);

  return (
    <section className={styles.section} id="packs">
      <div className="container">
        <div className={styles.header}>
          <Reveal as="span" className="section-label">Services</Reveal>
          <Reveal delay={1}>
            <h2 className="section-title">
              Ce qu'on fait <strong>vraiment bien.</strong>
            </h2>
          </Reveal>
        </div>

        <ul className={styles.list}>
          {items.map(({ num, service }, i) => (
            <Reveal key={service.slug} as="li" delay={Math.min(i + 1, 3)}>
              <Link to={`/${service.slug}`} className={styles.item}>
                <span className={styles.num}>{num}</span>
                <div className={styles.itemBody}>
                  <h3 className={styles.itemTitle}>{service.nom}</h3>
                  <p className={styles.itemDesc}>{service.tagline}</p>
                </div>
                <div className={styles.itemRight}>
                  <span className={styles.price}>{service.prix}</span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={2} className={styles.footer}>
          <Link to="/tarifs" className="btn btn--secondary">
            Voir tous les services & tarifs
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
