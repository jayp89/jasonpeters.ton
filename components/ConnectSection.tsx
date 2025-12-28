
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import StyledText from './TextWithTonIcon';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="font-orbitron text-4xl font-bold text-white mb-6 relative inline-block">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">{children}</span>
    </h2>
);

const ConnectSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <AnimatedCard className="text-center">
            <SectionHeader>{t('connect_title')}</SectionHeader>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                <StyledText text={t('connect_p')} />
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {SOCIAL_LINKS.map(link => (
                    <a
                        key={link.key}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-300"
                    >
                        <i className={`${link.icon} text-3xl mb-3 text-gray-400 group-hover:text-amber-400 transition-colors duration-300 group-hover:scale-110 transform`}></i>
                        <span className="text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest transition-colors duration-300">
                            {link.name.split(' ')[0]}
                        </span>
                    </a>
                ))}
            </div>
        </AnimatedCard>
    );
};

export default ConnectSection;
