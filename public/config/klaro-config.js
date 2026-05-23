// ============================================================
// ATLAMAZ STUDIO — Klaro Cookie Consent Configuration
// Fichier servi statiquement depuis /public/config/klaro-config.js
// Documentation : https://heyklaro.com/docs/
// ============================================================

window.klaroConfig = {
  lang: 'fr',
  position: 'bottom',
  noAutoLoad: false,
  acceptAll: true,

  // Bouton Refuser aussi visible qu'Accepter (conformité CNIL)
  hideDeclineAll: false,

  privacyPolicy: '/politique-confidentialite',
  cookieExpiresAfterDays: 365,

  translations: {
    fr: {
      consentModal: {
        title: 'Vos préférences de confidentialité',
        description:
          "Ce site utilise des outils de mesure d'audience anonymes (Umami). Aucune donnée personnelle n'est partagée avec des tiers.",
      },
      acceptAll: 'Tout accepter',
      declineAll: 'Tout refuser',
      acceptSelected: 'Accepter la sélection',
      close: 'Fermer',
      save: 'Enregistrer',
      purposes: {
        analytics: 'Statistiques',
      },
    },
    en: {
      consentModal: {
        title: 'Your privacy preferences',
        description:
          'This website uses anonymous analytics tools (Umami). No personal data is shared with third parties.',
      },
      acceptAll: 'Accept all',
      declineAll: 'Decline all',
      acceptSelected: 'Accept selection',
      close: 'Close',
      save: 'Save',
      purposes: {
        analytics: 'Analytics',
      },
    },
  },

  services: [
    {
      name: 'umami',
      title: 'Umami Analytics',
      description:
        "Outil d'analyse d'audience open source, sans cookies, sans données personnelles identifiables.",
      required: false,
      default: false, // Off par défaut — conformité CNIL opt-in
      purposes: ['analytics'],
      cookies: [],
    },
  ],
};
