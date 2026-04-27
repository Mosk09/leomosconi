export type Lang = "es" | "en";

export const translations = {
  es: {
    toggle: { other: "EN" },
    hero: {
      handle: "@leomosconi",
      tags: ["Lifestyle", "Moda", "🇦🇷 · 🇮🇹 · 🇦🇺"],
      tagline: "Argentino. Viví en Italia, hoy en Australia.",
      subtitle: "Lifestyle y moda desde el mundo.",
      cta: "Trabajá conmigo →",
      instagram: "Ver en Instagram ↗",
    },
    stats: {
      eyebrow: "Métricas recientes",
      live: "En vivo",
      items: {
        views: "Views totales",
        reach: "Cuentas alcanzadas",
        growth: "Crecimiento de alcance",
        profileVisits: "Visitas al perfil",
        followers: "Seguidores",
      },
      period: "Período: Mar 21 – Abr 19, 2026",
      periodLive: "Actualizado hace menos de 1 hora",
    },
    services: {
      eyebrow: "Para marcas",
      heading: "¿Qué puedo hacer por tu marca?",
      items: [
        {
          icon: "🎬",
          title: "Reels",
          description:
            "El 81.9% de mis views vienen de Reels. Integración natural con tu marca, storytelling auténtico que engancha desde el primer segundo.",
        },
        {
          icon: "📱",
          title: "Stories",
          description:
            "Formato íntimo y de alta confianza. Ideal para lanzamientos, descuentos o mostrar el behind-the-scenes de tu producto.",
        },
        {
          icon: "🖼️",
          title: "Posts & Carruseles",
          description:
            "Contenido que se guarda y se comparte. Perfecto para comunicar valores de marca o mostrar una colección completa.",
        },
      ],
      audience:
        "Audiencia 25–34 años · 59.9% hombres · Argentina, México, Chile, España",
    },
    contact: {
      eyebrow: "Contacto",
      heading: "¿Trabajamos juntos?",
      subheading:
        "Contame sobre tu marca y lo que buscás. Te respondo en menos de 24 horas.",
      fields: {
        name: "Nombre y marca",
        namePlaceholder: "Ej: María · Marca XYZ",
        email: "Tu email",
        emailPlaceholder: "hola@tumarca.com",
        message: "Mensaje",
        messagePlaceholder:
          "Contame sobre tu marca, el producto y qué tipo de colaboración buscás...",
      },
      submit: "Enviar mensaje →",
      submitted: "¡Abriendo tu correo! ✓",
      alt: "O escribime directo a",
      footer: "© 2026 Leo Mosconi",
    },
  },

  en: {
    toggle: { other: "ES" },
    hero: {
      handle: "@leomosconi",
      tags: ["Lifestyle", "Fashion", "🇦🇷 · 🇮🇹 · 🇦🇺"],
      tagline: "From Argentina. Lived in Italy, now in Australia.",
      subtitle: "Lifestyle and fashion from around the world.",
      cta: "Work with me →",
      instagram: "See on Instagram ↗",
    },
    stats: {
      eyebrow: "Recent metrics",
      live: "Live",
      items: {
        views: "Total views",
        reach: "Accounts reached",
        growth: "Reach growth",
        profileVisits: "Profile visits",
        followers: "Followers",
      },
      period: "Period: Mar 21 – Apr 19, 2026",
      periodLive: "Updated less than 1 hour ago",
    },
    services: {
      eyebrow: "For brands",
      heading: "What can I do for your brand?",
      items: [
        {
          icon: "🎬",
          title: "Reels",
          description:
            "81.9% of my views come from Reels. Natural brand integration, authentic storytelling that hooks from the first second.",
        },
        {
          icon: "📱",
          title: "Stories",
          description:
            "An intimate, high-trust format. Ideal for launches, discounts or showing the behind-the-scenes of your product.",
        },
        {
          icon: "🖼️",
          title: "Posts & Carousels",
          description:
            "Content that gets saved and shared. Perfect for communicating brand values or showcasing a full collection.",
        },
      ],
      audience:
        "Audience aged 25–34 · 59.9% male · Argentina, Mexico, Chile, Spain",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's work together",
      subheading:
        "Tell me about your brand and what you're looking for. I'll reply within 24 hours.",
      fields: {
        name: "Your name & brand",
        namePlaceholder: "E.g: Maria · Brand XYZ",
        email: "Your email",
        emailPlaceholder: "hello@yourbrand.com",
        message: "Message",
        messagePlaceholder:
          "Tell me about your brand, your product and what kind of collaboration you're looking for...",
      },
      submit: "Send message →",
      submitted: "Opening your mail! ✓",
      alt: "Or reach me directly at",
      footer: "© 2026 Leo Mosconi",
    },
  },
} as const;

export type Translations = typeof translations.es;
