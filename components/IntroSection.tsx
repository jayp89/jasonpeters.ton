
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const IntroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full flex flex-col items-center text-center py-8">
      <div className="relative mb-10 group">
        {/* Spinning Rings */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-500/60 border-b-blue-500/60 animate-[spin_8s_linear_infinite] w-48 h-48 -m-4"></div>
        <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_12s_linear_infinite_reverse] w-56 h-56 -m-8 opacity-50"></div>
        
        {/* Profile Image */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-amber-400/30 shadow-[0_0_30px_rgba(245,158,11,0.3)] z-10 bg-black">
            <img
            src="https://etneco.ethio-tech.com/logos/jayp.png"
            alt="JayP Avatar"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
        </div>
      </div>

      <h1 
        className="font-orbitron text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 mb-6 tracking-wider"
        style={{ textShadow: '0 0 40px rgba(245, 158, 11, 0.3)' }}
      >
        {t('intro_title')}
      </h1>
      
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-3"></span>
        <h2 className="font-orbitron text-lg md:text-2xl text-gray-200 tracking-widest uppercase">
            {t('intro_subtitle')}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
          <span className="px-3 py-1 text-xs font-bold text-ton-blue bg-blue-900/20 border border-blue-500/30 rounded tracking-wider">TON DEV</span>
          <span className="px-3 py-1 text-xs font-bold text-amber-400 bg-amber-900/20 border border-amber-500/30 rounded tracking-wider">AI VISIONARY</span>
          <span className="px-3 py-1 text-xs font-bold text-purple-400 bg-purple-900/20 border border-purple-500/30 rounded tracking-wider">ENTREPRENEUR</span>
      </div>
    </section>
  );
};

export default IntroSection;