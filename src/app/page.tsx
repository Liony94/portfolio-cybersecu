import Hero from '@/components/sections/Hero';
import Journey from '@/components/sections/Journey';
import TechStack from '@/components/sections/TechStack';
import CyberSecurityTree from '@/components/sections/CyberSecurityTree';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <Hero />
        <Projects />
        <CyberSecurityTree />
        <Journey />
        <TechStack />
      </main>
    </div>
  );
}
