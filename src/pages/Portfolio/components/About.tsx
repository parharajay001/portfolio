import { motion } from 'framer-motion';
import { personalInfo } from '../../../data/portfolioData';
import { TerminalWindow } from './TerminalWindow';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title text-2xl md:text-3xl font-bold mb-8 prompt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          cat about.md
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow title="about.md">
            <div className="grid md:grid-cols-[160px_1fr] gap-6 items-start">
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="w-32 h-32 rounded-md border border-border object-cover mx-auto md:mx-0"
              />
              <div className="font-sans text-foreground-secondary leading-relaxed space-y-4">
                <p>
                  <span className="font-mono text-primary">const</span>{' '}
                  <span className="font-mono text-foreground">developer</span>{' '}
                  <span className="font-mono text-dim">=</span> "{personalInfo.name}";
                </p>
                <p>{personalInfo.bio}</p>
                <p className="font-mono text-sm text-dim">📍 {personalInfo.location}</p>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};
