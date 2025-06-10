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
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-400/30 shadow-2xl"
          />
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {personalInfo.role}
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {personalInfo.bio}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all"
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
          <ChevronDown className="mx-auto text-purple-400" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};
