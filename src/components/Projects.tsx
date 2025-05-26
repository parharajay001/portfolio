import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "RevolutioM – Enterprise Management Tool",
      description: "Developed role-based dashboards, integrated scalable multi-tenant architecture, and collaborated on UI optimization.",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
    },
    {
      title: "E-Commerce Platform",
      description: "Implemented product and order management APIs, integrated Stripe payments, and built analytics-driven admin dashboard.",
      technologies: ["React", "Express.js", "MySQL", "Stripe API"],
    },
    {
      title: "Patient Portal – Healthcare App",
      description: "Designed secure login systems, enabled real-time scheduling, and collaborated with medical professionals for workflow automation.",
      technologies: ["React", "Node.js", "JWT", "Socket.io"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-primary p-6 rounded-lg shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-textSecondary mb-3">
                  {project.title}
                </h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1 bg-secondary/10 text-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
