import { Github, Mail, Phone } from 'lucide-react';
import { ProfilePic, Project_1 } from '../assets/images';

export const skills = [
  'React',
  'Redux',
  'TypeScript',
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3',
  'Material-UI',
  'TailwindCSS',
  'ShadCN',
  'Jest',
  'Highcharts',
  'RESTful APIs',
  'Git',
  'GitHub',
  'Bitbucket',
  'Jira',
  'Agile',
  'Chrome DevTools',
  'VS Code',
  'Vite',
];

export const projects = [
  {
    title: 'E-Commerce Dashboard',
    description:
      'Complete admin dashboard for e-commerce platform with real-time analytics, inventory management, and order tracking. Built with React, Redux, and Material-UI.',
    tech: ['React', 'Redux', 'TypeScript', 'Material-UI', 'Highcharts', 'REST API'],
    github: 'https://github.com/parharajay001',
    live: 'https://demo.com',
    image: Project_1
  },
  {
    title: 'Task Management System',
    description:
      'Collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Integrated with REST APIs for seamless data management.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'ShadCN', 'Jest', 'RESTful APIs'],
    github: 'https://github.com/parharajay001',
    live: 'https://demo.com',
    image: Project_1
  },
  {
    title: 'Financial Analytics Platform',
    description:
      'Advanced financial dashboard with interactive charts, portfolio tracking, and market analysis. Features complex data visualizations using Highcharts and real-time data integration.',
    tech: ['React', 'Redux', 'JavaScript', 'Highcharts', 'CSS3', 'REST API'],
    github: 'https://github.com/parharajay001',
    live: 'https://demo.com',
    image: Project_1
  },
  {
    title: 'Healthcare Management System',
    description:
      'Patient management system for healthcare providers with appointment scheduling, medical records, and billing integration. Built with focus on security and HIPAA compliance.',
    tech: ['React', 'TypeScript', 'Material-UI', 'Redux', 'Jest', 'RESTful APIs'],
    github: 'https://github.com/parharajay001',
    live: 'https://demo.com',
    image: Project_1
  },
];

export const experience = [
  {
    company: 'Cisconic PVT. LTD.',
    position: 'Senior Frontend Developer',
    duration: 'Mar 2022 - Present',
    location: 'Hydrabad, India',
    responsibilities: [
      'Led frontend development for 3 major client projects, resulting in 40% improvement in user engagement',
      'Architected and implemented reusable component library using React and TypeScript, reducing development time by 30%',
      'Collaborated with cross-functional teams using Agile methodologies and Jira for project management',
      'Optimized application performance resulting in 50% faster load times using modern React patterns and lazy loading',
      'Mentored 2 junior developers and conducted code reviews to maintain high code quality standards',
    ],
    tech: ['React', 'TypeScript', 'Redux', 'Material-UI', 'Jest', 'Git', 'Jira'],
  },
  // {
  //   company: 'NeetaTech',
  //   position: 'Software Engineer',
  //   duration: 'Jan 2021 - July 2021',
  //   location: 'Pune, India',
  //   responsibilities: [
  //     'Developed responsive web applications for 5+ clients using React and modern CSS frameworks',
  //     'Integrated RESTful APIs and implemented state management using Redux for complex applications',
  //     'Created interactive data visualizations using Highcharts for business intelligence dashboards',
  //     'Participated in Agile development process with daily standups and sprint planning',
  //     'Implemented comprehensive testing strategies using Jest, achieving 85% code coverage',
  //   ],
  //   tech: ['React', 'JavaScript', 'CSS3', 'Highcharts', 'Redux', 'REST APIs', 'Agile'],
  // },
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
  role: 'React Developer',
  location: 'Pune, India',
  bio: 'Senior Frontend Developer with 3+ years of experience building scalable, user-centric web applications using React, TypeScript, and modern web technologies.',
  image: ProfilePic,
};
