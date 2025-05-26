import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-center mb-8">
              I'm actively exploring exciting opportunities in software development. 
              Let's build something impactful together!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <HiMail className="text-secondary text-2xl" />
                <a href="mailto:parharajay001@gmail.com" className="hover:text-secondary">
                  parharajay001@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <HiPhone className="text-secondary text-2xl" />
                <a href="tel:+917721908843" className="hover:text-secondary">
                  +91-7721908843
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <HiLocationMarker className="text-secondary text-2xl" />
                <span>Pune, India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
