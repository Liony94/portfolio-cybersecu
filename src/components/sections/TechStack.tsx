'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiNestjs, SiNextdotjs, SiSymfony, SiSharp } from 'react-icons/si';

export default function TechStack() {
  const technologies = [
    { name: 'Next.js', level: 90, icon: SiNextdotjs, color: 'hover:text-black dark:hover:text-white' },
    { name: 'NestJS', level: 85, icon: SiNestjs, color: 'hover:text-red-600' },
    { name: 'React', level: 90, icon: FaReact, color: 'hover:text-blue-400' },
    { name: 'Node.js', level: 85, icon: FaNodeJs, color: 'hover:text-green-500' },
    { name: 'PHP/Symfony', level: 75, icon: SiSymfony, color: 'hover:text-purple-500' },
    { name: 'Python', level: 70, icon: FaPython, color: 'hover:text-yellow-500' },
    { name: 'C#', level: 65, icon: SiSharp, color: 'hover:text-purple-600' },
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
                  <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300 min-w-[3rem]">
                    {tech.level}%
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