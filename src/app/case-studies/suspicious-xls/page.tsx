import { FaFileExcel, FaSearch, FaCode, FaNetworkWired } from 'react-icons/fa';
import Link from 'next/link';

export default function SuspiciousXLS() {
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
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-xl">
                <FaFileExcel className="text-3xl text-green-600 dark:text-green-300" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Détection d&apos;un Fichier XLS Suspect
                  </h1>
                  <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-md">
                    SOC138
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Malware Analysis
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
                  Analyse de l&apos;Incident
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaCode className="text-green-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analyse du Malware</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Détection d&apos;un fichier VBS suspect (xx.vbs) dans le dossier temporaire et 
                        exécution via cscript.exe, indiquant une potentielle activité malveillante.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaNetworkWired className="text-blue-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Communications C2</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Vérification des requêtes vers des serveurs C2 potentiels et analyse 
                        des communications réseau suspectes.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaSearch className="text-purple-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analyse Comportementale</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Observation des modifications du registre, création de fichiers et 
                        arbres de processus pour identifier les activités malveillantes.
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
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 flex-shrink-0" />
                    <span>Mise en quarantaine du fichier malveillant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 flex-shrink-0" />
                    <span>Nettoyage des artefacts et modifications du système</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 flex-shrink-0" />
                    <span>Blocage des communications C2 identifiées</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Conclusion
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  L&apos;incident a été classé comme True Positive. L&apos;analyse a révélé un schéma 
                  d&apos;attaque sophistiqué utilisant des scripts VBS pour établir une persistance 
                  et des communications C2. Les mesures de remédiation ont permis de nettoyer 
                  le système et de prévenir toute compromission future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 