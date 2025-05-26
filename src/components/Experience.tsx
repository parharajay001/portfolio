import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Cisconic Pvt. Ltd., Pune",
      date: "March 2022 – Present",
      points: [
        "Designed and maintained scalable RESTful APIs with JWT authentication",
        "Developed complex frontend modules using React, Redux, and TailwindCSS",
        "Led database optimization, reducing API response times by 40%",
        "Established automated testing pipelines using Jest and Mocha",
        "Collaborated with UI/UX teams to refine product interfaces",
        "Mentored junior developers and led peer code reviews",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Neeta-Tech Pvt. Ltd., Pune",
      date: "January 2020 – July 2020",
      points: [
        "Built responsive frontends for patient registration and appointment booking",
        "Integrated RESTful APIs for real-time doctor-patient interactions",
        "Participated in Agile sprints and contributed to core application modules",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-secondary pl-6">
                <h3 className="text-xl font-semibold text-textSecondary">{exp.title}</h3>
                <p className="text-secondary mb-2">{exp.company}</p>
                <p className="text-sm mb-4">{exp.date}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
