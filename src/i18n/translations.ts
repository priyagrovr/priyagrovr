export const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "pa", label: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
] as const;

export type LangCode = (typeof languages)[number]["code"];

export interface Translations {
  // Navbar
  nav_about: string;
  nav_skills: string;
  nav_projects: string;
  nav_experience: string;
  nav_education: string;
  nav_testimonials: string;
  nav_gallery: string;
  nav_contact: string;

  // Emergency Banner
  banner_text: string;
  banner_cta: string;

  // Hero
  hero_subtitle: string;
  hero_greeting: string;
  hero_view_work: string;
  hero_resume: string;

  // About
  about_title: string;
  about_me: string;
  about_get_in_touch: string;
  about_download_cv: string;
  about_years: string;
  about_experience_label: string;
  about_projects_count: string;
  about_projects_label: string;
  about_degree: string;
  about_degree_label: string;

  // Skills
  skills_title: string;
  skills_tech: string;
  skills_subtitle: string;
  skills_cat_frontend: string;
  skills_cat_backend: string;
  skills_cat_ai: string;
  skills_cat_database: string;
  skills_cat_devops: string;
  skills_cat_tools: string;

  // Projects
  projects_title: string;
  projects_featured: string;
  projects_code: string;
  projects_live_demo: string;
  projects_subtitle: string;

  // Experience
  experience_title: string;
  experience_work: string;
  experience_subtitle: string;

  // Education
  education_title: string;
  education_and: string;
  education_certifications: string;

  // Testimonials
  testimonials_title: string;
  testimonials_what: string;
  testimonials_subtitle: string;

  // Gallery
  gallery_title: string;
  gallery_my: string;
  gallery_subtitle: string;
  gallery_no_items: string;

  // GitHub Stats
  github_title: string;
  github_stats: string;
  github_contributions: string;
  github_stars: string;
  github_pull_requests: string;
  github_repositories: string;
  github_activity: string;
  github_last_12: string;
  github_less: string;
  github_more: string;

  // Contact
  contact_title: string;
  contact_get_in: string;
  contact_email_label: string;
  contact_social: string;
  contact_description: string;
  contact_name: string;
  contact_email: string;
  contact_message: string;
  contact_send: string;
  contact_sent: string;

  // Footer
  footer_rights: string;
  footer_made_with: string;
  footer_by: string;

  // WhatsApp
  whatsapp_tooltip: string;

  // Google Maps
  map_title: string;
  map_location: string;
}

const en: Translations = {
  nav_about: "About",
  nav_skills: "Skills",
  nav_projects: "Projects",
  nav_experience: "Experience",
  nav_education: "Education",
  nav_testimonials: "Testimonials",
  nav_gallery: "Gallery",
  nav_contact: "Contact",

  banner_text: "Available for freelance projects & collaborations!",
  banner_cta: "Hire Me",

  hero_subtitle: "AI-Powered Full Stack Developer \u00b7 Freelancer",
  hero_greeting: "Hi, I'm",
  hero_view_work: "View My Work",
  hero_resume: "Resume",

  about_title: "About",
  about_me: "Me",
  about_get_in_touch: "Get in Touch",
  about_download_cv: "Download CV",
  about_years: "13+ Years",
  about_experience_label: "Experience",
  about_projects_count: "50+",
  about_projects_label: "Projects",
  about_degree: "MCA",
  about_degree_label: "Degree",

  skills_title: "Tech",
  skills_tech: "Stack",
  skills_subtitle: "Technologies and tools I work with daily",
  skills_cat_frontend: "Frontend",
  skills_cat_backend: "Backend",
  skills_cat_ai: "AI & LLM",
  skills_cat_database: "Database",
  skills_cat_devops: "DevOps & Cloud",
  skills_cat_tools: "Tools",

  projects_title: "Featured",
  projects_featured: "Projects",
  projects_code: "Code",
  projects_live_demo: "Live Demo",
  projects_subtitle: "A selection of projects I've built and contributed to",

  experience_title: "Work",
  experience_work: "Experience",
  experience_subtitle: "13+ years of building production-ready applications",

  education_title: "Education &",
  education_and: "Certifications",
  education_certifications: "Certifications",

  testimonials_title: "What",
  testimonials_what: "People Say",
  testimonials_subtitle: "Recommendations from people I've worked with",

  gallery_title: "My",
  gallery_my: "Gallery",
  gallery_subtitle: "Visual showcase of projects and designs",
  gallery_no_items: "No items in this category yet.",

  github_title: "GitHub",
  github_stats: "Stats",
  github_contributions: "Contributions",
  github_stars: "Stars Earned",
  github_pull_requests: "Pull Requests",
  github_repositories: "Repositories",
  github_activity: "Contribution Activity",
  github_last_12: "Last 12 months",
  github_less: "Less",
  github_more: "More",

  contact_title: "Get in",
  contact_get_in: "Touch",
  contact_email_label: "Email",
  contact_social: "Social",
  contact_description:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  contact_name: "Your Name",
  contact_email: "Your Email",
  contact_message: "Your Message",
  contact_send: "Send Message",
  contact_sent: "Message Sent!",

  footer_rights: "All rights reserved.",
  footer_made_with: "Made with",
  footer_by: "by",

  whatsapp_tooltip: "Chat on WhatsApp",

  map_title: "My",
  map_location: "Location",
};

