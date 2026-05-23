// ============================================================
// ATLAMAZ STUDIO — Données des réalisations
// Remplacer les valeurs placeholder par vos vrais projets
// ============================================================

export const realisations = [
  {
    slug: 'restaurant-lattache',
    nom: "L'Attache",
    secteur: 'Restaurant gastronomique',
    type: 'Site vitrine',
    typeId: 'vitrine',
    description:
      "Site vitrine complet avec carte en ligne et système de réservation pour un restaurant gastronomique lyonnais. Design épuré, centré sur l'expérience et la mise en valeur des plats.",
    technologies: ['React', 'Formspree', 'Vercel'],
    lien: '#',
    image: null, // Remplacer par : '/images/realisations/lattache.jpg'
    pageSpeed: 94,
    delaiLivraison: '7 jours',
    revisions: 2,
    resultat: 'Augmentation de 40% des réservations en ligne le premier mois.',
  },
  {
    slug: 'atelier-flora',
    nom: 'Atelier Flora',
    secteur: 'Fleuriste & décoration',
    type: 'Boutique en ligne',
    typeId: 'boutique',
    description:
      "Boutique e-commerce pour une fleuriste artisanale. Catalogue de 18 arrangements, paiement Stripe sécurisé, gestion des commandes et fiches produits SEO-optimisées.",
    technologies: ['React', 'Stripe', 'Vercel', 'Cloudinary'],
    lien: '#',
    image: null,
    pageSpeed: 91,
    delaiLivraison: '18 jours',
    revisions: 3,
    resultat: '12 commandes en ligne dès la première semaine de mise en ligne.',
  },
  {
    slug: 'cabinet-perrin',
    nom: 'Cabinet Perrin',
    secteur: 'Avocat — Droit des affaires',
    type: 'Landing page',
    typeId: 'landing',
    description:
      "Landing page de conversion pour un cabinet d'avocat spécialisé en droit des affaires. Optimisée pour le référencement local Lyon et le taux de conversion.",
    technologies: ['React', 'Formspree', 'Vercel'],
    lien: '#',
    image: null,
    pageSpeed: 98,
    delaiLivraison: '5 jours',
    revisions: 1,
    resultat: 'PageSpeed 98/100. Premier contact entrant en 3 jours.',
  },
  {
    slug: 'yoga-ines-martin',
    nom: 'Inès Martin Yoga',
    secteur: 'Bien-être & sport',
    type: 'Site vitrine',
    typeId: 'vitrine',
    description:
      "Site vitrine 5 pages pour une professeure de yoga indépendante. Planning de cours intégré, formulaire d'inscription, galerie photos et blog SEO.",
    technologies: ['React', 'Formspree', 'Vercel'],
    lien: '#',
    image: null,
    pageSpeed: 95,
    delaiLivraison: '9 jours',
    revisions: 3,
    resultat: "Taux de remplissage des cours passé de 60% à 95% en 2 mois.",
  },
  {
    slug: 'renovpro-isere',
    nom: 'RenovPro Isère',
    secteur: 'Artisan — Rénovation',
    type: 'Pack Refonte',
    typeId: 'refonte',
    description:
      "Refonte complète d'un site artisan vieillissant. Audit SEO, nouveau design mobile-first, migration du contenu et amélioration du score PageSpeed de 34 à 92.",
    technologies: ['React', 'Vite', 'Vercel'],
    lien: '#',
    image: null,
    pageSpeed: 92,
    delaiLivraison: '10 jours',
    revisions: 2,
    resultat: 'Score PageSpeed 34 → 92. Trafic organique +67% en 60 jours.',
  },
  {
    slug: 'boulangerie-du-coin',
    nom: 'La Boulangerie du Coin',
    secteur: 'Boulangerie artisanale',
    type: 'Pack Restaurant',
    typeId: 'restaurant',
    description:
      "Site vitrine avec carte en ligne, galerie photos et fiche Google My Business optimisée pour une boulangerie de quartier. Design chaleureux et appétissant.",
    technologies: ['React', 'Vercel', 'Google Maps API'],
    lien: '#',
    image: null,
    pageSpeed: 96,
    delaiLivraison: '6 jours',
    revisions: 2,
    resultat: 'Fiche GMB : +120 avis en 3 mois, note 4,9/5.',
  },
];

// Types disponibles pour les filtres
export const REALISATION_TYPES = [
  { id: 'tous',       label: 'Tous' },
  { id: 'landing',    label: 'Landing page' },
  { id: 'vitrine',    label: 'Site vitrine' },
  { id: 'boutique',   label: 'Boutique' },
  { id: 'refonte',    label: 'Refonte' },
  { id: 'restaurant', label: 'Restaurant' },
];
