
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="font-orbitron text-3xl font-bold text-amber-300 mb-6 relative pb-2
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-0.5 after:bg-amber-300 after:shadow-[0_0_10px_#daa520]">
      {children}
    </h2>
);

const ConnectSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <AnimatedCard className="text-center">
            <SectionHeader>{t('connect_title')}</SectionHeader>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                {t('connect_p')}
            </p>
            <div className="flex justify-center items-center flex-wrap gap-6">
                {SOCIAL_LINKS.map(link => (
                    <a
                        key={link.key}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t(`social_${link.key}`)}
                        className={`text-gray-400 text-4xl transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_currentColor] ${link.color}`}
                    >
                        <i className={link.icon}></i>
                    </a>
                ))}
            </div>
        </AnimatedCard>
    );
};

export default ConnectSection;
