import { motion } from 'framer-motion';
import { Resume } from '../../../assets/pdfs';
import { contactInfo } from '../../../data/portfolioData';

export const Contact = () => {
  return (
    <section id='contact' className='min-h-screen flex items-center py-20 px-4 bg-background-secondary/30'>
      <motion.div
        className='max-w-4xl mx-auto text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className='text-4xl font-bold mb-8 text-foreground'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          className='text-xl text-foreground-secondary mb-12 max-w-2xl mx-auto'
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
              className='group bg-background-secondary/50 p-6 rounded-xl border border-border hover:border-primary/50 transition-all'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon
                className='mx-auto mb-4 text-primary group-hover:scale-110 transition-transform'
                size={32}
              />
              <h3 className='text-lg font-semibold text-foreground mb-2'>{item.title}</h3>
              <p className='text-foreground-secondary hover:text-primary transition-colors'>
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
            className='px-8 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary-hover transform transition-all shadow-lg'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={Resume} download>
              Download Resume
            </a>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