const fr: Translations = {
  nav_about: "A propos",
  nav_skills: "Compétences",
  nav_projects: "Projets",
  nav_experience: "Expérience",
  nav_education: "Formation",
  nav_testimonials: "Témoignages",
  nav_gallery: "Galerie",
  nav_contact: "Contact",

  banner_text: "Disponible pour des projets freelance et collaborations !",
  banner_cta: "Engagez-moi",

  hero_subtitle: "Développeuse Full Stack IA \u00b7 Freelance",
  hero_greeting: "Bonjour, je suis",
  hero_view_work: "Voir mes projets",
  hero_resume: "CV",

  about_title: "A",
  about_me: "Propos",
  about_get_in_touch: "Me contacter",
  about_download_cv: "Télécharger le CV",
  about_years: "13+ Ans",
  about_experience_label: "Expérience",
  about_projects_count: "50+",
  about_projects_label: "Projets",
  about_degree: "MCA",
  about_degree_label: "Diplôme",

  skills_title: "Stack",
  skills_tech: "Technique",
  skills_subtitle: "Technologies et outils que j'utilise au quotidien",
  skills_cat_frontend: "Frontend",
  skills_cat_backend: "Backend",
  skills_cat_ai: "IA & LLM",
  skills_cat_database: "Base de données",
  skills_cat_devops: "DevOps & Cloud",
  skills_cat_tools: "Outils",

  projects_title: "Projets",
  projects_featured: "Phares",
  projects_code: "Code",
  projects_live_demo: "Démo",
  projects_subtitle: "Une sélection de projets que j'ai construits et auxquels j'ai contribué",

  experience_title: "Expérience",
  experience_work: "Professionnelle",
  experience_subtitle:
    "Plus de 13 ans de développement d'applications prêtes pour la production",

  education_title: "Formation &",
  education_and: "Certifications",
  education_certifications: "Certifications",

  testimonials_title: "Ce que",
  testimonials_what: "les gens disent",
  testimonials_subtitle: "Recommandations de personnes avec qui j'ai travaillé",

  gallery_title: "Ma",
  gallery_my: "Galerie",
  gallery_subtitle: "Vitrine visuelle de projets et designs",
  gallery_no_items: "Aucun élément dans cette catégorie pour le moment.",

  github_title: "Statistiques",
  github_stats: "GitHub",
  github_contributions: "Contributions",
  github_stars: "Étoiles",
  github_pull_requests: "Pull Requests",
  github_repositories: "Dépôts",
  github_activity: "Activité de contribution",
  github_last_12: "12 derniers mois",
  github_less: "Moins",
  github_more: "Plus",

  contact_title: "Prendre",
  contact_get_in: "Contact",
  contact_email_label: "E-mail",
  contact_social: "Réseaux sociaux",
  contact_description:
    "Je suis toujours ouverte pour discuter de nouveaux projets, idées créatives ou opportunités.",
  contact_name: "Votre nom",
  contact_email: "Votre e-mail",
  contact_message: "Votre message",
  contact_send: "Envoyer",
  contact_sent: "Message envoyé !",

  footer_rights: "Tous droits réservés.",
  footer_made_with: "Fait avec",
  footer_by: "par",

  whatsapp_tooltip: "Discuter sur WhatsApp",

  map_title: "Ma",
  map_location: "Localisation",
};

