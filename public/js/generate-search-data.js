// Générateur dynamique de données de recherche
// Ce fichier génère automatiquement les données de recherche à partir des pages du site

window.generateSearchData = function () {
  const searchData = [];
  const currentLang = getCurrentLanguage();

  // Structure des pages du site (à mettre à jour si vous ajoutez des pages)
  const pages = [
    // Pages principales
    {
      path: "/",
      title: { fr: "Accueil", en: "Home", es: "Inicio" },
      category: "main",
      description: {
        fr: "Page d'accueil du wiki Capitalyx - Découvrez toutes les informations sur le serveur",
        en: "Capitalyx wiki home page - Discover all information about the server",
        es: "Página de inicio del wiki Capitalyx - Descubre toda la información sobre el servidor",
      },
      keywords: [
        "accueil",
        "home",
        "inicio",
        "wiki",
        "capitalyx",
        "serveur",
        "server",
      ],
    },
    {
      path: "/rules",
      title: { fr: "Règlement", en: "Rules", es: "Reglas" },
      category: "rules",
      description: {
        fr: "Règlement complet du serveur Capitalyx - Règles à respecter pour jouer",
        en: "Complete Capitalyx server rules - Rules to follow while playing",
        es: "Reglamento completo del servidor Capitalyx - Reglas a seguir para jugar",
      },
      keywords: [
        "règlement",
        "rules",
        "reglas",
        "règles",
        "lois",
        "sanctions",
        "respect",
      ],
      sections: [
        {
          id: "regles-generales",
          title: {
            fr: "Règles Générales",
            en: "General Rules",
            es: "Reglas Generales",
          },
          keywords: ["général", "general", "respect", "courtoisie", "langage"],
        },
        {
          id: "regles-metiers",
          title: {
            fr: "Règles Métiers",
            en: "Job Rules",
            es: "Reglas de Trabajos",
          },
          keywords: ["métier", "job", "trabajo", "entraide", "collaboration"],
        },
        {
          id: "regles-gameplay",
          title: {
            fr: "Règles de Gameplay",
            en: "Gameplay Rules",
            es: "Reglas de Juego",
          },
          keywords: ["gameplay", "jeu", "game", "griefing", "fair-play"],
        },
        {
          id: "sanctions",
          title: { fr: "Sanctions", en: "Sanctions", es: "Sanciones" },
          keywords: ["sanctions", "ban", "kick", "avertissement", "punition"],
        },
      ],
    },
    {
      path: "/guides",
      title: { fr: "Guides", en: "Guides", es: "Guías" },
      category: "guides",
      description: {
        fr: "Guides complets pour débuter et progresser sur Capitalyx",
        en: "Complete guides to start and progress on Capitalyx",
        es: "Guías completas para comenzar y progresar en Capitalyx",
      },
      keywords: [
        "guides",
        "tutorial",
        "tutoriel",
        "aide",
        "help",
        "débutant",
        "beginner",
      ],
      sections: [
        {
          id: "guides-debutant",
          title: {
            fr: "Guides Débutant",
            en: "Beginner Guides",
            es: "Guías para Principiantes",
          },
          keywords: [
            "débutant",
            "beginner",
            "principiante",
            "commencer",
            "start",
          ],
        },
        {
          id: "zones-activite",
          title: {
            fr: "Zones d'Activité",
            en: "Activity Zones",
            es: "Zonas de Actividad",
          },
          keywords: ["zones", "lieux", "places", "production", "vente"],
        },
        {
          id: "metiers-business",
          title: {
            fr: "Métiers et Business",
            en: "Jobs and Business",
            es: "Trabajos y Negocios",
          },
          keywords: ["métiers", "jobs", "business", "commerce", "trade"],
        },
        {
          id: "communication",
          title: {
            fr: "Communication",
            en: "Communication",
            es: "Comunicación",
          },
          keywords: ["communication", "chat", "voice", "emotes"],
        },
        {
          id: "factions",
          title: { fr: "Factions", en: "Factions", es: "Facciones" },
          keywords: ["factions", "guild", "clan", "groupe", "team"],
        },
      ],
    },
    {
      path: "/jobs",
      title: { fr: "Métiers", en: "Jobs", es: "Trabajos" },
      category: "jobs",
      description: {
        fr: "Liste complète des métiers disponibles sur Capitalyx",
        en: "Complete list of available jobs on Capitalyx",
        es: "Lista completa de trabajos disponibles en Capitalyx",
      },
      keywords: ["métiers", "jobs", "trabajos", "emploi", "travail", "work"],
    },
    {
      path: "/commands",
      title: { fr: "Commandes", en: "Commands", es: "Comandos" },
      category: "commands",
      description: {
        fr: "Liste de toutes les commandes disponibles sur le serveur",
        en: "List of all available commands on the server",
        es: "Lista de todos los comandos disponibles en el servidor",
      },
      keywords: ["commandes", "commands", "comandos", "slash", "chat"],
    },
    {
      path: "/faq",
      title: { fr: "FAQ", en: "FAQ", es: "Preguntas Frecuentes" },
      category: "faq",
      description: {
        fr: "Questions fréquemment posées sur Capitalyx",
        en: "Frequently asked questions about Capitalyx",
        es: "Preguntas frecuentes sobre Capitalyx",
      },
      keywords: ["faq", "questions", "answers", "réponses", "aide", "help"],
    },

    // Métiers individuels
    {
      path: "/jobs/busdriver",
      title: {
        fr: "Chauffeur de Bus",
        en: "Bus Driver",
        es: "Conductor de Autobús",
      },
      category: "jobs",
      description: {
        fr: "Transport public sur les lignes de bus - Gagnez des bonus pour la ponctualité",
        en: "Public transport on bus lines - Earn bonuses for punctuality",
        es: "Transporte público en líneas de autobús - Gana bonificaciones por puntualidad",
      },
      keywords: [
        "bus",
        "chauffeur",
        "driver",
        "conductor",
        "transport",
        "public",
      ],
    },
    {
      path: "/jobs/cab",
      title: { fr: "Chauffeur de Taxi", en: "Taxi Driver", es: "Taxista" },
      category: "jobs",
      description: {
        fr: "Transportez des passagers - Revenus réguliers et tips des clients",
        en: "Transport passengers - Regular income and customer tips",
        es: "Transporta pasajeros - Ingresos regulares y propinas de clientes",
      },
      keywords: [
        "taxi",
        "cab",
        "chauffeur",
        "driver",
        "passagers",
        "passengers",
      ],
    },
    {
      path: "/jobs/courier",
      title: { fr: "Livreur", en: "Courier", es: "Mensajero" },
      category: "jobs",
      description: {
        fr: "Livraison rapide de colis - Plus vous êtes rapide, plus vous gagnez",
        en: "Fast package delivery - The faster you are, the more you earn",
        es: "Entrega rápida de paquetes - Cuanto más rápido seas, más ganas",
      },
      keywords: [
        "livreur",
        "courier",
        "mensajero",
        "delivery",
        "colis",
        "package",
      ],
    },
    {
      path: "/jobs/ems",
      title: {
        fr: "Services d'Urgence (EMS)",
        en: "Emergency Services (EMS)",
        es: "Servicios de Emergencia (EMS)",
      },
      category: "jobs",
      description: {
        fr: "Services médicaux d'urgence - Sauvez des vies",
        en: "Emergency medical services - Save lives",
        es: "Servicios médicos de emergencia - Salva vidas",
      },
      keywords: [
        "ems",
        "urgence",
        "emergency",
        "médical",
        "medical",
        "ambulance",
        "paramedic",
      ],
    },
    {
      path: "/jobs/helicopterdriver",
      title: {
        fr: "Pilote d'Hélicoptère",
        en: "Helicopter Pilot",
        es: "Piloto de Helicóptero",
      },
      category: "jobs",
      description: {
        fr: "Missions aériennes spécialisées - Transport VIP et livraisons express",
        en: "Specialized air missions - VIP transport and express deliveries",
        es: "Misiones aéreas especializadas - Transporte VIP y entregas express",
      },
      keywords: [
        "hélicoptère",
        "helicopter",
        "helicóptero",
        "pilote",
        "pilot",
        "aérien",
        "heli",
      ],
    },
    {
      path: "/jobs/trainconductor",
      title: {
        fr: "Conducteur de Train",
        en: "Train Conductor",
        es: "Conductor de Tren",
      },
      category: "jobs",
      description: {
        fr: "Transport ferroviaire de marchandises et passagers",
        en: "Railway transport of goods and passengers",
        es: "Transporte ferroviario de mercancías y pasajeros",
      },
      keywords: [
        "train",
        "tren",
        "conducteur",
        "conductor",
        "ferroviaire",
        "railway",
      ],
    },
  ];

  // Générer les données de recherche
  pages.forEach((page) => {
    const lang = currentLang || "fr";

    // Ajouter la page principale
    const mainEntry = {
      title: typeof page.title === "string" ? page.title : page.title[lang],
      category: page.category,
      description:
        typeof page.description === "string"
          ? page.description
          : page.description[lang],
      url: getLocalizedPath(page.path, lang),
      keywords: page.keywords || [],
    };
    searchData.push(mainEntry);

    // Ajouter les sections si elles existent
    if (page.sections) {
      page.sections.forEach((section) => {
        const sectionEntry = {
          title:
            typeof section.title === "string"
              ? section.title
              : section.title[lang],
          category: page.category,
          description:
            typeof page.description === "string"
              ? page.description
              : page.description[lang],
          url: getLocalizedPath(page.path, lang) + "#" + section.id,
          keywords: [...(page.keywords || []), ...(section.keywords || [])],
        };
        searchData.push(sectionEntry);
      });
    }
  });

  return searchData;
};

