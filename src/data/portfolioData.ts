import { Github, Mail, Phone, Linkedin, Globe } from 'lucide-react';
import { ProfilePic, Project_1 } from '../assets/images';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaBitbucket,
  FaJira,
  FaChartArea,
  FaNodeJs,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import {
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiMui,
  SiTailwindcss,
  SiJest,
  SiPostman,
  SiVite,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiMocha,
  SiWebpack,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { BsKanban } from 'react-icons/bs';
import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  Icon: IconType;
}

export const skills: Skill[] = [
  { name: 'React', Icon: FaReact },
  { name: 'Redux', Icon: SiRedux },
  { name: 'Node.js', Icon: FaNodeJs },
  { name: 'Express.js', Icon: SiExpress },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'JavaScript (ES6+)', Icon: SiJavascript },
  { name: 'HTML5', Icon: FaHtml5 },
  { name: 'CSS3', Icon: FaCss3Alt },
  { name: 'Material-UI', Icon: SiMui },
  { name: 'TailwindCSS', Icon: SiTailwindcss },
  { name: 'AWS S3', Icon: FaAws },
  { name: 'Docker', Icon: FaDocker },
  { name: 'Jest', Icon: SiJest },
  { name: 'Mocha', Icon: SiMocha },
  { name: 'Highcharts', Icon: FaChartArea },
  { name: 'RESTful APIs', Icon: SiPostman },
  { name: 'Git', Icon: FaGitAlt },
  { name: 'GitHub', Icon: FaGithub },
  { name: 'Bitbucket', Icon: FaBitbucket },
  { name: 'Jira', Icon: FaJira },
  { name: 'Agile', Icon: BsKanban },
  { name: 'Webpack', Icon: SiWebpack },
  { name: 'VS Code', Icon: TbBrandVscode },
  { name: 'Vite', Icon: SiVite },
];

export const projects = [
  {
    title: 'RevolutioM 2.0',
    description:
      'A cutting-edge web application designed exclusively for client vendors and distributors. The platform enabled users to perform in-depth analysis, simulations, correlations, and optimizations of sales, profit, and market share at the geographical level. My role involved designing and developing interactive dashboards, charts, and filters that allowed users to effectively visualize and analyze key performance metrics.',
    tech: [
      'React',
      'TypeScript',
      'Redux',
      'Material-UI',
      'Highcharts',
      'REST APIs',
      'Jest',
      'Git',
      'Jira',
      'Agile',
    ],
    github: null,
    live: null,
    image: Project_1,
  },
  {
    title: 'Patient Portal',
    description:
      'Healthcare management system for patient records, appointments, and medical information with focus on security and data privacy. Built secure patient authentication with JWT, medical records management, appointment scheduling system, and HIPAA compliant data handling.',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Material-UI',
      'Redux',
      'REST APIs',
    ],
    github: null,
    live: null,
    image: Project_1,
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-featured e-commerce system with payment gateway integration, product catalog, and order management. Features include payment gateway integration, product catalog with search and filters, shopping cart and checkout flow, and order tracking and management.',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux',
      'Payment Gateway',
      'REST APIs',
      'Material-UI',
    ],
    github: null,
    live: null,
    image: Project_1,
  },
  {
    title: 'Real Estate Platform',
    description:
      'Comprehensive real estate management platform for property listings, client management, and transaction tracking. Built with modern web technologies to provide seamless user experience for real estate agents and clients.',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux',
      'Material-UI',
      'REST APIs',
      'JWT',
    ],
    github: null,
    live: null,
    image: Project_1,
  },
];

export const experience = [
  {
    company: 'Spiderweb Technologies',
    position: 'MERN Stack Developer',
    duration: 'Jun 2025 - Present',
    location: 'Canada (Remote)',
    responsibilities: [
      'Built and maintained scalable web applications using MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Integrated multiple payment gateways and handled complex in-app purchase workflows.',
      'Utilized AWS S3 for secure file uploads/downloads and implemented access control.',
      'Developed reusable React components and optimized state management using Redux Toolkit.',
      'Collaborated with QA, DevOps, and product teams to ensure on-time and high-quality delivery.',
      'Wrote unit and integration tests using Jest and React Testing Library.',
    ],
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux Toolkit',
      'TypeScript',
      'AWS S3',
      'Jest',
      'Git',
      'Jira',
      'REST APIs',
      'Agile',
    ],
  },
  {
    company: 'Cisconic Pvt. Ltd.',
    position: 'Software Engineer',
    duration: 'Mar 2022 - May 2025',
    location: 'Hyderabad (Remote)',
    responsibilities: [
      'Led full-stack development on complex web platforms including RevolutioM, Patient Portal, Real Estate Platform, and E-Commerce System.',
      'Built secure RESTful APIs and implemented JWT-based authentication.',
      'Architected and developed scalable, high-performance web applications using React.js, improving overall application performance and responsiveness.',
      'Designed and implemented reusable React components and UI libraries, reducing development time for new features by 40%.',
      'Improved performance with SQL query optimization and backend refactoring.',
      'Conducted comprehensive code reviews and mentored junior developers, fostering a culture of continuous improvement and high code quality.',
      'Participated in Agile sprints, retrospectives, and daily standups.',
    ],
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'TypeScript',
      'Redux',
      'MongoDB',
      'MySQL',
      'Material-UI',
      'Jest',
      'Git',
      'Jira',
      'REST APIs',
      'Agile',
      'Highcharts',
      'Postman',
      'Bitbucket',
    ],
  },
  {
    company: 'Neeta-Tech Pvt. Ltd.',
    position: 'Software Engineer (Intern)',
    duration: 'Jan 2020 - July 2020',
    location: 'Pune, India',
    responsibilities: [
      'Developed key modules for Doctor On Door Lifeline project.',
      'Integrated REST APIs with frontend components.',
      'Assisted in early-stage development and testing.',
      'Built frontend components and user interfaces in HTML, CSS, and JavaScript.',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
  },
];

export const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'parharajay001@gmail.com',
  },
  { icon: Phone, title: 'Phone', content: '+91 7721908843' },
  { icon: Github, title: 'GitHub', content: 'github.com/parharajay001' },
  { icon: Linkedin, title: 'LinkedIn', content: 'linkedin.com/in/ajay-parhar' },
  { icon: Globe, title: 'Portfolio', content: 'parharajay001.github.io/portfolio' },
];

export const personalInfo = {
  name: 'Ajay Ramdas Parhar',
  role: 'MERN Stack Developer',
  location: 'Pune, India',
  bio: 'Experienced and results-driven MERN Stack Developer with over 3+ years of expertise in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Proven ability in developing scalable RESTful APIs, dynamic frontends, and secure backends with strong focus on clean architecture and performance optimization.',
  image: ProfilePic,
};
