import { motion } from 'framer-motion';
import { skillCategories } from '../../../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title text-2xl md:text-3xl font-bold mb-10 prompt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ls skills/
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="rounded-lg border border-border bg-background-secondary/50 p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="font-mono text-accent text-sm mb-4">
                <span className="text-dim">▾</span> {cat.name}/
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(({ name, Icon }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1.5 rounded border border-border text-foreground-secondary hover:border-primary hover:text-primary transition-colors"
                  >
                    <Icon className="text-primary" size={14} />
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
