import {
  FaDownload,
  FaEnvelope,
  FaCss3Alt,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTrophy,
} from 'react-icons/fa'
import {
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiSpringboot,
} from 'react-icons/si'

export const owner = {
  name: 'Rajeev Patel',
  role: 'Java Backend Developer',
  location: 'Jabalpur, Madhya Pradesh, India',
  email: 'rajeevpatel2025@gmail.com',
  github: 'https://github.com/Rajeev001-ai',
  linkedin: 'https://linkedin.com/in/rajeev',
  intro:
    'Computer Science graduate passionate about building scalable backend applications using Java, Spring Boot, and MySQL.',
  about:
    'I am Rajeev Patel, a Computer Science graduate with strong interest in backend development. I have hands-on experience developing RESTful APIs and scalable applications using Java, Spring Boot, Spring Security, Hibernate, and MySQL.',
}

export const navItems = [
  'Home',
  'About',
  'Stack',
  'Projects',
  'Resume',
  'Contact',
]

export const heroButtons = [
  { label: 'Download Resume', href: '#', type: 'download', icon: FaDownload },
  { label: 'View Projects', href: '#projects', type: 'primary' },
  { label: 'Contact Me', href: '#contact', type: 'ghost' },
]

export const floatingTech = [
  { label: 'Java', icon: FaJava },
  { label: 'Spring Boot', icon: SiSpringboot },
  { label: 'MySQL', icon: SiMysql },
  { label: 'GitHub', icon: FaGithub },
  { label: 'Postman', icon: SiPostman },
]

export const quickStats = [
  { value: 200, suffix: '+', label: 'DSA Problems Solved' },
  { value: 3, suffix: ' Months', label: 'Internship' },
  { value: 4, suffix: '+', label: 'Major Projects' },
  { value: 8.26, suffix: '', label: 'CGPA', decimals: 2 },
]

export const infoCards = [
  { label: 'Degree', value: 'B.Tech Computer Science' },
  { label: 'Location', value: 'Jabalpur, MP' },
  { label: 'Email', value: 'rajeevpatel2025@gmail.com' },
  { label: 'Experience', value: '3 Month Java Internship' },
]

export const timeline = [
  {
    period: '2018 - 2020',
    title: 'Class X',
    place: 'Govt. High School Biruhali',
    result: '92%',
  },
  {
    period: '2020 - 2022',
    title: 'Class XII',
    place: 'Govt. Higher Secondary School Nitarra',
    result: '86%',
  },
  {
    period: '2022 - 2026',
    title: 'B.Tech Computer Science',
    place: 'Shri Ram Institute of Technology',
    result: 'CGPA 8.26',
  },
]

export const projects = [
  {
    title: 'Smart Contact Manager',
    description:
      'Contact management system with authentication, email verification, profile management, contact search, pagination, and secure access control.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'Thymeleaf'],
    github: 'https://github.com/Rajeev001-ai/smart-contact-manager.git',
    demo: '#',
  },
  {
    title: 'AllHelp',
    description:
      'Service provider platform connecting users and helpers with role-based authorization and secure booking management.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL'],
    githubLinks: [
      {
        label: 'Backend',
        href: 'https://github.com/Rajeev001-ai/AllHelp-Backend.git',
      },
      {
        label: 'Frontend',
        href: 'https://github.com/Rajeev001-ai/AllHelp-Frontend.git',
      },
    ],
    demo: 'https://all-help.vercel.app/',
  },
  {
    title: 'E-Commerce Website',
    description:
      'Online shopping platform with product management, cart workflow, user authentication, order handling, and database-backed admin operations.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL'],
    github: 'https://github.com/Rajeev001-ai/E-commerce-Web.git',
    demo: '#',
  },
  {
    title: 'PG Management System',
    description:
      'PG management platform with tenant onboarding, room allocation, payment tracking, and administrative dashboard.',
    tech: ['Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Rajeev001-ai/Pg-Management.git',
    demo: '#',
  },
]

export const contactLinks = [
  { label: owner.email, href: `mailto:${owner.email}`, icon: FaEnvelope },
  { label: owner.location, href: '#contact', icon: FaMapMarkerAlt },
  { label: 'GitHub', href: owner.github, icon: FaGithub },
  { label: 'LinkedIn', href: owner.linkedin, icon: FaLinkedin },
]

export const galaxySkills = [
  { label: 'Java', icon: FaJava },
  { label: 'Spring Boot', icon: SiSpringboot },
  { label: 'Spring Security', icon: SiSpringboot },
  { label: 'Hibernate', icon: SiHibernate },
  { label: 'JPA', icon: SiHibernate },
  { label: 'MySQL', icon: SiMysql },
  { label: 'Git', icon: FaGithub },
  { label: 'GitHub', icon: FaGithub },
  { label: 'Postman', icon: SiPostman },
  { label: 'HTML', icon: SiHtml5 },
  { label: 'CSS', icon: FaCss3Alt },
  { label: 'JavaScript', icon: SiJavascript },
]

export const internship = {
  company: 'AppDost Complete IT Solution Pvt Ltd',
  role: 'Java Developer Intern',
  duration: '3 Months',
  responsibilities: [
    'Developed REST APIs using Java and Spring Boot',
    'Improved backend performance',
    'Followed OOP principles',
    'Debugged existing modules',
    'Worked on scalable backend services',
  ],
}

export const achievements = [
  { title: 'College Fest Rank #1', icon: FaTrophy },
  { title: '200+ LeetCode Problems Solved', icon: FaJava },
  { title: 'Java Certification', icon: SiSpringboot },
  { title: 'Successful Internship Completion', icon: FaDownload },
]
