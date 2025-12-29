
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { ETN_ECOSYSTEM_PROJECTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import StyledText from './TextWithTonIcon';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="font-orbitron text-4xl font-bold text-white mb-10 relative inline-block">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">{children}</span>
      <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_#f59e0b]"></div>
    </h2>
);

const PillarCard: React.FC<{ title: React.ReactNode; description: string; index: number }> = ({ title, description, index }) => (
    <div className="bg-gradient-to-b from-white/10 to-white/5 p-6 rounded-xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 group h-full">
        <div className="text-4xl text-amber-500/20 font-orbitron font-bold absolute top-2 right-4 group-hover:text-amber-500/40 transition-colors">0{index}</div>
        <h3 className="font-bold text-xl text-amber-300 mb-3 relative z-10">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed relative z-10">{description}</p>
    </div>
);

const ProjectCard: React.FC<{ nameKey: string; descriptionKey: string }> = ({ nameKey, descriptionKey }) => {
    const { t } = useLanguage();
    return (
        <div className="p-4 bg-black/20 rounded-lg border border-white/5 hover:bg-white/5 hover:border-amber-500/30 transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center mb-2">
                <span className="text-amber-400 mr-2 text-lg">✦</span>
                <h4 className="font-bold text-white text-md font-orbitron">{t(nameKey)}</h4>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed flex-grow">
                <StyledText text={t(descriptionKey)} />
            </p>
        </div>
    );
}

const EcosystemSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <AnimatedCard>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
                <div>
                    <SectionHeader><StyledText text={t('ecosystem_title')} /></SectionHeader>
                    <p className="text-gray-300 leading-relaxed text-lg max-w-2xl mt-4 border-l-4 border-amber-500 pl-4 bg-amber-500/5 py-2 rounded-r-lg">
                        <StyledText text={t('ecosystem_intro_main')} />
                    </p>
                </div>
                <div className="flex-shrink-0 hidden md:block animate-float">
                    <img src="https://etn.ethio-tech.com/beta1/wp-content/uploads/2023/05/memeseason-final-4-e1685408938352-1024x987.png" alt="ETN Ecosystem Logo" className="w-32 h-32 md:w-40 md:h-40 filter drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]" />
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
                <PillarCard index={1} title={<StyledText text={t('ecosystem_pillar1_title')} />} description={t('ecosystem_pillar1_desc')} />
                <PillarCard index={2} title={t('ecosystem_pillar2_title')} description={t('ecosystem_pillar2_desc')} />
                <PillarCard index={3} title={t('ecosystem_pillar3_title')} description={t('ecosystem_pillar3_desc')} />
            </div>

            <div className="flex gap-6 relative">
                <div className="hidden md:flex items-center justify-center w-12 shrink-0 border-r border-white/5">
                    <div style={{ writingMode: 'vertical-rl' }} className="whitespace-nowrap text-xs font-mono text-amber-500/40 tracking-[0.4em] uppercase rotate-180">
                        Ecosystem Map
                    </div>
                </div>
                <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ETN_ECOSYSTEM_PROJECTS.map((project) => (
                        <ProjectCard key={project.nameKey} nameKey={project.nameKey} descriptionKey={project.descriptionKey} />
                    ))}
                </div>
            </div>
        </AnimatedCard>
    );
};

export default EcosystemSection;