const de: Translations = {
  nav_about: "Über mich",
  nav_skills: "Fähigkeiten",
  nav_projects: "Projekte",
  nav_experience: "Erfahrung",
  nav_education: "Ausbildung",
  nav_testimonials: "Referenzen",
  nav_gallery: "Galerie",
  nav_contact: "Kontakt",

  banner_text: "Verfügbar für Freelance-Projekte und Zusammenarbeit!",
  banner_cta: "Kontaktieren",

  hero_subtitle: "KI-gestützte Full-Stack-Entwicklerin \u00b7 Freelancerin",
  hero_greeting: "Hallo, ich bin",
  hero_view_work: "Meine Arbeit",
  hero_resume: "Lebenslauf",

  about_title: "Über",
  about_me: "Mich",
  about_get_in_touch: "Kontakt aufnehmen",
  about_download_cv: "CV herunterladen",
  about_years: "13+ Jahre",
  about_experience_label: "Erfahrung",
  about_projects_count: "50+",
  about_projects_label: "Projekte",
  about_degree: "MCA",
  about_degree_label: "Abschluss",

  skills_title: "Tech",
  skills_tech: "Stack",
  skills_subtitle: "Technologien und Werkzeuge, mit denen ich täglich arbeite",
  skills_cat_frontend: "Frontend",
  skills_cat_backend: "Backend",
  skills_cat_ai: "KI & LLM",
  skills_cat_database: "Datenbank",
  skills_cat_devops: "DevOps & Cloud",
  skills_cat_tools: "Werkzeuge",

  projects_title: "Ausgewählte",
  projects_featured: "Projekte",
  projects_code: "Code",
  projects_live_demo: "Live-Demo",
  projects_subtitle: "Eine Auswahl von Projekten, die ich gebaut und mitgestaltet habe",

  experience_title: "Berufs",
  experience_work: "erfahrung",
  experience_subtitle:
    "Über 13 Jahre Erfahrung in der Entwicklung produktionsreifer Anwendungen",

  education_title: "Ausbildung &",
  education_and: "Zertifikate",
  education_certifications: "Zertifikate",

  testimonials_title: "Was",
  testimonials_what: "andere sagen",
  testimonials_subtitle: "Empfehlungen von Personen, mit denen ich zusammengearbeitet habe",

  gallery_title: "Meine",
  gallery_my: "Galerie",
  gallery_subtitle: "Visuelle Präsentation von Projekten und Designs",
  gallery_no_items: "Noch keine Einträge in dieser Kategorie.",

  github_title: "GitHub",
  github_stats: "Statistiken",
  github_contributions: "Beiträge",
  github_stars: "Sterne",
  github_pull_requests: "Pull Requests",
  github_repositories: "Repositories",
  github_activity: "Beitragsaktivität",
  github_last_12: "Letzte 12 Monate",
  github_less: "Weniger",
  github_more: "Mehr",

  contact_title: "Kontakt",
  contact_get_in: "aufnehmen",
  contact_email_label: "E-Mail",
  contact_social: "Soziale Medien",
  contact_description:
    "Ich freue mich immer über neue Projekte, kreative Ideen oder Möglichkeiten zur Zusammenarbeit.",
  contact_name: "Ihr Name",
  contact_email: "Ihre E-Mail",
  contact_message: "Ihre Nachricht",
  contact_send: "Senden",
  contact_sent: "Nachricht gesendet!",

  footer_rights: "Alle Rechte vorbehalten.",
  footer_made_with: "Gemacht mit",
  footer_by: "von",

  whatsapp_tooltip: "Auf WhatsApp chatten",

  map_title: "Mein",
  map_location: "Standort",
};

