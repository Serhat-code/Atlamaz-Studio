import { useRef } from 'react';

// Piste la position du curseur sur un élément et expose --hx/--hy
// pour alimenter un spotlight radial en CSS (cards services/packs).
export function useSpotlight() {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--hx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--hy', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return { ref, onMouseMove };
}
