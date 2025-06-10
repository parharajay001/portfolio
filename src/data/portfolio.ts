export const portfolioData = {
  personal: {
    name: 'John Doe',
    title: 'Senior React Frontend Developer',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    summary:
      'Passionate React developer with 3+ years of experience building scalable web applications. Specialized in creating responsive, user-friendly interfaces using modern JavaScript frameworks and libraries.',
  },

  skills: {
    frontend: ['React', 'Redux', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    ui: ['Material-UI (MUI)', 'Tailwind CSS', 'ShadCN UI', 'Responsive Design'],
    tools: ['Git', 'GitHub', 'Bitbucket', 'VS Code', 'Chrome DevTools', 'Jira'],
    testing: ['Jest', 'React Testing Library', 'Unit Testing'],
    other: ['RESTful APIs', 'Agile/Scrum', 'Highcharts', 'Performance Optimization'],
  },

  experience: [
    {
      company: 'TechCorp Solutions',
      position: 'React Frontend Developer',
      duration: 'Jan 2023 - Present',
      location: 'San Francisco, CA',
      responsibilities: [
        'Led the development of a customer dashboard using React, Redux, and TypeScript, improving user engagement by 40%',
        'Implemented responsive UI components using Material-UI and Tailwind CSS, ensuring cross-browser compatibility',
        'Integrated RESTful APIs and optimized data fetching, reducing load times by 30%',
        'Collaborated with cross-functional teams in Agile environment using Jira for project management',
        'Mentored 2 junior developers and conducted code reviews to maintain code quality',
      ],
    },
    {
      company: 'Digital Innovations Inc.',
      position: 'Junior Frontend Developer',
      duration: 'Jun 2021 - Dec 2022',
      location: 'Remote',
      responsibilities: [
        'Developed and maintained React components for an e-commerce platform serving 100K+ users',
        'Created interactive data visualizations using Highcharts for analytics dashboard',
        'Wrote comprehensive unit tests using Jest, achieving 85% code coverage',
        'Participated in daily standups and sprint planning following Agile methodologies',
        'Optimized application performance using Chrome DevTools and React profiler',
      ],
    },
  ],

  projects: [
    {
      name: 'E-Commerce Platform',
      description:
        'Full-featured e-commerce application with product catalog, shopping cart, and payment integration',
      technologies: ['React', 'Redux', 'TypeScript', 'Material-UI', 'Stripe API'],
      features: [
        'Product search and filtering with real-time updates',
        'Shopping cart with persistent state management',
        'Secure payment processing with Stripe',
        'Responsive design for mobile and desktop',
      ],
      github: 'https://github.com/johndoe/ecommerce-platform',
      live: 'https://ecommerce-demo.netlify.app',
    },
    {
      name: 'Task Management Dashboard',
      description:
        'Collaborative task management tool with real-time updates and team collaboration features',
      technologies: ['React', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'WebSocket'],
      features: [
        'Drag-and-drop task boards with Kanban view',
        'Real-time collaboration using WebSocket',
        'User authentication and role-based access',
        'Data visualization with Highcharts',
      ],
      github: 'https://github.com/johndoe/task-dashboard',
      live: 'https://task-dashboard-demo.vercel.app',
    },
    {
      name: 'Analytics Dashboard',
      description: 'Data visualization dashboard for business metrics and KPI tracking',
      technologies: ['React', 'TypeScript', 'Highcharts', 'ShadCN UI', 'REST API'],
      features: [
        'Interactive charts and graphs with Highcharts',
        'Real-time data updates from REST API',
        'Custom date range filtering',
        'Export functionality for reports',
      ],
      github: 'https://github.com/johndoe/analytics-dashboard',
      live: 'https://analytics-demo.netlify.app',
    },
  ],
};
