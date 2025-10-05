import { Github, Mail, Phone, Linkedin, Globe } from "lucide-react";
import { ProfilePic, Project_1, Patient_Portal, E_Com } from "../assets/images";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaBitbucket, FaJira, FaChartArea, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiRedux, SiTypescript, SiJavascript, SiMui, SiTailwindcss, SiJest, SiPostman, SiVite, SiMongodb, SiExpress, SiMysql, SiMocha, SiWebpack } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  Icon: IconType;
}

export const aboutMe = {
  p1: `I'm a passionate MERN stack developer with over 3 years of experience specializing in
                React ecosystem. I love creating intuitive, responsive web applications that provide
                exceptional user experiences.`,
  p2: `My expertise spans from building complex single-page applications to implementing
                robust state management solutions. I'm proficient in modern development practices
                including Test-Driven Development, Agile methodologies, and continuous integration.`,
};

export const skills: Skill[] = [
  { name: "React", Icon: FaReact },
  { name: "Redux", Icon: SiRedux },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript (ES6+)", Icon: SiJavascript },
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3Alt },
  { name: "Material-UI", Icon: SiMui },
  { name: "TailwindCSS", Icon: SiTailwindcss },
  { name: "AWS S3", Icon: FaAws },
  { name: "Docker", Icon: FaDocker },
  { name: "Jest", Icon: SiJest },
  { name: "Mocha", Icon: SiMocha },
  { name: "Highcharts", Icon: FaChartArea },
  { name: "RESTful APIs", Icon: SiPostman },
  { name: "Git", Icon: FaGitAlt },
  { name: "GitHub", Icon: FaGithub },
  { name: "Bitbucket", Icon: FaBitbucket },
  { name: "Jira", Icon: FaJira },
  { name: "Agile", Icon: BsKanban },
  { name: "Webpack", Icon: SiWebpack },
  { name: "VS Code", Icon: TbBrandVscode },
  { name: "Vite", Icon: SiVite },
];

export const projects = [
  {
    title: "RevolutioM 2.0",
    description:
      "A comprehensive business intelligence web application engineered specifically for client vendors and distributors to drive data-driven decision making. The platform empowered users to conduct sophisticated analysis, predictive simulations, statistical correlations, and strategic optimizations across sales performance, profit margins, and market share dynamics at granular geographical levels (country, state, city, and territory). As a key frontend developer, I architected and implemented highly interactive, responsive dashboards featuring data visualization through advanced Highcharts integration. I developed complex filtering systems enabling multi-dimensional data exploration, built dynamic drill-down capabilities for hierarchical data analysis, and created intuitive user interfaces that transformed complex datasets into actionable business insights. The platform included advanced features such as comparative analysis tools, trend forecasting modules, performance benchmarking systems, and automated report generation. My contributions significantly improved user engagement and decision-making efficiency for stakeholders across multiple business verticals.",
    tech: ["React", "TypeScript", "Redux", "Material-UI", "Highcharts", "REST APIs", "Jest", "Git", "Jira", "Agile"],
    github: null,
    live: null,
    image: Project_1,
  },
  {
    title: "IVF Patient Management Portal",
    description:
      "A comprehensive patient management application developed using the MERN stack (MySQL, Express.js, React, and Node.js) specifically designed for tracking and supporting IVF (In Vitro Fertilization) treatments. The application enables both patients and healthcare providers to efficiently manage key aspects of the IVF process through an intuitive and responsive interface. Key features include a visual treatment progress timeline with color-coded milestones, appointment scheduling system, real-time medication tracking, billing details management, and drug monitoring sections. The front-end built with React provides an interactive user experience, while the Node.js and Express.js backend ensures seamless communication with MySQL database for secure and efficient data storage. This project enhances the IVF treatment process by offering transparency, convenience, and real-time tracking capabilities for patients throughout their treatment journey.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "JWT", "Material-UI", "Redux", "REST APIs", "Real-time Tracking", "Timeline UI"],
    github: null,
    live: null,
    image: Patient_Portal,
  },
  {
    title: "Vegetables E-Commerce Platform",
    description:
      "A comprehensive full-stack e-commerce platform developed for the vegetables and fresh produce industry, designed to provide customers with a seamless online shopping experience for a wide range of fresh vegetables and produce. I worked on both frontend and backend development, building the complete application architecture using modern web technologies. The platform features dynamic product listings, advanced category filters for browsing vegetables by type, attribute-based filtering (freshness, organic, seasonal availability), detailed product pages with comprehensive nutritional information and freshness indicators, and a responsive shopping cart system optimized for mobile-friendly experience. On the backend, I developed RESTful APIs for product management, user authentication, order processing, and inventory management. The project includes secure payment gateway integrations to handle online transactions, ensuring safe and reliable payment processing for customers. I implemented robust server-side logic for order management, user authentication systems, and database design for efficient product catalog management. The frontend was built with React to ensure an intuitive and visually appealing interface for fresh produce shopping, while the backend provided scalable and secure API endpoints. This project showcased my full-stack development expertise in creating complete e-commerce solutions with secure payment processing tailored for fresh vegetables and produce retail customers.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "MongoDB",
      "CSS3",
      "HTML5",
      "Payment Gateway Integration",
      "REST APIs",
      "JWT",
      "Responsive Design",
      "UI/UX Design",
      "Product Catalog",
      "Shopping Cart",
      "Order Management",
    ],
    github: null,
    live: null,
    image: E_Com,
  },
  {
    title: "Real Estate Management Platform",
    description:
      "A comprehensive real estate management application developed using the MERN stack (MySQL, Express.js, React, and Node.js) designed to simplify and streamline the management of customers, properties, sites, towers, and flats. The platform provides a centralized solution for real estate developers, agents, and customers to manage various aspects of the real estate process. Key features include property viewing capabilities with detailed information about flats within specific towers, customer inquiry management, booking and transaction handling, and real-time data synchronization. The application ensures data consistency and seamless integration between different platform components. My role involved developing both the intuitive front-end user interface and robust back-end functionality for managing real estate listings and customer data. This project is currently in active development, focusing on enhancing user experience and expanding platform capabilities.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "Redux", "Material-UI", "REST APIs", "JWT", "Real-time Updates", "Property Management"],
    github: null,
    live: null,
    image: null,
  },
];

