import { useEffect, useRef } from 'react';
import styles from '../styles/MaskTransition.module.css';

export default function MaskTransition({ t }) {
  const { maskTransition } = t;
  const sectionRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let scrollTriggerInstance = null;

    import('gsap').then(({ default: gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        const tween = gsap.to(circleRef.current, {
          clipPath: 'circle(150% at 50% 50%)',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
        scrollTriggerInstance = tween.scrollTrigger;
      })
    );

    return () => {
      cancelled = true;
      scrollTriggerInstance?.kill();
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
