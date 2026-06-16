import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Languages } from './components/Languages';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectTree } from './components/ProjectTree';
import { AnimatedBackground } from '../../components/AnimatedBackground';

const SECTIONS = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = SECTIONS.find((section) => {
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
    <div className="min-h-screen bg-transparent transition-colors duration-200">
      <AnimatedBackground />
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Experience />
      <ProjectTree />
      <Education />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
