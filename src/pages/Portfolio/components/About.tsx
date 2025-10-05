import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
// import { Parallax } from 'react-parallax';
// import { AboutBackground } from '../../../assets/images';
import { skills, personalInfo, aboutMe } from '../../../data/portfolioData';
import { slideIn } from '../../../utils/animations';
import * as React from 'react';
import type { IconBaseProps, IconType } from 'react-icons';

// const BLURVALUE = 1;

export const About = () => {
  const IconComponent = (icon: IconType) => {
    return React.createElement(icon as React.ComponentType<IconBaseProps>, { size: 20 });
  };

  return (
    // <Parallax
    //   bgImage={AboutBackground}
    //   strength={200}
    //   blur={BLURVALUE}
    //   renderLayer={(percentage) => (
    //     <div
    //       style={{
    //         position: 'absolute',
    //         left: '50%',
    //         transform: `translate(-50%, ${percentage * 30}px)`,
    //         width: '100%',
    //       }}
    //     >
    //       <div className='absolute inset-0 bg-background/80 backdrop-blur-sm' />
    //     </div>
    //   )}
    // >
      <section id='about' className='min-h-screen flex items-center py-20 px-4'>
        <motion.div
          className='max-w-6xl mx-auto relative z-10'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className='text-4xl font-bold text-center mb-16 text-foreground'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <motion.div
              {...slideIn('left')}
              viewport={{ once: true }}
              className='space-y-6 text-lg text-foreground-secondary'
            >
              <p>
                {aboutMe.p1}
              </p>
              <p>
                {aboutMe.p2}
              </p>
              <div className='flex items-center gap-4 text-foreground-secondary'>
                <MapPin size={20} className='text-primary' />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>
            <motion.div {...slideIn('right')} viewport={{ once: true }} className='space-y-8'>
              <h3 className='text-2xl font-semibold mb-6 text-primary'>Technical Skills</h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className='text-foreground-secondary hover:text-primary bg-background-secondary/20 p-3 rounded-lg border border-border hover:border-primary transition-colors shadow-black shadow-md cursor-default flex items-center gap-2'
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, delay: index * 0.1 },
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 0.95 }}
                  >
                    <div className='text-primary'>{skill.Icon && IconComponent(skill.Icon)}</div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    // </Parallax>
  );
};
