import { useEffect, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CookieBanner.module.css';
import {
  readConsent,
  readConsentOnServer,
  subscribeConsent,
  writeConsent,
} from '../lib/consent';
import { clearAnalyticsCookies, loadTrackers, trackersLoaded } from '../lib/trackers';

export default function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    readConsentOnServer,
  );

  useEffect(() => {
    if (consent === 'accepted') loadTrackers();
  }, [consent]);

  // Les traceurs sont chargés par l'effet ci-dessus dès que le consentement
  // passe à « accepted » — inutile de les appeler ici en plus.
  const handleAccept = () => writeConsent('accepted');

  // Retrait d'un consentement donné plus tôt (via « Gérer mes cookies ») :
  // un script déjà exécuté ne se décharge pas, on efface les cookies GA puis
  // on recharge la page pour repartir sans aucun traceur.
  const handleRefuse = () => {
    const hadTrackers = trackersLoaded();
    writeConsent('refused');
    clearAnalyticsCookies();
    if (hadTrackers) window.location.reload();
  };

  // Seul un visiteur n'ayant jamais répondu voit la bannière.
  if (consent) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Gestion des cookies">
      <div className={styles.inner}>
        <p className={styles.text}>
          Avec votre accord, nous mesurons l'audience du site avec Google Analytics (cookies) et Umami (sans cookie). Aucune publicité, aucun suivi publicitaire.{' '}
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
