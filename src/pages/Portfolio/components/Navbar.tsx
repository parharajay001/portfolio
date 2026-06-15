import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { personalInfo } from '../../../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

export const Navbar = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md font-mono">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <button onClick={() => scrollToSection('hero')} className="text-primary text-sm font-bold">
          ~/ajay-parhar<span className="terminal-cursor" />
        </button>

        <div className="hidden md:flex items-center gap-5 text-sm">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollToSection(s)}
              className={`transition-colors hover:text-primary ${activeSection === s ? 'text-primary' : 'text-foreground-secondary'}`}
            >
              ./{s}
            </button>
          ))}
          <a
            href={personalInfo.resume}
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-primary text-primary hover:bg-primary hover:text-background transition-colors"
          >
            <Download size={14} /> resume
          </a>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="text-foreground-secondary hover:text-primary">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="text-foreground-secondary hover:text-primary">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu" className="text-foreground">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 px-4 py-3 flex flex-col gap-3 text-sm">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollToSection(s)}
              className={`text-left transition-colors hover:text-primary ${activeSection === s ? 'text-primary' : 'text-foreground-secondary'}`}
            >
              ./{s}
            </button>
          ))}
          <a href={personalInfo.resume} download className="flex items-center gap-1.5 text-primary">
            <Download size={14} /> download resume.pdf
          </a>
        </div>
      )}
    </nav>
  );
};
