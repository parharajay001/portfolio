import { Github, Mail, Phone } from 'lucide-react';
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
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { BsKanban } from 'react-icons/bs';
import { VscGraph } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  Icon: IconType;
}

export const skills: Skill[] = [
  { name: 'React', Icon: FaReact },
  { name: 'Redux', Icon: SiRedux },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'JavaScript (ES6+)', Icon: SiJavascript },
  { name: 'HTML5', Icon: FaHtml5 },
  { name: 'CSS3', Icon: FaCss3Alt },
  { name: 'Material-UI', Icon: SiMui },
  { name: 'TailwindCSS', Icon: SiTailwindcss },
  { name: 'ShadCN', Icon: IoSpeedometerOutline },
  { name: 'Jest', Icon: SiJest },
  { name: 'Highcharts', Icon: FaChartArea },
  { name: 'RESTful APIs', Icon: SiPostman },
  { name: 'Git', Icon: FaGitAlt },
  { name: 'GitHub', Icon: FaGithub },
  { name: 'Bitbucket', Icon: FaBitbucket },
  { name: 'Jira', Icon: FaJira },
  { name: 'Agile', Icon: BsKanban },
  { name: 'Chrome DevTools', Icon: VscGraph },
  { name: 'VS Code', Icon: TbBrandVscode },
  { name: 'Vite', Icon: SiVite },
];

export const projects = [
  {
    title: 'RevolutioM 2.0',
    description:
      'I had the opportunity to contribute to the development of RevolutioM 2.0, a cutting-edge web application designed exclusively for PepsiCo vendors and distributors. The platform enabled users to perform in-depth analysis, simulations, correlations, and optimizations of sales, profit, and market share at the geographical level. My role involved designing and developing interactive dashboards, charts, and filters that allowed users to effectively visualize and analyze key performance metrics. I collaborated closely with the team to ensure a seamless and intuitive user experience, incorporating client feedback and adhering to best practices in UI/UX design.',
    tech: [
      'React',
      'TypeScript',
      'Redux',
      'Material-UI',
      'Jest',
      'Git',
      'Jira',
      'REST APIs',
      'Agile',
      'Highcharts',
      'VS Code',
    ],
    github: null,
    live: null,
    image: Project_1,
  },
  // {
  //   title: 'Task Management System',
  //   description:
  //     'Collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Integrated with REST APIs for seamless data management.',
  //   tech: ['React', 'TypeScript', 'TailwindCSS', 'ShadCN', 'Jest', 'RESTful APIs'],
  //   github: 'https://github.com/parharajay001',
  //   live: 'https://demo.com',
  //   image: Project_1,
  // },
  // {
  //   title: 'Financial Analytics Platform',
  //   description:
  //     'Advanced financial dashboard with interactive charts, portfolio tracking, and market analysis. Features complex data visualizations using Highcharts and real-time data integration.',
  //   tech: ['React', 'Redux', 'JavaScript', 'Highcharts', 'CSS3', 'REST API'],
  //   github: 'https://github.com/parharajay001',
  //   live: 'https://demo.com',
  //   image: Project_1,
  // },
  // {
  //   title: 'Healthcare Management System',
  //   description:
  //     'Patient management system for healthcare providers with appointment scheduling, medical records, and billing integration. Built with focus on security and HIPAA compliance.',
  //   tech: ['React', 'TypeScript', 'Material-UI', 'Redux', 'Jest', 'RESTful APIs'],
  //   github: 'https://github.com/parharajay001',
  //   live: 'https://demo.com',
  //   image: Project_1,
  // },
];

export const experience = [
  {
    company: 'Cisconic PVT. LTD.',
    position: 'Senior Frontend Developer',
    duration: 'Mar 2022 - Present',
    location: 'Hydrabad, India',
    responsibilities: [
      'Architected and developed scalable, high-performance web applications using React.js, improving overall application performance and responsiveness.',
      'Lead the frontend team in adopting modern development practices, resulting in a 25% increase in development efficiency. ',
      'Designed and implemented reusable React components and UI libraries, reducing development time for new features by 40%. ',
      'Spearheaded the integration of token-based authentication, ensuring secure access and compliance with industry security standards.',
      'Conducted comprehensive code reviews and mentored junior developers, fostering a culture of continuous improvement and high code quality.',
      'Partnered with UX/UI and backend teams in technical discussions to deliver responsive, accessible interfaces with seamless integration and cross-browser compatibility.',
    ],
    tech: [
      'React',
      'TypeScript',
      'Redux',
      'Material-UI',
      'Jest',
      'Git',
      'Jira',
      'REST APIs',
      'Agile',
      'Highcharts',
      'VS Code',
      'Postman',
      'Bitbucket',
    ],
  },
  {
    company: 'NeetaTech (Internship)',
    position: 'Software Engineer',
    duration: 'Jan 2021 - July 2021',
    location: 'Pune, India',
    responsibilities: [
      'Built frontend components and user interfaces in HTML, CSS, and JavaScript.',
      'Participated in design meetings to translate mockups into functional UI.',
      'Gained foundational experience in modern frontend development practices.',
      // 'Participated in Agile development process with daily standups and sprint planning',
      // 'Implemented comprehensive testing strategies using Jest, achieving 85% code coverage',
    ],
    tech: ['Laravel', 'JavaScript', 'CSS3', 'REST APIs', 'Agile', 'Git', 'VS Code', 'Postman'],
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
];

export const personalInfo = {
  name: 'Ajay Parhar',
  role: 'Frontend Developer',
  location: 'Pune, India',
  bio: 'Senior Frontend Developer with 3+ years of experience building scalable, user-centric web applications using React, TypeScript, and modern web technologies.',
  image: ProfilePic,
};
