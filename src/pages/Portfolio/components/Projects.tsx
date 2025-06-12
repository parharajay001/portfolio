import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../../../data/portfolioData';
import { fadeIn } from '../../../utils/animations';

export const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex items-center py-20 px-4'>
      <motion.div className='max-w-6xl mx-auto' {...fadeIn()} viewport={{ once: true }}>
        <motion.h2
          className='text-4xl font-bold text-center mb-16 text-foreground'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className='bg-background-secondary rounded-xl overflow-hidden border border-border hover:border-primary/50 group'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className='relative overflow-hidden h-28'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <div className='transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-4'>
                    <motion.a
                      href={project.github}
                      className='bg-primary/90 text-background px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-hover transition-colors'
                      whileHover={{ scale: 1.05 }}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className='bg-primary/90 text-background px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-hover transition-colors'
                      whileHover={{ scale: 1.05 }}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-primary mb-3'>{project.title}</h3>
                <p className='text-foreground mb-4 leading-relaxed'>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className='bg-primary/10 text-primary px-2 py-1 rounded text-xs border border-primary/30'
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