// Fonction pour obtenir le chemin localisé
function getLocalizedPath(path, lang) {
  if (lang === "fr" || !lang) {
    return path;
  }
  return "/" + lang + path;
}

// Fonction pour obtenir la langue actuelle
function getCurrentLanguage() {
  const path = window.location.pathname;
  if (path.startsWith("/en/") || path === "/en") return "en";
  if (path.startsWith("/es/") || path === "/es") return "es";
  return "fr";
}

// Initialiser les données de recherche au chargement
if (typeof window !== "undefined") {
  window.searchData = window.generateSearchData();

  // Recharger les données si la langue change
  let lastLang = getCurrentLanguage();
  setInterval(() => {
    const currentLang = getCurrentLanguage();
    if (currentLang !== lastLang) {
      window.searchData = window.generateSearchData();
      lastLang = currentLang;
    }
  }, 500);
}

// Fonction utilitaire pour obtenir le nom de catégorie localisé
window.getCategoryName = function (category) {
  const lang = getCurrentLanguage();
  const names = {
    main: { fr: "Principal", en: "Main", es: "Principal" },
    rules: { fr: "Règlement", en: "Rules", es: "Reglas" },
    guides: { fr: "Guides", en: "Guides", es: "Guías" },
    jobs: { fr: "Métiers", en: "Jobs", es: "Trabajos" },
    commands: { fr: "Commandes", en: "Commands", es: "Comandos" },
    faq: { fr: "FAQ", en: "FAQ", es: "Preguntas Frecuentes" },
  };
  return names[category] ? names[category][lang] : category;
};

// Fonction utilitaire pour obtenir l'icône selon la catégorie
window.getCategoryIcon = function (category) {
  const icons = {
    rules: "fas fa-gavel",
    guides: "fas fa-book-open",
    jobs: "fas fa-briefcase",
    commands: "fas fa-terminal",
    faq: "fas fa-question-circle",
    main: "fas fa-home",
  };
  return icons[category] || "fas fa-file-alt";
};
