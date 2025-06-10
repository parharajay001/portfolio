import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../../../data/portfolioData';
import { fadeIn } from '../../../utils/animations';

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

  return (
    <motion.nav
      className='fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-purple-500/20'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <motion.div
            className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
            {...fadeIn(0.2)}
          >
            {personalInfo.name}
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-purple-400 bg-purple-400/10'
                    : 'text-gray-300 hover:text-purple-400'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className='md:hidden text-gray-300 hover:text-purple-400'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            {...fadeIn(0.2)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className='md:hidden'
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen && (
            <div className='py-4 border-t border-purple-500/20'>
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className='block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-400/10 transition-colors'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
};
