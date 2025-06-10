import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Focus',
      description: 'Creating intuitive and visually appealing user interfaces',
    },
    {
      icon: <Rocket size={24} />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'Working effectively in cross-functional agile teams',
    },
  ];

  return (
    <section id='about' className='py-20 bg-gray-50'>
      <div className='section-padding'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>

        <div className='max-w-4xl mx-auto'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-lg text-gray-700 mb-12 text-center'
          >
            With over 3 years of experience in React development, I specialize in building modern,
            responsive web applications that deliver exceptional user experiences. My expertise
            spans from creating pixel-perfect UI components to implementing complex state management
            solutions and integrating RESTful APIs.
          </motion.p>

          <div className='grid md:grid-cols-2 gap-8'>
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='flex items-start space-x-4'
              >
                <div className='text-primary mt-1'>{item.icon}</div>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                  <p className='text-gray-600'>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
