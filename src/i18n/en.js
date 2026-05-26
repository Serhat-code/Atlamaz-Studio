// ============================================================
// ATLAMAZ STUDIO — English texts
// ============================================================

export const en = {
  // ── Navbar ──────────────────────────────────────────────
  navbar: {
    logo: 'ATLAMAZ STUDIO',
    links: [
      { label: 'Services',      href: '#packs',         isAnchor: true },
      { label: 'Achievements',  href: '/realisations',  isAnchor: false },
      { label: 'Process',       href: '#process',       isAnchor: true },
      { label: 'Pricing',       href: '#packs',         isAnchor: true },
      { label: 'Blog',          href: '/blog',          isAnchor: false },
      { label: 'FAQ',           href: '/faq',           isAnchor: false },
    ],
    cta: 'Start a project',
    ctaHref: '#contact',
    langSwitch: 'FR',
  },

  // ── Hero ─────────────────────────────────────────────────
  hero: {
    badge:       'Available for new projects',
    eyebrow:     'Web creation studio · Lyon',
    titleLight:  'Websites that',
    titleStrong: 'actually convert.',
    subtitle:    'High-performance, fast websites built to convert — delivered turnkey, no surprises.',
    ctaPrimary:      'View packages',
    ctaPrimaryHref:  '#packs',
    ctaSecondary:    'Request a quote',
    ctaSecondaryHref: '#contact',
  },

  // ── Stats ────────────────────────────────────────────────
  stats: [
    { value: '48h',  label: 'Response time' },
    { value: '100%', label: 'Responsive & fast' },
    { value: '+80',  label: 'PageSpeed score guaranteed' },
    { value: '3',    label: 'Revisions included' },
  ],

  // ── Packs ────────────────────────────────────────────────
  packs: {
    label:       'Services & Pricing',
    title:       'Clear and',
    titleStrong: 'transparent packages.',
    subtitle:    'All-inclusive. No surprises. Delivered turnkey.',
    ctaCard:        'Choose this package',
    ctaCardPopular: 'Choose this package',
    ctaContact:     'Contact us',

    rows: [
      {
        label: 'Website creation',
        cards: [
          {
            id: 'landing',
            name: 'Landing Page',
            price: '490€',
            delivery: 'Delivery in 5 days',
            badge: null,
            badgeType: null,
            featured: false,
            stripeKey: 'landing',
            features: [
              'Custom design',
              'Mobile responsive',
              'Contact form',
              'Basic SEO',
              'PageSpeed score +80',
              '1 year hosting included',
              '3 revisions included',
            ],
          },
          {
            id: 'vitrine',
            name: 'Showcase Website',
            price: '990€',
            delivery: 'Delivery in 10 days',
            badge: 'Popular',
            badgeType: 'popular',
            featured: true,
            stripeKey: 'vitrine',
            features: [
              'Up to 5 pages',
              'Custom design',
              'Mobile responsive',
              'Full SEO + sitemap',
              'Analytics installed',
              'Legal notices & GDPR',
              '1 year hosting included',
              '3 revisions included',
            ],
          },
          {
            id: 'boutique',
            name: 'Online Store',
            price: '1 990€',
            delivery: 'Delivery in 21 days',
            badge: null,
            badgeType: null,
            featured: false,
            stripeKey: 'boutique',
            features: [
              'Up to 20 products',
              'Stripe payment integrated',
              'Order management',
              'Optimized product pages',
              'E-commerce SEO',
              '3 revisions included',
            ],
          },
        ],
      },
      {
        label: 'Special packages',
        cards: [
          {
            id: 'refonte',
            name: 'Redesign Package',
            price: '790€',
            delivery: 'Delivery in 10 days',
            badge: 'Highly requested',
            badgeType: 'tag',
            featured: false,
            stripeKey: 'refonte',
            features: [
              'Free audit of existing site',
              'Complete new design',
              'Content migration',
              'SEO preserved',
              '3 revisions included',
            ],
          },
          {
            id: 'restaurant',
            name: 'Restaurant Package',
            price: '790€',
            delivery: 'Delivery in 7 days',
            badge: 'Local & hospitality',
            badgeType: 'tag',
            featured: false,
            stripeKey: 'restaurant',
            features: [
              'Online menu PDF or dynamic',
              'Booking system',
              'Photo gallery',
              'Google Maps integrated',
              'Google My Business listing',
              '3 revisions included',
            ],
          },
          {
            id: 'blog-seo',
            name: 'Blog & SEO Package',
            price: '1 290€',
            delivery: 'Delivery in 14 days',
            badge: 'Google visibility',
            badgeType: 'tag',
            featured: false,
            stripeKey: 'blogSeo',
            features: [
              '5-page showcase site',
              'Integrated blog',
              'Full technical SEO',
              'Schema.org configured',
              'Search Console + Analytics',
              '3 revisions included',
            ],
          },
        ],
      },
      {
        label: 'Mobile app',
        sectionTitle:    'Your business in your clients\' pocket.',
        sectionSubtitle: 'iOS & Android apps built with React Native + Expo.',
        cards: [
          {
            id: 'mobile-starter',
            name: 'Mobile Starter',
            price: '1 200€',
            delivery: 'Delivery in 14 days',
            badge: 'Android',
            badgeType: 'tag',
            featured: false,
            stripeKey: 'mobileStarter',
            features: [
              'Android app',
              '3 to 5 screens',
              'Custom UI',
              'Form / contact',
              'Simple API integration',
              'Play Store publication included',
              '3 revisions included',
            ],
          },
          {
            id: 'mobile-business',
            name: 'Mobile Business',
            price: '4 500€',
            delivery: 'Delivery in 30 days',
            badge: 'Popular',
            badgeType: 'popular',
            featured: true,
            stripeKey: 'mobileBusiness',
            features: [
              'iOS + Android',
              'User authentication',
              'Connected backend (Supabase)',
              'Push notifications',
              'Custom design',
              'App Store + Play Store publication',
              '3 revisions included',
            ],
          },
          {
            id: 'mobile-premium',
            name: 'Mobile Premium',
            price: 'On quote',
            delivery: 'Timeline depends on scope',
            badge: 'Custom',
            badgeType: 'tag',
            featured: false,
            stripeKey: null,
            features: [
              'Complex custom application',
              'In-app payment (Stripe)',
              'Real-time / geolocation / chat',
              'Admin dashboard',
              'Maintenance included',
              'Analytics & performance optimization',
              'Store publication + follow-up',
            ],
          },
        ],
        options: [
          { label: 'Monthly maintenance', price: '+99€/month' },
          { label: 'App Store iOS add-on', price: '+300€' },
          { label: 'Admin dashboard',      price: '+500€' },
          { label: 'Premium design',       price: '+700€' },
          { label: 'Payment system',       price: '+800€' },
        ],
        optionsLabel: 'Add-on options',
      },
      {
        label: 'Subscription & emergency',
        cards: [
          {
            id: 'maintenance',
            name: 'Maintenance Package',
            price: '49€/month',
            delivery: 'No commitment',
            badge: 'Recurring revenue',
            badgeType: 'tag',
            featured: false,
            stripeKey: 'maintenance',
            features: [
              'Weekly backup',
              'Security updates',
              '1h of edits/month',
              '24/7 uptime monitoring',
              'Monthly report',
            ],
          },
          {
            id: 'carte-visite',
            name: 'Digital Business Card',
            price: '190€',
            delivery: 'Delivery in 48h',
            badge: 'Simple & fast',
            badgeType: 'tag',
            featured: false,
            stripeKey: 'carteVisite',
            features: [
              'Custom design',
              'QR code generated',
              'Social media links',
              'Contact form',
              '1 revision included',
            ],
          },
          {
            id: 'urgence',
            name: 'Emergency Package',
            price: '+30% of pack',
            delivery: 'Delivery in 48–72h',
            badge: 'Express delivery',
            badgeType: 'amber',
            featured: false,
            stripeKey: null,
            features: [
              'Absolute priority',
              'Delivery in 48 to 72h',
              'Real-time tracking',
              'Weekend availability',
            ],
          },
        ],
      },
    ],

    custom: {
      title:    'Custom project',
      subtitle: 'Web application, complex e-commerce, advanced React features · Free quote within 24h',
      cta:      'Request a quote',
    },
  },

  // ── Process ──────────────────────────────────────────────
  process: {
    label:       'Process',
    title:       'Simple.',
    titleStrong: 'Fast. Effective.',
    subtitle:    '4 steps from idea to live website.',
    steps: [
      {
        number:      '01',
        title:       'Discovery call',
        description: 'A 30-min call to understand your needs, target audience and goals.',
      },
      {
        number:      '02',
        title:       'Quote & deposit',
        description: 'Detailed quote within 24h. 50% deposit to start the creation.',
      },
      {
        number:      '03',
        title:       'Design & dev',
        description: 'Mockup validated together, then development with regular check-ins.',
      },
      {
        number:      '04',
        title:       'Delivery',
        description: 'Go live, CMS training, final invoice payment.',
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────
  contact: {
    label:    'Contact',
    title:    "Let's talk about",
    titleStrong: 'your project.',
    subtitle: 'Guaranteed reply within 48h. First call is free.',

    fields: {
      prenom:    { label: 'First name',  placeholder: 'John' },
      nom:       { label: 'Last name',   placeholder: 'Doe' },
      email:     { label: 'Email',       placeholder: 'john@example.com' },
      telephone: { label: 'Phone',       placeholder: '+33 6 00 00 00 00' },
      typeProjet: {
        label: 'Project type',
        placeholder: 'Choose...',
        options: [
          { value: 'landing',     label: 'Landing page' },
          { value: 'vitrine',     label: 'Showcase website' },
          { value: 'boutique',    label: 'Online store' },
          { value: 'refonte',     label: 'Redesign' },
          { value: 'maintenance', label: 'Maintenance' },
          { value: 'sur-mesure',  label: 'Custom' },
          { value: 'autre',       label: 'Other' },
        ],
      },
      budget: {
        label: 'Estimated budget',
        placeholder: 'Choose...',
        options: [
          { value: 'moins-500',  label: '< 500€' },
          { value: '500-1000',   label: '500 – 1,000€' },
          { value: '1000-2000',  label: '1,000 – 2,000€' },
          { value: 'plus-2000',  label: '2,000€ +' },
          { value: 'a-definir',  label: 'To be defined' },
        ],
      },
      message:   { label: 'Message', placeholder: 'Tell me about your project in a few lines...' },
      rgpd:      'I agree that my data may be used to process my request',
    },

    submit:       'Send message',
    submitting:   'Sending…',
    successTitle: 'Message sent!',
    successText:  'Thank you for your message. I will reply within 48h.',
    errorText:    'An error occurred. Please try again or email me at atlamazstudio@gmail.com',
  },

  // ── CTA ──────────────────────────────────────────────────
  cta: {
    titleLight:      'Your project deserves',
    titleStrong:     'a website to match.',
    subtitle:        'Reply within 48h. First call is free.',
    ctaPrimary:      'Start a project',
    ctaPrimaryHref:  '#contact',
    ctaSecondary:    'atlamazstudio@gmail.com',
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
      description: 'Discover websites built by Atlamaz Studio: landing pages, showcase sites, online stores.',
    },
    hero: {
      eyebrow:  'Portfolio',
      title:    'Our work',
      subtitle: 'Sites that speak for themselves.',
    },
    filters: {
      label: 'Filter by type',
    },
    card: {
      cta: 'View project',
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
      technologies: 'Technologies used',
      results:      'Results',
      cta:          'Similar project?',
    },
    resultsLabels: {
      pageSpeed: 'PageSpeed score',
      delivery:  'Delivery time',
      revisions: 'Revisions done',
    },
    ctaText:   "Let's talk about your project — I'll reply within 48h.",
    ctaButton: 'Start a project',
    backBtn:   '← Back to portfolio',
    visitBtn:  'Visit website',
  },

  // ── Page Merci ────────────────────────────────────────────
  merci: {
    meta: {
      title: 'Message sent — Atlamaz Studio',
    },
    title:    'Thank you for your message!',
    subtitle: "I'll reply within 48h. In the meantime, feel free to browse my portfolio.",
    backBtn:  'Back to home',
    realisationsBtn: 'View portfolio',
  },
};
