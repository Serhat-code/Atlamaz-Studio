import { useEffect, useRef } from 'react';
import styles from '../styles/MaskTransition.module.css';

export default function MaskTransition({ t }) {
  const { maskTransition } = t;
  const sectionRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const circle = circleRef.current;
    if (!section || !circle) return;

    let rafId = 0;

    function render() {
      rafId = 0;
      // Une seule lecture de layout par frame (jamais par événement de scroll),
      // puis une seule écriture : pas de thrashing lecture/écriture.
      const rect = section.getBoundingClientRect();
      // Équivalent de start:'top top' → end:'bottom bottom' : la progression
      // court sur la hauteur de section qui dépasse le viewport.
      const range = Math.max(1, rect.height - window.innerHeight);
      const p = Math.min(Math.max(-rect.top / range, 0), 1);

      // Le centre "50% 50%" est réécrit tel quel à chaque frame : le cercle
      // ne peut pas dériver vers un coin, seul le rayon évolue.
      circle.style.clipPath = `circle(${(1 + p * 149).toFixed(2)}% at 50% 50%)`;
    }

    function schedule() {
      if (!rafId) rafId = requestAnimationFrame(render);
    }

    render();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.sticky}>
        <div className={styles.before}>
          <p>
            {maskTransition.before}
            <span className={styles.strong}>{maskTransition.beforeStrong}</span>
          </p>
        </div>
        <div className={styles.circle} ref={circleRef}>
          <div className={styles.inner}>
            <span className="section-label">{maskTransition.eyebrow}</span>
            <h2 className={styles.circleTitle}>{maskTransition.title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
