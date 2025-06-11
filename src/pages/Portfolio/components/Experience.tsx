import { Building, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { experience } from '../../../data/portfolioData';
import { fadeIn } from '../../../utils/animations';

export const Experience = () => {
  return (
    <section id='experience' className='py-20 px-4 bg-slate-800/30'>
      <motion.div className='max-w-6xl mx-auto' {...fadeIn()} viewport={{ once: true }}>
        <motion.h2
          className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        <div className='space-y-12'>
          {experience.map((job) => (
            <motion.div
              key={job.company}
              className='bg-slate-800/50 rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className='flex flex-col md:flex-row md:items-center justify-between mb-6'>
                <div>
                  <h3 className='text-2xl font-bold text-purple-400 mb-2'>{job.position}</h3>
                  <div className='flex items-center gap-2 text-gray-300 mb-2'>
                    <Building size={18} />
                    <span className='text-lg font-semibold'>{job.company}</span>
                  </div>
                </div>
                <div className='text-right'>
                  <div className='flex items-center gap-2 text-gray-400 mb-1'>
                    <Calendar size={16} />
                    <span>{job.duration}</span>
                  </div>
                  <div className='flex items-center gap-2 text-gray-400'>
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>

              <div className='mb-6'>
                <h4 className='text-lg font-semibold text-gray-300 mb-3'>Key Responsibilities:</h4>
                <ul className='space-y-2'>
                  {job.responsibilities.map((responsibility) => (
                    <motion.li
                      key={responsibility}
                      className='text-gray-400 flex items-start gap-2'
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className='text-purple-400'>•</span>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className='text-lg font-semibold text-gray-300 mb-3'>Technologies Used:</h4>
                <div className='flex flex-wrap gap-2'>
                  {job.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className='bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30'
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