const es: Translations = {
  nav_about: "Sobre mí",
  nav_skills: "Habilidades",
  nav_projects: "Proyectos",
  nav_experience: "Experiencia",
  nav_education: "Educación",
  nav_testimonials: "Testimonios",
  nav_gallery: "Galería",
  nav_contact: "Contacto",

  banner_text: "¡Disponible para proyectos freelance y colaboraciones!",
  banner_cta: "Contrátame",

  hero_subtitle: "Desarrolladora Full Stack con IA \u00b7 Freelancer",
  hero_greeting: "Hola, soy",
  hero_view_work: "Ver mi trabajo",
  hero_resume: "Currículum",

  about_title: "Sobre",
  about_me: "Mí",
  about_get_in_touch: "Contactar",
  about_download_cv: "Descargar CV",
  about_years: "13+ Años",
  about_experience_label: "Experiencia",
  about_projects_count: "50+",
  about_projects_label: "Proyectos",
  about_degree: "MCA",
  about_degree_label: "Título",

  skills_title: "Stack",
  skills_tech: "Tecnológico",
  skills_subtitle: "Tecnologías y herramientas con las que trabajo a diario",
  skills_cat_frontend: "Frontend",
  skills_cat_backend: "Backend",
  skills_cat_ai: "IA & LLM",
  skills_cat_database: "Base de datos",
  skills_cat_devops: "DevOps & Cloud",
  skills_cat_tools: "Herramientas",

  projects_title: "Proyectos",
  projects_featured: "Destacados",
  projects_code: "Código",
  projects_live_demo: "Demo",
  projects_subtitle: "Una selección de proyectos que he construido y a los que he contribuido",

  experience_title: "Experiencia",
  experience_work: "Laboral",
  experience_subtitle:
    "Más de 13 años desarrollando aplicaciones listas para producción",

  education_title: "Educación y",
  education_and: "Certificaciones",
  education_certifications: "Certificaciones",

  testimonials_title: "Lo que",
  testimonials_what: "dicen de mí",
  testimonials_subtitle: "Recomendaciones de personas con las que he trabajado",

  gallery_title: "Mi",
  gallery_my: "Galería",
  gallery_subtitle: "Muestra visual de proyectos y diseños",
  gallery_no_items: "Aún no hay elementos en esta categoría.",

  github_title: "Estadísticas",
  github_stats: "GitHub",
  github_contributions: "Contribuciones",
  github_stars: "Estrellas",
  github_pull_requests: "Pull Requests",
  github_repositories: "Repositorios",
  github_activity: "Actividad de contribución",
  github_last_12: "Últimos 12 meses",
  github_less: "Menos",
  github_more: "Más",

  contact_title: "Ponerse en",
  contact_get_in: "Contacto",
  contact_email_label: "Correo",
  contact_social: "Redes sociales",
  contact_description:
    "Siempre estoy abierta a discutir nuevos proyectos, ideas creativas u oportunidades de colaboración.",
  contact_name: "Tu nombre",
  contact_email: "Tu correo",
  contact_message: "Tu mensaje",
  contact_send: "Enviar",
  contact_sent: "¡Mensaje enviado!",

  footer_rights: "Todos los derechos reservados.",
  footer_made_with: "Hecho con",
  footer_by: "por",

  whatsapp_tooltip: "Chatear en WhatsApp",

  map_title: "Mi",
  map_location: "Ubicación",
};

