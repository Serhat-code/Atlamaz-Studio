import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/LinkListModal.module.css';

// Carte modale générique (réseaux sociaux, liens légaux…) : fond clair,
// coins arrondis, icône + libellé + badge vérifié — reprend le langage
// visuel de ContactModal. Reste montée en permanence et s'anime via
// opacity/visibility : évite tout minutage JS pour la fermeture, qui
// reste ainsi aussi fluide que l'ouverture, et `inert` neutralise le
// contenu (focus, lecteurs d'écran) tant que la carte est fermée.
export default function LinkListModal({ isOpen, onClose, title, items }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <div
        className={`${styles.card} ${isOpen ? styles.cardVisible : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fermer">✕</button>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.list}>
          {items.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.row}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.label}>{item.label}</span>
                {item.verified && <VerifiedInline />}
              </a>
            ) : (
              <Link key={item.label} to={item.href} className={styles.row} onClick={onClose}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.label}>{item.label}</span>
                {item.verified && <VerifiedInline />}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function VerifiedInline() {
  return (
    <svg width={16} height={16} viewBox="0 0 22 22" className={styles.badge} aria-hidden="true">
      <circle cx="11" cy="11" r="10" fill="#3B82F6" />
      <path d="M6.5 11.3l2.7 2.7 6-6.4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
