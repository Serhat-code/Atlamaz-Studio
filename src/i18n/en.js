// ============================================================
// ATLAMAZ STUDIO — English texts
// ============================================================

export const en = {
  // ── Navbar ──────────────────────────────────────────────
  navbar: {
    logo: 'Atlamaz',
    links: [
      { label: 'Work',     href: '/realisations' },
      { label: 'Services', href: '/tarifs' },
      { label: 'Studio',   href: '/studio' },
    ],
    cta: 'Contact',
    langSwitch: 'FR',
  },

  // ── Hero ─────────────────────────────────────────────────
  hero: {
    badge:        'Available for new projects',
    eyebrow:      'Web studio · Lyon, France',
    titleLight:   'Websites engineered for',
    titleEm:      'performance,',
    titleStrong:  'not for decoration.',
    subtitle:     'React, optimized architecture, Core Web Vitals in the green — every site is hand-coded, no no-code builder, no bloat.',
    ctaPrimary:   'Book a call',
    ctaSecondary: 'See our work',
    ctaSecondaryHref: '/realisations',
  },

  // ── Stats ────────────────────────────────────────────────
  stats: [
    { value: '15+',  label: 'Projects shipped to production' },
    { value: '95+',  label: 'Average Lighthouse score' },
    { value: '100%', label: 'Hand-coded, zero templates' },
    { value: 'Lyon', label: 'Auvergne-Rhône-Alpes' },
  ],

  // ── CTA ──────────────────────────────────────────────────
  cta: {
    titleLight:      'Your project deserves',
    titleStrong:     'a solid technical foundation.',
    subtitle:        'Reply within 48h. First call is free.',
    ctaPrimary:      'Start a project',
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    copy:  'ATLAMAZ STUDIO © 2026',
    email: 'atlamazstudio@gmail.com',
    links: [
      { label: 'Legal notice',   href: '/mentions-legales' },
      { label: 'Privacy policy', href: '/politique-confidentialite' },
      { label: 'LinkedIn',       href: 'https://www.linkedin.com/company/atlamaz-studio', external: true },
    ],
    nosVilles: {
      title: 'Our cities',
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
        { label: 'Landing page',     href: '/creation-landing-page' },
        { label: 'Showcase website', href: '/creation-site-vitrine' },
        { label: 'Online store',     href: '/creation-boutique-en-ligne' },
        { label: 'Mobile app',       href: '/creation-application-mobile' },
        { label: 'Website redesign', href: '/refonte-site-web' },
      ],
    },
  },

  // ── Page Réalisations ─────────────────────────────────────
  realisations: {
    meta: {
      title:       'Portfolio — Atlamaz Studio',
      description: 'Technical case studies of sites shipped by Atlamaz Studio: stack used, performance constraints, measured results.',
    },
    hero: {
      eyebrow:  'Portfolio',
      title:    'Case studies, not a showcase',
      subtitle: 'Each project below documents the technical stack, the real constraints, and the metrics achieved — not just screenshots.',
    },
    filters: {
      label: 'Filter by type',
    },
    card: {
      cta: 'View case study',
    },
    empty: 'No projects in this category yet.',
  },

  // ── Page Détail réalisation ───────────────────────────────
  realisationDetail: {
    breadcrumb: {
      home:         'Home',
      realisations: 'Portfolio',
    },
    sections: {
      context:      'Project context',
      technologies: 'Technical stack',
      results:      'Measured results',
      cta:          'A similar project to scope?',
      defi:         'The technical constraint',
      approche:     'The architecture chosen',
      resultat:     'How it performs in production',
    },
    resultsLabels: {
      pageSpeed: 'Lighthouse score',
      delivery:  'Delivery time',
      revisions: 'Iterations done',
    },
    nextLabel: 'Next project',
    ctaText:   "Describe your technical constraint — I'll reply within 48h with a concrete approach.",
    ctaButton: 'Start a project',
    backBtn:   '← Back to portfolio',
    visitBtn:  'Visit website',
  },

  // ── Section Studio (home + /studio page) ─────────────────
  studio: {
    label: 'The studio',
    meta: {
      title: 'The studio — Atlamaz Studio',
      description: 'Atlamaz Studio is Serhat Atlamaz, a React / React Native developer based in Lyon. Custom architecture, measured performance, a single technical contact.',
    },
    pageEyebrow: 'Web studio · Lyon, France',
    pageTitle: 'A developer. Not a project manager.',
    pageSubtitle: "No middleman between your problem and the code that solves it. You talk directly to the person architecting, building, and shipping your site.",
    quote: 'A slow or poorly structured site loses customers before anyone finishes reading it. I build architectures that hold up over time, not mockups that only look good in a demo.',
    author: 'Serhat Atlamaz',
    role: 'Founder — React / React Native developer',
    values: [
      { number: '01', title: 'Scoped delivery', description: 'Technical brief, validated architecture, build, deploy — a full cycle in under 3 weeks, no vague milestones.' },
      { number: '02', title: 'No unnecessary dependencies', description: 'No builder, no proprietary template. React, CSS Modules — a stack any developer can pick up after you.' },
      { number: '03', title: 'Performance measured, not promised', description: 'Lighthouse score, Core Web Vitals, real load times — every delivery is audited before handover.' },
    ],
    ctaTitle: "Let's talk about your project.",
    ctaSubtitle: "Reply within 48h. First chat is free.",
    ctaButton: 'Start a project',
    ctaButtonSecondary: 'Book 30 free minutes',
  },

  // ── Page Merci ────────────────────────────────────────────
  merci: {
    meta: {
      title: 'Message sent — Atlamaz Studio',
    },
    title:    'Message received.',
    subtitle: "I'm reviewing it now and will reply within 48h with an initial take on your project. In the meantime, feel free to browse the case studies.",
    backBtn:  'Back to home',
    realisationsBtn: 'View portfolio',
  },
};
