// ============================================================
// ATLAMAZ STUDIO — Textes français
// ============================================================

export const fr = {
  // ── Navbar ──────────────────────────────────────────────
  navbar: {
    logo: 'ATLAMAZ STUDIO',
    links: [
      { label: 'Services',     href: '#packs',    isAnchor: true },
      { label: 'Réalisations', href: '/realisations', isAnchor: false },
      { label: 'Process',      href: '#process',  isAnchor: true },
      { label: 'Tarifs',       href: '#packs',    isAnchor: true },
    ],
    cta: 'Démarrer un projet',
    ctaHref: '#contact',
    langSwitch: 'EN',
  },

  // ── Hero ─────────────────────────────────────────────────
  hero: {
    badge:       'Disponible pour nouveaux projets',
    eyebrow:     'Studio de création web · Lyon',
    titleLight:  'Des sites web qui',
    titleStrong: 'convertissent vraiment.',
    subtitle:    'Des sites performants, rapides et pensés pour convertir — livrés clé en main, sans surprise.',
    ctaPrimary:   'Voir les packs',
    ctaPrimaryHref: '#packs',
    ctaSecondary: 'Demander un devis',
    ctaSecondaryHref: '#contact',
  },

  // ── Stats ────────────────────────────────────────────────
  stats: [
    { value: '48h',  label: 'Délai de réponse' },
    { value: '100%', label: 'Responsive & rapide' },
    { value: '+80',  label: 'Score PageSpeed garanti' },
    { value: '3',    label: 'Révisions incluses' },
  ],

  // ── Packs ────────────────────────────────────────────────
  packs: {
    label:       'Services & Tarifs',
    title:       'Des packs',
    titleStrong: 'clairs et transparents.',
    subtitle:    'Tout compris. Pas de surprise. Livré clé en main.',
    ctaCard:        'Choisir ce pack',
    ctaCardPopular: 'Choisir ce pack',
    ctaContact:     'Nous contacter',

    rows: [
      {
        label: 'Création de site',
        cards: [
          {
            id: 'landing',
            name: 'Landing Page',
            price: '490€',
            delivery: 'Livraison 5 jours',
            badge: null,
            badgeType: null,
            featured: false,
            stripeKey: 'landing',
            features: [
              'Design sur mesure',
              'Responsive mobile',
              'Formulaire de contact',
              'SEO de base',
              'Score PageSpeed +80',
              'Hébergement 1 an inclus',
              '3 révisions incluses',
            ],
          },
          {
            id: 'vitrine',
            name: 'Site Vitrine',
            price: '990€',
            delivery: 'Livraison 10 jours',
            badge: 'Populaire',
            badgeType: 'popular',
            featured: true,
            stripeKey: 'vitrine',
            features: [
              "Jusqu'à 5 pages",
              'Design sur mesure',
              'Responsive mobile',
              'SEO complet + sitemap',
              'Analytics installé',
              'Mentions légales & RGPD',
              'Hébergement 1 an inclus',
              '3 révisions incluses',
            ],
          },
          {
            id: 'boutique',
            name: 'Boutique en ligne',
            price: '1 990€',
            delivery: 'Livraison 21 jours',
            badge: null,
            badgeType: null,
            featured: false,
            stripeKey: 'boutique',
            features: [
              "Jusqu'à 20 produits",
              'Paiement Stripe intégré',
              'Gestion des commandes',
              'Fiches produits optimisées',
              'SEO e-commerce',
              '3 révisions incluses',
            ],
          },
        ],
      },
      {
        label: 'Packs spéciaux',
        cards: [
          {
            id: 'refonte',
            name: 'Pack Refonte',
            price: '790€',
            delivery: 'Livraison 10 jours',
            badge: 'Très demandé',
            badgeType: 'tag',
            featured: false,
            stripeKey: 'refonte',
            features: [
              "Audit de l'existant offert",
              'Nouveau design complet',
              'Migration du contenu',
              'SEO conservé',
              '3 révisions incluses',
            ],
          },
          {
            id: 'restaurant',
            name: 'Pack Restaurant',
            price: '790€',
            delivery: 'Livraison 7 jours',
            badge: 'Local & restauration',
            badgeType: 'tag',
            featured: false,
            stripeKey: 'restaurant',
            features: [
              'Menu en ligne PDF ou dynamique',
              'Système de réservation',
              'Galerie photos',
              'Google Maps intégré',
              'Fiche Google My Business',
              '3 révisions incluses',
            ],
          },
          {
            id: 'blog-seo',
            name: 'Pack Blog & SEO',
            price: '1 290€',
            delivery: 'Livraison 14 jours',
            badge: 'Visibilité Google',
            badgeType: 'tag',
            featured: false,
            stripeKey: 'blogSeo',
            features: [
              'Site vitrine 5 pages',
              'Blog intégré',
              'SEO technique complet',
              'Schema.org configuré',
              'Search Console + Analytics',
              '3 révisions incluses',
            ],
          },
        ],
      },
      {
        label: 'Application mobile',
        // Header spécial pour cette rangée
        sectionTitle:    'Votre business dans la poche de vos clients.',
        sectionSubtitle: 'Applications iOS & Android avec React Native + Expo.',
        cards: [
          {
            id: 'mobile-starter',
            name: 'Mobile Starter',
            price: '1 200€',
            delivery: 'Livraison 14 jours',
            badge: 'Android',
            badgeType: 'tag',
            featured: false,
            stripeKey: 'mobileStarter',
            features: [
              'Application Android',
              '3 à 5 écrans',
              'UI sur mesure',
              'Formulaire / contact',
              'Intégration API simple',
              'Publication Play Store incluse',
              '3 révisions incluses',
            ],
          },
          {
            id: 'mobile-business',
            name: 'Mobile Business',
            price: '4 500€',
            delivery: 'Livraison 30 jours',
            badge: 'Populaire',
            badgeType: 'popular',
            featured: true,
            stripeKey: 'mobileBusiness',
            features: [
              'iOS + Android',
              'Authentification utilisateur',
              'Backend connecté (Supabase)',
              'Notifications push',
              'Design personnalisé',
              'Publication App Store + Play Store',
              '3 révisions incluses',
            ],
          },
          {
            id: 'mobile-premium',
            name: 'Mobile Premium',
            price: 'Sur devis',
            delivery: 'Délai selon périmètre',
            badge: 'Sur mesure',
            badgeType: 'tag',
            featured: false,
            stripeKey: null, // → formulaire contact
            features: [
              'Application complexe sur mesure',
              'Paiement in-app (Stripe)',
              'Temps réel / géolocalisation / chat',
              'Dashboard admin',
              'Maintenance incluse',
              'Analytics & optimisation performance',
              'Publication stores + suivi',
            ],
          },
        ],
        // Options à la carte affichées sous les cards
        options: [
          { label: 'Maintenance mensuelle', price: '+99€/mois' },
          { label: 'Ajout App Store iOS',   price: '+300€' },
          { label: 'Dashboard admin',        price: '+500€' },
          { label: 'Design premium',         price: '+700€' },
          { label: 'Système de paiement',    price: '+800€' },
        ],
        optionsLabel: 'Options à la carte',
      },
      {
        label: 'Abonnement & urgence',
        cards: [
          {
            id: 'maintenance',
            name: 'Pack Maintenance',
            price: '49€/mois',
            delivery: 'Sans engagement',
            badge: 'Revenu récurrent',
            badgeType: 'tag',
            featured: false,
            stripeKey: 'maintenance',
            features: [
              'Backup hebdomadaire',
              'Mises à jour de sécurité',
              '1h de modifications/mois',
              'Monitoring uptime 24/7',
              'Rapport mensuel',
            ],
          },
          {
            id: 'carte-visite',
            name: 'Carte de visite digitale',
            price: '190€',
            delivery: 'Livraison 48h',
            badge: 'Simple & rapide',
            badgeType: 'tag',
            featured: false,
            stripeKey: 'carteVisite',
            features: [
              'Design sur mesure',
              'QR code généré',
              'Liens réseaux sociaux',
              'Formulaire de contact',
              '1 révision incluse',
            ],
          },
          {
            id: 'urgence',
            name: 'Pack Urgence',
            price: '+30% du pack',
            delivery: 'Livraison 48–72h',
            badge: 'Livraison express',
            badgeType: 'amber',
            featured: false,
            stripeKey: null, // → formulaire contact
            features: [
              'Priorité absolue',
              'Livraison en 48 à 72h',
              'Suivi en temps réel',
              'Disponibilité weekend',
            ],
          },
        ],
      },
    ],

    custom: {
      title:    'Projet sur mesure',
      subtitle: 'Application web, e-commerce complexe, fonctionnalités avancées en React · Devis gratuit sous 24h',
      cta:      'Demander un devis',
    },
  },

  // ── Process ──────────────────────────────────────────────
  process: {
    label:       'Process',
    title:       'Simple.',
    titleStrong: 'Rapide. Efficace.',
    subtitle:    "4 étapes pour passer de l'idée au site en ligne.",
    steps: [
      {
        number:      '01',
        title:       'Échange & brief',
        description: "Un appel de 30 min pour comprendre vos besoins, votre cible et vos objectifs.",
      },
      {
        number:      '02',
        title:       'Devis & acompte',
        description: "Devis détaillé sous 24h. 50% d'acompte pour démarrer la création.",
      },
      {
        number:      '03',
        title:       'Design & dev',
        description: "Maquette validée ensemble, puis développement avec points d'étape réguliers.",
      },
      {
        number:      '04',
        title:       'Livraison',
        description: "Mise en ligne, formation à la gestion du contenu, solde de la facture.",
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────
  contact: {
    label:    'Contact',
    title:    'Parlons de',
    titleStrong: 'votre projet.',
    subtitle: 'Réponse garantie sous 48h. Premier échange offert.',

    fields: {
      prenom:       { label: 'Prénom', placeholder: 'Jean' },
      nom:          { label: 'Nom', placeholder: 'Dupont' },
      email:        { label: 'Email', placeholder: 'jean@exemple.fr' },
      telephone:    { label: 'Téléphone', placeholder: '+33 6 00 00 00 00' },
      typeProjet:   {
        label: 'Type de projet',
        placeholder: 'Choisir...',
        options: [
          { value: 'landing',     label: 'Landing page' },
          { value: 'vitrine',     label: 'Site vitrine' },
          { value: 'boutique',    label: 'Boutique en ligne' },
          { value: 'refonte',     label: 'Refonte' },
          { value: 'maintenance', label: 'Maintenance' },
          { value: 'sur-mesure',  label: 'Sur mesure' },
          { value: 'autre',       label: 'Autre' },
        ],
      },
      budget: {
        label: 'Budget estimé',
        placeholder: 'Choisir...',
        options: [
          { value: 'moins-500',  label: '< 500€' },
          { value: '500-1000',   label: '500 – 1 000€' },
          { value: '1000-2000',  label: '1 000 – 2 000€' },
          { value: 'plus-2000',  label: '2 000€ +' },
          { value: 'a-definir',  label: 'À définir' },
        ],
      },
      message:      { label: 'Message', placeholder: 'Décrivez votre projet en quelques lignes...' },
      rgpd:         'J\'accepte que mes données soient utilisées pour traiter ma demande',
    },

    submit:       'Envoyer le message',
    submitting:   'Envoi en cours…',
    successTitle: 'Message envoyé !',
    successText:  'Merci pour votre message. Je vous réponds sous 48h.',
    errorText:    'Une erreur s\'est produite. Veuillez réessayer ou m\'écrire directement à atlamazstudio@gmail.com',
  },

  // ── CTA ──────────────────────────────────────────────────
  cta: {
    titleLight:   'Votre projet mérite',
    titleStrong:  'un site à sa hauteur.',
    subtitle:     'Réponse sous 48h. Premier échange offert.',
    ctaPrimary:   'Démarrer un projet',
    ctaPrimaryHref: '#contact',
    ctaSecondary: 'atlamazstudio@gmail.com',
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    copy:  'ATLAMAZ STUDIO © 2026',
    email: 'atlamazstudio@gmail.com',
    links: [
      { label: 'Mentions légales',           href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
      { label: 'LinkedIn',                   href: 'https://www.linkedin.com/in/serhat-atlamaz-2a9359411/', external: true },
    ],
  },

  // ── Page Réalisations ─────────────────────────────────────
  realisations: {
    meta: {
      title:       'Réalisations — Atlamaz Studio',
      description: 'Découvrez les sites web créés par Atlamaz Studio : landing pages, sites vitrines, boutiques en ligne.',
    },
    hero: {
      eyebrow:  'Portfolio',
      title:    'Nos réalisations',
      subtitle: 'Des sites qui parlent pour nous.',
    },
    filters: {
      label: 'Filtrer par type',
    },
    card: {
      cta: 'Voir le projet',
    },
    empty: 'Aucune réalisation dans cette catégorie pour l\'instant.',
  },

  // ── Page Détail réalisation ───────────────────────────────
  realisationDetail: {
    breadcrumb: {
      home:         'Accueil',
      realisations: 'Réalisations',
    },
    sections: {
      context:      'Contexte du projet',
      technologies: 'Technologies utilisées',
      results:      'Résultats',
      cta:          'Un projet similaire ?',
    },
    resultsLabels: {
      pageSpeed: 'Score PageSpeed',
      delivery:  'Délai de livraison',
      revisions: 'Révisions effectuées',
    },
    ctaText:   'Parlons de votre projet, je vous réponds sous 48h.',
    ctaButton: 'Démarrer un projet',
    backBtn:   '← Retour aux réalisations',
    visitBtn:  'Visiter le site',
  },

  // ── Page Merci ────────────────────────────────────────────
  merci: {
    meta: {
      title: 'Message envoyé — Atlamaz Studio',
    },
    title:    'Merci pour votre message !',
    subtitle: 'Je vous réponds sous 48h. En attendant, n\'hésitez pas à consulter mes réalisations.',
    backBtn:  'Retour à l\'accueil',
    realisationsBtn: 'Voir les réalisations',
  },
};
