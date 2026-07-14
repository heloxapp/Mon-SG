// ============================================================
// DONNÉES DE L'APPLICATION — MODIFIER ICI IMAGES ET TEXTES
// ============================================================

const appData = {
  // --- GÉNÉRAL ---
  appName: "Mon SG",
  appTagline: {
    fr: "Votre village au creux de la main.",
    en: "Your village in the palm of your hand."
  },
  logo: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=80&h=80&fit=crop", // Remplacez par votre logo

  // --- ÉCRAN D'INSTALLATION ---
  install: {
    title: { fr: "Bienvenue sur Mon SG", en: "Welcome to Mon SG" },
    subtitle: {
      fr: "Installez l'application pour une expérience complète.",
      en: "Install the app for the full experience."
    },
    ios: {
      fr: "Appuyez sur Partager puis \"Sur l'écran d'accueil\" .",
      en: "Tap Share then \"Add to Home Screen\"."
    },
    android: {
      fr: "Menu (⋮) puis \"Installer l'application\".",
      en: "Menu (⋮) then \"Install app\"."
    }
  },

  // --- 1. ACCUEIL ---
  home: {
    welcome: {
      fr: "Mon SG : Votre village au creux de la main.",
      en: "Mon SG: Your village in the palm of your hand."
    },
    introText: {
      fr: "Découvrez Saint-Germain-les-Belles, village historique au cœur de la Haute-Vienne, niché entre les vallons verdoyants du Limousin.",
      en: "Discover Saint-Germain-les-Belles, a historic village in the heart of Haute-Vienne, nestled among the green hills of Limousin."
    }
  },

  // --- 2. AGENDA LOCAL ---
  agenda: {
    filters: {
      all: { fr: "Tout", en: "All" },
      fetes: { fr: "Fêtes", en: "Festivals" },
      marches: { fr: "Marchés", en: "Markets" },
      sports: { fr: "Sports", en: "Sports" }
    },
    events: [
      {
        title: { fr: "Marché hebdomadaire", en: "Weekly Market" },
        description: {
          fr: "Tous les jeudis matin, Place de l'Église. Produits locaux, fromages, fruits et légumes de saison.",
          en: "Every Thursday morning, Place de l'Église. Local products, cheeses, seasonal fruits and vegetables."
        },
        date: { fr: "Tous les jeudis", en: "Every Thursday" },
        location: { fr: "Place de l'Église", en: "Church Square" },
        category: "marches",
        icon: "🧺"
      },
      {
        title: { fr: "Concours de Pétanque", en: "Pétanque Tournament" },
        description: {
          fr: "Régulièrement au Plan d'Eau de Montréal. Ouvert à tous, ambiance conviviale.",
          en: "Regularly at Plan d'Eau de Montréal. Open to all, friendly atmosphere."
        },
        date: { fr: "Dates régulières", en: "Regular dates" },
        location: { fr: "Plan d'Eau de Montréal", en: "Montréal Lake" },
        category: "sports",
        icon: "🏆"
      },
      {
        title: { fr: "Vide-grenier annuel", en: "Annual Flea Market" },
        description: {
          fr: "Le grand rendez-vous des chineurs. Dates à confirmer.",
          en: "The great meeting for bargain hunters. Dates to be confirmed."
        },
        date: { fr: "Date à confirmer", en: "Date to be confirmed" },
        location: { fr: "Centre-Bourg", en: "Town Center" },
        category: "fetes",
        icon: "🎪"
      }
    ]
  },

  // --- 3. COMMERCES & SERVICES ---
  commerces: {
    title: { fr: "Commerces & Services", en: "Shops & Services" },
    items: [
      {
        name: "Nul Bar Ailleurs",
        type: { fr: "Bar, Tabac, Presse, Pizzas", en: "Bar, Tobacco, Press, Pizzas" },
        address: "10 Rue Claude Debussy",
        phone: "05 55 71 80 13",
        icon: "🍕"
      },
      {
        name: "Boulangerie Pâtisserie Brunel",
        type: { fr: "Boulangerie, Pâtisserie", en: "Bakery, Pastry Shop" },
        address: "6 Rue de Leycuras",
        phone: "05 55 71 81 21",
        icon: "🥐"
      },
      {
        name: { fr: "Mairie de SGB", en: "Town Hall of SGB" },
        type: { fr: "Administration", en: "Administration" },
        address: "1 Place de l'Église",
        phone: "05 55 71 80 06",
        hours: { fr: "Lun-Ven 9h-12h", en: "Mon-Fri 9am-12pm" },
        icon: "🏛️"
      },
      {
        name: { fr: "Office de Tourisme", en: "Tourist Office" },
        type: { fr: "Tourisme, Information", en: "Tourism, Information" },
        address: "Place de l'Église",
        phone: "05 55 71 88 65",
        icon: "ℹ️"
      },
      {
        name: { fr: "Station Service / Garage", en: "Gas Station / Garage" },
        type: { fr: "Carburant, Réparation", en: "Fuel, Repair" },
        address: "Saint-Germain-les-Belles",
        phone: null,
        icon: "⛽"
      }
    ]
  },

  // --- 4. TRANSPORTS & ÉLECTRIQUE ---
  transports: {
    title: { fr: "Transports", en: "Transport" },
    train: {
      name: { fr: "Gare TER", en: "TER Train Station" },
      line: { fr: "Ligne Limoges — Brive", en: "Limoges — Brive Line" },
      link: "https://www.sncf-connect.com/",
      linkLabel: { fr: "Horaires SNCF Connect", en: "SNCF Connect Timetable" }
    },
    electric: {
      name: { fr: "Bornes Voitures Électriques", en: "Electric Vehicle Charging" },
      location: { fr: "Avenue de la Gare", en: "Avenue de la Gare" }
    }
  },

  // --- 5. PATRIMOINE ---
  patrimoine: {
    title: { fr: "Patrimoine", en: "Heritage" },
    items: [
      {
        name: { fr: "La Collégiale Fortifiée", en: "The Fortified Collegiate Church" },
        description: {
          fr: "Monument remarquable du XIVe siècle, cette église fortifiée est le joyau architectural de Saint-Germain-les-Belles.",
          en: "A remarkable 14th-century monument, this fortified church is the architectural jewel of Saint-Germain-les-Belles."
        },
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        icon: "⛪"
      },
      {
        name: { fr: "Plan d'Eau de Montréal", en: "Montréal Lake" },
        description: {
          fr: "Baignade surveillée en été, pêche, camping et sentiers de promenade dans un cadre naturel préservé.",
          en: "Supervised swimming in summer, fishing, camping and walking trails in a preserved natural setting."
        },
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
        icon: "🏊"
      },
      {
        name: { fr: "L'Hôtel de la Boule d'Or", en: "The Boule d'Or Hotel" },
        description: {
          fr: "Bâtisse historique emblématique du village, témoin de l'histoire hôtelière de Saint-Germain-les-Belles.",
          en: "Iconic historic building of the village, a witness to the hotel history of Saint-Germain-les-Belles."
        },
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
        icon: "🏨"
      }
    ]
  },

  // --- 6. URGENCES ---
  urgences: {
    title: { fr: "Urgences", en: "Emergency" },
    items: [
      {
        name: { fr: "Pharmacie des Écoles", en: "Pharmacie des Écoles" },
        type: { fr: "Pharmacie", en: "Pharmacy" },
        address: "1 Route de Leycuras",
        phone: "05 55 71 80 19",
        icon: "💊"
      },
      {
        name: { fr: "Cabinet Médical", en: "Medical Office" },
        subtitle: "Drs Royère / Léon",
        address: "1 Place de la Mairie",
        phone: "05 55 71 80 63",
        icon: "🩺"
      },
      {
        name: { fr: "Cabinet Kiné", en: "Physiotherapy Office" },
        subtitle: "Barrot / Dubois",
        address: "1 Route de Leycuras",
        phone: "05 55 71 86 52",
        icon: "💆"
      },
      {
        name: { fr: "Pompiers", en: "Fire Department" },
        phone: "18",
        icon: "🚒",
        isEmergency: true
      },
      {
        name: { fr: "Gendarmerie", en: "Police" },
        phone: "17",
        phoneAlt: "05 55 71 80 05",
        icon: "🚔",
        isEmergency: true
      }
    ]
  }
};

export default appData;