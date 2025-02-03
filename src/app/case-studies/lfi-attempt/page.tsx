import { FaSearch, FaExclamationTriangle, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function LFIAttempt() {
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
              <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-xl">
                <FaSearch className="text-3xl text-orange-600 dark:text-orange-300" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Tentative d&apos;Attaque LFI - Analyse de Logs
                  </h1>
                  <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-md">
                    SOC170
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                    Log Analysis
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    SOC
                  </span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Détails de l&apos;Alerte
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Type d&apos;Attaque:</span>
                    <span className="text-gray-900 dark:text-white">Tentative LFI (Local File Inclusion) / IDOR</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Cible:</span>
                    <span className="text-gray-900 dark:text-white">Fichier /etc/passwd</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Statut:</span>
                    <span className="text-green-600 dark:text-green-400">Attaque échouée (Code 500)</span>
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Analyse de l&apos;Incident
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaSearch className="text-orange-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analyse des Logs</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Examen des logs de requêtes HTTP révélant une tentative d&apos;accès au fichier passwd 
                        via une possible vulnérabilité LFI/IDOR.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaNetworkWired className="text-blue-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Évaluation du Trafic</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Analyse du trafic entrant confirmant une tentative malveillante. 
                        Le code de réponse 500 et la taille de réponse nulle indiquent l&apos;échec de l&apos;attaque.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaShieldAlt className="text-purple-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Évaluation des Risques</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        L&apos;attaque a échoué grâce aux mesures de sécurité en place. 
                        Pas de nécessité d&apos;escalade vers le Tier 2 ou de confinement du dispositif.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Conclusions et Recommandations
                </h2>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                    <span>Incident classé comme True Positive mais sans impact réel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                    <span>Les contrôles de sécurité ont efficacement bloqué la tentative</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                    <span>Recommandation de maintenir une surveillance continue des tentatives similaires</span>
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