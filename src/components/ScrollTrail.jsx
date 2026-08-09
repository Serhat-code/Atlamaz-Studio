import { useEffect, useRef } from 'react';
import styles from '../styles/ScrollTrail.module.css';

export default function ScrollTrail({ containerRef }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    const container = containerRef.current;
    if (!svg || !path || !container) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Métriques mises en cache : elles ne sont relues que dans measure(),
    // jamais pendant le scroll — sinon chaque événement force un reflow.
    let trailLen = 0;
    let containerTop = 0;
    let scrollRange = 1;
    let builtHeight = 0;
    let builtWidth = 0;

    let target = 0;   // progression visée (0 → 1)
    let current = 0;  // progression affichée, rattrape `target` en douceur
    let rafId = 0;
    let measureId = 0;

    // Ondulation tous les `step` px. Pas plus large sur mobile : moins de
    // segments de courbe à rastériser pour une amplitude visuellement identique.
    function buildPath(h) {
      const step = window.innerWidth < 720 ? 420 : 280;
      let d = 'M 60 40 ';
      let y = 40;
      let dir = 1;
      while (y < h - 40) {
        const ny = Math.min(y + step, h - 40);
        d += `Q ${dir > 0 ? 92 : 28} ${y + (ny - y) / 2}, 60 ${ny} `;
        y = ny;
        dir *= -1;
      }
      return d;
    }

    function measure() {
      const h = Math.round(container.scrollHeight);
      const w = window.innerWidth;

      // getTotalLength() sur un tracé de la hauteur du document coûte cher :
      // on ne reconstruit que si la géométrie a réellement changé. Sur mobile,
      // la barre d'URL qui se replie déclenche des resize sans changer la largeur.
      if (h !== builtHeight || w !== builtWidth) {
        builtHeight = h;
        builtWidth = w;
        svg.setAttribute('height', h);
        svg.setAttribute('viewBox', `0 0 120 ${h}`);
        path.setAttribute('d', buildPath(h));
        trailLen = path.getTotalLength();
        path.style.strokeDasharray = String(trailLen);
      }

      containerTop = container.getBoundingClientRect().top + window.scrollY;
      scrollRange = Math.max(1, h - window.innerHeight);
    }

    function draw(p) {
      path.style.strokeDashoffset = String(trailLen * (1 - p));
    }

    function readTarget() {
      target = Math.min(Math.max((window.scrollY - containerTop) / scrollRange, 0), 1);
    }

    function tick() {
      rafId = 0;
      const delta = target - current;
      if (Math.abs(delta) < 0.0004) {
        current = target;
        draw(current);
        return;
      }
      // Lissage exponentiel : le trait rattrape le scroll au lieu de sauter
      // d'un événement à l'autre — c'est ce qui donne la sensation de fluidité.
      current += delta * 0.16;
      draw(current);
      schedule();
    }

    function schedule() {
      if (!rafId) rafId = requestAnimationFrame(tick);
    }

    function onScroll() {
      readTarget();
      if (reduceMotion) {
        current = target;
        draw(current);
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
        draw(current);
      }, 150);
    }

    measure();
    readTarget();
    current = target;
    draw(current);

    const resizeObserver = new ResizeObserver(remeasure);
    resizeObserver.observe(container);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', remeasure, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(measureId);
      resizeObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', remeasure);
    };
  }, [containerRef]);

  return (
    <svg ref={svgRef} className={styles.trail} width="120" aria-hidden="true">
      <defs>
        <linearGradient id="atlamazTrailGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F5BFF" />
          <stop offset="100%" stopColor="#8D85FF" />
        </linearGradient>
        <filter id="atlamazTrailGlow" x="-300%" y="-20%" width="700%" height="140%">
          <feGaussianBlur stdDeviation="3.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path ref={pathRef} className={styles.path} filter="url(#atlamazTrailGlow)" />
    </svg>
  );
}
