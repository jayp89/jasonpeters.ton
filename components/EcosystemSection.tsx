import React from 'react';
import AnimatedCard from './AnimatedCard';
import { ETN_ECOSYSTEM_PROJECTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import StyledText from './TextWithTonIcon';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="font-orbitron text-3xl font-bold text-amber-300 mb-6 relative pb-2
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-0.5 after:bg-amber-300 after:shadow-[0_0_10px_#daa520]">
      {children}
    </h2>
);

const PillarCard: React.FC<{ title: React.ReactNode; description: string }> = ({ title, description }) => (
    <div className="bg-white/5 p-4 rounded-lg border border-amber-400/10">
        <h3 className="font-bold text-amber-300 mb-1">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
);

const EcosystemSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <AnimatedCard>
            <SectionHeader><StyledText text={t('ecosystem_title')} /></SectionHeader>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <img src="https://etn.ethio-tech.com/beta1/wp-content/uploads/2023/05/memeseason-final-4-e1685408938352-1024x987.png" alt="ETN Ecosystem Logo" className="w-24 h-24 md:w-32 md:h-32 filter drop-shadow-[0_0_10px_#daa520]" />
                <p className="text-gray-300 leading-relaxed text-lg flex-1">
                    <StyledText text={t('ecosystem_intro_main')} />
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-10">
                <PillarCard title={<StyledText text={t('ecosystem_pillar1_title')} />} description={t('ecosystem_pillar1_desc')} />
                <PillarCard title={t('ecosystem_pillar2_title')} description={t('ecosystem_pillar2_desc')} />
                <PillarCard title={t('ecosystem_pillar3_title')} description={t('ecosystem_pillar3_desc')} />
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {ETN_ECOSYSTEM_PROJECTS.map((project) => (
                    <div key={project.nameKey} className="flex items-start text-gray-200">
                        <span className="text-amber-400 mr-3 mt-1 text-xl">✦</span>
                        <div>
                            <h4 className="font-bold text-white text-lg">{t(project.nameKey)}</h4>
                            <p className="text-gray-400 text-sm">
                                <StyledText text={t(project.descriptionKey)} />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedCard>
    );
};

export default EcosystemSection;