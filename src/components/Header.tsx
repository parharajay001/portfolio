import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <header className='fixed top-0 w-full bg-white shadow-md z-50'>
      <nav className='section-padding py-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-primary'>JD</h1>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex space-x-8'>
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className='hover:text-primary transition-colors'>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className='md:hidden mt-4 space-y-2'>
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className='block py-2 hover:text-primary transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
