'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >
      <div className="space-y-6">
        <motion.h1 
          className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <TypeAnimation
            sequence={[
              'Développeur Web',
              1000,
              'En transition vers la Cybersécurité',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Développeur web depuis près de 3 ans, j&apos;ai eu l&apos;opportunité de travailler 
          pour des grands groupes comme Nestlé et Les Echos Le Parisien, ainsi que pour 
          des startups innovantes comme Infotem et Groupagora.
        </motion.p>
      </div>
    </motion.section>
  );
} 