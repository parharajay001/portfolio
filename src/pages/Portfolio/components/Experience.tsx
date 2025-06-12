import { Building, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { experience } from '../../../data/portfolioData';
import { fadeIn } from '../../../utils/animations';
import { ExperienceBackground } from '../../../assets/images';
import { BLURVALUE } from '../../../data/portfolio';

export const Experience = () => {
  return (
    <Parallax
      bgImage={ExperienceBackground}
      strength={200}
      blur={BLURVALUE}
      renderLayer={(percentage) => (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: `translate(-50%, ${percentage * 40}px)`,
            width: '100%',
          }}
        >
          <div className='absolute inset-0 bg-background/80 backdrop-blur-sm' />
        </div>
      )}
    >
      <section id='experience' className='min-h-screen flex items-center py-20 px-4 relative'>
        <motion.div
          className='max-w-6xl mx-auto relative z-10'
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
            Work Experience
          </motion.h2>
          <div className='space-y-12'>
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                className='bg-background-secondary/50 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-primary/50 transition-all shadow-black shadow-2xl'
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  transition: { duration: 0.5, delay: index * 0.3 },
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                }}
              >
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-6'>
                  <div>
                    <h3 className='text-2xl font-bold text-primary mb-2'>{job.position}</h3>
                    <div className='flex items-center gap-2 text-foreground mb-2'>
                      <Building size={18} className='text-primary' />
                      <span className='text-lg font-semibold'>{job.company}</span>
                    </div>
                  </div>
                  <div className='text-right'>
                    <div className='flex items-center gap-2 text-foreground-secondary mb-1'>
                      <Calendar size={16} className='text-primary' />
                      <span>{job.duration}</span>
                    </div>
                    <div className='flex items-center gap-2 text-foreground-secondary'>
                      <MapPin size={16} className='text-primary' />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <div className='mb-6'>
                  <h4 className='text-lg font-semibold text-foreground mb-3'>
                    Key Responsibilities:
                  </h4>
                  <ul className='space-y-2'>
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <motion.li
                        key={responsibility}
                        className='text-foreground-secondary flex items-start gap-2'
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: respIndex * 0.1 }}
                      >
                        <span className='text-primary'>•</span>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className='text-lg font-semibold text-foreground mb-3'>Technologies Used:</h4>
                  <div className='flex flex-wrap gap-3'>
                    {job.tech.map((item, techIndex) => (
                      <motion.span
                        key={item}
                        className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/30 shadow-black shadow-md cursor-default'
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.3, delay: techIndex * 0.2 },
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {item}
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
