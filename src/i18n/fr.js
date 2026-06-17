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
    titleLight:   'Des sites web qui',
    titleEm:      'vraiment',
    titleStrong:  'convertissent.',
    subtitle:     'Performants, rapides, pensés pour convertir — livrés clé en main, sans surprise.',
    ctaPrimary:   'Réserver un appel',
    ctaSecondary: 'Voir les réalisations',
    ctaSecondaryHref: '/realisations',
  },

  // ── Stats ────────────────────────────────────────────────
  stats: [
    { value: '15+',  label: 'Projets livrés' },
    { value: '+95',  label: 'Score PageSpeed moyen' },
    { value: '100%', label: 'Sur mesure' },
    { value: 'Lyon', label: 'Auvergne-Rhône-Alpes' },
  ],

  // ── CTA ──────────────────────────────────────────────────
  cta: {
    titleLight:   'Votre projet mérite',
    titleStrong:  'un site à sa hauteur.',
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
      defi:         'Le défi',
      approche:     'Notre approche',
      resultat:     'Le résultat',
    },
    resultsLabels: {
      pageSpeed: 'Score PageSpeed',
      delivery:  'Délai de livraison',
      revisions: 'Révisions effectuées',
    },
    nextLabel: 'Projet suivant',
    ctaText:   'Parlons de votre projet, je vous réponds sous 48h.',
    ctaButton: 'Démarrer un projet',
    backBtn:   '← Retour aux réalisations',
    visitBtn:  'Visiter le site',
  },

  // ── Section Studio (home + page /studio) ─────────────────
  studio: {
    label: 'Le studio',
    meta: {
      title: 'Le studio — Atlamaz Studio',
      description: "Atlamaz Studio, c'est Serhat Atlamaz, développeur web à Lyon. Livraison rapide, code sur mesure, résultats mesurables.",
    },
    pageEyebrow: 'Studio web · Lyon, France',
    pageTitle: 'Un développeur. Pas une agence.',
    pageSubtitle: "Pas de chef de projet entre vous et le code. Vous parlez directement à la personne qui construit votre site, du premier brief à la mise en ligne.",
    quote: 'Je construis des sites qui travaillent pendant que vous dormez. Chaque projet est une promesse tenue.',
    author: 'Serhat Atlamaz',
    role: 'Fondateur — développeur web',
    values: [
      { number: '01', title: 'Livraison rapide', description: 'Pas de jalons interminables. Un brief, un design, un site livré en moins de 3 semaines.' },
      { number: '02', title: 'Code sur mesure', description: 'Aucun template. Chaque ligne écrite pour votre projet et votre audience.' },
      { number: '03', title: 'Résultats mesurables', description: 'PageSpeed +80, référencement local, taux de conversion — des métriques réelles.' },
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
    title:    'Merci pour votre message !',
    subtitle: 'Je vous réponds sous 48h. En attendant, n\'hésitez pas à consulter mes réalisations.',
    backBtn:  'Retour à l\'accueil',
    realisationsBtn: 'Voir les réalisations',
  },
};
