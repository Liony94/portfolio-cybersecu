import Image from 'next/image';
import SectionTitle from '../shared/SectionTitle';

const badges = [
    {
        title: 'SOC Member',
        icon: '/badges/soc-member.png',
    },
    {
        title: 'Phishing Expert',
        icon: '/badges/phishing-expert.png',
    },
    {
        title: 'Web Attack Investigator',
        icon: '/badges/web-attack-investigator.png',
    },
    {
        title: 'Malware Analyzer',
        icon: '/badges/malware-analyzer.png',
    },
    {
        title: 'Network Cable',
        icon: '/badges/network-cable.png',
    },
    {
        title: 'MITRE ATT&CK',
        icon: '/badges/mitre-attack.png',
    },
    {
        title: 'Cyber Kill Chain',
        icon: '/badges/cyber-kill-chain.png',
    },
    {
        title: 'Web Hunter',
        icon: '/badges/web-hunter.png',
    },
    {
        title: 'How to Investigate a SIEM Alert?',
        icon: '/badges/siem-alert.png',
    },
    {
        title: 'Web Attack Investigated',
        icon: '/badges/web-attack-investigated.png',
    },
    {
        title: 'Incident Handler',
        icon: '/badges/incident-handler.png',
    },
    {
        title: 'First Blood',
        icon: '/badges/first-blood.png',
    },
    {
        title: 'Incident Handler - 2',
        icon: '/badges/incident-handler-2.png',
    },
];

export default function Badges() {
    return (
        <section id="badges" className="py-16">
            <SectionTitle
                title="Badges LetsDefend"
                subtitle="Mes certifications et accomplissements en cybersécurité"
            />

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {badges.map((badge) => (
                    <div
                        key={badge.title}
                        className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="relative w-24 h-24">
                            <Image
                                src={badge.icon}
                                alt={badge.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-center font-medium text-gray-900 dark:text-gray-100">
                            {badge.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
} 