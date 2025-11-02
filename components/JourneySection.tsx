
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { JOURNEY_DATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import StyledText from './TextWithTonIcon';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-orbitron text-3xl font-bold text-amber-300 mb-8 relative pb-2
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-0.5 after:bg-amber-300 after:shadow-[0_0_10px_#daa520]">
    {children}
  </h2>
);

const JourneySection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
      <SectionHeader>{t('journey_title')}</SectionHeader>
      <div className="relative pl-8 border-l-2 border-amber-400/20">
        {JOURNEY_DATA.map((item, index) => (
          <div key={index} className="mb-10 last:mb-0">
            <div className="absolute w-5 h-5 bg-amber-400 rounded-full mt-1.5 -left-[11px] border-4 border-[#0a0a0f] shadow-[0_0_10px_#daa520]"></div>
            <div className="bg-white/10 p-2 rounded-lg mb-4 inline-block">
                <img src={item.logoUrl} alt={`${t(item.companyKey)} logo`} className="w-16 h-16 object-contain rounded" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-100">{t(item.roleKey)}</h3>
                <p className="text-lg text-amber-300"><StyledText text={t(item.companyKey)} /></p>
                <p className="text-sm text-gray-400">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedCard>
  );
};

export default JourneySection;