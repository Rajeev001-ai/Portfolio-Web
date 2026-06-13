import {
  FaAward,
  FaCode,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaJava,
  FaLayerGroup,
  FaLinkedin,
  FaReact,
  FaServer,
} from 'react-icons/fa'
import {
  SiHibernate,
  SiJavascript,
  SiMysql,
  SiSpringboot,
} from 'react-icons/si'
import { TbApi, TbBrandVscode, TbRocket } from 'react-icons/tb'

export const navItems = [
  'Hero',
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Achievements',
  'Contact',
]

export const profile = {
  name: 'Rajeev Patel',
  role: 'Java Backend Developer | Spring Boot Developer | Problem Solver',
  education: 'Completed B.Tech (2022-2026)',
  experience: 'Java Developer Intern at Appdost Complete IT Solution Pvt. Ltd.',
  email: 'rajeevpatel2025@gmail.com',
  location: 'Jabalpur, Madhya Pradesh, India',
  summary:
    'Computer Science graduate passionate about backend development, software engineering, RESTful APIs, authentication systems, and database design.',
  about:
    'I am Rajeev Patel, a Computer Science graduate passionate about backend development and software engineering. I have hands-on experience building scalable applications using Java, Spring Boot, Spring Security, Hibernate, and MySQL. Through my internship and academic projects, I have developed strong problem-solving skills and a solid understanding of software architecture, RESTful APIs, authentication systems, and database design. I am actively seeking opportunities as a Java Backend Developer where I can contribute to real-world products and continue growing as a software engineer.',
}

export const stats = [
  { value: '03', label: 'Featured projects' },
  { value: '200+', label: 'DSA problems' },
  { value: '8.26', label: 'B.Tech CGPA' },
]

export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science',
    institute: 'Shri Ram Institute of Technology, Jabalpur',
    period: '2022 - 2026',
    score: 'CGPA: 8.26 / 10',
  },
  {
    degree: 'Higher Secondary (Class XII)',
    institute: 'Govt. Higher Secondary School, Nitarra, Katni',
    period: '2020 - 2022',
    score: 'Percentage: 86%',
  },
  {
    degree: 'High School (Class X)',
    institute: 'Govt. High School, Biruhali, Katni',
    period: '2018 - 2020',
    score: 'Percentage: 92%',
  },
]

export const skills = [
  {
    group: 'Backend',
    icon: FaServer,
    items: [
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Hibernate',
      'Spring Data JPA',
      'REST APIs',
    ],
  },
  {
    group: 'Database',
    icon: FaDatabase,
    items: ['MySQL', 'DBMS', 'Schema Design', 'JPA Persistence'],
  },
  {
    group: 'Languages + Frontend',
    icon: FaLayerGroup,
    items: ['Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    group: 'Core CS + Tools',
    icon: TbBrandVscode,
    items: ['DSA', 'OOP', 'MVC Architecture', 'Auth', 'Git', 'Maven', 'Postman', 'VS Code'],
  },
]

export const techOrbit = [
  { icon: FaJava, label: 'Java' },
  { icon: SiSpringboot, label: 'Spring' },
  { icon: SiHibernate, label: 'Hibernate' },
  { icon: SiMysql, label: 'MySQL' },
  { icon: FaReact, label: 'React' },
  { icon: SiJavascript, label: 'JS' },
  { icon: TbApi, label: 'API' },
  { icon: FaDocker, label: 'Deploy' },
]

export const projects = [
  {
    title: 'SevaSetu - Service Provider Platform',
    type: 'Role-Based Booking Platform',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL'],
    description:
      'A service provider platform with User, Helper, and Admin roles, secure authentication, role-based authorization, booking workflows, and JPA-backed database management.',
    impact: 'Demonstrates secure backend architecture and real-world service marketplace logic.',
  },
  {
    title: 'NoteMate',
    type: 'Online Notes Marketplace',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL'],
    description:
      'An online notes marketplace where admins upload notes and users purchase them, with JWT authentication, pagination, validation, and secure access flows.',
    impact: 'Highlights Spring Security, JWT auth, validation, and marketplace-oriented API design.',
  },
  {
    title: 'PG Management System',
    type: 'Operations Dashboard',
    stack: ['Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    description:
      'A layered management system for room allocation, tenant onboarding, payment tracking, and admin dashboard workflows.',
    impact: 'Built around practical business operations, clean layers, and maintainable data design.',
  },
]

export const experience = [
  {
    title: 'Java Developer Intern',
    period: 'Nov 2025 - Feb 2026',
    company: 'Appdost Complete IT Solution Pvt. Ltd.',
    points: [
      'Developed RESTful APIs using Java and Spring Boot.',
      'Worked on scalable backend services.',
      'Followed OOP principles and software engineering best practices.',
      'Debugged and optimized existing modules.',
      'Improved application performance and stability.',
    ],
  },
  {
    title: 'Completed B.Tech (2022-2026)',
    period: '2022 - 2026',
    company: 'Shri Ram Institute of Technology, Jabalpur',
    points: [
      'Completed B.Tech in Computer Science with 8.26 / 10 CGPA.',
      'Built backend-focused academic projects using Java, Spring Boot, Hibernate, and MySQL.',
    ],
  },
]

export const achievements = [
  {
    icon: FaAward,
    title: '200+ DSA Problems',
    text: 'Solved 200+ DSA problems on LeetCode, strengthening problem-solving and coding fundamentals.',
  },
  {
    icon: FaCode,
    title: 'Java Certification',
    text: 'Completed Java Certification from Pride Institute, Jabalpur in 2025.',
  },
  {
    icon: TbRocket,
    title: 'College Fest Rank #1',
    text: 'Secured Rank #1 in College Fest, showing consistency, confidence, and execution.',
  },
]

export const socials = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Rajeev001-ai' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rajeev' },
]
