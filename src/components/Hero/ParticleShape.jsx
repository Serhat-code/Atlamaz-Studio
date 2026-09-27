import { useEffect, useRef } from 'react';
import { createParticleHero } from './particleHero';

// Une seule forme en particules 3D, pour le hero des pages services.
// shape : 'web' | 'mobile' | 'saas' | 'ia' | 'atlamaz'
export default function ParticleShape({ shape, className = '', style }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const api = createParticleHero(canvasRef.current, { shape });
    return () => api.destroy();
  }, [shape]);

  return (
    <div className={`particle-shape ${className}`} style={{ position: 'relative', ...style }} aria-hidden="true">
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%', touchAction: 'pan-y' }}
      />
    </div>
  );
}
