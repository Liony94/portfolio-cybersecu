import { FaShieldAlt, FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';

export default function PhishingAnalysis() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-12 text-lg"
        >
          ← Retour à l&apos;accueil
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-xl">
                <FaShieldAlt className="text-3xl text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                  Analyse d&apos;une Attaque par Phishing - Excel 4.0 Macros
                </h1>
                <div className="flex gap-3 mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    LetsDefend
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    Blue Team
                  </span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Contexte
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Analyse d&apos;un scénario réel de phishing sur la plateforme LetsDefend, impliquant une attaque sophistiquée 
                  utilisant des macros Excel 4.0. Cette investigation a permis de mettre en pratique des compétences en 
                  analyse de logs, gestion d&apos;incidents et analyse de malwares.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Méthodologie d'Investigation
                </h2>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <FaSearch className="mt-1.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Monitoring Initial :</strong>
                      <span className="ml-2">Détection de l'email malveillant et collecte des premières informations</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaSearch className="mt-1.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Analyse des Artefacts :</strong>
                      <span className="ml-2">Extraction et analyse des fichiers attachés dans un environnement sécurisé</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaSearch className="mt-1.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Analyse Sandbox :</strong>
                      <span className="ml-2">Utilisation d'ANY.RUN pour l'analyse dynamique du malware</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaSearch className="mt-1.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Gestion des Logs :</strong>
                      <span className="ml-2">Investigation des communications suspectes et des activités malveillantes</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaSearch className="mt-1.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Containment :</strong>
                      <span className="ml-2">Mise en place de mesures de confinement pour limiter l'impact</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Indicateurs de Compromission (IoCs)
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl font-mono text-sm space-y-3">
                  <p className="flex items-center gap-2">
                    <FaExclamationTriangle className="text-yellow-500" />
                    <span className="text-gray-600 dark:text-gray-300">IPs: </span>
                    <span className="text-gray-900 dark:text-white">188[.]213[.]19[.]81, 192[.]232[.]219[.]67</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaExclamationTriangle className="text-yellow-500" />
                    <span className="text-gray-600 dark:text-gray-300">Domaines: </span>
                    <span className="text-gray-900 dark:text-white">nws[.]visionconsulting[.]ro, royalpalm[.]sparkblue[.]lk</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaExclamationTriangle className="text-yellow-500" />
                    <span className="text-gray-600 dark:text-gray-300">Email: </span>
                    <span className="text-gray-900 dark:text-white">trenton@tritowncomputers[.]com</span>
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Résultats et Actions
                </h2>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                    <span>Identification et analyse complète de la chaîne d'attaque</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                    <span>Détection des communications C2 malveillantes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                    <span>Confinement réussi de la machine compromise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                    <span>Documentation détaillée de l'incident pour référence future</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 