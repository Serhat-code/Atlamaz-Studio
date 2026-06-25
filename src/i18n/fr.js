// ============================================================
// ATLAMAZ STUDIO — Textes français
// ============================================================

export const fr = {
  // ── Navbar ──────────────────────────────────────────────
  navbar: {
    logo: 'Atlamaz',
    links: [
      { label: 'Réalisations', href: '/realisations' },
      { label: 'Services',     href: '/tarifs' },
      { label: 'Studio',       href: '/studio' },
    ],
    cta: 'Contact',
    langSwitch: 'EN',
  },

  // ── Hero ─────────────────────────────────────────────────
  hero: {
    badge:        'Disponible pour de nouveaux projets',
    eyebrow:      'Studio web · Lyon, France',
    titleLight:   'Des sites web pensés pour',
    titleEm:      'la croissance',
    titleStrong:  'de votre activité.',
    subtitle:     'Des sites web rapides, visibles sur Google et conçus pour transformer les visiteurs en clients.',
    ctaPrimary:   'Réserver un appel',
    ctaSecondary: 'Voir les réalisations',
    ctaSecondaryHref: '/realisations',
  },

  // ── Stats ────────────────────────────────────────────────
  stats: [
    { value: '< 1 sem', label: 'Délai moyen de livraison' },
    { value: '95+',  label: 'Score Lighthouse moyen' },
    { value: '100%', label: 'Code sur mesure, zéro template' },
    { value: 'Lyon', label: 'Auvergne-Rhône-Alpes' },
  ],

  // ── CTA ──────────────────────────────────────────────────
  cta: {
    titleLight:   'Votre projet mérite',
    titleStrong:  'une architecture technique solide.',
    subtitle:     'Réponse sous 48h. Premier échange offert.',
    ctaPrimary:   'Démarrer un projet',
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    copy:  'ATLAMAZ STUDIO © 2026',
    email: 'atlamazstudio@gmail.com',
    links: [
      { label: 'Mentions légales',           href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
      { label: 'LinkedIn',                   href: 'https://www.linkedin.com/company/atlamaz-studio', external: true },
    ],
    nosVilles: {
      title: 'Nos villes',
      links: [
        { label: 'Lyon',              href: '/creation-site-web-lyon' },
        { label: 'Saint-Étienne',     href: '/creation-site-web-saint-etienne' },
        { label: 'Grenoble',          href: '/creation-site-web-grenoble' },
        { label: 'Annecy',            href: '/creation-site-web-annecy' },
        { label: 'Clermont-Ferrand',  href: '/creation-site-web-clermont-ferrand' },
      ],
    },
    services: {
      title: 'Services',
      links: [
        { label: 'Landing page',      href: '/creation-landing-page' },
        { label: 'Site vitrine',      href: '/creation-site-vitrine' },
        { label: 'Boutique en ligne', href: '/creation-boutique-en-ligne' },
        { label: 'Application mobile', href: '/creation-application-mobile' },
        { label: 'Refonte site web',  href: '/refonte-site-web' },
      ],
    },
  },

  // ── Page Réalisations ─────────────────────────────────────
  realisations: {
    meta: {
      title:       'Réalisations — Atlamaz Studio',
      description: 'Études de cas techniques des sites livrés par Atlamaz Studio : stack utilisée, contraintes de performance, résultats mesurés.',
    },
    hero: {
      eyebrow:  'Portfolio',
      title:    'Études de cas, pas de vitrine',
      subtitle: 'Chaque projet ci-dessous détaille la stack technique, les contraintes réelles et les métriques obtenues — pas juste des captures d\'écran.',
    },
    filters: {
      label: 'Filtrer par type',
    },
    card: {
      cta: 'Voir l\'étude de cas',
    },
    empty: 'Aucun projet dans cette catégorie pour l\'instant.',
  },

  // ── Page Détail réalisation ───────────────────────────────
  realisationDetail: {
    breadcrumb: {
      home:         'Accueil',
      realisations: 'Réalisations',
    },
    sections: {
      context:      'Contexte du projet',
      technologies: 'Stack technique',
      results:      'Résultats mesurés',
      cta:          'Un projet similaire à concevoir ?',
      defi:         'La contrainte technique',
      approche:     'L\'architecture retenue',
      resultat:     'Ce que ça donne en production',
    },
    resultsLabels: {
      pageSpeed: 'Score Lighthouse',
      delivery:  'Délai de livraison',
      revisions: 'Itérations effectuées',
    },
    nextLabel: 'Projet suivant',
    ctaText:   'Décrivez-moi votre contrainte technique, je vous réponds sous 48h avec une approche concrète.',
    ctaButton: 'Démarrer un projet',
    backBtn:   '← Retour aux réalisations',
    visitBtn:  'Visiter le site',
  },

  // ── Section Studio (home + page /studio) ─────────────────
  studio: {
    label: 'Le studio',
    meta: {
      title: 'Le studio — Atlamaz Studio',
      description: "Atlamaz Studio, c'est Serhat Atlamaz, développeur web React/React Native basé à Lyon. Architecture sur mesure, performance mesurée, un seul interlocuteur technique.",
    },
    pageEyebrow: 'Studio web · Lyon, France',
    pageTitle: 'Vous échangez directement avec la personne qui développe votre projet.',
    pageSubtitle: "Pas d'intermédiaire entre votre besoin et le code qui le résout. Vous échangez directement avec la personne qui architecture, développe et déploie votre site.",
    quote: 'Un site lent ou mal structuré coûte des clients avant même d\'avoir été lu. Je conçois des architectures qui tiennent dans le temps, pas des maquettes qui font illusion en démo.',
    author: 'Serhat Atlamaz',
    role: 'Fondateur — développeur web React / React Native',
    values: [
      { number: '01', title: 'Livraison cadrée', description: 'Brief technique, architecture validée, développement, déploiement — un cycle complet en moins de 3 semaines, sans jalon flou.' },
      { number: '02', title: 'Un site facile à maintenir et à faire évoluer.', description: 'Aucun builder, aucun template propriétaire. React, CSS Modules, une stack que vous pouvez faire reprendre par n\'importe quel développeur.' },
      { number: '03', title: 'Performance mesurée, pas promise', description: 'Score Lighthouse, Core Web Vitals, temps de chargement réel — chaque livraison est auditée avant remise des accès.' },
    ],
    ctaTitle: 'Discutons de votre projet.',
    ctaSubtitle: 'Réponse sous 48h. Premier échange offert.',
    ctaButton: 'Démarrer un projet',
    ctaButtonSecondary: 'Réserver 30 min offertes',
  },

  // ── Page Merci ────────────────────────────────────────────
  merci: {
    meta: {
      title: 'Message envoyé — Atlamaz Studio',
    },
    title:    'Message reçu.',
    subtitle: 'Je l\'étudie et vous réponds sous 48h avec une première analyse de votre besoin. En attendant, vous pouvez consulter les études de cas.',
    backBtn:  'Retour à l\'accueil',
    realisationsBtn: 'Voir les réalisations',
  },
};