export const experience = [
  {
    company: "Spiderweb Technologies",
    position: "MERN Stack Developer",
    duration: "June 2025 - Present",
    location: "Canada (Remote)",
    responsibilities: [
      "Built and maintained scalable web applications using MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Integrated multiple payment gateways and handled complex in-app purchase workflows.",
      "Utilized AWS S3 for secure file uploads/downloads and implemented access control.",
      "Developed reusable React components and optimized state management using Redux Toolkit.",
      "Collaborated with QA, DevOps, and product teams to ensure on-time and high-quality delivery.",
      "Wrote unit and integration tests using Jest and React Testing Library.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "TypeScript", "AWS S3", "Jest", "Git", "Jira", "REST APIs", "Agile"],
  },
  {
    company: "Cisconic Pvt. Ltd.",
    position: "Software Engineer",
    duration: "Mar 2022 - May 2025",
    location: "Hyderabad (Remote)",
    responsibilities: [
      "Led full-stack development on complex web platforms including RevolutioM, Patient Portal, Real Estate Platform, and E-Commerce System.",
      "Built secure RESTful APIs and implemented JWT-based authentication.",
      "Architected and developed scalable, high-performance web applications using React.js, improving overall application performance and responsiveness.",
      "Designed and implemented reusable React components and UI libraries, reducing development time for new features by 40%.",
      "Improved performance with SQL query optimization and backend refactoring.",
      "Conducted comprehensive code reviews and mentored junior developers, fostering a culture of continuous improvement and high code quality.",
      "Participated in Agile sprints, retrospectives, and daily standups.",
    ],
    tech: ["React", "Node.js", "Express.js", "TypeScript", "Redux", "MongoDB", "MySQL", "Material-UI", "Jest", "Git", "Jira", "REST APIs", "Agile", "Highcharts", "Postman", "Bitbucket"],
  },
  {
    company: "Neeta-Tech Pvt. Ltd.",
    position: "Software Engineer (Intern)",
    duration: "Jan 2020 - July 2020",
    location: "Pune, India",
    responsibilities: [
      "Developed key modules for Doctor On Door Lifeline project.",
      "Integrated REST APIs with frontend components.",
      "Assisted in early-stage development and testing.",
      "Built frontend components and user interfaces in HTML, CSS, and JavaScript.",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Git"],
  },
];

export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "parharajay001@gmail.com",
  },
  { icon: Phone, title: "Phone", content: "+91 7721908843" },
  { icon: Github, title: "GitHub", content: "www.github.com/parharajay001" },
  { icon: Linkedin, title: "LinkedIn", content: "www.linkedin.com/in/ajay-parhar" },
  { icon: Globe, title: "Portfolio", content: "parharajay001.github.io/portfolio" },
];

export const personalInfo = {
  name: "Ajay Parhar",
  role: "MERN Stack Developer",
  location: "Pune, India",
  bio: "Experienced and results-driven MERN Stack Developer with over 3+ years of expertise in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Proven ability in developing scalable RESTful APIs, dynamic frontends, and secure backends with strong focus on clean architecture and performance optimization.",
  image: ProfilePic,
};
