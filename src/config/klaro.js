// ============================================================
// ATLAMAZ STUDIO — Klaro Cookie Consent Configuration
// Conforme CNIL : bouton Refuser aussi visible qu'Accepter
// Documentation : https://heyklaro.com/docs/
// ============================================================

window.klaroConfig = {
  // Langue par défaut
  lang: 'fr',

  // Position du bandeau
  position: 'bottom',

  // Toujours afficher le bandeau (pas de consent implicite)
  noAutoLoad: false,

  // Pas d'acceptation implicite au scroll
  acceptAll: true,

  // Bouton de refus aussi visible qu'accepter (conformité CNIL)
  hideDeclineAll: false,

  // Afficher le lien vers la politique de confidentialité
  privacyPolicy: '/politique-confidentialite',

  // Délai avant affichage (ms)
  cookieExpiresAfterDays: 365,

  // Traductions
  translations: {
    fr: {
      consentModal: {
        title: 'Vos préférences de confidentialité',
        description:
          'Ce site utilise des outils de mesure d\'audience anonymes. Aucune donnée personnelle n\'est partagée avec des tiers.',
      },
      acceptAll: 'Tout accepter',
      declineAll: 'Tout refuser',
      acceptSelected: 'Accepter la sélection',
      close: 'Fermer',
      save: 'Enregistrer',
    },
    en: {
      consentModal: {
        title: 'Your privacy preferences',
        description:
          'This website uses anonymous analytics tools. No personal data is shared with third parties.',
      },
      acceptAll: 'Accept all',
      declineAll: 'Decline all',
      acceptSelected: 'Accept selection',
      close: 'Close',
      save: 'Save',
    },
  },

  // Services soumis au consentement
  services: [
    {
      name: 'umami',
      title: 'Umami Analytics',
      description: 'Outil d\'analyse d\'audience anonyme, sans cookies, sans données personnelles.',
      required: false,
      default: false, // off par défaut (CNIL)
      purposes: ['analytics'],
      cookies: [],
      onAccept: `
        // Umami est activé automatiquement via le script dans index.html
        // Aucune action supplémentaire requise
      `,
      onDecline: `
        // Désactiver Umami si refusé
        if (window.umami) { window.umami.disabled = true; }
      `,
    },
  ],
};
