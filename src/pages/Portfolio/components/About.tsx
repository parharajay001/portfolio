import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, skills } from '../../../data/portfolioData';
import { slideIn } from '../../../utils/animations';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            {...slideIn('left')}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Frontend Developer with over 3 years of experience specializing in
              React ecosystem. I love creating intuitive, responsive web applications that provide
              exceptional user experiences.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My expertise spans from building complex single-page applications to implementing
              robust state management solutions. I'm proficient in modern development practices
              including Test-Driven Development, Agile methodologies, and continuous integration.
            </p>
            <div className="flex items-center gap-4 text-gray-300">
              <MapPin size={20} className="text-purple-400" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>
          <motion.div
            {...slideIn('right')}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 px-3 py-2 rounded-lg text-sm text-gray-300 text-center border border-purple-500/20 hover:border-purple-400/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
