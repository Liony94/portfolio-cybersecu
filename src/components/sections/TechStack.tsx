'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiNestjs, SiNextdotjs, SiSymfony, SiSharp } from 'react-icons/si';

export default function TechStack() {
  const technologies = [
    { name: 'Next.js', level: 'Intermédiaire', icon: SiNextdotjs, color: 'hover:text-black dark:hover:text-white' },
    { name: 'NestJS', level: 'Expert', icon: SiNestjs, color: 'hover:text-red-600' },
    { name: 'React', level: 'Intermédiaire', icon: FaReact, color: 'hover:text-blue-400' },
    { name: 'MySQL', level: 'Expert', icon: FaDatabase, color: 'hover:text-green-500' },
    { name: 'PostgreSQL', level: 'Intermédiaire', icon: FaDatabase, color: 'hover:text-green-500' },
    { name: 'MongoDB', level: 'Avancé', icon: FaDatabase, color: 'hover:text-green-500' },
    { name: 'Node.js', level: 'Expert', icon: FaNodeJs, color: 'hover:text-green-500' },
    { name: 'PHP/Symfony', level: 'Expert', icon: SiSymfony, color: 'hover:text-purple-500' },
    { name: 'Python', level: 'Intermédiaire', icon: FaPython, color: 'hover:text-yellow-500' },
    { name: 'C#', level: 'Intermédiaire', icon: SiSharp, color: 'hover:text-purple-600' },
  ];

  return (
    <section className="py-16">
      <motion.h2
        className="text-3xl font-bold text-center mb-16 dark:text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Compétences Techniques
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <tech.icon className={`text-4xl text-gray-600 dark:text-gray-400 transition-colors duration-300 ${tech.color}`} />
              <div className="flex-1">
                <h3 className="font-bold text-lg dark:text-white mb-1">{tech.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                    {tech.level}
                  </span>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
} 