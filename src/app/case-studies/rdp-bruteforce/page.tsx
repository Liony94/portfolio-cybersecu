import { FaShieldAlt, FaSearch, FaExclamationTriangle, FaCheckCircle, FaNetworkWired } from 'react-icons/fa';
import Link from 'next/link';

export default function RDPBruteforce() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-12 text-lg"
        >
          ← Retour à l'accueil
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="bg-red-100 dark:bg-red-900 p-4 rounded-xl">
                <FaShieldAlt className="text-3xl text-red-600 dark:text-red-300" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Détection d'une Attaque par Force Brute RDP
                  </h1>
                  <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-md">
                    Priorité Moyenne
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                    SOC
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    Incident Response
                  </span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Détails de l'Alerte
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">ID de l'événement:</span>
                    <span className="text-gray-900 dark:text-white">234</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Date:</span>
                    <span className="text-gray-900 dark:text-white">7 Mars 2024, 11:44</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Règle:</span>
                    <span className="text-gray-900 dark:text-white">SOC176 - RDP Brute Force Detected</span>
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Analyse et Réponse à l'Incident
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaCheckCircle className="text-green-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Isolation du Dispositif</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Suite à la détection de la compromission réussie du compte Mathew, 
                        la machine a été immédiatement isolée pour prévenir toute propagation latérale.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaSearch className="text-blue-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analyse des Logs</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Examen approfondi des journaux d'événements Windows pour identifier les tentatives 
                        de connexion répétées et la connexion réussie au compte compromis.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaNetworkWired className="text-purple-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analyse du Trafic</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Surveillance du trafic réseau pour détecter d'éventuelles activités malveillantes 
                        post-compromission et identification de l'origine de l'attaque.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Actions de Remédiation
                </h2>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2.5 flex-shrink-0" />
                    <span>Réinitialisation immédiate du mot de passe du compte Mathew</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2.5 flex-shrink-0" />
                    <span>Analyse forensique de la machine compromise</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Conclusion
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  L'incident a été classé comme True Positive et géré selon le playbook établi. 
                  La réponse rapide a permis de limiter l'impact potentiel de la compromission. 
                  Des mesures préventives supplémentaires ont été mises en place pour éviter de 
                  futurs incidents similaires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 