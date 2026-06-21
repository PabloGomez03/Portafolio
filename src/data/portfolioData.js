export const personalInfo = {
  name: 'Pablo Gómez Arroyo',
  title: 'Computer Engineer',
  email: 'apolox.12@hotmail.com',
  phone: '+34 692 393 621',
  linkedin: 'https://linkedin.com/in/pablo-gómez-arroyo',
  github: 'https://github.com/PabloGomez03',
  location: 'Huelva, Spain',
  bio: 'Computer Engineer passionate about software development, system architecture, and emerging technologies. Experience in full-stack development, microservices, enterprise integration, and artificial intelligence. Always looking for new technological challenges.',
};

export const education = [
  {
    institution: 'University of Huelva',
    degree: "Bachelor's Degree in Computer Engineering",
    period: 'Sep. 2021 – Jun. 2026',
    location: 'Huelva, Spain',
    description: 'Thesis: Design of a web application (Dresstyle) with microservices architecture.',
  },
  {
    institution: 'IES Alto Conquero',
    degree: 'Technology Baccalaureate',
    period: '2019 – 2021',
    location: 'Huelva, Spain',
    description: '',
  },
];

export const certifications = [
  {
    name: 'AZ-900: Microsoft Azure Fundamentals',
    issuer: 'Grupo Solutia',
  },
  {
    name: 'Introduction to Networking',
    issuer: 'Cisco Networking Academy',
  },
  {
    name: 'FIWARE Technology Basic Course',
    issuer: 'La Lonja Tech',
  },
];

export const skills = {
  languages: {
    title: 'Languages',
    items: ['Java', 'C++', 'C', 'SQL', 'JavaScript', 'Bash', 'Python'],
  },
  frameworks: {
    title: 'Frameworks',
    items: ['Spring Boot', 'Vue.js', 'Bootstrap', 'Flask', 'JUnit', 'React'],
  },
  devops: {
    title: 'Tools / DevOps',
    items: ['Docker', 'Git', 'Jira', 'Linux', 'Apache Solr'],
  },
  theory: {
    title: 'Theory & Architecture',
    items: [
      'Algorithms',
      'Data Structures',
      'System Design',
      'SOLID',
      'Design Patterns',
      'Hexagonal',
      'MVC',
      'Concurrent Systems',
      'EAI',
      'Agile Methodologies',
      'SEO',
    ],
  },
};

export const projects = [
  {
    title: 'Dresstyle',
    subtitle: 'Thesis — E-commerce Platform',
    description:
      'Design and development of a fashion web platform with microservices architecture. Backend with Spring Boot, frontend with Vue.js, and deployment with Docker.',
    tech: ['Spring Boot', 'Vue.js', 'Docker', 'Microservices'],
    date: '2025 – 2026',
    featured: true,
  },
  {
    title: 'EAI Integration Engine',
    subtitle: 'Enterprise Application Integration',
    description:
      'Implementation of an integration engine based on EAI principles. Developed in Java with multithreading to ensure efficiency. Includes a Telegram bot for simulation.',
    tech: ['Java', 'Multithreading', 'Telegram Bot', 'EAI'],
    date: 'Nov. 2025',
    featured: false,
  },
  {
    title: 'RAG — Retrieval-Augmented Generation',
    subtitle: 'Artificial Intelligence',
    description:
      'Implementation of a web application with a RAG system for answering questions using document retrieval and generation with language models.',
    tech: ['Python', 'Flask', 'Ollama', 'AI'],
    date: 'Dec. 2025',
    featured: true,
  },
  {
    title: 'Emotion Classification',
    subtitle: 'Machine Learning',
    description:
      'Emotion classification system from spontaneous audio recordings. Uses Random Forest, Gradient Boosting, and Neural Networks for performance comparison.',
    tech: ['Python', 'Machine Learning', 'Random Forest', 'Neural Networks'],
    date: 'Dec. 2025',
    featured: true,
  },
  {
    title: 'Information Retrieval System',
    subtitle: 'Information Retrieval',
    description:
      'Web application for document search using Apache Solr. Includes parsing, indexing, and evaluation of results and system efficiency.',
    tech: ['Java', 'Apache Solr', 'MVC', 'IR'],
    date: 'Oct. 2025',
    featured: false,
  },
  {
    title: 'Gym Management App',
    subtitle: 'Desktop Application',
    description:
      'Gym management application with database connectivity (MariaDB, Oracle). Uses Hibernate for ORM and Java Swing for the graphical interface.',
    tech: ['Java', 'Hibernate', 'Java Swing', 'MariaDB'],
    date: 'Nov. 2023',
    featured: false,
  },
  {
    title: 'MVC Web Application',
    subtitle: 'MVC Architecture',
    description:
      'Web application using the Model-View-Controller pattern with Apache Glassfish, Java Server Pages for the frontend, and Jakarta EE for behavior contracts.',
    tech: ['Java', 'Bootstrap', 'JSP', 'Jakarta EE'],
    date: 'Dec. 2025',
    featured: false,
  },
];

export const languages = [
  { name: 'Spanish', level: 'Native', percentage: 100 },
  { name: 'English', level: 'B1 - Intermediate', percentage: 60 },
  { name: 'French', level: 'Basic', percentage: 25 },
];