const nl: Translations = {
  nav_about: "Over mij",
  nav_skills: "Vaardigheden",
  nav_projects: "Projecten",
  nav_experience: "Ervaring",
  nav_education: "Opleiding",
  nav_testimonials: "Getuigenissen",
  nav_gallery: "Galerij",
  nav_contact: "Contact",

  banner_text: "Beschikbaar voor freelance projecten en samenwerkingen!",
  banner_cta: "Neem contact op",

  hero_subtitle: "AI-aangedreven Full Stack Developer \u00b7 Freelancer",
  hero_greeting: "Hallo, ik ben",
  hero_view_work: "Bekijk mijn werk",
  hero_resume: "CV",

  about_title: "Over",
  about_me: "Mij",
  about_get_in_touch: "Neem contact op",
  about_download_cv: "CV downloaden",
  about_years: "13+ Jaar",
  about_experience_label: "Ervaring",
  about_projects_count: "50+",
  about_projects_label: "Projecten",
  about_degree: "MCA",
  about_degree_label: "Diploma",

  skills_title: "Tech",
  skills_tech: "Stack",
  skills_subtitle: "Technologieën en tools waarmee ik dagelijks werk",
  skills_cat_frontend: "Frontend",
  skills_cat_backend: "Backend",
  skills_cat_ai: "AI & LLM",
  skills_cat_database: "Database",
  skills_cat_devops: "DevOps & Cloud",
  skills_cat_tools: "Hulpmiddelen",

  projects_title: "Uitgelichte",
  projects_featured: "Projecten",
  projects_code: "Code",
  projects_live_demo: "Live Demo",
  projects_subtitle: "Een selectie van projecten die ik heb gebouwd en waaraan ik heb bijgedragen",

  experience_title: "Werk",
  experience_work: "ervaring",
  experience_subtitle:
    "Meer dan 13 jaar ervaring met het bouwen van productie-klare applicaties",

  education_title: "Opleiding &",
  education_and: "Certificeringen",
  education_certifications: "Certificeringen",

  testimonials_title: "Wat",
  testimonials_what: "mensen zeggen",
  testimonials_subtitle: "Aanbevelingen van mensen met wie ik heb samengewerkt",

  gallery_title: "Mijn",
  gallery_my: "Galerij",
  gallery_subtitle: "Visuele presentatie van projecten en ontwerpen",
  gallery_no_items: "Nog geen items in deze categorie.",

  github_title: "GitHub",
  github_stats: "Statistieken",
  github_contributions: "Bijdragen",
  github_stars: "Sterren",
  github_pull_requests: "Pull Requests",
  github_repositories: "Repositories",
  github_activity: "Bijdrageactiviteit",
  github_last_12: "Laatste 12 maanden",
  github_less: "Minder",
  github_more: "Meer",

  contact_title: "Neem",
  contact_get_in: "Contact op",
  contact_email_label: "E-mail",
  contact_social: "Sociale media",
  contact_description:
    "Ik sta altijd open voor nieuwe projecten, creatieve ideeën of samenwerkingsmogelijkheden.",
  contact_name: "Uw naam",
  contact_email: "Uw e-mail",
  contact_message: "Uw bericht",
  contact_send: "Versturen",
  contact_sent: "Bericht verzonden!",

  footer_rights: "Alle rechten voorbehouden.",
  footer_made_with: "Gemaakt met",
  footer_by: "door",

  whatsapp_tooltip: "Chat op WhatsApp",

  map_title: "Mijn",
  map_location: "Locatie",
};

const it: Translations = {
  nav_about: "Chi sono",
  nav_skills: "Competenze",
  nav_projects: "Progetti",
  nav_experience: "Esperienza",
  nav_education: "Formazione",
  nav_testimonials: "Testimonianze",
  nav_gallery: "Galleria",
  nav_contact: "Contatti",

  banner_text: "Disponibile per progetti freelance e collaborazioni!",
  banner_cta: "Contattami",

  hero_subtitle: "Sviluppatrice Full Stack AI \u00b7 Freelancer",
  hero_greeting: "Ciao, sono",
  hero_view_work: "Vedi i miei lavori",
  hero_resume: "Curriculum",

  about_title: "Chi",
  about_me: "Sono",
  about_get_in_touch: "Contattami",
  about_download_cv: "Scarica CV",
  about_years: "13+ Anni",
  about_experience_label: "Esperienza",
  about_projects_count: "50+",
  about_projects_label: "Progetti",
  about_degree: "MCA",
  about_degree_label: "Laurea",

  skills_title: "Stack",
  skills_tech: "Tecnologico",
  skills_subtitle: "Tecnologie e strumenti con cui lavoro ogni giorno",
  skills_cat_frontend: "Frontend",
  skills_cat_backend: "Backend",
  skills_cat_ai: "IA & LLM",
  skills_cat_database: "Database",
  skills_cat_devops: "DevOps & Cloud",
  skills_cat_tools: "Strumenti",

  projects_title: "Progetti",
  projects_featured: "in Evidenza",
  projects_code: "Codice",
  projects_live_demo: "Demo",
  projects_subtitle: "Una selezione di progetti che ho costruito e a cui ho contribuito",

  experience_title: "Esperienza",
  experience_work: "Lavorativa",
  experience_subtitle:
    "Oltre 13 anni di sviluppo di applicazioni pronte per la produzione",

  education_title: "Formazione e",
  education_and: "Certificazioni",
  education_certifications: "Certificazioni",

  testimonials_title: "Cosa",
  testimonials_what: "dicono di me",
  testimonials_subtitle: "Raccomandazioni da persone con cui ho lavorato",

  gallery_title: "La mia",
  gallery_my: "Galleria",
  gallery_subtitle: "Vetrina visiva di progetti e design",
  gallery_no_items: "Nessun elemento in questa categoria ancora.",

  github_title: "Statistiche",
  github_stats: "GitHub",
  github_contributions: "Contributi",
  github_stars: "Stelle",
  github_pull_requests: "Pull Request",
  github_repositories: "Repository",
  github_activity: "Attività contributiva",
  github_last_12: "Ultimi 12 mesi",
  github_less: "Meno",
  github_more: "Più",

  contact_title: "Mettiti in",
  contact_get_in: "Contatto",
  contact_email_label: "E-mail",
  contact_social: "Social",
  contact_description:
    "Sono sempre aperta a discutere nuovi progetti, idee creative o opportunità di collaborazione.",
  contact_name: "Il tuo nome",
  contact_email: "La tua email",
  contact_message: "Il tuo messaggio",
  contact_send: "Invia",
  contact_sent: "Messaggio inviato!",

  footer_rights: "Tutti i diritti riservati.",
  footer_made_with: "Fatto con",
  footer_by: "da",

  whatsapp_tooltip: "Chatta su WhatsApp",

  map_title: "La mia",
  map_location: "Posizione",
};

