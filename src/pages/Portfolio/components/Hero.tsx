import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { personalInfo } from '../../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { HeroBackground } from '../../../assets/images';
import { BLURVALUE } from '../../../data/portfolio';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <Parallax
      bgImage={HeroBackground}
      strength={300}
      blur={BLURVALUE}
      renderLayer={(percentage) => (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: `translate(-50%, ${percentage * 50}px)`,
            width: '100%',
          }}
        >
          <div className='absolute inset-0 bg-background/80 backdrop-blur-sm' />
        </div>
      )}
    >
      <section
        id='hero'
        className='min-h-screen flex items-center justify-center px-4 pt-16 relative'
      >
        <motion.div
          className='max-w-4xl mx-auto text-center relative z-10'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className='mb-8'
            variants={staggerContainer}
            initial='initial'
            animate='animate'
          >
            <motion.img
              variants={fadeInUp}
              src={personalInfo.image}
              alt={personalInfo.name}
              className='w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary/30 shadow-black shadow-2xl'
              style={{
                transform: `translateY(${-window.scrollY * 0.2}px)`,
              }}
            />
            <motion.h1 variants={fadeInUp} className='text-5xl md:text-7xl font-bold mb-6'>
              <span className='text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover'>
                {personalInfo.role}
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className='text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto'
            >
              {personalInfo.bio}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className='flex flex-col sm:flex-row gap-4 justify-center'
            >
              <button
                onClick={() => scrollToSection('projects')}
                className='px-8 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary-hover transform hover:scale-105 transition-all shadow-black shadow-2xl'
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className='px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-background transition-all shadow-black shadow-2xl'
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            className='animate-bounce'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <ChevronDown className='mx-auto text-primary' size={32} />
          </motion.div>
        </motion.div>
      </section>
    </Parallax>
  );
};
