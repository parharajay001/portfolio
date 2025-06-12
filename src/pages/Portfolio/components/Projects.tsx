import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { projects } from '../../../data/portfolioData';
import { fadeIn } from '../../../utils/animations';
import { ProjectsBackground } from '../../../assets/images';
import { BLURVALUE } from '../../../data/portfolio';

export const Projects = () => {
  return (
    <Parallax
      bgImage={ProjectsBackground}
      strength={200}
      blur={BLURVALUE}
      renderLayer={(percentage) => (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: `translate(-50%, ${percentage * 30}px)`,
            width: '100%',
          }}
        >
          <div className='absolute inset-0 bg-background/90 backdrop-blur-sm' />
        </div>
      )}
    >
      <section id='projects' className='min-h-screen flex items-center py-20 px-4 relative'>
        <motion.div
          className='max-w-4xl mx-auto relative z-10'
          {...fadeIn()}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-4xl font-bold text-center mb-16 text-foreground'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <div className='grid md:grid-cols-1 gap-8'>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className='bg-background-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border hover:border-primary/50 group transform transition-all duration-300 shadow-black shadow-2xl'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <div className='relative overflow-hidden h-48'>
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
                <div className='p-8'>
                  <h3 className='text-2xl font-bold text-primary mb-3'>{project.title}</h3>
                  <p className='text-foreground mb-4 leading-relaxed'>{project.description}</p>
                  <div className='flex flex-wrap gap-3'>
                    {project.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className='bg-primary/10 text-primary px-2 py-1 rounded text-xs border border-primary/30 shadow-black shadow-md cursor-default'
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.3, delay: index * 0.2 },
                        }}
                        viewport={{ once: true }}
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
    </Parallax>
  );
};
