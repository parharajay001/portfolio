import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../../../data/portfolioData';
import { fadeIn } from '../../../utils/animations';
import { useTheme } from '../../../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Navbar = ({
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}: NavbarProps) => {
  const navItems = ['Hero', 'About', 'Experience', 'Projects', 'Contact'];
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      className='fixed top-0 w-full bg-background/20 backdrop-blur-sm z-50 border-b border-border'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <button
            onClick={() => scrollToSection('hero')}
            className='text-2xl font-bold text-foreground hover:text-primary transition-colors'
          >
            {personalInfo.name}
          </button>

          <div className='hidden md:flex space-x-8'>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`${
                  activeSection === item.toLowerCase()
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                } transition-colors`}
              >
                {item}
              </button>
            ))}
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className='p-2 rounded-lg bg-background-secondary text-foreground hover:text-primary transition-colors'
              aria-label='Toggle theme'
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            className='md:hidden text-foreground hover:text-primary transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className='md:hidden bg-background border-t border-border'
          variants={fadeIn}
          initial='initial'
          animate='animate'
        >
          <div className='px-4 pt-2 pb-4 space-y-2'>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg ${
                  activeSection === item.toLowerCase()
                    ? 'text-primary bg-background-secondary'
                    : 'text-foreground hover:text-primary hover:bg-background-secondary'
                } transition-colors`}
              >
                {item}
              </button>
            ))}
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className={`block w-full text-left px-3 py-2 rounded-lg ${'text-foreground hover:text-primary hover:bg-background-secondary'} transition-colors`}
              aria-label='Toggle theme'
            >
              {theme === 'dark' ? (
                <div className='flex items-center gap-2'>
                  Light
                  <Sun size={20} />
                </div>
              ) : (
                <div className='flex items-center gap-2'>
                  Dark
                  <Moon size={20} />
                </div>
              )}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
