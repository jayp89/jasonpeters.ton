import React from 'react';
import AnimatedCard from './AnimatedCard';
import { useLanguage } from '../contexts/LanguageContext';
import StyledText from './TextWithTonIcon';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-orbitron text-3xl font-bold text-amber-300 mb-6 relative pb-2
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-0.5 after:bg-amber-300 after:shadow-[0_0_10px_#daa520]">
    {children}
  </h2>
);

const MissionSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
      <SectionHeader>{t('mission_title')}</SectionHeader>
      <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
        <p><StyledText text={t('mission_p')} /></p>
      </div>
    </AnimatedCard>
  );
};

export default MissionSection;