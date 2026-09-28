// ============================================================
// ATLAMAZ STUDIO — Études de cas
// ============================================================
// Textes repris mot pour mot du dossier « etudes-de-cas-atlamaz »
// (index.html). Les images vivent dans public/realisations/<slug>/.
// `type` et `secteur` découpent l'eyebrow d'origine (« type · secteur »),
// `technologies` découpe la ligne Stack de la fiche technique.

export const realisations = [
  {
    id: 1,
    slug: "givre",
    cat: "vitrine",
    nom: "GIVRÉ",
    type: "Site vitrine premium",
    secteur: "Parfumerie",
    annee: "2026",
    couleur: "#8FD3FF",
    lien: "https://givre.vercel.app",
    lienLabel: null,
    accroche: "Une maison de haute parfumerie parisienne, présentée par un flacon de verre en 3D qui se givre puis se dissout en neige au fil de la lecture.",
    technologies: [
      "Vite",
      "Three.js",
      "GLSL",
      "JavaScript ES modules"
    ],
    cover: {
      image: "/realisations/covers/givre-cover.webp",
      alt: "Vue d'ensemble GIVRÉ",
      width: 2400,
      height: 1500
    },
    fiche: [
      {
        label: "Type",
        valeur: "Site vitrine multipage"
      },
      {
        label: "Périmètre",
        valeur: "Direction artistique, 3D temps réel, intégration, SEO, performance"
      },
      {
        label: "Stack",
        valeur: "Vite · Three.js · GLSL · JavaScript ES modules"
      },
      {
        label: "Pages",
        valeur: "Accueil, Collections, Actualités, Galerie, Contact, 404, Mentions légales"
      }
    ],
    contexte: "Un site de marque de luxe doit donner envie avant d'informer. Le produit est un flacon : il fallait le faire exister à l'écran comme un objet, pas comme une photo.",
    defi: "Une scène 3D riche (verre, givre, particules) pèse lourd. Elle ne devait ni ralentir le chargement, ni pénaliser le mobile, ni gêner la lecture du texte.",
    reponse: "Un flacon modélisé en code et rendu par des shaders sur mesure. Three.js n'est téléchargé que sur les écrans qui peuvent l'afficher ; ailleurs le site reste une page éditoriale légère.",
    chiffres: [
      {
        value: "9 000",
        label: "particules de dissolution"
      },
      {
        value: "4",
        label: "octaves de givre dans le shader"
      },
      {
        value: "7",
        label: "pages"
      },
      {
        value: "0 Ko",
        label: "de 3D sur mobile"
      }
    ],
    featuresPortrait: false,
    fonctionnalites: [
      {
        titre: "Un flacon de verre calculé en temps réel",
        texte: "Le flacon est une géométrie de révolution déformée en « squircle ». Son shader combine effet Fresnel, aberration chromatique et un éclairage d'environnement procédural. Après le chargement, une couche de givre à 4 octaves de bruit se dépose sur le verre et la caméra avance vers l'objet.",
        image: "/realisations/givre/01-hero-flacon-webgl.webp",
        width: 1920,
        height: 1080
      },
      {
        titre: "Le scroll dissout le flacon",
        texte: "Jusqu'à 9 000 particules sont tirées des sommets du flacon. À mesure qu'on lit la page, le verre s'efface et les particules montent en nuage de givre, avec une interpolation lente pour que le mouvement reste fluide.",
        image: "/realisations/givre/02-dissolution-scroll-1.webp",
        width: 1920,
        height: 1080
      },
      {
        titre: "Une atmosphère qui suit la lecture",
        texte: "Au milieu de la page, il ne reste qu'un nuage lumineux derrière le manifeste. La poussière de glace s'intensifie avec la progression : l'ambiance change sans jamais couvrir le texte.",
        image: "/realisations/givre/02-dissolution-scroll-2.webp",
        width: 1920,
        height: 1080
      },
      {
        titre: "Manifeste et chiffres animés",
        texte: "Le titre se découpe mot à mot en conservant les retours à la ligne éditoriaux. Les chiffres clés comptent jusqu'à leur valeur quand la section entre à l'écran.",
        image: "/realisations/givre/03-manifeste-compteurs.webp",
        width: 1920,
        height: 1080
      },
      {
        titre: "Collections au survol",
        texte: "Chaque fragrance a sa carte : visuel, famille olfactive, usage. Un curseur sur mesure avec inertie réagit aux éléments cliquables.",
        image: "/realisations/givre/04-collections-hover.webp",
        width: 1920,
        height: 1080
      },
      {
        titre: "Français et anglais sans rechargement",
        texte: "Le sélecteur FR / EN traduit toute la page à la volée, placeholders de formulaire compris.",
        image: "/realisations/givre/05-i18n-english.webp",
        width: 1920,
        height: 1080
      },
      {
        titre: "Galerie filtrable",
        texte: "Filtres Atelier, Flacons, Boutique, Événements, sans rechargement.",
        image: "/realisations/givre/07-galerie-filtre-flacons.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Visionneuse accessible",
        texte: "La visionneuse se pilote au clavier, garde le focus à l'intérieur et le rend à la vignette d'origine à la fermeture.",
        image: "/realisations/givre/08-galerie-lightbox.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Demande de consultation",
        texte: "Validation en direct des champs requis et du format e-mail, message d'erreur effacé dès que l'utilisateur corrige, confirmation animée.",
        image: "/realisations/givre/09-contact-validation.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Même une 404 soignée",
        texte: "« Il semblerait que vous vous soyez perdu dans le givre. » La page d'erreur garde le ton de la marque.",
        image: "/realisations/givre/10-page-404.webp",
        width: 2400,
        height: 1500
      }
    ],
    mobiles: [
      {
        legende: "Accueil mobile",
        image: "/realisations/givre/11-mobile-hero.webp",
        width: 1170,
        height: 2532
      },
      {
        legende: "Menu plein écran",
        image: "/realisations/givre/12-mobile-menu.webp",
        width: 1170,
        height: 2532
      },
      {
        legende: "Fiches fragrances",
        image: "/realisations/givre/13-mobile-collections.webp",
        width: 1170,
        height: 2532
      }
    ],
    noteMobile: "Sur mobile et sur les processeurs modestes, la scène 3D n'est jamais chargée : le site reste rapide et lisible.",
    sousLeCapot: [
      "Three.js isolé dans un chunk Vite à part (~123 Ko gzip), importé dynamiquement derrière une garde : jamais téléchargé sur mobile",
      "Shaders GLSL écrits à la main : verre Fresnel, aberration chromatique, IBL procédural, givre 4 octaves",
      "Rendu mis en pause quand l'onglet est masqué, respect de prefers-reduced-motion",
      "Polices variables auto-hébergées (Cormorant Garamond, Inter) : aucune requête vers Google",
      "Images WebP, préchargement animé sur le GPU, transitions entre pages, retour arrière géré (bfcache)",
      "Build multipage Vite avec 7 entrées HTML, sitemap et robots.txt"
    ]
  },
  {
    id: 2,
    slug: "astra",
    cat: "webgl",
    nom: "ASTRA",
    type: "Expérience éditoriale",
    secteur: "Astronomie",
    annee: "2026",
    couleur: "#E8B77A",
    lien: "https://astra-five-hazel.vercel.app",
    lienLabel: null,
    accroche: "Un recensement poétique de cent étoiles réelles : un champ stellaire vivant, un catalogue qui défile à l'horizontale et une fiche illustrée pour chaque astre.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Three.js",
      "Canvas 2D"
    ],
    cover: {
      image: "/realisations/covers/astra-cover.webp",
      alt: "Vue d'ensemble ASTRA",
      width: 2400,
      height: 1500
    },
    fiche: [
      {
        label: "Type",
        valeur: "Site éditorial one-page"
      },
      {
        label: "Périmètre",
        valeur: "Concept, rédaction des fiches, 3D, illustration générative, intégration"
      },
      {
        label: "Stack",
        valeur: "HTML · CSS · JavaScript · Three.js · Canvas 2D"
      },
      {
        label: "Contenu",
        valeur: "100 étoiles, 42 constellations, jusqu'à 163 000 années-lumière"
      }
    ],
    contexte: "Montrer qu'un site peut être à la fois un objet d'émotion et une base de données lisible, avec de vraies informations scientifiques.",
    defi: "Cent fiches, cent visuels : impossible à produire à la main sans alourdir le site. Et un fond animé ne doit jamais coûter en lisibilité ni en batterie.",
    reponse: "Chaque portrait d'étoile est dessiné par le code à partir de son type spectral. Le site tient dans un seul fichier HTML de 94 Ko, sans image produit.",
    chiffres: [
      {
        value: "100",
        label: "étoiles documentées"
      },
      {
        value: "6 500",
        label: "points animés"
      },
      {
        value: "94 Ko",
        label: "pour tout le site"
      },
      {
        value: "0",
        label: "image de portrait"
      }
    ],
    featuresPortrait: false,
    fonctionnalites: [
      {
        titre: "Un chargement qui compte les étoiles",
        texte: "Le préchargement recense les 100 étoiles du catalogue avant d'ouvrir le ciel.",
        image: "/realisations/astra/01-loader-compteur.webp",
        width: 1920,
        height: 1080
      },
      {
        titre: "Un champ stellaire vivant",
        texte: "6 500 étoiles (3 000 sur mobile) avec un shader de scintillement propre à chacune, des nébuleuses en fusion additive et une caméra qui dérive selon la souris ou le doigt.",
        image: "/realisations/astra/02-hero-champ-stellaire.webp",
        width: 1920,
        height: 1080
      },
      {
        titre: "Le registre des cent étoiles",
        texte: "Un catalogue horizontal au clavier, à la souris ou au doigt, avec compteur de position et barre de progression.",
        image: "/realisations/astra/03-catalogue-100-etoiles.webp",
        width: 1920,
        height: 1080
      },
      {
        titre: "Des portraits générés par le code",
        texte: "Rigel, supergéante bleue : couleur issue du type spectral, aigrettes de diffraction pour les étoiles chaudes. Le tirage aléatoire est fixé par le nom de l'étoile, donc chaque astre garde toujours le même portrait.",
        image: "/realisations/astra/06-modal-rigel-supergeante-bleue.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Une échelle de température lisible",
        texte: "Bételgeuse, 3 500 K : le curseur se place sur une échelle de 2 000 à 50 000 K. Distance, magnitude, luminosité et rayon sont renseignés pour chaque fiche.",
        image: "/realisations/astra/07-modal-betelgeuse-supergeante-rouge.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Les cas extrêmes ont leur propre rendu",
        texte: "Les pulsars reçoivent des anneaux concentriques. La navigation Précédent / Suivant parcourt tout le registre sans refermer la fiche.",
        image: "/realisations/astra/08-modal-pulsar-du-crabe.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Un ciel qui répond à la main",
        texte: "Une section entière laisse le champ stellaire au premier plan : on le fait tourner en bougeant le curseur.",
        image: "/realisations/astra/09-skymap-interaction.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Une signature typographique",
        texte: "Le manifeste se clôt sur « UNCOUNTED », en capitales gravées au pied de la page.",
        image: "/realisations/astra/11-footer-uncounted.webp",
        width: 2400,
        height: 1500
      }
    ],
    mobiles: [
      {
        legende: "Accueil mobile",
        image: "/realisations/astra/12-mobile-hero.webp",
        width: 780,
        height: 1688
      },
      {
        legende: "Catalogue au doigt",
        image: "/realisations/astra/13-mobile-catalogue.webp",
        width: 780,
        height: 1688
      },
      {
        legende: "Fiche Sirius",
        image: "/realisations/astra/14-mobile-modal-sirius.webp",
        width: 780,
        height: 1688
      }
    ],
    noteMobile: "Sur petit écran, moins d'étoiles et un anticrénelage désactivé pour préserver la batterie.",
    sousLeCapot: [
      "Three.js chargé depuis un CDN avec contrôle d'intégrité (SRI)",
      "Shader de points : taille, couleur et phase de scintillement par étoile",
      "Portraits en Canvas 2D avec générateur pseudo-aléatoire déterministe (mulberry32) seedé sur le nom",
      "Rendu suspendu quand une fiche est ouverte ou l'onglet masqué",
      "Repli sans WebGL, scintillement figé avec prefers-reduced-motion",
      "Fenêtre modale accessible : piège de focus, Échap, annonce de position pour les lecteurs d'écran",
      "En-têtes de sécurité déclarés dans vercel.json"
    ]
  },
  {
    id: 3,
    slug: "relia",
    cat: "saas",
    nom: "Relia",
    type: "SaaS B2B",
    secteur: "Relance de factures",
    annee: "2026",
    couleur: "#4C8DFF",
    lien: "https://relia-pi.vercel.app/app",
    lienLabel: null,
    accroche: "Les factures partent à 30 jours, sont payées à 60, et personne ne relance. Relia prépare les relances au bon ton, les envoie depuis la boîte e-mail du client, lit les réponses et suit les promesses de règlement.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Mistral",
      "Tailwind v4"
    ],
    cover: {
      image: "/realisations/covers/relia-cover.webp",
      alt: "Vue d'ensemble Relia",
      width: 2400,
      height: 1500
    },
    fiche: [
      {
        label: "Type",
        valeur: "Application SaaS + site marketing"
      },
      {
        label: "Cible",
        valeur: "TPE, PME, freelances et agences"
      },
      {
        label: "Stack",
        valeur: "Next.js 15 · TypeScript · Supabase · Stripe · Mistral · Tailwind v4"
      },
      {
        label: "Hébergement",
        valeur: "Union européenne (Paris)"
      }
    ],
    contexte: "Relancer un client est gênant et prend du temps. Les outils existants sont chers, pensés pour les grands comptes, ou envoient depuis leur propre domaine.",
    defi: "Automatiser sans basculer dans le recouvrement, activité réglementée. Respecter le RGPD, l'AI Act et le Code de commerce dès l'architecture, pas après coup.",
    reponse: "Un outil en libre-service à 29–79 €/mois. Les relances partent de la boîte du client, l'IA est hébergée en Europe et chaque garde-fou juridique est vérifié en base et par des tests.",
    chiffres: [
      {
        value: "89",
        label: "fichiers de tests"
      },
      {
        value: "20",
        label: "migrations SQL"
      },
      {
        value: "3",
        label: "fournisseurs e-mail"
      },
      {
        value: "100 %",
        label: "hébergé en UE"
      }
    ],
    featuresPortrait: false,
    fonctionnalites: [
      {
        titre: "Un tableau de bord qui dit quoi faire",
        texte: "Encours, retards, sommes sous promesse et délai moyen d'encaissement. En dessous : l'ancienneté des retards, les factures à risque, les réponses à traiter et l'activité du jour.",
        image: "/realisations/relia/03-tableau-de-bord.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Le suivi de chaque facture",
        texte: "Onglets À encaisser, En retard, Promesses, Payées, avec l'échéance et le nombre de jours de retard sur chaque ligne.",
        image: "/realisations/relia/04-factures-suivi.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Import CSV et factures électroniques",
        texte: "Import d'un export de logiciel de facturation, ou de factures Factur-X et UBL (norme EN 16931), lues dans le navigateur. Saisie manuelle possible.",
        image: "/realisations/relia/05-import-csv-facturx.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Des relances rédigées, validées par un humain",
        texte: "L'IA (Mistral, hébergée en Europe) reformule le modèle ; le texte n'est gardé que s'il contient le bon numéro et le bon montant. Badge « Message assisté par IA », et validation obligatoire avant le premier envoi à chaque client.",
        image: "/realisations/relia/06-relances-a-valider.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Les réponses sont lues et classées",
        texte: "Contestation, règlement annoncé, promesse de paiement : Relia lit uniquement les fils de relance, repère une date promise (« vendredi », « sous huitaine », « fin du mois ») et suspend les relances le temps qu'il faut.",
        image: "/realisations/relia/07-reponses-analyse-ia-promesses.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Score de risque, dans les règles",
        texte: "Le score de retard n'est calculé que pour les entreprises identifiées par un SIREN. Pour un particulier, l'écran affiche « Non applicable », comme l'impose l'AI Act. Export et effacement des données en un clic.",
        image: "/realisations/relia/08-debiteurs-score-risque.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Un garde-fou juridique dans l'éditeur",
        texte: "Écrire « huissier » ou l'indemnité de 40 € dans un modèle destiné à un particulier déclenche une alerte immédiate : menaces interdites, mentions réservées aux professionnels.",
        image: "/realisations/relia/10-garde-fou-juridique.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Des scénarios de relance sur une frise",
        texte: "De J-3 à J+30 : chaque étape a son délai, son ton (courtois, ferme, mise en demeure) et son modèle. Envoi le jour ouvré suivant à 9 h 30, heure de Paris.",
        image: "/realisations/relia/11-scenario-timeline.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Envoi depuis la boîte du client",
        texte: "Connexion Gmail ou Outlook en OAuth, ou SMTP + IMAP en repli. L'état de chaque boîte est surveillé et l'accès refusé est signalé clairement.",
        image: "/realisations/relia/12-boite-envoi-gmail-smtp.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Un journal d'audit inaltérable",
        texte: "Chaque action, humaine ou automatique, est tracée : qui, quoi, quand, sur quelle facture. Personne ne peut modifier ni effacer une entrée.",
        image: "/realisations/relia/13-journal-audit.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Abonnement et équipe",
        texte: "Trois offres Stripe, période d'essai, devise de travail, durée de conservation des données et invitations d'équipe avec rôles.",
        image: "/realisations/relia/14-abonnement-stripe.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Une identité qui raconte le produit",
        texte: "Le logo est un anneau de quatre arcs : facture émise, relance envoyée, promesse obtenue, encaissement. Il sert aussi d'indicateur de chargement et de favicon animé.",
        image: "/realisations/relia/16-logo-4-arcs.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Thème sombre et thème clair",
        texte: "Toute l'interface repose sur des jetons de design ; le contraste des couleurs est vérifié par un test automatisé.",
        image: "/realisations/relia/18-theme-clair-tableau-de-bord.webp",
        width: 2400,
        height: 1500
      }
    ],
    mobiles: [
      {
        legende: "Site marketing",
        image: "/realisations/relia/20-mobile-landing.webp",
        width: 1170,
        height: 2532
      },
      {
        legende: "Tableau de bord",
        image: "/realisations/relia/21-mobile-tableau-de-bord.webp",
        width: 1170,
        height: 2532
      },
      {
        legende: "Réponses à traiter",
        image: "/realisations/relia/22-mobile-reponses.webp",
        width: 1170,
        height: 2532
      }
    ],
    noteMobile: "L'application complète fonctionne au téléphone, navigation comprise.",
    sousLeCapot: [
      "89 fichiers de tests Vitest, dont un test qui échoue si le mot « recouvrement » apparaît dans l'interface",
      "20 migrations Supabase, Row Level Security, écritures sensibles réservées à des fonctions serveur",
      "Validation humaine imposée en base par un déclencheur, pas seulement dans l'interface",
      "Envoi par cron avec for update skip locked : deux exécutions ne prennent jamais la même relance",
      "Politique de sécurité du contenu avec nonce par requête, garde anti-SSRF sur SMTP et IMAP",
      "Exécution forcée en région Paris (Vercel cdg1, Supabase UE), sous-traitants publiés"
    ]
  },
  {
    id: 4,
    slug: "scrapman",
    cat: "saas",
    nom: "Scrapman",
    type: "SaaS B2B",
    secteur: "Prospection",
    annee: "2026",
    couleur: "#2F7BFF",
    lien: "https://scrapman-nine.vercel.app",
    lienLabel: null,
    accroche: "De la recherche d'entreprises à l'e-mail de relance : Scrapman trouve des commerces locaux, audite leur site, les note et prépare un message sur mesure. Sans IA et sans aucune API payante.",
    technologies: [
      "Next.js 16",
      "TanStack Query",
      "Supabase",
      "Python",
      "Stripe"
    ],
    cover: {
      image: "/realisations/covers/scrapman-cover.webp",
      alt: "Vue d'ensemble Scrapman",
      width: 2400,
      height: 1500
    },
    fiche: [
      {
        label: "Type",
        valeur: "Application SaaS multi-équipe"
      },
      {
        label: "Cible",
        valeur: "Indépendants et agences qui prospectent des TPE"
      },
      {
        label: "Stack",
        valeur: "Next.js 16 · TanStack Query · Supabase · Python · Stripe"
      },
      {
        label: "Données",
        valeur: "API Recherche d'entreprises, API Geo, PageSpeed Insights, DNS"
      }
    ],
    contexte: "Prospecter à la main prend des heures : trouver l'entreprise, vérifier son site, écrire un message crédible, relancer, suivre qui a répondu.",
    defi: "Industrialiser la chaîne sans tomber dans le spam : respect du RGPD pour la prospection B2B, limites d'envoi, délivrabilité, et un coût d'usage proche de zéro.",
    reponse: "Un pipeline complet : scraping, enrichissement, audit, score, message, envoi, relance. Tout est calculé par des règles transparentes, et l'envoi passe par le SMTP de l'utilisateur.",
    chiffres: [
      {
        value: "0 €",
        label: "d'API payante"
      },
      {
        value: "3",
        label: "angles d'e-mail"
      },
      {
        value: "/100",
        label: "score par prospect"
      },
      {
        value: "5",
        label: "étapes, du scraping à la relance"
      }
    ],
    featuresPortrait: false,
    fonctionnalites: [
      {
        titre: "Des prospects notés A, B ou C",
        texte: "Chaque entreprise reçoit un score sur 100 : qualité du contact, présence web, données complètes, audit technique. Filtres par score, statut et secteur.",
        image: "/realisations/scrapman/01-prospects-scoring.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Une fiche qui justifie l'approche",
        texte: "SIREN, code NAF, dirigeant, coordonnées, détail du score et audit PageSpeed : performance, SEO, mobile, problèmes détectés. L'angle d'approche en découle.",
        image: "/realisations/scrapman/02-fiche-prospect-audit.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "E-mail et script d'appel prêts",
        texte: "Trois angles selon le diagnostic : site lent, entreprise invisible sur Google, pas de site. L'e-mail cite le vrai problème ; le script d'appel suit la même logique.",
        image: "/realisations/scrapman/03-email-froid-et-script-generes.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Actions groupées",
        texte: "Changer de statut, exporter en CSV ou relancer l'analyse sur une sélection de prospects.",
        image: "/realisations/scrapman/05-actions-groupees.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Une nouvelle session de scraping",
        texte: "Code NAF, villes ou France entière, nombre de prospects et exclusion automatique des grandes enseignes.",
        image: "/realisations/scrapman/06-session-scraping.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Des campagnes pilotées",
        texte: "Chaque campagne a ses prospects, ses messages, ses scripts d'appel et ses réglages, avec la file d'envoi visible.",
        image: "/realisations/scrapman/08-campagne-messages.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Des envois qui ressemblent à un humain",
        texte: "Plafond quotidien, fenêtre horaire, jours d'envoi, délai aléatoire entre deux e-mails et relances automatiques paramétrables.",
        image: "/realisations/scrapman/10-campagne-reglages-envoi.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Analytics",
        texte: "Prospects, e-mails envoyés, taux d'ouverture, qualifiés, répartition par score et par ville, courbe des 7 derniers jours.",
        image: "/realisations/scrapman/12-analytics.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "SMTP, IMAP et DNS vérifiés",
        texte: "L'utilisateur branche sa propre messagerie. Scrapman vérifie SPF, DKIM et DMARC, et lit les réponses en IMAP pour arrêter les relances.",
        image: "/realisations/scrapman/15-reglages-smtp-dns.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "Abonnements et limites",
        texte: "Trois offres Stripe. Les limites de chaque offre (prospects, campagnes actives, utilisateurs, e-mails par jour) sont appliquées en base par des déclencheurs SQL.",
        image: "/realisations/scrapman/13-facturation-stripe.webp",
        width: 2400,
        height: 1500
      },
      {
        titre: "La conformité avant le premier envoi",
        texte: "Une campagne ne peut pas être activée tant que le guide RGPD n'a pas été lu et le profil expéditeur complété.",
        image: "/realisations/scrapman/14-conformite-rgpd.webp",
        width: 2400,
        height: 1500
      }
    ],
    mobiles: [
      {
        legende: "Prospects",
        image: "/realisations/scrapman/17-mobile-prospects.webp",
        width: 1170,
        height: 2532
      },
      {
        legende: "Analytics",
        image: "/realisations/scrapman/18-mobile-analytics.webp",
        width: 1170,
        height: 2532
      }
    ],
    noteMobile: null,
    sousLeCapot: [
      "Worker Python (49 modules) qui scrape, enrichit, audite et envoie via le SMTP de l'équipe",
      "Réservation des messages avec for update skip locked : aucun doublon d'envoi, même avec plusieurs workers",
      "Multi-équipe dès le départ : Row Level Security sur chaque table, rôles propriétaire / admin / membre",
      "Mot de passe SMTP chiffré, fonctions sensibles en security definer, limitation de débit en base",
      "Suivi d'ouverture, détection des réponses et des rebonds, relances automatiques",
      "23 fichiers de tests (Vitest et pytest)"
    ]
  },
  {
    id: 5,
    slug: "coachme",
    cat: "mobile",
    nom: "CoachMe",
    type: "Application mobile",
    secteur: "Marketplace sport",
    annee: "2026",
    couleur: "#E63946",
    lien: null,
    lienLabel: "Application mobile · APK Android",
    accroche: "Une marketplace de coachs sportifs certifiés : le sportif trouve un coach près de chez lui, réserve un créneau et paie en séquestre ; le coach gère son agenda, ses offres et ses avis.",
    technologies: [
      "React Native",
      "Expo SDK 55",
      "expo-router",
      "Supabase",
      "Stripe"
    ],
    cover: {
      image: "/realisations/covers/coachme-cover.webp",
      alt: "Vue d'ensemble CoachMe",
      width: 2400,
      height: 1500
    },
    fiche: [
      {
        label: "Type",
        valeur: "Application iOS / Android"
      },
      {
        label: "Utilisateurs",
        valeur: "Sportifs et coachs certifiés"
      },
      {
        label: "Stack",
        valeur: "React Native · Expo SDK 55 · expo-router · Supabase · Stripe"
      },
      {
        label: "Livraison",
        valeur: "APK Android via EAS Build"
      }
    ],
    contexte: "Trouver un coach fiable passe par le bouche-à-oreille. Les coachs, eux, gèrent leurs créneaux et leurs paiements à la main.",
    defi: "Deux applications en une (sportif et coach), des documents d'identité à vérifier, et un paiement qui protège les deux parties si une séance est annulée.",
    reponse: "Une seule base de code avec deux parcours, une validation des coachs sur pièces, et un paiement Stripe en capture manuelle qui garde les fonds en séquestre.",
    chiffres: [
      {
        value: "25",
        label: "écrans"
      },
      {
        value: "2",
        label: "parcours : sportif et coach"
      },
      {
        value: "12",
        label: "tables Supabase"
      },
      {
        value: "3",
        label: "Edge Functions Stripe"
      }
    ],
    featuresPortrait: true,
    fonctionnalites: [
      {
        titre: "Trouver son coach",
        texte: "Recherche par nom ou sport, filtre par ville, tri par note ou par prix, badges Certifié / Pro / Top coach et disponibilité en direct.",
        image: "/realisations/coachme/04-accueil-coachs.webp",
        width: 1170,
        height: 2532
      },
      {
        titre: "Une fiche coach claire",
        texte: "Présentation, certification, note et offres détaillées : séance découverte, séance individuelle, pack de 10 séances.",
        image: "/realisations/coachme/07-fiche-coach-reservation.webp",
        width: 1170,
        height: 2532
      },
      {
        titre: "Choisir une offre et un créneau",
        texte: "Le sportif choisit l'offre puis un créneau libre ; le bouton de réservation affiche le prix final.",
        image: "/realisations/coachme/09-selection-seance-creneau.webp",
        width: 1170,
        height: 2532
      },
      {
        titre: "Paiement en séquestre",
        texte: "Récapitulatif avec commission. Sur mobile, le paiement par carte Stripe autorise le montant sans l'encaisser : les fonds restent en séquestre, et une annulation déclenche la libération ou le remboursement.",
        image: "/realisations/coachme/10-paiement-recapitulatif.webp",
        width: 1170,
        height: 2532
      },
      {
        titre: "Mes séances",
        texte: "Séances à venir et passées, statuts En attente, Confirmé, Terminé, Annulé, et annulation possible.",
        image: "/realisations/coachme/11-mes-seances.webp",
        width: 1170,
        height: 2532
      },
      {
        titre: "Laisser un avis",
        texte: "Après une séance terminée, le sportif note le coach ; la note moyenne se recalcule en base.",
        image: "/realisations/coachme/14-laisser-un-avis.webp",
        width: 1170,
        height: 2532
      },
      {
        titre: "Le tableau de bord du coach",
        texte: "Disponibilité en un geste, séances données, note moyenne, clients uniques et revenus nets du mois.",
        image: "/realisations/coachme/20-coach-dashboard.webp",
        width: 1170,
        height: 2532
      },
      {
        titre: "Accepter ou refuser",
        texte: "Les demandes arrivent avec le créneau et l'offre choisie. Accepter confirme la séance ; refuser libère le créneau pour un autre sportif.",
        image: "/realisations/coachme/21-coach-dashboard-reservations.webp",
        width: 1170,
        height: 2532
      },
      {
        titre: "Un agenda de créneaux",
        texte: "Semaine par semaine, le coach ajoute ou retire ses créneaux ; ceux déjà réservés sont verrouillés.",
        image: "/realisations/coachme/22-coach-agenda.webp",
        width: 1170,
        height: 2532
      },
      {
        titre: "Les avis reçus",
        texte: "Note moyenne, répartition des étoiles et commentaires des sportifs.",
        image: "/realisations/coachme/24-coach-avis.webp",
        width: 1170,
        height: 2532
      },
      {
        titre: "Gérer ses offres",
        texte: "Le coach crée ses propres offres : titre, description, durée et prix.",
        image: "/realisations/coachme/26-coach-services.webp",
        width: 1170,
        height: 2532
      }
    ],
    mobiles: [],
    noteMobile: null,
    sousLeCapot: [
      "Expo SDK 55 et expo-router : une base de code pour iOS, Android et le web",
      "Supabase : 12 tables, fonctions RPC (réservation, avis, validation de candidature) et Row Level Security complète",
      "Stripe en capture manuelle via 3 Edge Functions : création du paiement, webhook signé, annulation avec remboursement",
      "Jetons de session chiffrés dans le trousseau du téléphone (SecureStore)",
      "Inscription coach avec pièces justificatives (identité, diplôme) et validation avant mise en ligne",
      "Thème sombre et clair, polices Bebas Neue et DM Sans, suivi d'erreurs Sentry"
    ]
  }
];

export const REALISATION_CATS = [
  { id: 'tous',    label: 'Tous' },
  { id: 'webgl',   label: 'Expériences WebGL' },
  { id: 'vitrine', label: 'Sites vitrine' },
  { id: 'saas',    label: 'SaaS' },
  { id: 'mobile',  label: 'Applications mobiles' },
];
