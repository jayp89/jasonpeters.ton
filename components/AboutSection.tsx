
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { useLanguage } from '../contexts/LanguageContext';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-orbitron text-3xl font-bold text-amber-300 mb-6 relative pb-2
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-0.5 after:bg-amber-300 after:shadow-[0_0_10px_#daa520]">
    {children}
  </h2>
);

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
      <SectionHeader>{t('about_title')}</SectionHeader>
      <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
        <p>{t('about_p1')}</p>
        <p>{t('about_p2')}</p>
        <p>{t('about_p3')}</p>
      </div>
    </AnimatedCard>
  );
};

export default AboutSection;
