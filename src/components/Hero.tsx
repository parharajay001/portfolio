import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-secondary text-lg mb-4">Hi, my name is</h1>
          <h2 className="text-6xl font-bold text-textSecondary mb-4">
            Ajay Ramdas Parhar
          </h2>
          <h3 className="text-4xl text-textPrimary mb-6">
            Full Stack Software Engineer
          </h3>
          <p className="max-w-2xl mb-8">
            Experienced MERN Stack Specialist with 3+ years of expertise in building scalable,
            performant, and user-centric applications. Based in Pune, India.
          </p>
          <a href="#contact" className="btn">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
