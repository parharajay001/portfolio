import { motion } from 'framer-motion';
import { Resume } from '../../../assets/pdfs';
import { contactInfo } from '../../../data/portfolioData';

export const Contact = () => {
  return (
    <section id='contact' className='py-20 px-4 bg-slate-800/30'>
      <motion.div
        className='max-w-4xl mx-auto text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className='text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          className='text-xl text-gray-300 mb-12 max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm always interested in new opportunities and exciting projects. Let's discuss how we can
          bring your ideas to life!
        </motion.p>

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {contactInfo.map((item) => (
            <motion.div
              key={item.title}
              className='group bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon
                className='mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform'
                size={32}
              />
              <h3 className='text-lg font-semibold text-white mb-2'>{item.title}</h3>
              <p className='text-gray-300'>
                {item.title === 'GitHub' ? (
                  <a href={`https://www.${item.content}`} target='_blank'>
                    {item.content}
                  </a>
                ) : item.title === 'Email' ? (
                  <a href={`mailto:${item.content}`}>{item.content}</a>
                ) : (
                  item.title === 'Phone' && <a href={`tel:${item.content}`}>{item.content}</a>
                )}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='flex justify-center gap-4'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className='px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform transition-all shadow-lg'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={Resume} download>
              Download Resume
            </a>
          </motion.button>
          {/* <motion.button
            className='px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Call
          </motion.button> */}
        </motion.div>
      </motion.div>
    </section>
  );
};
