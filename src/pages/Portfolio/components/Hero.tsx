import { ChevronDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, stats } from '../../../data/portfolioData';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
      <motion.div
        className="max-w-3xl w-full mx-auto relative z-10 font-mono"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary text-sm prompt">whoami</p>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
          {personalInfo.role}
          <span className="terminal-cursor" />
        </h1>

        <p className="mt-3 text-accent text-sm md:text-base">{personalInfo.title}</p>

        <p className="mt-6 font-sans text-foreground-secondary text-base md:text-lg leading-relaxed">
          {personalInfo.bio}
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-md border border-border bg-background-secondary/60 px-3 py-3">
              <div className="text-primary text-lg font-bold">{s.value}</div>
              <div className="text-dim text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-5 py-2.5 rounded bg-primary text-background font-semibold hover:bg-primary-hover transition-colors prompt-btn"
          >
            view --projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2.5 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-background transition-colors"
          >
            contact --me
          </button>
          <a
            href={personalInfo.resume}
            download
            className="px-5 py-2.5 rounded border border-border text-foreground-secondary font-semibold hover:border-primary hover:text-primary transition-colors flex items-center gap-2 justify-center"
          >
            <Download size={16} /> resume.pdf
          </a>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <ChevronDown className="text-primary" size={28} />
      </motion.div>
    </section>
  );
};
