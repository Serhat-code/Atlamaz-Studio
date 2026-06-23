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
    reponse: "490€ pour une landing page (5 jours), 990€ pour un site vitrine jusqu'à 5 pages (10 jours), à partir de 1 990€ pour une boutique en ligne et de 1 200€ pour une application mobile. Chaque devis est calculé sur le périmètre réel du projet — contactez-nous pour un chiffrage sous 24h.",
    serviceLie: 'creation-site-vitrine',
  },
  {
    id: 2,
    categorie: 'general',
    question: 'Quels sont vos délais de livraison ?',
    reponse: "5 jours pour une landing page, 7 jours pour un site restaurant, 10 jours pour un site vitrine ou une refonte, 14 jours pour une application Mobile Starter, 21 jours pour une boutique en ligne, 30 jours pour une application Mobile Business. Un pack Urgence (48-72h) existe avec un supplément de 30%.",
    serviceLie: null,
  },
  {
    id: 3,
    categorie: 'general',
    question: 'Travaillez-vous partout en France ?',
    reponse: "Oui. L'ensemble du projet se traite à distance — visioconférence, email, téléphone — sans que cela affecte le suivi. La majorité des clients sont en Auvergne-Rhône-Alpes (Lyon, Saint-Étienne, Grenoble, Annecy, Clermont-Ferrand), avec des projets réguliers à Paris, Bordeaux, Nantes ou Marseille.",
    serviceLie: null,
  },
  {
    id: 4,
    categorie: 'general',
    question: 'Comment se passe le paiement ?',
    reponse: "50% d'acompte au démarrage, 50% à la livraison. Virement bancaire ou carte via lien de paiement Stripe. Au-delà de 2 000€, un paiement en trois fois peut être étudié selon le projet.",
    serviceLie: null,
  },
  {
    id: 5,
    categorie: 'general',
    question: 'Combien d\'itérations sont incluses ?',
    reponse: "3 itérations par pack — chacune correspond à un cycle de retours sur l'ensemble du projet, pas à une seule correction. En pratique ce volume suffit car le brief est affiné en amont. Les itérations supplémentaires sont facturées 50€ par demande.",
    serviceLie: null,
  },

  // ── Technique ────────────────────────────────────────────
  {
    id: 6,
    categorie: 'technique',
    question: 'Mon site sera-t-il compatible mobile ?',
    reponse: "Le développement est mobile-first : la version mobile est conçue avant la version desktop, pas adaptée après coup. Chaque site est testé sur iPhone, Android et plusieurs résolutions d'écran avant livraison.",
    serviceLie: null,
  },
  {
    id: 7,
    categorie: 'technique',
    question: 'Quel score Lighthouse pouvez-vous garantir ?',
    reponse: "Un score supérieur à 90 sur la majorité des sites livrés, mesuré en conditions réelles (mobile, réseau 4G simulé), pas seulement sur desktop en fibre. Cette performance vient de l'optimisation des images (formats AVIF/WebP, dimensionnement par point de rupture), du code scindé par route et de l'absence de dépendances inutiles — pas d'un hébergement premium qui masquerait un code lourd.",
    serviceLie: null,
  },
  {
    id: 8,
    categorie: 'technique',
    question: 'Utilisez-vous WordPress ?',
    reponse: "Non. La stack est React + Vite pour le web, React Native + Expo pour le mobile. Conséquence directe : pas de plugins tiers qui s'accumulent et ralentissent le site, pas de faille de sécurité héritée d'une extension non maintenue, et un poids de page généralement inférieur à un site WordPress équivalent.",
    serviceLie: null,
  },
  {
    id: 9,
    categorie: 'technique',
    question: 'Mon site sera-t-il bien référencé sur Google ?',
    reponse: "Chaque site intègre un balisage SEO technique complet : title et meta description par page, structure de titres hiérarchique (un seul H1), sitemap XML soumis à Search Console, données structurées schema.org, et un score de performance qui pèse directement dans le classement. Pour le référencement local, la fiche Google Business Profile est également structurée.",
    serviceLie: 'creation-site-vitrine',
  },
  {
    id: 10,
    categorie: 'technique',
    question: 'Puis-je modifier le contenu de mon site moi-même ?',
    reponse: "Sur demande, un CMS léger ou une interface d'administration sur mesure peut être intégré pour modifier textes et images sans toucher au code. Sans CMS, le site reste plus léger à charger — le choix dépend de votre fréquence de mise à jour. Une documentation de prise en main est fournie à la livraison dans les deux cas.",
    serviceLie: null,
  },

  // ── Après livraison ───────────────────────────────────────
  {
    id: 11,
    categorie: 'livraison',
    question: 'Que comprend la maintenance mensuelle ?',
    reponse: "49€/mois sans engagement : sauvegarde hebdomadaire automatique restaurable, mises à jour de sécurité, monitoring de disponibilité 24h/24, alerte immédiate en cas de panne, 1h de modifications de contenu mensuelle et rapport d'intervention.",
    serviceLie: 'maintenance-site-web',
  },
  {
    id: 12,
    categorie: 'livraison',
    question: 'Que se passe-t-il si mon site tombe en panne ?',
    reponse: "Avec le pack maintenance, le monitoring détecte la panne et déclenche une intervention prioritaire. Sans contrat de maintenance, une intervention ponctuelle reste possible, facturée à l'heure. Dans les deux cas, une sauvegarde récente limite la perte de données.",
    serviceLie: 'maintenance-site-web',
  },
  {
    id: 13,
    categorie: 'livraison',
    question: 'Puis-je faire évoluer mon site après livraison ?',
    reponse: "Oui : ajout de pages, nouvelles fonctionnalités, refonte partielle — chaque évolution fait l'objet d'un devis dédié. Le pack maintenance couvre les ajustements mineurs via l'heure de modification mensuelle incluse.",
    serviceLie: null,
  },
  {
    id: 14,
    categorie: 'livraison',
    question: 'Recevrai-je les fichiers sources de mon site ?',
    reponse: "Oui. À la livraison, le code source complet et l'ensemble des accès (hébergement, nom de domaine, comptes Analytics) sont transférés. La propriété du site est intégrale, sans dépendance technique envers Atlamaz Studio pour le faire héberger ailleurs.",
    serviceLie: null,
  },

  // ── Mobile ────────────────────────────────────────────────
  {
    id: 15,
    categorie: 'mobile',
    question: "Quelle est la différence entre une app iOS et Android ?",
    reponse: "Deux systèmes d'exploitation, deux stores (App Store et Play Store), deux conventions d'interface. React Native compile une seule base de code vers les deux plateformes, ce qui réduit mécaniquement le coût et le délai de développement par rapport à deux applications natives séparées (Swift + Kotlin).",
    serviceLie: 'creation-application-mobile',
  },
  {
    id: 16,
    categorie: 'mobile',
    question: "Mon application sera-t-elle disponible sur l'App Store et le Play Store ?",
    reponse: "Le pack Mobile Starter publie sur le Play Store (Android). Le pack Mobile Business publie sur les deux stores. Validation : quelques heures sur le Play Store, 1 à 3 jours sur l'App Store — ces délais sont fixés par Apple et Google, indépendants du développement.",
    serviceLie: 'creation-application-mobile',
  },
  {
    id: 17,
    categorie: 'mobile',
    question: 'Combien coûte une application mobile simple ?',
    reponse: "Le pack Mobile Starter (Android, 3 à 5 écrans, publication Play Store) est à 1 200€, livré en 14 jours. Le pack Mobile Business (iOS + Android, authentification, backend Supabase, notifications push) est à 4 500€, livré en 30 jours. Pour des besoins spécifiques (paiement in-app, temps réel, géolocalisation), un devis est établi sur mesure.",
    serviceLie: 'creation-application-mobile',
  },
];
