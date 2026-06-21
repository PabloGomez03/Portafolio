export const personalInfo = {
  name: 'Pablo Gómez Arroyo',
  title: 'Ingeniero Informático',
  email: 'apolox.12@hotmail.com',
  phone: '+34 692 393 621',
  linkedin: 'https://linkedin.com/in/pablo-gómez-arroyo',
  github: 'https://github.com/PabloGomez03',
  location: 'Huelva, España',
  bio: 'Ingeniero Informático apasionado por el desarrollo de software, la arquitectura de sistemas y las tecnologías emergentes. Experiencia en desarrollo full-stack, microservicios, integración empresarial e inteligencia artificial. Siempre buscando nuevos retos tecnológicos.',
};

export const education = [
  {
    institution: 'Universidad de Huelva',
    degree: 'Grado en Ingeniería Informática',
    period: 'Sep. 2021 – Jun. 2026',
    location: 'Huelva, España',
    description: 'TFG: Diseño de una página web (Dresstyle) con arquitectura de microservicios.',
  },
  {
    institution: 'IES Alto Conquero',
    degree: 'Bachillerato Tecnológico',
    period: '2019 – 2021',
    location: 'Huelva, España',
    description: '',
  },
];

export const certifications = [
  {
    name: 'AZ-900: Microsoft Azure Fundamentals',
    issuer: 'Grupo Solutia',
  },
  {
    name: 'Introducción a las Redes',
    issuer: 'Cisco Networking Academy',
  },
  {
    name: 'Curso Básico de Tecnología FIWARE',
    issuer: 'La Lonja Tech',
  },
];

export const skills = {
  languages: {
    title: 'Lenguajes',
    items: ['Java', 'C++', 'C', 'SQL', 'JavaScript', 'Bash', 'Python'],
  },
  frameworks: {
    title: 'Frameworks',
    items: ['Spring Boot', 'Vue.js', 'Bootstrap', 'Flask', 'JUnit', 'React'],
  },
  devops: {
    title: 'Herramientas / DevOps',
    items: ['Docker', 'Git', 'Jira', 'Linux', 'Apache Solr'],
  },
  theory: {
    title: 'Teoría & Arquitectura',
    items: [
      'Algoritmos',
      'Estructuras de Datos',
      'System Design',
      'SOLID',
      'Patrones de Diseño',
      'Hexagonal',
      'MVC',
      'Sistemas Concurrentes',
      'EAI',
      'Metodologías Ágiles',
      'SEO',
    ],
  },
};

export const projects = [
  {
    title: 'Dresstyle',
    subtitle: 'TFG — Plataforma E-commerce',
    description:
      'Diseño y desarrollo de una plataforma web de moda con arquitectura de microservicios. Backend con Spring Boot, frontend con Vue.js y despliegue con Docker.',
    tech: ['Spring Boot', 'Vue.js', 'Docker', 'Microservicios'],
    date: '2025 – 2026',
    featured: true,
  },
  {
    title: 'Motor de Integración EAI',
    subtitle: 'Enterprise Application Integration',
    description:
      'Implementación de un motor de integración bajo los principios de EAI. Desarrollado en Java con multithreading para asegurar eficiencia. Incluye un bot de Telegram para simulación.',
    tech: ['Java', 'Multithreading', 'Telegram Bot', 'EAI'],
    date: 'Nov. 2025',
    featured: false,
  },
  {
    title: 'RAG — Retrieval-Augmented Generation',
    subtitle: 'Inteligencia Artificial',
    description:
      'Implementación de una página web con un sistema RAG para responder preguntas utilizando recuperación de documentos y generación con modelos de lenguaje.',
    tech: ['Python', 'Flask', 'Ollama', 'IA'],
    date: 'Dic. 2025',
    featured: true,
  },
  {
    title: 'Clasificación de Emociones',
    subtitle: 'Machine Learning',
    description:
      'Sistema de clasificación de emociones a partir de audios espontáneos. Uso de Random Forest, Gradient Boosting y Redes Neuronales para comparar rendimiento.',
    tech: ['Python', 'Machine Learning', 'Random Forest', 'Redes Neuronales'],
    date: 'Dic. 2025',
    featured: true,
  },
  {
    title: 'Sistema de Recuperación de Información',
    subtitle: 'Information Retrieval',
    description:
      'Aplicación web para búsqueda de documentos con Apache Solr. Parseo, indexación y evaluación de resultados y eficiencia del sistema.',
    tech: ['Java', 'Apache Solr', 'MVC', 'IR'],
    date: 'Oct. 2025',
    featured: false,
  },
  {
    title: 'App Gestión de Gimnasio',
    subtitle: 'Aplicación Desktop',
    description:
      'Aplicación de gestión de gimnasio con conexión a bases de datos (MariaDB, Oracle). Uso de Hibernate para ORM y Java Swing para la interfaz gráfica.',
    tech: ['Java', 'Hibernate', 'Java Swing', 'MariaDB'],
    date: 'Nov. 2023',
    featured: false,
  },
  {
    title: 'Aplicación Web MVC',
    subtitle: 'Arquitectura MVC',
    description:
      'Aplicación web con patrón Modelo-Vista-Controlador usando Apache Glassfish, Java Server Pages para el frontend y Jakarta EE para contratos de comportamiento.',
    tech: ['Java', 'Bootstrap', 'JSP', 'Jakarta EE'],
    date: 'Dic. 2025',
    featured: false,
  },
];

export const languages = [
  { name: 'Español', level: 'Nativo', percentage: 100 },
  { name: 'Inglés', level: 'B1 - Intermedio', percentage: 60 },
  { name: 'Francés', level: 'Básico', percentage: 25 },
];
