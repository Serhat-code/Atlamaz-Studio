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
    eyebrow:      'Studio web — sites & applications sur mesure',
    titleStrong:  'Un visiteur juge votre site en trois secondes.',
    titleLight:   'Nous faisons en sorte que ce jugement soit le bon.',
    subtitle:     "Un mauvais site ne perd pas que des visiteurs. Il fait douter de votre sérieux. Atlamaz Studio conçoit des sites et applications qui inspirent confiance dès la première seconde.",
    ctaPrimary:   'Discutons de votre projet',
    ctaSecondary: 'Voir nos réalisations',
    ctaSecondaryHref: '/realisations',
  },

  // ── Nav rapide (pill flottante, home uniquement) ──────────
  homeNav: {
    services:     'Services',
    realisations: 'Réalisations',
    faq:          'FAQ',
  },

  // ── Ce que coûte un site raté ─────────────────────────────
  painPoints: {
    eyebrow: 'Ce que coûte un site raté',
    title:   'Chaque détail négligé a un prix.',
    items: [
      { title: 'Les 3 premières secondes', text: "Avant même de lire votre offre, un visiteur a déjà un avis sur vous. Un site daté ou bricolé sème le doute avant le premier mot." },
      { title: 'Les clients qui partent', text: "Un visiteur qui ne comprend pas votre offre en quelques secondes ne cherche pas plus loin — il va voir un concurrent qui, lui, a soigné son site." },
      { title: "L'image de votre entreprise", text: "Un site lent, confus ou vieillissant laisse penser que le reste de votre activité l'est aussi. Ce n'est pas toujours vrai. Mais c'est ce qu'on retient." },
    ],
  },

  // ── Comment on travaille ───────────────────────────────────
  process: {
    eyebrow: 'Comment on travaille',
    title:   'Trois étapes. Un seul objectif : votre crédibilité en ligne.',
    steps: [
      { num: '01', title: 'Identité & Design', text: 'On pose une direction visuelle qui vous ressemble, pensée pour donner confiance dès le premier regard.' },
      { num: '02', title: 'Développement', text: 'Sites vitrines, e-commerce, applications web et mobiles. Du code propre, rapide, pensé pour durer.' },
      { num: '03', title: 'Croissance', text: 'Référencement, performance, évolutions : votre site continue de travailler pour vous après la mise en ligne.' },
    ],
    tags: ['Sites vitrines', 'E-commerce', 'Applications web', 'Applications mobiles', 'SaaS sur mesure'],
  },

  // ── Transition à masque ────────────────────────────────────
  maskTransition: {
    before:       'Ce que vous imaginez.',
    beforeStrong: 'Ce que vos visiteurs verront.',
    eyebrow:      'Réalisations',
    title:        'La théorie, en pratique.',
  },

  // ── FAQ (aperçu home) ──────────────────────────────────────
  homeFaq: {
    eyebrow: 'Questions fréquentes',
    title:   "Tout ce qu'on nous demande avant de se lancer.",
    items: [
      { question: 'Combien coûte un site web professionnel ?', answer: "490€ pour une landing page (5 jours), 990€ pour un site vitrine jusqu'à 5 pages (10 jours), à partir de 1 990€ pour une boutique en ligne et de 1 200€ pour une application mobile. Chaque devis est calculé sur le périmètre réel du projet — contactez-nous pour un chiffrage sous 24h." },
      { question: 'Quels sont vos délais de livraison ?', answer: "5 jours pour une landing page, 7 jours pour un site restaurant, 10 jours pour un site vitrine ou une refonte, 14 jours pour une application Mobile Starter, 21 jours pour une boutique en ligne, 30 jours pour une application Mobile Business." },
      { question: 'Travaillez-vous partout en France ?', answer: "Oui. L'ensemble du projet se traite à distance — visioconférence, email, téléphone. La majorité des clients sont en Auvergne-Rhône-Alpes, avec des projets réguliers à Paris, Bordeaux, Nantes ou Marseille." },
      { question: 'Comment se passe le paiement ?', answer: "50% d'acompte au démarrage, 50% à la livraison. Virement bancaire ou carte via lien de paiement Stripe. Au-delà de 2 000€, un paiement en trois fois peut être étudié selon le projet." },
    ],
    allLink: 'Voir toutes les questions',
  },

  // ── CTA final ──────────────────────────────────────────────
  finalCta: {
    title:    'Votre site travaille-t-il pour vous, ou contre vous ?',
    subtitle: 'Parlons-en. Sans jargon, sans engagement.',
    ctaLabel: 'Discutons de votre projet',
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    copy:  'ATLAMAZ STUDIO © 2026',
    email: 'atlamazstudio@gmail.com',
    links: [
      { label: 'Studio',                     href: '/studio' },
      { label: 'Tarifs',                     href: '/tarifs' },
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
