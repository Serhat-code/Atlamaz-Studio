import { useEffect, useRef } from 'react';
import styles from '../styles/ImageLightbox.module.css';

/**
 * Visionneuse plein écran des captures d'une étude de cas.
 * `index` null = fermée. Flèches ←/→ pour naviguer, Échap pour fermer ;
 * le focus revient à la vignette d'origine à la fermeture.
 */
export default function ImageLightbox({ images, index, onChange, onClose }) {
  const closeRef = useRef(null);
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return undefined;
    const opener = document.activeElement;
    closeRef.current?.focus();

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, [isOpen]);

  // Séparé de l'effet d'ouverture : `index` change à chaque navigation, et
  // relancer l'effet ci-dessus ferait perdre la vignette d'origine.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, index, images.length, onChange, onClose]);

  if (!isOpen) return null;
  const current = images[index];

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Capture agrandie"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={styles.bar}>
        <span className={styles.caption}>
          {current.alt}
          <span className={styles.counter}> — {index + 1} / {images.length}</span>
        </span>
        <span className={styles.nav}>
          <button type="button" className={styles.btn} onClick={() => onChange((index - 1 + images.length) % images.length)} aria-label="Capture précédente">←</button>
          <button type="button" className={styles.btn} onClick={() => onChange((index + 1) % images.length)} aria-label="Capture suivante">→</button>
          <button type="button" className={styles.btn} onClick={onClose} ref={closeRef}>Fermer</button>
        </span>
      </div>
      <img src={current.src} alt={current.alt} className={styles.image} />
    </div>
  );
}
