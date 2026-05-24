// ============================================================
// ATLAMAZ STUDIO — Données des réalisations
// ============================================================

export const realisations = [
  {
    slug: 'restaurant-lattache',
    nom: "L'Attache",
    secteur: 'Restaurant gastronomique',
    type: 'Site vitrine',
    typeId: 'vitrine',
    description:
      'Site vitrine complet avec carte en ligne, formules et système de réservation.',
    technologies: ['React', 'Formspree', 'Vercel'],
    lien: '#',
    image: null, // Remplacer par : '/images/realisations/lattache.jpg'
    pageSpeed: 95,
    delaiLivraison: '7 jours',
    revisions: 2,
    resultat: 'Site livré en 7 jours, design épuré centré sur la mise en valeur des plats.',
  },
  {
    slug: 'cabinet-moreau',
    nom: 'Cabinet Moreau',
    secteur: 'Kinésithérapie',
    type: 'Landing page',
    typeId: 'landing',
    description:
      'Landing page complète avec présentation des soins, équipe, tarifs et prise de rendez-vous.',
    technologies: ['React', 'Formspree', 'Vercel'],
    lien: '#',
    image: null, // Remplacer par : '/images/realisations/cabinet-moreau.jpg'
    pageSpeed: 98,
    delaiLivraison: '5 jours',
    revisions: 1,
    resultat: 'PageSpeed 98/100. Formulaire de prise de rendez-vous en ligne opérationnel dès le lancement.',
  },
  {
    slug: 'maia-creations',
    nom: 'Maïa Créations',
    secteur: 'Bijoux artisanaux',
    type: 'Boutique en ligne',
    typeId: 'boutique',
    description:
      'Boutique e-commerce complète avec catalogue, panier, paiement et newsletter.',
    technologies: ['React', 'Stripe', 'Vercel'],
    lien: '#',
    image: null, // Remplacer par : '/images/realisations/maia-creations.jpg'
    pageSpeed: 93,
    delaiLivraison: '18 jours',
    revisions: 3,
    resultat: 'Boutique en ligne opérationnelle avec paiement Stripe sécurisé et catalogue complet.',
  },
];

// Types disponibles pour les filtres
export const REALISATION_TYPES = [
  { id: 'tous',     label: 'Tous' },
  { id: 'vitrine',  label: 'Site vitrine' },
  { id: 'landing',  label: 'Landing page' },
  { id: 'boutique', label: 'Boutique' },
];
