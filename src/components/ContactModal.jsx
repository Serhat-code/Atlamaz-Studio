import { useEffect } from 'react';
import styles from '../styles/ContactModal.module.css';

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Démarrer un projet">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Fermer">✕</button>

        <h2 className={styles.title}>Démarrer votre projet</h2>
        <p className={styles.subtitle}>Choisissez comment vous préférez qu'on échange.</p>

        <div className={styles.options}>
          {CALENDLY_URL && (
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.option}
            >
              <div className={styles.optionIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div>
                <strong>Réserver un appel</strong>
                <span>30 min offertes · Réponse immédiate</span>
              </div>
            </a>
          )}

          <a
            href="/#contact"
            onClick={onClose}
            className={styles.option}
          >
            <div className={styles.optionIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <strong>Envoyer un message</strong>
              <span>Réponse sous 24h · À votre rythme</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
