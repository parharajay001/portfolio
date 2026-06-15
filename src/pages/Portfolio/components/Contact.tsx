import { motion } from 'framer-motion';
import { contactInfo } from '../../../data/portfolioData';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="section-title text-2xl md:text-3xl font-bold mb-4 prompt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ./contact --me
        </motion.h2>
        <p className="font-sans text-foreground-secondary mb-8">
          Open to remote opportunities. Reach out through any channel below.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactInfo.map(({ icon: Icon, title, content, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              download={title === 'Resume' ? true : undefined}
              className="flex items-center gap-3 rounded-lg border border-border bg-background-secondary/50 p-4 hover:border-primary transition-colors group"
            >
              <Icon className="text-primary shrink-0" size={20} />
              <div className="min-w-0">
                <div className="font-mono text-xs text-dim">{title}</div>
                <div className="font-mono text-sm text-foreground group-hover:text-primary transition-colors truncate">
                  {content}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
