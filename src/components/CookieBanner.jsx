import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CookieBanner.module.css';

const UMAMI_SCRIPT = 'https://cloud.umami.is/script.js';
const UMAMI_ID     = '6f36d276-5504-4d54-8365-80b3a7a22b8d';
const CONSENT_KEY  = 'cookie_consent';

function loadUmami() {
  if (document.querySelector(`script[data-website-id="${UMAMI_ID}"]`)) return;
  const script = document.createElement('script');
  script.defer = true;
  script.src   = UMAMI_SCRIPT;
  script.setAttribute('data-website-id', UMAMI_ID);
  document.head.appendChild(script);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem(CONSENT_KEY));

  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY) === 'accepted') {
      loadUmami();
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    loadUmami();
    setVisible(false);
  }

  function handleRefuse() {
    localStorage.setItem(CONSENT_KEY, 'refused');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Gestion des cookies">
      <div className={styles.inner}>
        <p className={styles.text}>
          Nous utilisons Umami Analytics pour mesurer l'audience du site, sans cookies ni données personnelles.{' '}
          <Link to="/politique-confidentialite" className={styles.policyLink}>
            Politique de confidentialité
          </Link>
        </p>
        <div className={styles.buttons}>
          <button onClick={handleRefuse} className={styles.btnRefuse}>
            Tout refuser
          </button>
          <button onClick={handleAccept} className={styles.btnAccept}>
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
