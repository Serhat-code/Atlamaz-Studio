import { useEffect, useRef } from 'react';
import styles from '../styles/MaskTransition.module.css';

export default function MaskTransition({ t }) {
  const { maskTransition } = t;
  const sectionRef = useRef(null);
  const discRef = useRef(null);
  const revealRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const disc = discRef.current;
    const reveal = revealRef.current;
    const inner = innerRef.current;
    if (!section || !disc || !reveal || !inner) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Toutes les métriques sont relues dans measure() uniquement : pendant le
    // scroll il ne reste plus une seule lecture de layout, donc plus aucun
    // reflow forcé.
    let sectionTop = 0;
    let range = 1;
    let coverScale = 1;   // échelle à laquelle le disque recouvre le viewport
    let fadeStart = 0.2;
    let fadeEnd = 0.42;

    let target = 0;   // progression visée (0 → 1)
    let current = 0;  // progression affichée, rattrape `target` en douceur
    let rafId = 0;
    let lastTs = 0;
    let measureId = 0;
    let active = true;
    let lastScale = -1;
    let lastFade = -1;

    function measure() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const rect = section.getBoundingClientRect();

      sectionTop = rect.top + window.scrollY;
      // Équivalent de start:'top top' → end:'bottom bottom' : la progression
      // court sur la hauteur de section qui dépasse le viewport.
      range = Math.max(1, rect.height - vh);

      // Le disque fait 100vmax de côté ; on lit sa taille rendue plutôt que de
      // recalculer vmax à la main, car svh/lvh divergent selon les mobiles.
      // Il doit atteindre la diagonale du viewport pour le recouvrir.
      const discSize = disc.offsetWidth || Math.max(vw, vh);
      coverScale = Math.hypot(vw, vh) / discSize;

      // Le titre n'apparaît qu'une fois le disque assez large pour le contenir :
      // le fondu remplace alors le découpage sans qu'on puisse voir la
      // différence, et reste une propriété composée (aucun repeint).
      const box = inner.getBoundingClientRect();
      const needed = Math.hypot(box.width, box.height) / discSize;
      fadeStart = Math.min(Math.max((needed / (Math.SQRT2 * coverScale) - 0.01) / 1.49, 0.05), 0.6);
      fadeEnd = fadeStart + 0.22;
    }

    // Le rayon suit exactement l'ancienne courbe `circle(1% → 150%)`, mais via
    // un `scale` : le disque est une couche composée, le navigateur n'a plus à
    // re-peindre un calque plein écran (texte compris) à chaque frame.
    function apply(p) {
      const scale = Math.min((0.01 + 1.49 * p) * Math.SQRT2, 1.03) * coverScale;
      if (Math.abs(scale - lastScale) > 0.0002) {
        lastScale = scale;
        disc.style.transform = `scale(${scale.toFixed(4)})`;
      }

      const f = Math.min(Math.max((p - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      const opacity = f * f * (3 - 2 * f);
      if (Math.abs(opacity - lastFade) > 0.002) {
        lastFade = opacity;
        reveal.style.opacity = opacity.toFixed(3);
      }
    }

    function readTarget() {
      target = Math.min(Math.max((window.scrollY - sectionTop) / range, 0), 1);
    }

    function tick(ts) {
      rafId = 0;
      const dt = lastTs ? Math.min((ts - lastTs) / 1000, 0.05) : 1 / 60;
      lastTs = ts;

      const delta = target - current;
      if (Math.abs(delta) < 0.0004) {
        current = target;
        lastTs = 0;
        apply(current);
        return;
      }
      // Lissage exponentiel indépendant du framerate : le disque rattrape le
      // scroll au lieu de sauter d'un événement au suivant — c'est ce qui donne
      // la sensation de fluidité, y compris pendant l'inertie mobile où les
      // événements de scroll arrivent moins souvent que les frames.
      current += delta * (1 - Math.exp(-10 * dt));
      apply(current);
      schedule();
    }

    function schedule() {
      if (!rafId && active) rafId = requestAnimationFrame(tick);
    }

    function onScroll() {
      readTarget();
      if (reduceMotion) {
        current = target;
        apply(current);
        return;
      }
      schedule();
    }

    function remeasure() {
      clearTimeout(measureId);
      measureId = setTimeout(() => {
        measure();
        readTarget();
        current = target;
        apply(current);
      }, 150);
    }

    measure();
    readTarget();
    current = target;
    apply(current);

    // `will-change` n'est posé que quand la section approche : sinon on garde
    // en permanence une texture GPU de 100vmax de côté pour rien.
    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        disc.style.willChange = active ? 'transform' : 'auto';
        reveal.style.willChange = active ? 'opacity' : 'auto';
        if (active) {
          measure();
          readTarget();
          current = target;
          apply(current);
        } else {
          cancelAnimationFrame(rafId);
          rafId = 0;
          lastTs = 0;
        }
      },
      { rootMargin: '20% 0px' }
    );
    io.observe(section);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', remeasure, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(measureId);
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', remeasure);
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
        <div className={styles.disc} ref={discRef} />
        <div className={styles.reveal} ref={revealRef}>
          <div className={styles.inner} ref={innerRef}>
            <span className="section-label">{maskTransition.eyebrow}</span>
            <h2 className={styles.circleTitle}>{maskTransition.title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
