import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <div className='min-h-screen bg-background transition-colors duration-200'>
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
