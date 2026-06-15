import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projectGroups } from '../../../data/portfolioData';

export const ProjectTree = () => {
  // key format: "groupIndex-projectIndex"
  const [openKey, setOpenKey] = useState<string | null>('0-0');

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title text-2xl md:text-3xl font-bold mb-10 prompt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          tree ~/projects
        </motion.h2>

        <div className="rounded-lg border border-border bg-background-secondary/50 p-5 font-mono text-sm">
          {projectGroups.map((group, gi) => (
            <div key={group.category} className="mb-4 last:mb-0">
              <div className="text-accent font-bold">
                <span className="text-dim">▾</span> {group.category}/
                <span className="text-dim font-normal"> # {group.label} ({group.projects.length})</span>
              </div>

              <div className="mt-1 border-l border-border ml-2 pl-4">
                {group.projects.map((p, pi) => {
                  const key = `${gi}-${pi}`;
                  const isOpen = openKey === key;
                  const isLast = pi === group.projects.length - 1;
                  return (
                    <div key={p.name} className="py-0.5">
                      <button
                        onClick={() => setOpenKey(isOpen ? null : key)}
                        className="w-full text-left flex items-center gap-2 group"
                      >
                        <span className="text-dim">{isLast ? '└─' : '├─'}</span>
                        <span className={`${isOpen ? 'text-primary' : 'text-foreground'} group-hover:text-primary transition-colors`}>
                          {p.name}.md
                        </span>
                        {p.draft && <span className="text-dim text-xs">(draft)</span>}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-6 mt-2 mb-3 rounded-md border border-border bg-background p-4">
                              <p className="font-sans text-foreground-secondary leading-relaxed">{p.description}</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                  <span key={t} className="text-xs px-2 py-1 rounded border border-border text-primary">
                                    [{t}]
                                  </span>
                                ))}
                              </div>
                              {(p.github || p.live) && (
                                <div className="mt-3 flex gap-4 text-xs">
                                  {p.github && (
                                    <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-foreground-secondary hover:text-primary">
                                      <Github size={14} /> source
                                    </a>
                                  )}
                                  {p.live && (
                                    <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-foreground-secondary hover:text-primary">
                                      <ExternalLink size={14} /> live
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
