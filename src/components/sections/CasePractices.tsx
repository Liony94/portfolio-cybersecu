import Link from 'next/link';
import { FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const CasePractices = () => {
  return (
    <section id="case-practices" className="relative">
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Cas Pratiques
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <FaShieldAlt className="text-2xl text-blue-600 dark:text-blue-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    Analyse d'une Attaque par Phishing - Excel 4.0 Macros
                  </h3>
                  <div className="flex gap-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      LetsDefend
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      Blue Team
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    Analyse d'un scénario réel de phishing impliquant des macros Excel 4.0,
                    incluant l'investigation complète et la mise en place de mesures de confinement.
                  </p>
                  <Link
                    href="/case-studies/phishing-analysis"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>Voir l'analyse complète</span>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 dark:bg-red-900 p-3 rounded-lg">
                  <FaShieldAlt className="text-2xl text-red-600 dark:text-red-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    Détection d'une Attaque par Force Brute RDP
                  </h3>
                  <div className="flex gap-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      SOC
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      Incident Response
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    Investigation et réponse à une attaque par force brute RDP réussie,
                    incluant l'isolation de la machine et la gestion complète de l'incident.
                  </p>
                  <Link
                    href="/case-studies/rdp-bruteforce"
                    className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                  >
                    <span>Voir l'analyse complète</span>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasePractices; 