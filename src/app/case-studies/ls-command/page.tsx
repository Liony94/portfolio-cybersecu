import { FaCheckCircle, FaSearch, FaHistory, FaCode } from 'react-icons/fa';
import Link from 'next/link';

export default function LSCommand() {
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
                <FaCheckCircle className="text-3xl text-green-600 dark:text-green-300" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Analyse d&apos;une Fausse Alerte - LS Command
                  </h1>
                  <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-md">
                    SOC167
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    False Positive
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
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Type d&apos;Alerte:</span>
                    <span className="text-gray-900 dark:text-white">Détection de commande LS dans l&apos;URL</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Contexte:</span>
                    <span className="text-gray-900 dark:text-white">Recherche du mot &quot;skills&quot; sur le blog</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Classification:</span>
                    <span className="text-green-600 dark:text-green-400">Faux Positif</span>
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Analyse de l&apos;Incident
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaSearch className="text-green-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analyse de l&apos;URL</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Examen de l&apos;URL révélant que l&apos;alerte a été déclenchée par les lettres &quot;ls&quot; 
                        présentes à la fin du mot &quot;skills&quot; dans une recherche légitime.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaHistory className="text-blue-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Vérification de l&apos;Historique</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        L&apos;examen de l&apos;historique du navigateur via l&apos;Endpoint Security confirme 
                        l&apos;absence de toute activité malveillante.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaCode className="text-purple-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Évaluation de la Règle</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        La règle de détection s&apos;est révélée trop sensible, déclenchant une alerte 
                        sur un motif légitime d&apos;utilisation.
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
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 flex-shrink-0" />
                    <span>Confirmation d&apos;une activité utilisateur légitime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 flex-shrink-0" />
                    <span>Aucune exécution de commande système détectée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 flex-shrink-0" />
                    <span>Suggestion de révision de la règle de détection pour réduire les faux positifs</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Apprentissages
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ce cas illustre l&apos;importance de l&apos;analyse contextuelle dans la détection des menaces. 
                  Une règle trop sensible peut générer des faux positifs, soulignant la nécessité 
                  d&apos;un équilibre entre sensibilité de détection et précision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 