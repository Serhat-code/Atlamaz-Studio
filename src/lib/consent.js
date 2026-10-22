// Consentement cookies — source unique partagée par la bannière et le footer.
//
// Le consentement vit dans le localStorage, inaccessible au moment du pré-rendu.
// On l'expose en « external store » pour que le HTML statique soit produit comme
// si la réponse était déjà donnée — la bannière n'y figure donc pas — puis que
// le vrai état prenne le relais à l'hydratation, sans divergence.

const CONSENT_KEY = 'cookie_consent';
const listeners   = new Set();

export function subscribeConsent(onChange) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

export const readConsent         = () => localStorage.getItem(CONSENT_KEY);
export const readConsentOnServer = () => 'accepted';

function notify() {
  listeners.forEach((listener) => listener());
}

export function writeConsent(value) {
  localStorage.setItem(CONSENT_KEY, value);
  notify();
}

/** Efface le choix : la bannière réapparaît pour une nouvelle réponse. */
export function resetConsent() {
  localStorage.removeItem(CONSENT_KEY);
  notify();
}
