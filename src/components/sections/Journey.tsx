'use client';
import { motion } from 'framer-motion';
import { FaBuilding, FaCode, FaBriefcase } from 'react-icons/fa';

export default function Journey() {
  const experiences = [
    {
      company: "Nestlé",
      role: "Développeur Web",
      period: "2023",
      description: "Développement et maintenance d'applications web d'entreprise",
      icon: FaBuilding,
      color: "from-blue-500 to-blue-600",
      skills: ["Next.js", "React", "Node.js", "TypeScript"]
    },
    {
      company: "Les Echos Le Parisien",
      role: "Développeur Full Stack",
      period: "2022",
      description: "Développement de solutions digitales pour le groupe de presse",
      icon: FaCode,
      color: "from-purple-500 to-purple-600",
      skills: ["NestJS", "React", "PostgreSQL", "Docker"]
    },
    {
      company: "Infotem & Groupagora",
      role: "Développeur Web",
      period: "2021",
      description: "Développement de solutions web innovantes pour startups",
      icon: FaBriefcase,
      color: "from-green-500 to-green-600",
      skills: ["PHP", "Symfony", "JavaScript", "MySQL"]
    }
  ];

  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-20 dark:text-white">
          Parcours Professionnel
        </h2>
        <div className="relative">
          {/* Ligne verticale de timeline */}
          <div className="absolute left-8 lg:left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:grid-flow-dense'
                  }`}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-8 lg:left-1/2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 transform -translate-x-1/2 z-10" />

                <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 ${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'
                  }`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color}`}>
                      <exp.icon className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold dark:text-white">{exp.company}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm text-white bg-gradient-to-r ${exp.color}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 