'use client';
import { motion } from 'framer-motion';

export default function Journey() {
  const experiences = [
    {
      company: "Nestlé",
      role: "Développeur Web",
      period: "2023",
    },
    {
      company: "Les Echos Le Parisien",
      role: "Développeur Full Stack",
      period: "2022",
    },
    {
      company: "Infotem",
      role: "Développeur Web",
      period: "2021",
    },
  ];

  return (
    <section className="py-16">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 dark:text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Mon Parcours Professionnel
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold dark:text-white">{exp.company}</h3>
            <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
            <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 