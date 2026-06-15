import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../../../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title text-2xl md:text-3xl font-bold mb-10 prompt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          cat education.log
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {education.map((e) => (
            <div key={e.degree} className="rounded-lg border border-border bg-background-secondary/50 p-5">
              <GraduationCap className="text-primary mb-3" size={22} />
              <div className="font-mono text-foreground font-bold">{e.degree}</div>
              <div className="font-sans text-foreground-secondary text-sm mt-1">{e.institution}</div>
              <div className="font-sans text-dim text-sm">{e.university}</div>
              <div className="font-mono text-accent text-xs mt-2">{e.years}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
