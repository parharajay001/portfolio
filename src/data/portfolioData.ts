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
  SiSwagger, SiNextdotjs, SiSass, SiOpenai, SiWebpack, SiMocha, SiGooglechrome,
} from 'react-icons/si';
import { TbBrandVscode, TbApi, TbBrandAzure } from 'react-icons/tb';
import { BsKanban, BsFingerprint, BsShieldLock } from 'react-icons/bs';
import { RiRobot2Line } from 'react-icons/ri';
import { MdPayment, MdDevices } from 'react-icons/md';
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
  role: 'MERN Stack Developer',
  title: 'MERN Stack Developer | React | Next.js | Node.js | TypeScript | AWS | Docker',
  location: 'Pune, Maharashtra, India',
  email: 'parharajay001@gmail.com',
  phone: '+91-7721908843',
  linkedin: 'https://www.linkedin.com/in/ajay-parhar',
  github: 'https://github.com/parharajay001',
  portfolio: 'https://parharajay001.github.io/portfolio',
  resume: Resume,
  bio: `Experienced and results-driven MERN Stack Developer with 4+ years building scalable, high-performance web applications using MongoDB, Express.js, React.js, Node.js, and Next.js. Strong in TypeScript, clean architecture, payment-gateway and in-app-purchase integration, AWS (S3, EC2, Docker), and secure authentication (JWT, OAuth, biometric). Adept at AI-assisted development workflows with Claude Code and OpenAI Codex.`,
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
      { name: 'Responsive Design', Icon: MdDevices },
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
      { name: 'Mocha', Icon: SiMocha },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'VS Code', Icon: TbBrandVscode },
      { name: 'Postman', Icon: SiPostman },
      { name: 'JIRA', Icon: FaJira },
      { name: 'Azure DevOps', Icon: TbBrandAzure },
      { name: 'Chrome DevTools', Icon: SiGooglechrome },
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
          'Large-scale enterprise revenue & trade-promotion planning platform built as a micro-frontend monorepo (Lerna + Yarn workspaces, 13+ independently deployable packages) in React 18 and TypeScript. Built core feature modules including scenario planning, innovation planning, approval workflows, interactive dashboards, and a drag-and-drop auto-calendarization engine (FullCalendar). Engineered shared component and service libraries to enforce reuse across teams, with centralized Redux state, Okta SSO authentication, and i18n. Delivered rich data visualizations via Highcharts, jVectorMap, and TanStack/MUI data grids. Established a CI/CD pipeline on Azure DevOps with semantic-release versioning, conventional-commit linting (Husky), multi-environment builds, and Dockerized IIS deployment.',
        tech: ['React 18', 'TypeScript', 'Micro-frontends', 'Lerna', 'Yarn Workspaces', 'Redux', 'Okta SSO', 'Highcharts', 'jVectorMap', 'TanStack Table', 'FullCalendar', 'Azure DevOps', 'Docker'],
        github: null,
        live: null,
        image: Project_1,
      },
      {
        name: 'Patient Portal — Healthcare',
        description:
          'Patient-facing portal for a hospital / IVF clinic management system. On the backend, built a secure RESTful API (Node.js, Express, TypeScript) on MS SQL Server with JWT authentication and MRN-driven account onboarding, paginated APIs for appointments, billing, lab reports, prescriptions, and dosage schedules, on-demand PDF generation for bills and prescriptions (Puppeteer + Handlebars), and Twilio (OTP/SMS) and AWS S3 integration. On the front-end, built a responsive React 18 + TypeScript single-page app with a passwordless onboarding flow (account setup → OTP → login), modules for Appointments, Prescriptions, Lab Tests, Billing, and Documents, and a personalized health dashboard with interactive Highcharts visualizations — using Redux Toolkit & Thunk, React Router v6, and MUI v5 (DataGrid, date pickers), with Jest/RTL coverage.',
        tech: ['React 18', 'TypeScript', 'Node.js', 'Express.js', 'MS SQL Server', 'JWT', 'Redux Toolkit', 'MUI v5', 'Puppeteer', 'Twilio', 'AWS S3', 'Highcharts', 'Jest'],
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
        name: 'ShowPhaze',
        description:
          'B2B event-production & workforce-management platform connecting production companies with on-demand contractors and freelance crew. On the backend, architected a versioned Node.js/Express REST API (v1–v6) serving web and mobile clients across 40+ domains (opportunities/job postings, positions, event estimates, invoicing, reimbursements, statements of work, purchase orders, DocuSign contractor agreements), with real-time one-to-one and group messaging over Socket.IO scaled across processes via a Redis pub/sub adapter and distributed locks, multi-channel notifications (Firebase push, AWS SNS/Pinpoint SMS, Nodemailer), cron jobs, JWT auth with 2FA, MongoDB/Mongoose, AWS S3, Excel/PDF reporting, and New Relic observability. On the front-end, built a full-scale React 18 SaaS app with role-based portals (Admin, Client, Coordinator, Freelancer, Contractor), end-to-end workflows with e-signatures, interactive analytics (ECharts/Recharts), FullCalendar scheduling, Google Maps, and dynamic PDF/Excel export.',
        tech: ['React 18', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Socket.IO', 'Redis', 'Redux Toolkit', 'MUI', 'AWS S3', 'Firebase', 'JWT (2FA)', 'Docker', 'New Relic'],
        github: null,
        live: null,
      },
      {
        name: 'Doctor On Door Lifeline',
        description:
          'Healthcare web application built as a Web App Developer during internship, covering web APIs, database design, UI, and backend for the Doctor On Door Lifeline platform.',
        tech: ['PHP (Laravel)', 'JavaScript', 'CSS', 'Bootstrap', 'MySQL'],
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
          'Full-featured online vehicle auction and marketplace platform built as a Yarn-workspaces monorepo serving five role-based React portals — Admin, Agent, Dealer, Seller, and Export Buyer — that share a common component/logic package to maximize code reuse. Supports real-time live auctions and bidding (Pusher), Buy Now and negotiation flows, watchlists, garages, order management, and a vehicle valuation/estimate tool. Integrated PayPal and Flutterwave payments for global transactions with wallet management and PDF invoice/report generation. Built with React 18, Redux Toolkit + redux-persist, Material UI 7, Formik/Yup validation, React Router 6, Google Maps, and full multilingual support via i18next; architected with CRACO and module aliasing for scalable cross-app development.',
        tech: ['React 18', 'Yarn Workspaces', 'Monorepo', 'Redux Toolkit', 'MUI 7', 'Pusher', 'PayPal', 'Flutterwave', 'i18next', 'React Router 6', 'CRACO'],
        github: null,
        live: null,
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
          'Backend for a HIPAA-intent, patient-controlled medical-records platform serving Flutter and React clients. Architected a layered Node.js / TypeScript / Express 5 API on PostgreSQL + PostGIS, Prisma, and Redis with strict controller/service separation and Zod-validated requests. Implemented 6 auth flows (JWT refresh rotation, Google/Apple OAuth, TOTP MFA, Ed25519 biometric), AES-256-GCM field encryption for PHI/PII across 10 models, and immutable audit logging. Built BullMQ async jobs with exponential-backoff retries, presigned AWS S3 uploads, PostGIS map-pin clustering, and a provider-agnostic AI layer (Claude/OpenAI/Gemini/Whisper) with automatic failover. Containerized with Docker Compose and documented via OpenAPI/Swagger.',
        tech: ['Node.js', 'TypeScript', 'Express 5', 'PostgreSQL', 'PostGIS', 'Prisma', 'Redis', 'JWT', 'OAuth', 'TOTP MFA', 'Biometric', 'AES-256-GCM', 'BullMQ', 'AWS S3', 'Docker', 'OpenAPI/Swagger', 'AI Integrations'],
        github: null,
        live: null,
      },
      {
        name: 'Florius',
        description:
          'Backend for Florius, a mobile platform connecting students, schools, and marketing agents for school discovery and admissions. Engineered a RESTful API with Node.js, Express, and MongoDB (Mongoose) featuring role-based authentication (JWT), OTP verification, and multi-role profile management. Implemented in-app purchase verification and subscription management for both the Apple App Store and Google Play (including server-to-server webhooks), Firebase Cloud Messaging push, Twilio SMS, Nodemailer email, and AWS S3 media uploads. Added advanced school search/filtering, analytics, an agent-referral system, automated database backup/restore scripts, and node-cron jobs — with 80%+ test coverage via Jest and Supertest using in-memory MongoDB.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'OTP', 'In-App Purchases', 'Firebase Cloud Messaging', 'Twilio', 'AWS S3', 'Jest', 'Supertest'],
        github: null,
        live: null,
      },
    ],
  },
  {
    category: 'other',
    label: 'Academic & Early Work',
    projects: [
      {
        name: 'Online Quiz Portal',
        description: 'Online quiz application for creating, taking, and scoring assessments, with a React front-end and a Node.js / Express backend (Prisma, MySQL).',
        tech: ['React', 'Node.js', 'Express.js', 'Prisma', 'MySQL'],
        github: null,
        live: null,
      },
      {
        name: 'Avatar the Air Bender',
        description: 'A game built with the Unity game engine and C# (college project, Abasaheb Garware College, Pune).',
        tech: ['C#', 'Unity'],
        github: null,
        live: null,
      },
      {
        name: 'Chemical Lab Inventory',
        description: 'Lab inventory management system for a college chemistry department (Abasaheb Garware College, Pune), tracking chemicals, stock levels, and usage records.',
        tech: ['Java', 'MySQL'],
        github: null,
        live: null,
      },
      {
        name: 'Food Ordering System',
        description: 'Food-ordering web application (Dada Patil College, Karjat) for menu management, order placement, and billing.',
        tech: ['PHP', 'MySQL'],
        github: null,
        live: null,
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