const hi: Translations = {
  nav_about: "परिचय",
  nav_skills: "कौशल",
  nav_projects: "प्रोजेक्ट्स",
  nav_experience: "अनुभव",
  nav_education: "शिक्षा",
  nav_testimonials: "प्रशंसापत्र",
  nav_gallery: "गैलरी",
  nav_contact: "संपर्क",

  banner_text: "फ्रीलांस प्रोजेक्ट्स और सहयोग के लिए उपलब्ध!",
  banner_cta: "मुझे हायर करें",

  hero_subtitle: "AI-संचालित फुल स्टैक डेवलपर \u00b7 फ्रीलांसर",
  hero_greeting: "नमस्ते, मैं हूँ",
  hero_view_work: "मेरा काम देखें",
  hero_resume: "रेज़्यूमे",

  about_title: "मेरे",
  about_me: "बारे में",
  about_get_in_touch: "संपर्क करें",
  about_download_cv: "CV डाउनलोड करें",
  about_years: "13+ वर्ष",
  about_experience_label: "अनुभव",
  about_projects_count: "50+",
  about_projects_label: "प्रोजेक्ट्स",
  about_degree: "MCA",
  about_degree_label: "डिग्री",

  skills_title: "टेक",
  skills_tech: "स्टैक",
  skills_subtitle: "तकनीकें और उपकरण जिनका मैं दैनिक उपयोग करती हूँ",
  skills_cat_frontend: "फ्रंटएंड",
  skills_cat_backend: "बैकएंड",
  skills_cat_ai: "AI और LLM",
  skills_cat_database: "डेटाबेस",
  skills_cat_devops: "DevOps और क्लाउड",
  skills_cat_tools: "उपकरण",

  projects_title: "प्रमुख",
  projects_featured: "प्रोजेक्ट्स",
  projects_code: "कोड",
  projects_live_demo: "लाइव डेमो",
  projects_subtitle: "मेरे द्वारा बनाए और योगदान किए गए प्रोजेक्ट्स का चयन",

  experience_title: "कार्य",
  experience_work: "अनुभव",
  experience_subtitle: "13+ वर्षों का प्रोडक्शन-रेडी एप्लिकेशन निर्माण अनुभव",

  education_title: "शिक्षा और",
  education_and: "प्रमाणपत्र",
  education_certifications: "प्रमाणपत्र",

  testimonials_title: "लोग",
  testimonials_what: "क्या कहते हैं",
  testimonials_subtitle: "जिन लोगों के साथ मैंने काम किया है उनकी सिफारिशें",

  gallery_title: "मेरी",
  gallery_my: "गैलरी",
  gallery_subtitle: "प्रोजेक्ट्स और डिज़ाइन की दृश्य प्रदर्शनी",
  gallery_no_items: "इस श्रेणी में अभी कोई आइटम नहीं है।",

  github_title: "GitHub",
  github_stats: "आँकड़े",
  github_contributions: "योगदान",
  github_stars: "स्टार्स",
  github_pull_requests: "पुल रिक्वेस्ट",
  github_repositories: "रिपॉजिटरी",
  github_activity: "योगदान गतिविधि",
  github_last_12: "पिछले 12 महीने",
  github_less: "कम",
  github_more: "अधिक",

  contact_title: "संपर्क",
  contact_get_in: "करें",
  contact_email_label: "ईमेल",
  contact_social: "सोशल मीडिया",
  contact_description:
    "मैं हमेशा नए प्रोजेक्ट्स, रचनात्मक विचारों या सहयोग के अवसरों पर चर्चा के लिए तैयार हूँ।",
  contact_name: "आपका नाम",
  contact_email: "आपका ईमेल",
  contact_message: "आपका संदेश",
  contact_send: "भेजें",
  contact_sent: "संदेश भेजा गया!",

  footer_rights: "सर्वाधिकार सुरक्षित।",
  footer_made_with: "बनाया गया",
  footer_by: "द्वारा",

  whatsapp_tooltip: "WhatsApp पर चैट करें",

  map_title: "मेरा",
  map_location: "स्थान",
};

