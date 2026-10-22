// Traceurs soumis au consentement : rien n'est chargé avant « Tout accepter ».
//
// Google Analytics (G-PYVGGX37JB) est déclenché par le conteneur GTM, pas par un
// gtag.js en dur dans index.html — sinon chaque page vue serait comptée deux fois.

const UMAMI_SCRIPT = 'https://cloud.umami.is/script.js';
const UMAMI_ID     = '6f36d276-5504-4d54-8365-80b3a7a22b8d';
const GTM_ID       = 'GTM-MZKZ9PLX';

// gtag() doit pousser l'objet `arguments` tel quel : GTM ignore les commandes
// « consent » poussées sous forme de tableau.
function gtag() {
  window.dataLayer.push(arguments);
}

export function loadUmami() {
  if (document.querySelector(`script[data-website-id="${UMAMI_ID}"]`)) return;
  const script = document.createElement('script');
  script.defer = true;
  script.src   = UMAMI_SCRIPT;
  script.setAttribute('data-website-id', UMAMI_ID);
  document.head.appendChild(script);
}

export function loadGoogleTagManager() {
  if (document.querySelector(`script[src*="${GTM_ID}"]`)) return;

  window.dataLayer = window.dataLayer || [];
  // Consent Mode v2 : tout est refusé par défaut, seule la mesure d'audience
  // est accordée. Les signaux publicitaires restent refusés : le bandeau ne
  // parle que de mesure d'audience.
  gtag('consent', 'default', {
    ad_storage:         'denied',
    ad_user_data:       'denied',
    ad_personalization: 'denied',
    analytics_storage:  'denied',
  });
  gtag('consent', 'update', { analytics_storage: 'granted' });

  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.src   = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

/** Vrai si GTM ou Umami a déjà été injecté dans la page. */
export function trackersLoaded() {
  return Boolean(
    document.querySelector(`script[src*="${GTM_ID}"], script[data-website-id="${UMAMI_ID}"]`),
  );
}

export function loadTrackers() {
  loadUmami();
  loadGoogleTagManager();
}

/**
 * Retrait du consentement : supprime les cookies Google Analytics (_ga, _ga_*)
 * posés sur le domaine courant et ses parents.
 */
export function clearAnalyticsCookies() {
  const names = document.cookie
    .split(';')
    .map((entry) => entry.split('=')[0].trim())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'));

  const parts   = window.location.hostname.split('.');
  const domains = parts.map((_, i) => parts.slice(i).join('.')).filter((d) => d.includes('.'));
  const expired = 'expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';

  names.forEach((name) => {
    document.cookie = `${name}=; ${expired}`;
    domains.forEach((domain) => {
      document.cookie = `${name}=; ${expired}; domain=.${domain}`;
    });
  });
}
