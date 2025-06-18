import { motion } from 'framer-motion';
// import { Parallax } from 'react-parallax';
import { Resume } from '../../../assets/pdfs';
import { contactInfo } from '../../../data/portfolioData';
// import { ContactBackground } from '../../../assets/images';
// import { BLURVALUE } from '../../../data/portfolio';

export const Contact = () => {
  return (
    // <Parallax
    //   bgImage={ContactBackground}
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
      <section id='contact' className='min-h-screen flex items-center py-20 px-4 relative'>
        <motion.div
          className='max-w-4xl mx-auto text-center relative z-10'
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
            I'm always interested in new opportunities and exciting projects. Let's discuss how we
            can bring your ideas to life!
          </motion.p>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            {contactInfo.map((item) => (
              <motion.div
                key={item.title}
                className='group bg-background-secondary/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-all shadow-black shadow-2xl'
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                }}
              >
                <item.icon
                  className='mx-auto mb-4 text-primary group-hover:scale-110 transition-transform'
                  size={32}
                />
                <h3 className='text-lg font-semibold text-foreground mb-2'>{item.title}</h3>
                <p className='text-foreground-secondary hover:text-primary transition-colors'>
                  {item.title === 'GitHub' ? (
                    <a
                      href={`https://www.${item.content}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-primary transition-colors'
                    >
                      {item.content}
                    </a>
                  ) : item.title === 'Email' ? (
                    <a
                      href={`mailto:${item.content}`}
                      className='hover:text-primary transition-colors'
                    >
                      {item.content}
                    </a>
                  ) : (
                    <a
                      href={`tel:${item.content}`}
                      className='hover:text-primary transition-colors'
                    >
                      {item.content}
                    </a>
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
              className='px-8 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary-hover transform transition-all shadow-black shadow-2xl'
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
    // </Parallax>
  );
};
