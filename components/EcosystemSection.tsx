
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { ETN_ECOSYSTEM_PROJECTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import TextWithTonIcon from './TextWithTonIcon';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="font-orbitron text-3xl font-bold text-amber-300 mb-6 relative pb-2
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-0.5 after:bg-amber-300 after:shadow-[0_0_10px_#daa520]">
      {children}
    </h2>
);

const EcosystemSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <AnimatedCard>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <SectionHeader>{t('ecosystem_title')}</SectionHeader>
                    <img src="https://etn.ethio-tech.com/beta1/wp-content/uploads/2023/05/memeseason-final-4-e1685408938352-1024x987.png" alt="ETN Ecosystem Logo" className="w-32 h-32 mx-auto md:mx-0 mb-6 filter drop-shadow-[0_0_10px_#daa520]" />
                    <p className="mb-4 text-gray-300 leading-relaxed text-lg">
                        <TextWithTonIcon text={t('ecosystem_intro')} />
                    </p>
                    <ul className="space-y-4 mb-6">
                        {ETN_ECOSYSTEM_PROJECTS.map((project) => (
                            <li key={project.nameKey} className="flex items-start text-gray-200">
                                <span className="text-amber-400 mr-3 mt-1">✦</span>
                                <div>
                                    <h4 className="font-bold text-white">{t(project.nameKey)}</h4>
                                    <p className="text-gray-400 text-sm">
                                        <TextWithTonIcon text={t(project.descriptionKey)} />
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                        {t('ecosystem_vision')}
                    </p>
                    <a
                        href="https://etn.ethio-tech.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-black font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-[0_0_20px_#daa520] hover:shadow-[0_0_30px_#daa520]"
                    >
                        {t('ecosystem_button')}
                    </a>
                </div>
                <div className="mt-8 md:mt-0">
                    <img src="https://etneco.ethio-tech.com/logos/2U5A9865.jpg" alt="JayP at an event" className="rounded-lg shadow-2xl shadow-black/50 border-2 border-amber-400/30" />
                </div>
            </div>
        </AnimatedCard>
    );
};

export default EcosystemSection;