import { useEffect, useRef } from 'react';
import styles from '../styles/ScrollTrail.module.css';

export default function ScrollTrail({ containerRef }) {
  const clipRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const clip = clipRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    const container = containerRef.current;
    if (!clip || !svg || !path || !container) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Métriques mises en cache : elles ne sont relues que dans measure(),
    // jamais pendant le scroll — sinon chaque événement force un reflow.
    let height = 0;
    let builtWidth = 0;
    let containerTop = 0;
    let scrollRange = 1;

    let target = 0;   // progression visée (0 → 1)
    let current = 0;  // progression affichée, rattrape `target` en douceur
    let rafId = 0;
    let lastTs = 0;
    let measureId = 0;
    let lastReveal = -1;

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

      // Reconstruire le tracé coûte cher : on ne le fait que si la géométrie a
      // réellement changé. Sur mobile, la barre d'URL qui se replie déclenche
      // des resize sans changer la largeur.
      if (h !== height || w !== builtWidth) {
        height = h;
        builtWidth = w;
        clip.style.height = `${h}px`;
        svg.setAttribute('height', h);
        svg.setAttribute('viewBox', `0 0 120 ${h}`);
        path.setAttribute('d', buildPath(h));
        lastReveal = -1;
      }

      containerTop = container.getBoundingClientRect().top + window.scrollY;
      scrollRange = Math.max(1, h - window.innerHeight);
    }

    // Le tracé n'est peint qu'une seule fois. La progression fait glisser la
    // fenêtre de découpe (translation du conteneur en overflow:hidden,
    // compensée à l'identique sur le SVG) : deux transforms composées, zéro
    // repeint. L'ancien stroke-dashoffset obligeait au contraire le navigateur
    // à re-rastériser un tracé long comme le document entier à chaque frame —
    // c'était la source des saccades sur téléphone.
    function draw(p) {
      const reveal = Math.round(p * height);
      if (reveal === lastReveal) return;
      lastReveal = reveal;
      const hidden = height - reveal;
      clip.style.transform = `translate3d(0, ${-hidden}px, 0)`;
      svg.style.transform = `translate3d(0, ${hidden}px, 0)`;
    }

    function readTarget() {
      target = Math.min(Math.max((window.scrollY - containerTop) / scrollRange, 0), 1);
    }

    function tick(ts) {
      rafId = 0;
      const dt = lastTs ? Math.min((ts - lastTs) / 1000, 0.05) : 1 / 60;
      lastTs = ts;

      const delta = target - current;
      // On s'arrête dès qu'il reste moins d'un demi-pixel de trajet.
      if (Math.abs(delta) * height < 0.5) {
        current = target;
        lastTs = 0;
        draw(current);
        return;
      }
      // Lissage exponentiel indépendant du framerate : le trait rattrape le
      // scroll au lieu de sauter d'un événement à l'autre — c'est ce qui donne
      // la sensation de fluidité, y compris pendant l'inertie mobile où les
      // événements de scroll arrivent moins souvent que les frames.
      current += delta * (1 - Math.exp(-10 * dt));
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
    <div ref={clipRef} className={styles.trail} aria-hidden="true">
      <svg ref={svgRef} className={styles.svg} width="120">
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
    </div>
  );
}
