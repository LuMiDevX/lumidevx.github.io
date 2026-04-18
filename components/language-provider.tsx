"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Navigation
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.learning": "Aprendiendo",

    // Hero Section
    "hero.greeting": "Hola, soy",
    "hero.title": "Desarrollador de Software",
    "hero.subtitle": "Transformando ideas en soluciones tecnológicas",
    "hero.description":
      "Soy un desarrollador apasionado por la tecnología, con disposición para aprender constantemente. Especializado en backend, pero capaz de trabajar en frontend. Busco oportunidades para crecer profesionalmente y expandir mis habilidades en el campo del desarrollo de software.",
    "hero.cta": "Ver mi trabajo",
    "hero.contact": "Contactar",
    "hero.download": "Descargar CV",
    "hero.photoZoom": "Ampliar foto de perfil",
    "hero.portfolio": "Sitio portfolio (GitHub Pages)",
    "hero.work": "Desarrollador de Software",
    "hero.location": "Montevideo, Uruguay",

    // About Section
    "about.title": "Conoce mi historia",
    "about.subtitle": "Desarrollador de software con pasión por la tecnología",
    "about.description":
      "Ingeniero Informático graduado en la Universidad de Las Tunas. Desarrollador de software con experiencia en e-commerce, aplicaciones web empresariales, Odoo y productos con impacto social. Me enfoco en soluciones eficientes, claras y mantenibles.",
    "about.education": "Educación",
    "about.degree": "Ingeniero Informático",
    "about.university": "Universidad de Las Tunas",
    "about.period": "10/2021 - 07/2025",
    "about.languages": "Idiomas",
    "about.languages.list": "Español (nativo), inglés",
    "about.achievements": "Logros destacados",
    "about.achievement1": "2.º lugar en ICPC Caribeño (2022) — equipo YesReturn",
    "about.achievement2": "Título de Oro y Premio al Mérito Científico",
    "about.achievement3": "Eximido de defensa de tesis por rendimiento académico",
    "about.certifications": "Certificaciones y formación",
    "about.cert1.title": "Ingeniero Informático",
    "about.cert1.sub":
      "Universidad de Las Tunas · Graduación 2025 — Título de Oro y Premio al Mérito Científico",
    "about.cert2.title": "Inglés intermedio",
    "about.cert2.sub": "Evaluaciones oficiales Duolingo English Test y EF SET",
    "about.cert3.title": "Scientific Computing with Python",
    "about.cert3.sub": "Certificación en Python · freeCodeCamp",
    "about.cert4.title": "Formación complementaria",
    "about.cert4.sub":
      "Aprendizaje automático (freeCodeCamp) y automatización de flujos con n8n — en progreso",

    // Skills Section
    "skills.title": "Habilidades Técnicas",
    "skills.subtitle": "Tecnologías y herramientas que domino",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.tools": "Herramientas",
    "skills.databases": "Bases de Datos",

    // Experience Section
    "experience.title": "Experiencia Laboral",
    "experience.subtitle": "Mi trayectoria profesional",
    "experience.current": "Actual",
    "experience.responsibilities": "Logros principales:",
    "experience.technologies": "Tecnologías utilizadas",
    "experience.yafex.company": "Yafex S.U.R.L.",
    "experience.yafex.position": "Desarrollador de software",
    "experience.yafex.period": "ago 2025 – mar 2026",
    "experience.yafex.location": "Uruguay",
    "experience.yafex.description":
      "Soporte y desarrollo para plataformas e-commerce de clientes, sistemas internos de gestión y un proyecto con enfoque social junto a la SEGIB.",
    "experience.yafex.bullet1":
      "Soporte y desarrollo para comercios electrónicos (eltintero.yafexsrl.com, erp.prisma.art, avalon.yafexsrl.com), optimizando sus negocios.",
    "experience.yafex.bullet2":
      "Mejora de la productividad interna con un sistema de gestión de nómina (app.yafexsrl.com).",
    "experience.yafex.bullet3":
      "Desarrollo de cognitia.yafexsrl.com: entorno para una red de emprendedoras a nivel país en Cuba, con acompañamiento de expertos de la SEGIB.",
    "experience.asi.company": "ASI S.U.R.L.",
    "experience.asi.position": "Desarrollador de software",
    "experience.asi.period": "ene 2024 – mar 2026",
    "experience.asi.location": "Cuba",
    "experience.asi.description":
      "Desarrollo y mantenimiento de aplicaciones web, participación en decisiones de infraestructura y creación de módulos Odoo y apps móviles para la empresa y clientes externos.",
    "experience.asi.bullet1":
      "Participación activa en decisiones sobre infraestructuras tecnológicas y en la mejora de eficiencia y seguridad del sistema informático.",
    "experience.asi.bullet2":
      "Desarrollo y mantenimiento del sitio web oficial (antasi.asisurl.cu), optimizando rendimiento y accesibilidad.",
    "experience.asi.bullet3":
      "Aplicaciones móviles y módulos Odoo que mejoraron la productividad interna y la eficiencia operativa.",
    "experience.asi.bullet4":
      "Proyectos para clientes: Yumani S.U.R.L. (yumani.asisurl.cu) y Martha y Maximo S.U.R.L. (mym.asisurl.cu).",

    // Projects Section
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Soluciones tecnológicas que he desarrollado para empresas y clientes",
    "projects.viewCode": "Ver código",
    "projects.viewDemo": "Ver demo",
    "projects.viewProject": "Ver sitio",
    "projects.project1.title": "Red Social Empresarial",
    "projects.project1.description":
      "Red social interna desarrollada para una empresa (09/2024 – 02/2025), en equipo. Apliqué Django en backend y entendí cómo las organizaciones se benefician de la colaboración interna. Código en github.com/Asthart/comunidad.",
    "projects.project1.tech": "Django, Python, HTML/CSS, JavaScript",
    "projects.project1.category": "Red Social",
    "projects.project2.title": "Sistema de Gestión Web",
    "projects.project2.description":
      "Aplicación web completa para gestión empresarial con módulos personalizados e integración con sistemas existentes.",
    "projects.project2.tech": "Python, Django, PostgreSQL, Docker",
    "projects.project2.category": "Gestión Empresarial",
    "projects.additional": "Otros Proyectos",
    "projects.project3.title": "Módulos de Odoo Personalizados",
    "projects.project3.description": "Desarrollo de módulos personalizados para Odoo que mejoran la productividad y eficiencia operativa de empresas clientes.",
    "projects.project3.category": "Módulos Odoo",
    "projects.project4.title": "Aplicación Móvil Empresarial",
    "projects.project4.description": "Aplicación móvil única creada a petición de la empresa para mejorar la productividad interna del equipo de trabajo.",
    "projects.project4.category": "Aplicación Móvil",

    // Learning Section
    "learning.title": "Lo que estoy aprendiendo",
    "learning.subtitle": "Crecimiento continuo y nuevas tecnologías",
    "learning.what": "¿Qué estoy aprendiendo?",
    "learning.description": "Siempre buscando expandir mis conocimientos y explorar nuevas áreas del desarrollo de software.",
    "learning.machineLearning.title": "Aprendizaje Automático",
    "learning.machineLearning.description":
      "Explorando algoritmos de aprendizaje automático y sus aplicaciones en problemas del mundo real.",
    "learning.machineLearning.progress": "En progreso",
    "learning.machineLearning.source": "Curso de FreeCodeCamp",
    "learning.automatization.title": "Automatización con n8n",
    "learning.automatization.description":
      "Estudiando automatizaciones con n8n e inteligencia artificial para construir flujos de trabajo útiles y escalables.",
    "learning.automatization.progress": "En progreso",
    "learning.automatization.source": "Curso de Raiola Networks",
    "learning.hobbies": "Intereses y Hobbies",
    "learning.filosophy": "Filosofía de Aprendizaje",
    "learning.filosophy.description":
      `"La tecnología evoluciona constantemente, y como desarrollador, creo firmemente en la importancia
                    del aprendizaje continuo. Cada nuevo lenguaje, framework o herramienta es una oportunidad para
                    crecer profesionalmente y aportar más valor a los proyectos en los que trabajo."`,
    "learning.sourceLabel": "Fuente:",

    // Contact Section
    "contact.title": "Contacto",
    "contact.subtitle": "Hablemos sobre tu próximo proyecto",
    "contact.description": "Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme.",
    "contact.email": "Correo electrónico",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.telegram": "Telegram",
    "contact.status.available": "Disponible",
    "contact.social.title": "Redes Sociales",
    "contact.info.availability": "Disponibilidad",
    "contact.form.title": "Formulario de Contacto",
    "contact.form.name": "Nombre",
    "contact.form.namePlaceholder": "Tu nombre",
    "contact.form.email": "Correo electrónico",
    "contact.form.emailPlaceholder": "tu@email.com",
    "contact.form.message": "Mensaje",
    "contact.form.messagePlaceholder": "Escribe tu mensaje aquí...",
    "contact.form.subject": "Asunto",
    "contact.form.subjectPlaceholder": "Asunto",
    "contact.form.send": "Enviar",

    // Footer
    "footer.rights": "Todos los derechos reservados",
    "footer.built": "Construido con",
    "footer.description":
      "Desarrollador de software enfocado en backend y aplicaciones web. Experiencia en e-commerce, Odoo y proyectos con impacto social. Ubicado en Montevideo, Uruguay.",
    "footer.quickLinks": "Navegación",
    "footer.contact": "Contacto",
    "footer.madeWith": "Hecho con",
    "footer.and": "utilizando",

    // Common
    "common.loading": "Cargando...",
    "common.error": "Error",
    "common.success": "Éxito",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.learning": "Learning",

    // Hero Section
    "hero.greeting": "Hi, I'm",
    "hero.title": "Software Developer",
    "hero.subtitle": "Transforming ideas into tech solutions",
    "hero.description":
      "I am a developer passionate about technology, with a strong willingness to learn continuously. Specialized in backend development, but also capable of working on frontend projects. I am seeking opportunities to grow professionally and expand my skills in the field of software development.",
    "hero.cta": "View my work",
    "hero.contact": "Contact me",
    "hero.download": "Download CV",
    "hero.photoZoom": "Enlarge profile photo",
    "hero.portfolio": "Portfolio site (GitHub Pages)",
    "hero.work": "Software Developer",
    "hero.location": "Montevideo, Uruguay",

    // About Section
    "about.title": "Get to know my story",
    "about.subtitle": "Software developer with passion for technology",
    "about.description":
      "Computer Engineer graduated from the University of Las Tunas. Software developer with experience in e-commerce, enterprise web applications, Odoo, and products with social impact. I focus on efficient, clear, and maintainable solutions.",
    "about.education": "Education",
    "about.degree": "Computer Engineer",
    "about.university": "University of Las Tunas",
    "about.period": "10/2021 - 07/2025",
    "about.languages": "Languages",
    "about.languages.list": "Spanish (native), English",
    "about.achievements": "Key achievements",
    "about.achievement1": "2nd place in Caribbean ICPC (2022) — YesReturn team",
    "about.achievement2": "Gold Title and Scientific Merit Award",
    "about.achievement3": "Exempted from thesis defense due to academic performance",
    "about.certifications": "Certifications and training",
    "about.cert1.title": "Computer Engineer",
    "about.cert1.sub":
      "University of Las Tunas · Class of 2025 — Gold degree and Scientific Merit Award",
    "about.cert2.title": "Intermediate English",
    "about.cert2.sub": "Duolingo English Test and EF SET official assessments",
    "about.cert3.title": "Scientific Computing with Python",
    "about.cert3.sub": "Python certification · freeCodeCamp",
    "about.cert4.title": "Complementary training",
    "about.cert4.sub":
      "Machine learning (freeCodeCamp) and workflow automation with n8n — in progress",

    // Skills Section
    "skills.title": "Technical Skills",
    "skills.subtitle": "Technologies and tools I master",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.tools": "Tools",
    "skills.databases": "Databases",

    // Experience Section
    "experience.title": "Work Experience",
    "experience.subtitle": "My professional journey",
    "experience.current": "Current",
    "experience.responsibilities": "Key achievements:",
    "experience.technologies": "Technologies used",
    "experience.yafex.company": "Yafex S.U.R.L.",
    "experience.yafex.position": "Software Developer",
    "experience.yafex.period": "Aug 2025 – Mar 2026",
    "experience.yafex.location": "Uruguay",
    "experience.yafex.description":
      "Support and development for client e-commerce platforms, internal management systems, and a social-impact project with SEGIB.",
    "experience.yafex.bullet1":
      "Support and development for e-commerce sites (eltintero.yafexsrl.com, erp.prisma.art, avalon.yafexsrl.com), optimizing clients’ businesses.",
    "experience.yafex.bullet2":
      "Improved internal productivity by building a payroll management system (app.yafexsrl.com).",
    "experience.yafex.bullet3":
      "Built cognitia.yafexsrl.com: a digital environment for a nationwide network of women entrepreneurs in Cuba, with guidance from SEGIB experts.",
    "experience.asi.company": "ASI S.U.R.L.",
    "experience.asi.position": "Software Developer",
    "experience.asi.period": "Jan 2024 – Mar 2026",
    "experience.asi.location": "Cuba",
    "experience.asi.description":
      "Development and maintenance of web applications, infrastructure decisions, and Odoo modules and mobile apps for the company and external clients.",
    "experience.asi.bullet1":
      "Active participation in technology infrastructure decisions and improvements to efficiency and system security.",
    "experience.asi.bullet2":
      "Developed and maintained the official website (antasi.asisurl.cu), improving performance and accessibility.",
    "experience.asi.bullet3":
      "Mobile applications and Odoo modules that boosted internal productivity and operational efficiency.",
    "experience.asi.bullet4":
      "Client projects for Yumani S.U.R.L. (yumani.asisurl.cu) and Martha y Maximo S.U.R.L. (mym.asisurl.cu).",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "Technological solutions I have developed for companies and clients",
    "projects.viewCode": "View code",
    "projects.viewDemo": "View demo",
    "projects.viewProject": "View site",
    "projects.project1.title": "Enterprise Social Network",
    "projects.project1.description":
      "Internal social network built for a company (Sep 2024 – Feb 2025), in a team. Applied Django on the backend and learned how organizations benefit from internal collaboration. Code at github.com/Asthart/comunidad.",
    "projects.project1.tech": "Django, Python, HTML/CSS, JavaScript",
    "projects.project1.category": "Social Network",
    "projects.project2.title": "Web Management System",
    "projects.project2.description":
      "Complete web application for business management with custom modules and integration with existing systems.",
    "projects.project2.tech": "Python, Django, PostgreSQL, Docker",
    "projects.project2.category": "Business Management",
    "projects.additional": "Other Projects",
    "projects.project3.title": "Custom Odoo Modules",
    "projects.project3.description":
      "Development of custom modules for Odoo, which improve productivity and operational efficiency for client companies.",
    "projects.project3.category": "Odoo Modules",
    "projects.project4.title": "Business Mobile Application",
    "projects.project4.description":
      "Unique mobile application created at the company's request to improve internal team productivity.",
    "projects.project4.category": "Mobile Application",

    // Learning Section
    "learning.title": "What I'm Learning",
    "learning.subtitle": "Continuous growth and new technologies",
    "learning.what": "What I'm learning?",
    "learning.description": "Always seeking to expand my knowledge and explore new areas of software development.",
    "learning.machineLearning.title": "Machine Learning",
    "learning.machineLearning.description":
      "Exploring machine learning algorithms and their applications in real-world problems.",
    "learning.machineLearning.progress": "In progress",
    "learning.machineLearning.source": "FreeCodeCamp Course",
    "learning.automatization.title": "Automation with n8n",
    "learning.automatization.description":
      "Studying automation with n8n and artificial intelligence to build useful and scalable workflows.",
    "learning.automatization.progress": "In progress",
    "learning.automatization.source": "Raiola Networks Course",
    "learning.hobbies": "Interests and Hobbies",
    "learning.filosophy": "Learning Philosophy",
    "learning.filosophy.description":
      `"Technology is constantly evolving, and as a developer, I firmly believe in the importance of continuous learning.
                    Every new language, framework, or tool is an opportunity to grow professionally and add more value to the projects I work on."`,
    "learning.sourceLabel": "Source:",

    // Contact Section
    "contact.title": "Contact",
    "contact.subtitle": "Let's talk about your next project",
    "contact.description": "I'm always open to new opportunities and collaborations. Don't hesitate to contact me.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.telegram": "Telegram",
    "contact.status.available": "Available",
    "contact.social.title": "Social Media",
    "contact.info.availability": "Availability",
    "contact.form.title": "Contact Form",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subjectPlaceholder": "Message subject",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell me about your project...",
    "contact.form.send": "Send message",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.built": "Built with",
    "footer.description":
      "Software developer focused on backend and web applications. Experience in e-commerce, Odoo, and social-impact projects. Located in Montevideo, Uruguay.",
    "footer.quickLinks": "Navigation",
    "footer.contact": "Contact",
    "footer.madeWith": "Made with",
    "footer.and": "using",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
    document.documentElement.lang = newLanguage
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
