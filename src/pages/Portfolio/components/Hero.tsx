import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../../utils/animations';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.img
            variants={fadeInUp}
            src={personalInfo.image}
            alt={personalInfo.name}
            className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-primary/30 shadow-2xl"
          />
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">
              {personalInfo.role}
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto"
          >
            {personalInfo.bio}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary-hover transform hover:scale-105 transition-all shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-background transition-all"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          className="animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <ChevronDown className="mx-auto text-primary" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};
