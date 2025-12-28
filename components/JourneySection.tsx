
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { JOURNEY_DATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import StyledText from './TextWithTonIcon';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-orbitron text-4xl font-bold text-white mb-10 relative inline-block">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">{children}</span>
    <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_#f59e0b]"></div>
  </h2>
);

const JourneySection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
      <SectionHeader>{t('journey_title')}</SectionHeader>
      <div className="relative pl-4 md:pl-8">
        {/* Continuous vertical line */}
        <div className="absolute top-2 bottom-0 left-[27px] md:left-[43px] w-0.5 bg-gradient-to-b from-amber-500 via-amber-500/30 to-transparent"></div>
        
        {JOURNEY_DATA.map((item, index) => (
          <div key={index} className="relative mb-12 last:mb-0 group">
            <div className="flex items-start">
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0 mr-6 md:mr-8 mt-1">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0a0a0f] border-2 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-500/30 rounded-xl p-5 transition-all duration-300 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                        <div className="bg-black/40 p-2 rounded-lg border border-white/10 w-16 h-16 flex items-center justify-center flex-shrink-0">
                            <img src={item.logoUrl} alt={`${t(item.companyKey)} logo`} className="max-w-full max-h-full object-contain rounded-sm" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">{t(item.roleKey)}</h3>
                            <p className="text-lg text-gray-300 font-medium"><StyledText text={t(item.companyKey)} /></p>
                            <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-mono bg-amber-900/30 text-amber-400 border border-amber-500/20">{item.period}</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedCard>
  );
};

export default JourneySection;
