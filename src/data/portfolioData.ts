import { Github, Mail, Phone } from 'lucide-react';

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
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    title: 'Task Management System',
    description:
      'Collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Integrated with REST APIs for seamless data management.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'ShadCN', 'Jest', 'RESTful APIs'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
  },
  {
    title: 'Financial Analytics Platform',
    description:
      'Advanced financial dashboard with interactive charts, portfolio tracking, and market analysis. Features complex data visualizations using Highcharts and real-time data integration.',
    tech: ['React', 'Redux', 'JavaScript', 'Highcharts', 'CSS3', 'REST API'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    title: 'Healthcare Management System',
    description:
      'Patient management system for healthcare providers with appointment scheduling, medical records, and billing integration. Built with focus on security and HIPAA compliance.',
    tech: ['React', 'TypeScript', 'Material-UI', 'Redux', 'Jest', 'RESTful APIs'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
  },
];

export const experience = [
  {
    company: 'TechCorp Solutions',
    position: 'Senior Frontend Developer',
    duration: 'Jan 2022 - Present',
    location: 'San Francisco, CA',
    responsibilities: [
      'Led frontend development for 3 major client projects, resulting in 40% improvement in user engagement',
      'Architected and implemented reusable component library using React and TypeScript, reducing development time by 30%',
      'Collaborated with cross-functional teams using Agile methodologies and Jira for project management',
      'Optimized application performance resulting in 50% faster load times using modern React patterns and lazy loading',
      'Mentored 2 junior developers and conducted code reviews to maintain high code quality standards',
    ],
    tech: ['React', 'TypeScript', 'Redux', 'Material-UI', 'Jest', 'Git', 'Jira'],
  },
  {
    company: 'Digital Innovation Labs',
    position: 'Frontend Developer',
    duration: 'Mar 2021 - Dec 2021',
    location: 'Austin, TX',
    responsibilities: [
      'Developed responsive web applications for 5+ clients using React and modern CSS frameworks',
      'Integrated RESTful APIs and implemented state management using Redux for complex applications',
      'Created interactive data visualizations using Highcharts for business intelligence dashboards',
      'Participated in Agile development process with daily standups and sprint planning',
      'Implemented comprehensive testing strategies using Jest, achieving 85% code coverage',
    ],
    tech: ['React', 'JavaScript', 'CSS3', 'Highcharts', 'Redux', 'REST APIs', 'Agile'],
  },
];

export const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'alex.johnson@email.com',
  },
  { icon: Phone, title: 'Phone', content: '+1 (555) 123-4567' },
  { icon: Github, title: 'GitHub', content: 'github.com/alexjohnson' },
];

export const personalInfo = {
  name: 'Alex Johnson',
  role: 'React Developer',
  location: 'San Francisco, CA',
  bio: "Senior Frontend Developer with 3+ years of experience building scalable, user-centric web applications using React, TypeScript, and modern web technologies.",
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
};
