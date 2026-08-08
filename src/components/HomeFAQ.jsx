import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import styles from '../styles/HomeFAQ.module.css';

export default function HomeFAQ({ t }) {
  const { homeFaq } = t;
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <div className={styles.head}>
          <Reveal as="span" className="section-label">{homeFaq.eyebrow}</Reveal>
          <Reveal delay={1}>
            <h2 className="section-title">{homeFaq.title}</h2>
          </Reveal>
        </div>

        <Reveal delay={2} className={styles.list}>
          {homeFaq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.plus} aria-hidden="true">+</span>
                </button>
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </Reveal>

        <Reveal delay={3} className={styles.footer}>
          <Link to="/faq" className="btn btn--secondary">{homeFaq.allLink} →</Link>
        </Reveal>
      </div>
    </section>
  );
}
