import { Github, Mail, Phone, Linkedin, Globe, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ProfilePic, Project_1, Patient_Portal, E_Com } from '../assets/images';
import { Resume } from '../assets/pdfs';
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaGitlab, FaBitbucket,
  FaJira, FaChartArea, FaNodeJs, FaDocker, FaAws,
} from 'react-icons/fa';
import {
  SiRedux, SiTypescript, SiJavascript, SiMui, SiTailwindcss, SiJest,
  SiPostman, SiVite, SiMongodb, SiExpress, SiMysql, SiPostgresql,
  SiSwagger, SiNextdotjs, SiSass, SiOpenai, SiWebpack,
} from 'react-icons/si';
import { TbBrandVscode, TbApi, TbBrandAzure } from 'react-icons/tb';
import { BsKanban, BsFingerprint, BsShieldLock } from 'react-icons/bs';
import { RiRobot2Line } from 'react-icons/ri';
import { MdPayment } from 'react-icons/md';
import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  Icon: IconType;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  image?: string;
  draft?: boolean;
}

export interface ProjectGroup {
  category: string;
  label: string;
  projects: Project[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  university: string;
  years: string;
}

export interface ContactItem {
  icon: LucideIcon;
  title: string;
  content: string;
  href: string;
}

export const personalInfo = {
  name: 'Ajay Ramdas Parhar',
  role: 'Senior MERN Stack Developer',
  title: 'MERN Stack Developer | React | Next.js | Node.js | TypeScript | AWS | Docker',
  location: 'Pune, Maharashtra, India',
  email: 'parharajay001@gmail.com',
  phone: '+91-7721908843',
  linkedin: 'https://www.linkedin.com/in/ajay-parhar',
  github: 'https://github.com/parharajay001',
  portfolio: 'https://parharajay001.github.io/portfolio',
  resume: Resume,
  bio: `Experienced and results-driven Senior MERN Stack Developer with 4+ years building scalable, high-performance web applications using MongoDB, Express.js, React.js, Node.js, and Next.js. Strong in TypeScript, clean architecture, payment-gateway and in-app-purchase integration, AWS (S3, EC2, Docker), and secure authentication (JWT, OAuth, biometric). Adept at AI-assisted development workflows with Claude Code and OpenAI Codex.`,
  image: ProfilePic,
};

export const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Projects', value: '13+' },
  { label: 'Stack', value: 'Full-Stack MERN' },
  { label: 'Availability', value: 'Open to Remote' },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', Icon: FaReact },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Redux Toolkit', Icon: SiRedux },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'JavaScript (ES6+)', Icon: SiJavascript },
      { name: 'HTML5', Icon: FaHtml5 },
      { name: 'CSS3', Icon: FaCss3Alt },
      { name: 'SCSS', Icon: SiSass },
      { name: 'Material UI', Icon: SiMui },
      { name: 'TailwindCSS', Icon: SiTailwindcss },
      { name: 'Highcharts', Icon: FaChartArea },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', Icon: FaNodeJs },
      { name: 'Express.js', Icon: SiExpress },
      { name: 'RESTful APIs', Icon: TbApi },
      { name: 'Swagger', Icon: SiSwagger },
      { name: 'JWT Auth', Icon: BsShieldLock },
      { name: 'OAuth', Icon: BsShieldLock },
      { name: 'Biometric Auth', Icon: BsFingerprint },
      { name: 'Payment Gateways', Icon: MdPayment },
      { name: 'In-App Purchases', Icon: MdPayment },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Mongoose', Icon: SiMongodb },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'PostGIS', Icon: SiPostgresql },
      { name: 'MySQL', Icon: SiMysql },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS S3', Icon: FaAws },
      { name: 'AWS EC2', Icon: FaAws },
      { name: 'Docker', Icon: FaDocker },
      { name: 'Git', Icon: FaGitAlt },
      { name: 'GitHub', Icon: FaGithub },
      { name: 'GitLab', Icon: FaGitlab },
      { name: 'Bitbucket', Icon: FaBitbucket },
      { name: 'Webpack', Icon: SiWebpack },
    ],
  },
  {
    name: 'AI Tools',
    skills: [
      { name: 'Claude Code', Icon: RiRobot2Line },
      { name: 'OpenAI Codex', Icon: SiOpenai },
      { name: 'AI-Assisted Workflows', Icon: RiRobot2Line },
    ],
  },
  {
    name: 'Testing',
    skills: [
      { name: 'Jest', Icon: SiJest },
      { name: 'Supertest', Icon: TbApi },
      { name: 'React Testing Library', Icon: FaReact },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'VS Code', Icon: TbBrandVscode },
      { name: 'Postman', Icon: SiPostman },
      { name: 'JIRA', Icon: FaJira },
      { name: 'Azure DevOps', Icon: TbBrandAzure },
      { name: 'Vite', Icon: SiVite },
    ],
  },
  {
    name: 'Methodologies',
    skills: [
      { name: 'Agile / Scrum', Icon: BsKanban },
      { name: 'Performance Optimization', Icon: FaChartArea },
      { name: 'Clean Code', Icon: TbApi },
      { name: 'Code Review', Icon: FaGithub },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'SpiderWeb Technologies / Knovatek Inc.',
    position: 'MERN Stack Developer',
    duration: 'Jun 2025 - Present',
    location: 'Canada (Remote)',
    responsibilities: [
      'Develop and maintain scalable web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and TypeScript.',
      'Use AI-assisted development workflows with Claude Code for feature development, debugging, refactoring, and documentation.',
      'Deploy and manage applications using AWS EC2, Docker containers, and AWS S3.',
      'Build reusable frontend architectures with React.js, Redux Toolkit, and MUI.',
      'Optimize backend and database performance using PostgreSQL, PostGIS, and MongoDB.',
      'Integrate secure payment gateways, third-party APIs, and JWT/OAuth authentication.',
      'Debug, test, and optimize using Jest, Supertest, and Chrome DevTools.',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'PostGIS', 'TypeScript', 'Redux Toolkit', 'MUI', 'AWS EC2', 'AWS S3', 'Docker', 'Jest', 'Supertest'],
  },
  {
    company: 'Cisconic Pvt. Ltd.',
    position: 'MERN Stack Developer',
    duration: 'Mar 2022 - Jun 2025',
    location: 'Hyderabad, India (Remote)',
    responsibilities: [
      'Delivered full-stack projects including RevolutioM, Patient Portal, Real Estate Platform, and E-Commerce System.',
      'Led end-to-end development of complex web platforms, architecting scalable frontend and backend solutions.',
      'Built secure RESTful APIs with Swagger documentation and implemented JWT, OAuth, and biometric authentication.',
      'Improved application performance through SQL query optimization, backend refactoring, and caching.',
      'Integrated in-app purchases, payment gateway modules, and third-party services.',
      'Participated in Agile ceremonies; mentored junior developers and conducted code reviews.',
    ],
    tech: ['React', 'TypeScript', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'MUI', 'Highcharts', 'Swagger', 'JWT', 'OAuth', 'Jest', 'Git', 'JIRA', 'Bitbucket', 'Agile'],
  },
  {
    company: 'Neeta Tech Tyre Pvt. Ltd.',
    position: 'Full Stack Web Developer (Intern)',
    duration: 'Jan 2020 - Jul 2020',
    location: 'Pune, India (On-site)',
    responsibilities: [
      'Developed the Doctor On Door Lifeline healthcare platform as part of the core development team.',
      'Built key frontend modules and integrated REST APIs with the user interface.',
      'Assisted in early-stage application development, testing, and debugging across the full stack.',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
  },
];

export const projectGroups: ProjectGroup[] = [
  {
    category: 'full-stack',
    label: 'Full-Stack (MERN)',
    projects: [
      {
        name: 'RevolutioM 2.0',
        description:
          'Enterprise revenue & trade-promotion planning BI platform (micro-frontend React) for client vendors and distributors. Built interactive Highcharts dashboards, multi-dimensional filtering, drill-downs, trend forecasting, and automated reports for sales, profit, and market-share analysis at country/state/city/territory level.',
        tech: ['React', 'TypeScript', 'Redux', 'MUI', 'Highcharts', 'Micro-frontends', 'REST APIs', 'Jest'],
        github: null,
        live: null,
        image: Project_1,
      },
      {
        name: 'IVF Patient Management Portal',
        description:
          'Healthcare application for tracking IVF treatments with a color-coded treatment timeline, appointment scheduling, real-time medication and drug monitoring, and billing management for patients and providers.',
        tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'MUI', 'Redux', 'REST APIs'],
        github: null,
        live: null,
        image: Patient_Portal,
      },
      {
        name: 'Vegetables E-Commerce Platform',
        description:
          'Full-stack fresh-produce store with a dynamic catalog, attribute filters (organic/seasonal/freshness), cart and checkout, secure payment-gateway integration, and order and inventory management.',
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Payment Gateway', 'JWT', 'REST APIs'],
        github: null,
        live: null,
        image: E_Com,
      },
      {
        name: 'Real Estate Management Platform',
        description:
          'Centralized management of customers, properties, sites, towers, and flats with inquiry, booking, and transaction handling plus real-time data synchronization.',
        tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'Redux', 'MUI', 'REST APIs', 'JWT'],
        github: null,
        live: null,
      },
      {
        name: 'Show Phase',
        description:
          'Event production & workforce management platform connecting organizers with crew. Worked across the stack on scheduling, crew assignment, and production tracking, plus backend services and APIs.',
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'REST APIs'],
        github: null,
        live: null,
        draft: true,
      },
      {
        name: 'Doctor On Door Lifeline',
        description:
          'Healthcare platform built during internship; developed key frontend modules and integrated REST APIs for seamless data flow.',
        tech: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
        github: null,
        live: null,
      },
    ],
  },
  {
    category: 'frontend',
    label: 'Frontend (React)',
    projects: [
      {
        name: 'CarChaser',
        description:
          'Multi-portal online car auction & marketplace platform with distinct buyer, seller, and admin experiences: live auction listings, bidding flows, vehicle detail pages, and dashboards.',
        tech: ['React', 'Redux', 'TypeScript', 'REST APIs'],
        github: null,
        live: null,
        draft: true,
      },
    ],
  },
  {
    category: 'backend',
    label: 'Backend (Node / Express)',
    projects: [
      {
        name: 'CareChronicle',
        description:
          'Patient-controlled medical-records platform with a HIPAA-conscious architecture and AI-enabled features. Led backend development: secure RESTful APIs, role-based access so patients own and grant access to their records, and AI-assisted clinical-data structuring.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'AWS', 'JWT', 'AI Integrations'],
        github: null,
        live: null,
        draft: true,
      },
      {
        name: 'Florus',
        description:
          'Scalable school grocery & subscription platform enabling recurring institutional orders. Engineered backend subscription/billing logic, order management, and inventory APIs.',
        tech: ['Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
        github: null,
        live: null,
        draft: true,
      },
    ],
  },
  {
    category: 'other',
    label: 'Academic & Early Work',
    projects: [
      {
        name: 'Online Quiz Portal',
        description: 'Web quiz application for creating, taking, and scoring timed assessments with result tracking.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        github: null,
        live: null,
        draft: true,
      },
      {
        name: 'Avatar the Art Bender',
        description: 'College creative-coding project exploring interactive visuals and animation.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        github: null,
        live: null,
        draft: true,
      },
      {
        name: 'Chemical Lab Inventory',
        description: 'Lab inventory system tracking chemicals, stock levels, and usage records for a college chemistry department.',
        tech: ['PHP', 'MySQL'],
        github: null,
        live: null,
        draft: true,
      },
      {
        name: 'Food Ordering System',
        description: 'Food-ordering application (Geo Petr College, Karjat) for menu management, order placement, and billing.',
        tech: ['Java', 'MySQL'],
        github: null,
        live: null,
        draft: true,
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Science (MCS)',
    institution: 'MES Garware College of Commerce (Autonomous)',
    university: 'Savitribai Phule Pune University',
    years: '2018 - 2020',
  },
  {
    degree: 'Bachelor of Computer Science (BCS)',
    institution: "Rayat Shikshan Sanstha's Dada Patil Mahavidyalaya",
    university: 'Savitribai Phule Pune University',
    years: '2014 - 2018',
  },
];

export const languages = ['English', 'Hindi', 'Marathi'];

export const contactInfo: ContactItem[] = [
  { icon: Mail, title: 'Email', content: 'parharajay001@gmail.com', href: 'mailto:parharajay001@gmail.com' },
  { icon: Phone, title: 'Phone', content: '+91-7721908843', href: 'tel:+917721908843' },
  { icon: Github, title: 'GitHub', content: 'github.com/parharajay001', href: 'https://github.com/parharajay001' },
  { icon: Linkedin, title: 'LinkedIn', content: 'linkedin.com/in/ajay-parhar', href: 'https://www.linkedin.com/in/ajay-parhar' },
  { icon: Globe, title: 'Portfolio', content: 'parharajay001.github.io/portfolio', href: 'https://parharajay001.github.io/portfolio' },
  { icon: FileText, title: 'Resume', content: 'Download PDF', href: Resume },
];
