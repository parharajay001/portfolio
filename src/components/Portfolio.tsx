import {
    Building,
    Calendar,
    ChevronDown,
    ExternalLink,
    Github,
    Mail,
    MapPin,
    Menu,
    Phone,
    X
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
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

  const projects = [
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

  const experience = [
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-purple-500/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-4'>
            <div className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Alex Johnson
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-8'>
              {['Hero', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-purple-400 bg-purple-400/10'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className='md:hidden text-gray-300 hover:text-purple-400'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className='md:hidden py-4 border-t border-purple-500/20'>
              {['Hero', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className='block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors'
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id='hero' className='min-h-screen flex items-center justify-center px-4 pt-16'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='mb-8'>
            <img
              src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
              alt='Alex Johnson'
              className='w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-400/30 shadow-2xl'
            />
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>
                React Developer
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Senior Frontend Developer with 3+ years of experience building scalable, user-centric
              web applications using React, TypeScript, and modern web technologies.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button
                onClick={() => scrollToSection('projects')}
                className='px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-lg'
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className='px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all'
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className='animate-bounce'>
            <ChevronDown className='mx-auto text-purple-400' size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            About Me
          </h2>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <p className='text-lg text-gray-300 mb-6 leading-relaxed'>
                I'm a passionate Frontend Developer with over 3 years of experience specializing in
                React ecosystem. I love creating intuitive, responsive web applications that provide
                exceptional user experiences.
              </p>
              <p className='text-lg text-gray-300 mb-6 leading-relaxed'>
                My expertise spans from building complex single-page applications to implementing
                robust state management solutions. I'm proficient in modern development practices
                including Test-Driven Development, Agile methodologies, and continuous integration.
              </p>
              <div className='flex items-center gap-4 text-gray-300'>
                <MapPin size={20} className='text-purple-400' />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div>
              <h3 className='text-2xl font-semibold mb-6 text-purple-400'>Technical Skills</h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className='bg-slate-800/50 px-3 py-2 rounded-lg text-sm text-gray-300 text-center border border-purple-500/20 hover:border-purple-400/50 transition-colors'
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='py-20 px-4 bg-slate-800/30'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Work Experience
          </h2>
          <div className='space-y-12'>
            {experience.map((job, index) => (
              <div
                key={index}
                className='bg-slate-800/50 rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all'
              >
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-6'>
                  <div>
                    <h3 className='text-2xl font-bold text-purple-400 mb-2'>{job.position}</h3>
                    <div className='flex items-center gap-2 text-gray-300 mb-2'>
                      <Building size={18} />
                      <span className='text-lg font-semibold'>{job.company}</span>
                    </div>
                  </div>
                  <div className='text-right'>
                    <div className='flex items-center gap-2 text-gray-400 mb-1'>
                      <Calendar size={16} />
                      <span>{job.duration}</span>
                    </div>
                    <div className='flex items-center gap-2 text-gray-400'>
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <div className='mb-6'>
                  <h4 className='text-lg font-semibold text-gray-300 mb-3'>
                    Key Responsibilities:
                  </h4>
                  <ul className='space-y-2'>
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className='text-gray-400 flex items-start gap-2'>
                        <span className='text-purple-400 mt-2'>•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className='text-lg font-semibold text-gray-300 mb-3'>Technologies Used:</h4>
                  <div className='flex flex-wrap gap-2'>
                    {job.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className='bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Featured Projects
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='bg-slate-800/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transform hover:scale-105 transition-all group'
              >
                <div className='relative overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent'></div>
                </div>
                <div className='p-6'>
                  <h3 className='text-2xl font-bold text-purple-400 mb-3'>{project.title}</h3>
                  <p className='text-gray-300 mb-4 leading-relaxed'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className='bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs border border-purple-500/30'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='flex gap-4'>
                    <a
                      href={project.github}
                      className='flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors'
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className='flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors'
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 px-4 bg-slate-800/30'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Let's Work Together
          </h2>
          <p className='text-xl text-gray-300 mb-12 max-w-2xl mx-auto'>
            I'm always interested in new opportunities and exciting projects. Let's discuss how we
            can bring your ideas to life!
          </p>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            <div className='bg-slate-800/50 p-6 rounded-xl border border-purple-500/20'>
              <Mail className='mx-auto mb-4 text-purple-400' size={32} />
              <h3 className='text-lg font-semibold text-white mb-2'>Email</h3>
              <p className='text-gray-300'>alex.johnson@email.com</p>
            </div>

            <div className='bg-slate-800/50 p-6 rounded-xl border border-purple-500/20'>
              <Phone className='mx-auto mb-4 text-purple-400' size={32} />
              <h3 className='text-lg font-semibold text-white mb-2'>Phone</h3>
              <p className='text-gray-300'>+1 (555) 123-4567</p>
            </div>

            <div className='bg-slate-800/50 p-6 rounded-xl border border-purple-500/20'>
              <Github className='mx-auto mb-4 text-purple-400' size={32} />
              <h3 className='text-lg font-semibold text-white mb-2'>GitHub</h3>
              <p className='text-gray-300'>github.com/alexjohnson</p>
            </div>
          </div>

          <div className='flex justify-center gap-4'>
            <button className='px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-lg'>
              Download Resume
            </button>
            <button className='px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all'>
              Schedule Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 px-4 border-t border-purple-500/20'>
        <div className='max-w-6xl mx-auto text-center'>
          <p className='text-gray-400'>
            © 2025 Alex Johnson. Built with React and passion for great user experiences.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
