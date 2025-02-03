import { FaExclamationTriangle, FaSearch, FaNetworkWired, FaUserShield } from 'react-icons/fa';
import Link from 'next/link';

export default function IDORAttack() {
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
              <div className="bg-red-100 dark:bg-red-900 p-4 rounded-xl">
                <FaExclamationTriangle className="text-3xl text-red-600 dark:text-red-300" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Attaque IDOR Réussie - Accès Non Autorisé
                  </h1>
                  <span className="px-3 py-1 text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-md">
                    SOC169
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                    Critical
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
                  Détails de l&apos;Incident
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Type d&apos;Attaque:</span>
                    <span className="text-gray-900 dark:text-white">IDOR (Insecure Direct Object Reference)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Impact:</span>
                    <span className="text-red-600 dark:text-red-400">Accès non autorisé aux données utilisateurs</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Statut:</span>
                    <span className="text-red-600 dark:text-red-400">Attaque réussie (Code 200)</span>
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Analyse de l&apos;Incident
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaSearch className="text-red-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analyse des Requêtes</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Détection de multiples tentatives de modification des valeurs d&apos;ID utilisateur,
                        permettant l&apos;accès aux informations d&apos;autres utilisateurs.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaNetworkWired className="text-blue-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analyse du Trafic</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Les tailles de réponse variables et les codes de statut 200 confirment 
                        l&apos;accès réussi aux données de différents utilisateurs.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <FaUserShield className="text-purple-500 text-xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Actions Immédiates</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Escalade immédiate vers l&apos;équipe Tier 2 et isolation du dispositif pour 
                        prévenir tout accès supplémentaire non autorisé.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Mesures de Remédiation
                </h2>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2.5 flex-shrink-0" />
                    <span>Isolation immédiate du système compromis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2.5 flex-shrink-0" />
                    <span>Audit complet des accès utilisateurs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2.5 flex-shrink-0" />
                    <span>Renforcement des contrôles d&apos;accès et de la validation des références d&apos;objets</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Conclusion
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  L&apos;incident a été classé comme True Positive avec un impact critique. L&apos;attaque IDOR 
                  a permis un accès non autorisé aux données utilisateurs, nécessitant une intervention 
                  immédiate de l&apos;équipe Tier 2 et une révision complète des mécanismes de contrôle d&apos;accès.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 