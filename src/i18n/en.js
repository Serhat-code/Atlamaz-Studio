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
    eyebrow:      'Web studio — custom sites & applications',
    titleStrong:  'A visitor judges your site in three seconds.',
    titleLight:   'We make sure that judgement is the right one.',
    subtitle:     "A bad website doesn't just lose visitors. It makes people doubt how serious you are. Atlamaz Studio builds sites and applications that inspire trust from the very first second.",
    ctaPrimary:   "Let's talk about your project",
    ctaSecondary: 'See our work',
    ctaSecondaryHref: '/realisations',
  },

  // ── Quick nav (floating pill, home only) ──────────────────
  homeNav: {
    services:     'Services',
    realisations: 'Work',
    faq:          'FAQ',
  },

  // ── What a bad website costs ──────────────────────────────
  painPoints: {
    eyebrow: 'What a bad website costs you',
    title:   'Every overlooked detail has a price.',
    items: [
      { title: 'The first 3 seconds', text: "Before they even read your offer, a visitor already has an opinion of you. A dated or DIY-looking site plants doubt before the first word." },
      { title: 'The customers who leave', text: "A visitor who doesn't understand your offer in a few seconds won't dig deeper — they'll go find a competitor who took care of their site." },
      { title: "Your company's image", text: "A slow, confusing or dated site suggests the rest of your business is too. That's not always true. But it's what people remember." },
    ],
  },

  // ── How we work ────────────────────────────────────────────
  process: {
    eyebrow: 'How we work',
    title:   'Three steps. One goal: your credibility online.',
    steps: [
      { num: '01', title: 'Identity & Design', text: 'We set a visual direction that looks like you, built to inspire trust from the first glance.' },
      { num: '02', title: 'Development', text: 'Showcase sites, e-commerce, web and mobile apps. Clean, fast code, built to last.' },
      { num: '03', title: 'Growth', text: 'SEO, performance, evolutions: your site keeps working for you after launch.' },
    ],
    tags: ['Showcase sites', 'E-commerce', 'Web apps', 'Mobile apps', 'Custom SaaS'],
  },

  // ── Mask transition ─────────────────────────────────────────
  maskTransition: {
    before:       'What you picture.',
    beforeStrong: 'What your visitors will see.',
    eyebrow:      'Portfolio',
    title:        'Theory, in practice.',
  },

  // ── FAQ (home preview) ──────────────────────────────────────
  homeFaq: {
    eyebrow: 'FAQ',
    title:   "Everything we get asked before getting started.",
    items: [
      { question: 'How much does a professional website cost?', answer: "€490 for a landing page (5 days), €990 for a showcase site up to 5 pages (10 days), from €1,990 for an online store and €1,200 for a mobile app. Every quote is calculated on the real scope of the project — contact us for pricing within 24h." },
      { question: 'What are your delivery times?', answer: "5 days for a landing page, 7 days for a restaurant site, 10 days for a showcase site or redesign, 14 days for a Mobile Starter app, 21 days for an online store, 30 days for a Mobile Business app." },
      { question: 'Do you work with clients across France?', answer: "Yes. The whole project runs remotely — video call, email, phone. Most clients are in the Auvergne-Rhône-Alpes region, with regular projects in Paris, Bordeaux, Nantes or Marseille." },
      { question: 'How does payment work?', answer: "50% deposit to start, 50% on delivery. Bank transfer or card via a Stripe payment link. Above €2,000, a three-installment plan can be arranged depending on the project." },
    ],
    allLink: 'See all questions',
  },

  // ── Final CTA ────────────────────────────────────────────────
  finalCta: {
    title:    'Is your website working for you, or against you?',
    subtitle: 'Let\'s talk. No jargon, no commitment.',
    ctaLabel: "Let's talk about your project",
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    copy:  'ATLAMAZ STUDIO © 2026',
    email: 'atlamazstudio@gmail.com',
    links: [
      { label: 'Studio',         href: '/studio' },
      { label: 'Pricing',        href: '/tarifs' },
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
