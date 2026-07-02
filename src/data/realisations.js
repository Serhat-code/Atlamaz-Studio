export const realisations = [
  
  {
    id: 2,
    slug: 'givre',
    cat: 'vitrine',
    secteur: 'Luxe & Parfumerie',
    nom: 'GIVRE',
    type: 'Site vitrine',
    description: "Identité digitale d'une maison de parfumerie fictive haut de gamme. Design glacé, typographie premium, expérience sensorielle.",
    lien: 'https://givre.vercel.app/',
    couleur: '#0a0f1a',
    image: '/images/realisations/givre.jpg',
    technologies: ['React', 'WebGL', 'CSS 3D', 'GSAP'],
    techno: 'React / WebGL',
    delai: '4 jours',
    delaiLivraison: '4 jours',
    annee: '2026',
    pageSpeed: 96,
    revisions: 2,
    defi: "Transmettre l'univers sensoriel d'une parfumerie haut de gamme à travers un écran — sans que le visiteur puisse sentir, toucher ni essayer le produit.",
    approche: "Parti pris radical : tout blanc, tout froid. Typographie premium, animations de gel, effets WebGL qui évoquent la brume et la cristallisation. Chaque micro-interaction renforce l'imaginaire de la marque.",
    resultatNarratif: "Un site qui se visite comme une galerie. Le brief demandait 'luxe' — le résultat inspire 'silence, rareté, désir'.",
    stats: [
      { value: '96', label: 'Lighthouse' },
      { value: '4j', label: 'Livraison' },
      { value: '0', label: 'Template utilisé' },
    ],
    resultat: "Design glacé 100% sur mesure. Identité de marque cohérente du logo au curseur.",
  },
  {
  id: 1,
  slug: "scrapman",
  cat: "saas",
  secteur: "Prospection B2B",
  nom: "Scrapman",
  type: "SaaS",
  description:
    "Plateforme SaaS de prospection commerciale automatisée permettant de trouver des prospects partout en France, générer des e-mails personnalisés, créer des scripts d'appels et centraliser le suivi commercial depuis une seule interface.",
  lien: "https://scrapman-nine.vercel.app/",
  couleur: "#0f172a",
  image: '/images/realisations/logo.png',
  technologies: [
    "React",
    "Supabase",
    "Stripe"
  ],
  techno: "React • Supabase • Stripe",
  delai: "3 semaines",
  delaiLivraison: "3 semaines",
  annee: "2026",
  pageSpeed: 100,
  revisions: 8,
  defi:
    "Réduire le temps consacré à la prospection commerciale en automatisant la recherche de prospects, la création des campagnes et le suivi des actions.",
  approche:
    "Développement d'une plateforme web moderne avec authentification, gestion des abonnements via Stripe, génération automatisée d'e-mails, création de scripts d'appels et tableau de bord de suivi.",
  resultatNarratif:
    "Scrapman permet aux entreprises d'automatiser une grande partie de leur prospection commerciale et d'améliorer leur productivité grâce à une interface simple et performante.",
  stats: [
    {
      value: "B2B",
      label: "Prospection"
    },
    {
      value: "500",
      label: "nouveaux clients"
    },
    {
      value: "SaaS",
      label: "Abonnement"
    }
  ],

  resultat:
    "Une plateforme web de prospection qui automatise les tâches répétitives des équipes commerciales et accélère l'acquisition de nouveaux clients."
},
{
    id: 3,
    slug: 'astra',
    cat: 'webgl',
    secteur: 'Science & Culture',
    nom: 'ASTRA',
    type: 'Landing page',
    description: "Recensement des 100 astres les plus importants de l'univers. Une expérience visuelle immersive entre science et poésie.",
    lien: 'https://astra-five-hazel.vercel.app/',
    couleur: '#050818',
    image: '/images/realisations/astra.jpg',
    technologies: ['React', 'Three.js', 'GSAP', 'WebGL'],
    techno: 'React / Three.js',
    delai: '2 jours',
    delaiLivraison: '2 jours',
    annee: '2026',
    pageSpeed: 98,
    revisions: 2,
    defi: "Rendre la complexité astronomique accessible à tous — 100 astres, chacun unique, dans un espace interactif explorable sans aucune connaissance préalable.",
    approche: "Three.js pour des rendus 3D temps réel dans le navigateur. Chaque astre possède sa propre géométrie procédurale et ses propriétés physiques calculées à la volée. L'interface guide la découverte progressive : on peut plonger autant ou aussi peu qu'on le souhaite.",
    resultatNarratif: "Une expérience de 2 minutes qui donne le sentiment d'explorer l'univers depuis son canapé. La totalité des testeurs a navigué au-delà de la page d'accueil.",
    stats: [
      { value: '100', label: 'Astres modélisés' },
      { value: '98', label: 'Lighthouse' },
      { value: '2j', label: 'Livraison' },
    ],
    resultat: "Livré en 2 jours. Expérience 3D temps réel sans compromis sur la performance.",
  },
];

export const REALISATION_CATS = [
  { id: 'tous',    label: 'Tous' },
  { id: 'webgl',   label: 'Expériences WebGL' },
  { id: 'vitrine', label: 'Sites vitrine' },
  { id: 'saas',    label: 'SaaS' },
  { id: 'mobile',  label: 'Mobile' },
];
