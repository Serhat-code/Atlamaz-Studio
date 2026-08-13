import { useEffect, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CookieBanner.module.css';

const UMAMI_SCRIPT = 'https://cloud.umami.is/script.js';
const UMAMI_ID     = '6f36d276-5504-4d54-8365-80b3a7a22b8d';
const CONSENT_KEY  = 'cookie_consent';

// Le consentement vit dans le localStorage, inaccessible au moment du pré-rendu.
// On l'expose en « external store » pour que le HTML statique soit produit comme
// si la réponse était déjà donnée — la bannière n'y figure donc pas — puis que
// le vrai état prenne le relais à l'hydratation, sans divergence.
const listeners = new Set();

function subscribeConsent(onChange) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

const readConsent = () => localStorage.getItem(CONSENT_KEY);
const readConsentOnServer = () => 'accepted';

function writeConsent(value) {
  localStorage.setItem(CONSENT_KEY, value);
  listeners.forEach((notify) => notify());
}

function loadUmami() {
  if (document.querySelector(`script[data-website-id="${UMAMI_ID}"]`)) return;
  const script = document.createElement('script');
  script.defer = true;
  script.src   = UMAMI_SCRIPT;
  script.setAttribute('data-website-id', UMAMI_ID);
  document.head.appendChild(script);
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    readConsentOnServer,
  );

  useEffect(() => {
    if (consent === 'accepted') loadUmami();
  }, [consent]);

  // Umami est chargé par l'effet ci-dessus dès que le consentement passe à
  // « accepted » — inutile de l'appeler ici en plus.
  const handleAccept = () => writeConsent('accepted');
  const handleRefuse = () => writeConsent('refused');

  // Seul un visiteur n'ayant jamais répondu voit la bannière.
  if (consent) return null;

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
