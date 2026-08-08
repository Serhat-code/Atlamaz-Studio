import { useEffect, useRef } from 'react';
import styles from '../styles/ScrollTrail.module.css';

export default function ScrollTrail({ containerRef }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const trailLenRef = useRef(0);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    const container = containerRef.current;
    if (!svg || !path || !container) return;

    function buildTrail() {
      const h = container.scrollHeight;
      svg.setAttribute('height', h);
      svg.setAttribute('viewBox', `0 0 120 ${h}`);
      let d = 'M 60 40 ';
      let y = 40;
      const step = 280;
      let dir = 1;
      while (y < h - 40) {
        const ny = Math.min(y + step, h - 40);
        d += `Q ${dir > 0 ? 92 : 28} ${y + (ny - y) / 2}, 60 ${ny} `;
        y = ny;
        dir *= -1;
      }
      path.setAttribute('d', d);
      trailLenRef.current = path.getTotalLength();
      path.style.strokeDasharray = String(trailLenRef.current);
      path.style.strokeDashoffset = String(trailLenRef.current);
    }

    function updateTrail() {
      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const max = Math.max(1, container.scrollHeight - window.innerHeight);
      const p = Math.min(Math.max((window.scrollY - containerTop) / max, 0), 1);
      path.style.strokeDashoffset = String(trailLenRef.current * (1 - p));
    }

    buildTrail();
    updateTrail();

    const resizeObserver = new ResizeObserver(() => {
      buildTrail();
      updateTrail();
    });
    resizeObserver.observe(container);
    window.addEventListener('scroll', updateTrail, { passive: true });
    window.addEventListener('resize', updateTrail);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', updateTrail);
      window.removeEventListener('resize', updateTrail);
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
