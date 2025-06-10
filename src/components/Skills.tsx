import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Frontend', items: skills.frontend, color: 'bg-blue-100 text-blue-800' },
    { title: 'UI/UX', items: skills.ui, color: 'bg-green-100 text-green-800' },
    { title: 'Tools', items: skills.tools, color: 'bg-purple-100 text-purple-800' },
    { title: 'Testing', items: skills.testing, color: 'bg-yellow-100 text-yellow-800' },
    { title: 'Other', items: skills.other, color: 'bg-pink-100 text-pink-800' },
  ];

  return (
    <section id='skills' className='py-20 bg-white'>
      <div className='section-padding'>
        <h2 className='text-4xl font-bold text-center mb-12'>Skills</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-gray-50 rounded-lg p-6'
            >
              <h3 className='text-xl font-semibold mb-4'>{category.title}</h3>
              <div className='flex flex-wrap gap-2'>
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
