export const portfolioData = {
  personal: {
    name: 'Ajay Ramdas Parhar',
    title: 'MERN Stack Developer',
    email: 'parharajay001@gmail.com',
    phone: '+91-7721908843',
    location: 'Pune, India',
    linkedin: 'https://www.linkedin.com/in/ajay-parhar',
    github: 'https://github.com/parharajay001',
    summary:
      'Experienced and results-driven MERN Stack Developer with over 3+ years of expertise in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Proven ability in developing scalable RESTful APIs, dynamic frontends, and secure backends. Strong command over JavaScript (ES6+), TypeScript, React Hooks, Redux, and Node.js, with a focus on clean architecture and performance optimization.',
  },

  skills: {
    frontend: ['React', 'Redux / Redux Toolkit', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS', 'Responsive Design'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth', 'Payment Gateway Integration'],
    database: ['MongoDB', 'Mongoose', 'MySQL'],
    ui: ['Material-UI (MUI)', 'Tailwind CSS', 'Responsive Design'],
    cloud: ['AWS S3', 'Docker (basic)', 'Webpack'],
    tools: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Postman', 'VS Code', 'Chrome DevTools', 'Jira', 'Azure'],
    testing: ['Jest', 'Mocha', 'React Testing Library'],
    other: ['Agile/Scrum', 'Highcharts', 'Performance Optimization', 'Clean Code Practices'],
  },

  experience: [
    {
      company: 'Spiderweb Technologies',
      position: 'MERN Stack Developer',
      duration: 'Jun 2025 - Present',
      location: 'Canada (Remote)',
      responsibilities: [
        'Built and maintained scalable web applications using MERN stack',
        'Integrated multiple payment gateways and handled complex in-app purchase workflows',
        'Utilized AWS S3 for secure file uploads/downloads and implemented access control',
        'Developed reusable React components and optimized state management using Redux Toolkit',
        'Collaborated with QA, DevOps, and product teams to ensure on-time and high-quality delivery',
        'Wrote unit and integration tests using Jest and React Testing Library',
      ],
    },
    {
      company: 'Cisconic Pvt. Ltd.',
      position: 'Software Engineer',
      duration: 'Mar 2022 - May 2025',
      location: 'Hyderabad (Remote)',
      responsibilities: [
        'Led full-stack development on complex web platforms (RevolutioM, Patient Portal, Real Estate Platform, E-Commerce System)',
        'Built secure RESTful APIs and implemented JWT-based authentication',
        'Improved performance with SQL query optimization and backend refactoring',
        'Participated in Agile sprints, retrospectives, and daily standups',
        'Mentored junior developers and conducted code reviews to maintain code quality',
      ],
    },
    {
      company: 'Neeta-Tech Pvt. Ltd.',
      position: 'Software Engineer (Intern)',
      duration: 'Jan 2020 - July 2020',
      location: 'Pune, India',
      responsibilities: [
        'Developed key modules for Doctor On Door Lifeline project',
        'Integrated REST APIs with frontend components',
        'Assisted in early-stage development and testing',
      ],
    },
  ],

  projects: [
    {
      name: 'RevolutioM 2.0',
      description:
        'A cutting-edge web application designed exclusively for client vendors and distributors. The platform enabled users to perform in-depth analysis, simulations, correlations, and optimizations of sales, profit, and market share at the geographical level.',
      technologies: ['React', 'TypeScript', 'Redux', 'Material-UI', 'Highcharts', 'REST APIs'],
      features: [
        'Interactive dashboards with advanced data visualization',
        'Real-time analysis and simulation tools',
        'Geographical sales and profit optimization',
        'Performance metrics visualization with Highcharts',
      ],
      github: null,
      live: null,
    },
    {
      name: 'Patient Portal',
      description:
        'Healthcare management system for patient records, appointments, and medical information with focus on security and data privacy.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Material-UI'],
      features: [
        'Secure patient authentication with JWT',
        'Medical records management',
        'Appointment scheduling system',
        'HIPAA compliant data handling',
      ],
      github: null,
      live: null,
    },
    {
      name: 'E-Commerce Platform',
      description:
        'Full-featured e-commerce system with payment gateway integration, product catalog, and order management.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Payment Gateway', 'Redux'],
      features: [
        'Payment gateway integration',
        'Product catalog with search and filters',
        'Shopping cart and checkout flow',
        'Order tracking and management',
      ],
      github: null,
      live: null,
    },
  ],
};

export const BLURVALUE = 20;