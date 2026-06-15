import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { experience } from '../../../data/portfolioData';

export const Experience = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title text-2xl md:text-3xl font-bold mb-10 prompt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          git log --experience
        </motion.h2>

        <div className="space-y-4">
          {experience.map((exp, i) => {
            const isOpen = open === i;
            return (
              <div key={exp.company} className="rounded-lg border border-border bg-background-secondary/50 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start gap-3 p-5 text-left"
                >
                  <ChevronRight
                    size={18}
                    className={`text-primary mt-1 shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                  />
                  <div className="flex-1">
                    <div className="font-mono text-foreground font-bold">{exp.position}</div>
                    <div className="font-mono text-primary text-sm">{exp.company}</div>
                    <div className="font-mono text-dim text-xs mt-1">
                      {exp.duration} · {exp.location}
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-12">
                        <ul className="space-y-2 font-sans text-foreground-secondary text-sm">
                          {exp.responsibilities.map((r, j) => (
                            <li key={j} className="flex gap-2">
                              <span className="text-primary font-mono">›</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <span key={t} className="font-mono text-xs px-2 py-1 rounded bg-background border border-border text-dim">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
