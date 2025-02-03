import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiJavascript, SiNodedotjs, SiExpress } from 'react-icons/si';

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Projets
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            URL Decoder
          </h3>

          <div className="flex gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
              <SiJavascript className="mr-1" />
              JavaScript
            </span>
            {/* <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              <SiNodedotjs className="mr-1" />
              Node.js
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
              <SiExpress className="mr-1" />
              Express
            </span> */}
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Un outil permettant de décoder des requêtes SQL et des URLs pour des analyses de sécurité.
            Cet outil facilite la vérification et le décodage des URLs pour identifier d'éventuelles menaces. Afin de respecter
            les bonnes pratiques de sécurité, l'outil peut être hébergé facilement sur un serveur local ce qui évite de passer par un service tiers.
          </p>

          <div className="flex gap-4 mt-4">
            <Link
              href="https://github.com/Liony94/Local-Url-Decoder"
              target="_blank"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub className="text-xl" />
              <span>Code source</span>
            </Link>

            <Link
              href="https://local-url-decoder.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaExternalLinkAlt className="text-lg" />
              <span>Demo live</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 