import { lazy, Suspense, useState } from 'react';
import styles from '../styles/Hero3D.module.css';

const FloatingSceneA = lazy(() => import('./three/FloatingSceneA'));

function StaticFallback() {
  return (
    <div className={styles.fallback} aria-hidden="true">
      <span className={styles.fallbackGlyph}>A</span>
    </div>
  );
}

function canRenderInitial3D() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isSmallScreen = window.innerWidth < 900;
  return !prefersReduced && !isSmallScreen;
}

export default function Hero3D() {
  // Pas de WebGL sur mobile/tablette ni si l'utilisateur préfère moins d'animations —
  // on évite de télécharger Three.js pour rien et de plomber les perfs sur petit écran.
  const [canRender3D] = useState(canRenderInitial3D);

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.glow} />
      {canRender3D ? (
        <Suspense fallback={<StaticFallback />}>
          <FloatingSceneA />
        </Suspense>
      ) : (
        <StaticFallback />
      )}
    </div>
  );
}
