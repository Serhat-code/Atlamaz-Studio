// ============================================================
// ATLAMAZ STUDIO — FAQ
// ============================================================

export const FAQ_CATEGORIES = [
  { id: 'tous', label: 'Tous' },
  { id: 'general', label: 'Général' },
  { id: 'technique', label: 'Technique' },
  { id: 'livraison', label: 'Après livraison' },
  { id: 'mobile', label: 'Mobile' },
];

export const faqs = [
  // ── Général ──────────────────────────────────────────────
  {
    id: 1,
    categorie: 'general',
    question: 'Combien coûte un site web professionnel ?',
    reponse: "Nos tarifs démarrent à 490€ pour une landing page (livraison 5 jours) et 990€ pour un site vitrine jusqu'à 5 pages (livraison 10 jours). Une boutique en ligne est à partir de 1 990€ et une application mobile à partir de 1 200€. Chaque devis est personnalisé : contactez-nous pour recevoir un devis gratuit sous 24h adapté à votre projet.",
    serviceLie: 'creation-site-vitrine',
  },
  {
    id: 2,
    categorie: 'general',
    question: 'Quels sont vos délais de livraison ?',
    reponse: "Nos délais standard sont de 5 jours pour une landing page, 7 jours pour un site restaurant, 10 jours pour un site vitrine ou une refonte, 14 jours pour une application mobile Starter, 21 jours pour une boutique en ligne et 30 jours pour une application Mobile Business. Nous proposons également un pack Urgence (livraison en 48-72h) avec un supplément de 30%.",
    serviceLie: null,
  },
  {
    id: 3,
    categorie: 'general',
    question: 'Travaillez-vous partout en France ?',
    reponse: "Oui, nous travaillons avec des clients dans toute la France, et même à l'international. Tout se passe à distance par visioconférence, email et téléphone. Nos clients sont principalement en Auvergne-Rhône-Alpes (Lyon, Saint-Étienne, Grenoble, Annecy, Clermont-Ferrand), mais nous intervenons régulièrement pour des clients à Paris, Bordeaux, Nantes ou Marseille.",
    serviceLie: null,
  },
  {
    id: 4,
    categorie: 'general',
    question: 'Comment se passe le paiement ?',
    reponse: "Nous demandons 50% d'acompte au démarrage du projet et 50% à la livraison finale. Le paiement peut se faire par virement bancaire ou par carte (via lien de paiement Stripe). Pour les montants supérieurs à 2 000€, nous pouvons étudier un paiement en trois fois selon les projets.",
    serviceLie: null,
  },
  {
    id: 5,
    categorie: 'general',
    question: 'Combien de révisions sont incluses ?',
    reponse: "Tous nos packs incluent 3 révisions. Une révision correspond à un cycle de retours et de modifications sur l'ensemble du projet. Dans la pratique, 3 révisions suffisent largement car nous affinons le brief en amont pour bien comprendre vos attentes. Les révisions supplémentaires sont facturées 50€ par demande.",
    serviceLie: null,
  },

  // ── Technique ────────────────────────────────────────────
  {
    id: 6,
    categorie: 'technique',
    question: 'Mon site sera-t-il compatible mobile ?',
    reponse: "Absolument. Tous nos sites sont 100% responsives : ils s'adaptent parfaitement aux smartphones, tablettes et ordinateurs de bureau. Nous développons avec une approche \"mobile first\" car plus de 60% du trafic web provient des appareils mobiles. Nous testons chaque site sur iPhone, Android et différentes tailles d'écran avant la livraison.",
    serviceLie: null,
  },
  {
    id: 7,
    categorie: 'technique',
    question: 'Quel score PageSpeed pouvez-vous garantir ?',
    reponse: "Nous garantissons un score PageSpeed Insights supérieur à 80 sur tous nos sites. En pratique, nos sites obtiennent souvent des scores entre 85 et 95. Nous atteignons ces performances grâce à l'optimisation des images (format WebP), la minification du code, la mise en cache et des hébergements performants. Un site rapide, c'est non seulement une meilleure expérience utilisateur, mais aussi un meilleur référencement Google.",
    serviceLie: null,
  },
  {
    id: 8,
    categorie: 'technique',
    question: 'Utilisez-vous WordPress ?',
    reponse: "Non. Nous développons avec des technologies modernes : React + Vite pour les sites web, React Native + Expo pour les applications mobiles. Ces technologies offrent des performances nettement supérieures à WordPress, une meilleure sécurité (pas de plugins tiers vulnérables) et une expérience utilisateur bien plus fluide. Vos visiteurs perçoivent immédiatement la différence.",
    serviceLie: null,
  },
  {
    id: 9,
    categorie: 'technique',
    question: 'Mon site sera-t-il bien référencé sur Google ?',
    reponse: "Chaque site que nous créons intègre une optimisation SEO technique complète : balises title et meta description optimisées, structure HTML sémantique (H1, H2, H3), sitemap XML soumis à Google Search Console, balisage Schema.org pour les données structurées, score PageSpeed élevé et optimisation mobile. Pour un référencement local, nous optimisons également votre fiche Google My Business.",
    serviceLie: 'creation-site-vitrine',
  },
  {
    id: 10,
    categorie: 'technique',
    question: 'Puis-je modifier le contenu de mon site moi-même ?',
    reponse: "Oui, sur demande nous pouvons intégrer un CMS (système de gestion de contenu) simple qui vous permet de modifier vos textes et images sans compétences techniques. Pour les sites développés en React, nous pouvons créer une interface d'administration sur mesure. Nous assurons également une formation à la prise en main lors de la livraison.",
    serviceLie: null,
  },

  // ── Après livraison ───────────────────────────────────────
  {
    id: 11,
    categorie: 'livraison',
    question: 'Que comprend la maintenance mensuelle ?',
    reponse: "Notre pack maintenance à 49€/mois sans engagement comprend : sauvegardes hebdomadaires automatiques, mises à jour de sécurité régulières, monitoring de disponibilité 24h/24 et 7j/7, alerte immédiate en cas de panne, 1h de modifications de contenu par mois (textes, images) et un rapport mensuel des interventions. C'est la tranquillité d'esprit pour votre site.",
    serviceLie: 'maintenance-site-web',
  },
  {
    id: 12,
    categorie: 'livraison',
    question: 'Que se passe-t-il si mon site tombe en panne ?',
    reponse: "Si vous êtes abonné au pack maintenance, notre monitoring détecte automatiquement toute panne et nous intervenons en priorité pour remettre votre site en ligne dans les meilleurs délais. Si vous n'avez pas de contrat de maintenance, nous restons disponibles pour une intervention ponctuelle facturée à l'heure. Dans tous les cas, nous vous donnons accès à des sauvegardes récentes pour minimiser la perte de données.",
    serviceLie: 'maintenance-site-web',
  },
  {
    id: 13,
    categorie: 'livraison',
    question: 'Puis-je faire évoluer mon site après livraison ?',
    reponse: "Bien sûr. Votre site peut évoluer avec votre activité : ajout de pages, nouvelles fonctionnalités, refonte partielle. Nous établissons un devis pour chaque évolution souhaitée. Si vous êtes abonné au pack maintenance, 1h de modifications est incluse chaque mois. Pour des évolutions importantes, nous recommandons une refonte partielle ou complète selon l'ampleur des changements.",
    serviceLie: null,
  },
  {
    id: 14,
    categorie: 'livraison',
    question: 'Recevrai-je les fichiers sources de mon site ?',
    reponse: "Oui, à la livraison finale nous vous transférons l'ensemble des fichiers sources de votre site et vous fournissons tous les accès (hébergement, nom de domaine, Google Analytics). Vous êtes propriétaire à 100% de votre site. Nous vous recommandons de conserver ces fichiers dans un endroit sûr.",
    serviceLie: null,
  },

  // ── Mobile ────────────────────────────────────────────────
  {
    id: 15,
    categorie: 'mobile',
    question: "Quelle est la différence entre une app iOS et Android ?",
    reponse: "iOS (Apple) et Android (Google) sont deux systèmes d'exploitation mobiles distincts avec leurs propres stores (App Store et Play Store) et conventions d'interface. Avec React Native, nous développons une seule application qui fonctionne sur les deux plateformes, ce qui divise le coût de développement. Les différences visuelles entre iOS et Android sont minimes et respectent les conventions de chaque plateforme.",
    serviceLie: 'creation-application-mobile',
  },
  {
    id: 16,
    categorie: 'mobile',
    question: "Mon application sera-t-elle disponible sur l'App Store et le Play Store ?",
    reponse: "Oui. Le Pack Mobile Starter inclut la publication sur le Play Store (Android). Le Pack Mobile Business inclut la publication sur les deux stores (App Store iOS + Play Store Android). Les délais de validation sont de quelques heures sur le Play Store et 1 à 3 jours sur l'App Store. Ces délais sont indépendants de notre travail et sont imposés par Apple et Google.",
    serviceLie: 'creation-application-mobile',
  },
  {
    id: 17,
    categorie: 'mobile',
    question: 'Combien coûte une application mobile simple ?',
    reponse: "Notre Pack Mobile Starter (application Android, 3 à 5 écrans, UI sur mesure, publication Play Store) est à 1 200€ avec une livraison en 14 jours. Pour une application iOS + Android complète avec authentification, backend et notifications push, notre Pack Mobile Business est à 4 500€ (livraison 30 jours). Pour des applications complexes (paiement in-app, temps réel, géolocalisation), nous établissons un devis personnalisé.",
    serviceLie: 'creation-application-mobile',
  },
];