const pa: Translations = {
  nav_about: "ਜਾਣ-ਪਛਾਣ",
  nav_skills: "ਹੁਨਰ",
  nav_projects: "ਪ੍ਰੋਜੈਕਟ",
  nav_experience: "ਤਜਰਬਾ",
  nav_education: "ਵਿੱਦਿਆ",
  nav_testimonials: "ਸਿਫ਼ਾਰਸ਼ਾਂ",
  nav_gallery: "ਗੈਲਰੀ",
  nav_contact: "ਸੰਪਰਕ",

  banner_text: "ਫ੍ਰੀਲਾਂਸ ਪ੍ਰੋਜੈਕਟਾਂ ਅਤੇ ਸਹਿਯੋਗ ਲਈ ਉਪਲਬਧ!",
  banner_cta: "ਮੈਨੂੰ ਹਾਇਰ ਕਰੋ",

  hero_subtitle: "AI-ਸੰਚਾਲਿਤ ਫੁੱਲ ਸਟੈਕ ਡਿਵੈਲਪਰ \u00b7 ਫ੍ਰੀਲਾਂਸਰ",
  hero_greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ ਹਾਂ",
  hero_view_work: "ਮੇਰਾ ਕੰਮ ਦੇਖੋ",
  hero_resume: "ਰੈਜ਼ਿਊਮੇ",

  about_title: "ਮੇਰੇ",
  about_me: "ਬਾਰੇ",
  about_get_in_touch: "ਸੰਪਰਕ ਕਰੋ",
  about_download_cv: "CV ਡਾਊਨਲੋਡ ਕਰੋ",
  about_years: "13+ ਸਾਲ",
  about_experience_label: "ਤਜਰਬਾ",
  about_projects_count: "50+",
  about_projects_label: "ਪ੍ਰੋਜੈਕਟ",
  about_degree: "MCA",
  about_degree_label: "ਡਿਗਰੀ",

  skills_title: "ਟੈਕ",
  skills_tech: "ਸਟੈਕ",
  skills_subtitle: "ਤਕਨੀਕਾਂ ਅਤੇ ਸਾਧਨ ਜਿਨ੍ਹਾਂ ਨਾਲ ਮੈਂ ਰੋਜ਼ਾਨਾ ਕੰਮ ਕਰਦੀ ਹਾਂ",
  skills_cat_frontend: "ਫਰੰਟਐਂਡ",
  skills_cat_backend: "ਬੈਕਐਂਡ",
  skills_cat_ai: "AI ਅਤੇ LLM",
  skills_cat_database: "ਡੇਟਾਬੇਸ",
  skills_cat_devops: "DevOps ਅਤੇ ਕਲਾਊਡ",
  skills_cat_tools: "ਸਾਧਨ",

  projects_title: "ਮੁੱਖ",
  projects_featured: "ਪ੍ਰੋਜੈਕਟ",
  projects_code: "ਕੋਡ",
  projects_live_demo: "ਲਾਈਵ ਡੈਮੋ",
  projects_subtitle: "ਮੇਰੇ ਦੁਆਰਾ ਬਣਾਏ ਅਤੇ ਯੋਗਦਾਨ ਕੀਤੇ ਪ੍ਰੋਜੈਕਟਾਂ ਦੀ ਚੋਣ",

  experience_title: "ਕੰਮ ਦਾ",
  experience_work: "ਤਜਰਬਾ",
  experience_subtitle: "13+ ਸਾਲਾਂ ਦਾ ਪ੍ਰੋਡਕਸ਼ਨ-ਰੈਡੀ ਐਪਲੀਕੇਸ਼ਨ ਬਣਾਉਣ ਦਾ ਤਜਰਬਾ",

  education_title: "ਵਿੱਦਿਆ ਅਤੇ",
  education_and: "ਸਰਟੀਫਿਕੇਟ",
  education_certifications: "ਸਰਟੀਫਿਕੇਟ",

  testimonials_title: "ਲੋਕ",
  testimonials_what: "ਕੀ ਕਹਿੰਦੇ ਹਨ",
  testimonials_subtitle: "ਜਿਨ੍ਹਾਂ ਲੋਕਾਂ ਨਾਲ ਮੈਂ ਕੰਮ ਕੀਤਾ ਹੈ ਉਨ੍ਹਾਂ ਦੀਆਂ ਸਿਫ਼ਾਰਸ਼ਾਂ",

  gallery_title: "ਮੇਰੀ",
  gallery_my: "ਗੈਲਰੀ",
  gallery_subtitle: "ਪ੍ਰੋਜੈਕਟਾਂ ਅਤੇ ਡਿਜ਼ਾਈਨਾਂ ਦਾ ਦ੍ਰਿਸ਼ ਪ੍ਰਦਰਸ਼ਨ",
  gallery_no_items: "ਇਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਅਜੇ ਕੋਈ ਆਈਟਮ ਨਹੀਂ ਹੈ।",

  github_title: "GitHub",
  github_stats: "ਅੰਕੜੇ",
  github_contributions: "ਯੋਗਦਾਨ",
  github_stars: "ਸਟਾਰ",
  github_pull_requests: "ਪੁੱਲ ਰਿਕੁਐਸਟ",
  github_repositories: "ਰਿਪੋਜ਼ਿਟਰੀ",
  github_activity: "ਯੋਗਦਾਨ ਗਤੀਵਿਧੀ",
  github_last_12: "ਪਿਛਲੇ 12 ਮਹੀਨੇ",
  github_less: "ਘੱਟ",
  github_more: "ਵੱਧ",

  contact_title: "ਸੰਪਰਕ",
  contact_get_in: "ਕਰੋ",
  contact_email_label: "ਈਮੇਲ",
  contact_social: "ਸੋਸ਼ਲ ਮੀਡੀਆ",
  contact_description:
    "ਮੈਂ ਹਮੇਸ਼ਾ ਨਵੇਂ ਪ੍ਰੋਜੈਕਟਾਂ, ਸਿਰਜਣਾਤਮਕ ਵਿਚਾਰਾਂ ਜਾਂ ਸਹਿਯੋਗ ਦੇ ਮੌਕਿਆਂ ਬਾਰੇ ਗੱਲ ਕਰਨ ਲਈ ਤਿਆਰ ਹਾਂ।",
  contact_name: "ਤੁਹਾਡਾ ਨਾਮ",
  contact_email: "ਤੁਹਾਡੀ ਈਮੇਲ",
  contact_message: "ਤੁਹਾਡਾ ਸੁਨੇਹਾ",
  contact_send: "ਭੇਜੋ",
  contact_sent: "ਸੁਨੇਹਾ ਭੇਜਿਆ ਗਿਆ!",

  footer_rights: "ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",
  footer_made_with: "ਬਣਾਇਆ ਗਿਆ",
  footer_by: "ਦੁਆਰਾ",

  whatsapp_tooltip: "WhatsApp 'ਤੇ ਚੈਟ ਕਰੋ",

  map_title: "ਮੇਰਾ",
  map_location: "ਟਿਕਾਣਾ",
};

export const translations: Record<LangCode, Translations> = {
  en,
  fr,
  de,
  es,
  nl,
  it,
  hi,
  pa,
};
