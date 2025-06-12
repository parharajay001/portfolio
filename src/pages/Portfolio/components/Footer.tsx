import { motion } from 'framer-motion';
import { personalInfo } from '../../../data/portfolioData';

export const Footer = () => {
  return (
    <motion.footer
      className="py-8 px-4 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-foreground-secondary">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React and passion for great user experiences.
        </p>
      </div>
    </motion.footer>
  );
};
