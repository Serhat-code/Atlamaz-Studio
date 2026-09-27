import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../ContactModal';
import { createParticleHero } from './particleHero';
import './Hero.css';

// Hero de l'accueil : nuage de particules qui passe en boucle du logo
// ΛTLΛMΛZ aux quatre métiers (web, mobile, SaaS, IA). Le moteur ne tourne
// que côté client ; au pré-rendu, la pill affiche la première étiquette.
export default function Hero({ t }) {
  const { hero } = t;
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const apiRef = useRef(null);
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const api = createParticleHero(canvasRef.current, { onChange: setActive });
    apiRef.current = api;
    return () => api.destroy();
  }, []);

  // Halo qui suit le curseur : variables CSS plutôt qu'un état React,
  // pour ne pas re-rendre le hero à chaque mouvement.
  const handlePointerMove = (e) => {
    const el = sectionRef.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <section className="ah" id="hero" ref={sectionRef} onPointerMove={handlePointerMove}>
      <div className="ah-grain" aria-hidden="true" />
      <div className="ah-spot" aria-hidden="true" />

      <div className="ah-inner">
        <div className="ah-stage">
          {/* key : remonte la pill à chaque forme pour rejouer son apparition */}
          <span className="ah-pill" key={active}>{hero.shapes[active]}</span>
          <canvas className="ah-canvas" ref={canvasRef} aria-hidden="true" />
          <div className="ah-steps">
            {hero.shapes.map((label, i) => (
              <button
                key={i}
                type="button"
                aria-label={label}
                aria-pressed={i === active}
                className={i === active ? 'is-active' : undefined}
                onClick={() => apiRef.current?.goTo(i)}
              />
            ))}
          </div>
        </div>

        <div className="ah-pitch">
          <h1>
            {hero.title} <span>{hero.titleMuted}</span>
          </h1>
          <div className="ah-ctas">
            <button type="button" className="ah-cta" onClick={() => setModalOpen(true)}>
              <span>{hero.ctaPrimary}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
            <Link className="ah-link" to={hero.ctaSecondaryHref}>{hero.ctaSecondary}</Link>
          </div>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
