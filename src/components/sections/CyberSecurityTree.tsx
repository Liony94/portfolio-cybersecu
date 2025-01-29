'use client';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCrosshairs, FaNetworkWired } from 'react-icons/fa';
import { SiMatrix } from 'react-icons/si';

interface CyberPathItem {
  id: string;
  name: string;
  status: 'completed' | 'in-progress' | 'planned';
}

interface CyberPath {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  progress: number;
  items: CyberPathItem[];
}

export default function CyberSecurityTree() {
  const cyberPath: CyberPath[] = [
    {
      id: '1',
      title: 'Fondamentaux SOC',
      icon: FaShieldAlt,
      color: 'from-blue-500 to-blue-600',
      progress: 100,
      items: [
        { id: '1.1', name: 'Introduction au SOC', status: 'completed' },
        { id: '1.2', name: 'Types et Rôles', status: 'completed' },
        { id: '1.3', name: 'Analyste SOC et leurs rôles', status: 'completed' },
        { id: '1.4', name: 'SIEM et l\'analyste SOC', status: 'completed' },
        { id: '1.5', name: 'Gestion des logs', status: 'completed' },
        { id: '1.6', name: 'EDR Endpoint Detection and Response', status: 'completed' },
        { id: '1.7', name: 'SOAR Security Orchestration, Automation, and Response', status: 'completed' },
        { id: '1.8', name: 'Threat Intelligence feed', status: 'completed' },
        { id: '1.9', name: 'Les erreurs courantes des analystes SOC', status: 'completed' },
      ]
    },
    {
      id: '2',
      title: 'Cyber Kill Chain',
      icon: FaCrosshairs,
      color: 'from-purple-500 to-purple-600',
      progress: 100,
      items: [
        { id: '2.1', name: 'Reconnaissance', status: 'completed' },
        { id: '2.2', name: 'Weaponization', status: 'completed' },
        { id: '2.3', name: 'Delivery', status: 'completed' },
        { id: '2.4', name: 'Exploitation', status: 'completed' },
        { id: '2.5', name: 'Installation', status: 'completed' },
        { id: '2.6', name: 'Command and Control', status: 'completed' },
        { id: '2.7', name: 'Actions sur les systèmes et données', status: 'completed' },
      ]
    },
    {
      id: '3',
      title: 'MITRE ATT&CK',
      icon: SiMatrix,
      color: 'from-red-500 to-red-600',
      progress: 100,
      items: [
        { id: '3.1', name: 'Introduction', status: 'completed' },
        { id: '3.2', name: 'Matrix', status: 'completed' },
        { id: '3.3', name: 'Tactiques', status: 'completed' },
        { id: '3.4', name: 'Techniques and sub-techniques', status: 'completed' },
        { id: '3.5', name: 'Procédures', status: 'completed' },
        { id: '3.6', name: 'Mitigation', status: 'completed' },
        { id: '3.7', name: 'Software', status: 'completed' },
        { id: '3.8', name: 'Groupes', status: 'completed' },
      ]
    },
    {
      id: '4',
      title: 'Phishing Email Analysis',
      icon: FaNetworkWired,
      color: 'from-green-500 to-green-600',
      progress: 100,
      items: [
        { id: '4.1', name: 'Introduction au phishing', status: 'completed' },
        { id: '4.2', name: 'Types de phishing', status: 'completed' },
        { id: '4.3', name: 'En-tête d\'email et comment l\'analyser', status: 'completed' },
        { id: '4.4', name: 'Analyse statique', status: 'completed' },
        { id: '4.5', name: 'Analyse dynamique', status: 'completed' },
        { id: '4.6', name: 'Techniques supplémentaires', status: 'completed' },
      ]
    }
  ];

  const getStatusColor = (status: CyberPathItem['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'planned': return 'bg-gray-300 dark:bg-gray-600';
      default: return 'bg-gray-300';
    }
  };

  return (
    <section className="py-24" aria-labelledby="cyber-security-title">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2
          id="cyber-security-title"
          className="text-4xl font-bold text-center mb-20 dark:text-white"
        >
          Parcours Cybersécurité
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cyberPath.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 overflow-hidden group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${path.color}`}
                  aria-hidden="true"
                >
                  <path.icon className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold dark:text-white">{path.title}</h3>
                  <div className="flex items-center gap-2 mt-2" role="progressbar" aria-valuenow={path.progress} aria-valuemin={0} aria-valuemax={100}>
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${path.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${path.progress}%` }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {path.progress}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {path.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 transition-transform hover:translate-x-2"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 dark:text-gray-200">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 dark:from-gray-800/0 dark:via-gray-800/5 dark:to-gray-800/0"
                animate={{
                  x: ['0%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 