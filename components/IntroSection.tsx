import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const IntroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full max-w-4xl flex flex-col items-center text-center">
      <div
        className="transform transition-all duration-1000 ease-out opacity-0 translate-y-12 animate-fade-in-up"
        style={{ animationFillMode: 'forwards', animationDelay: '200ms' }}
      >
        <img
          src="https://etneco.ethio-tech.com/logos/jayp.png"
          alt="JayP Avatar"
          className="w-40 h-40 rounded-full border-4 border-amber-400/50 shadow-xl shadow-amber-500/20 mb-6"
        />
      </div>
      <h1 
        className="font-orbitron text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4 transform transition-all duration-1000 ease-out opacity-0 translate-y-12 animate-fade-in-up"
        style={{ animationFillMode: 'forwards', animationDelay: '400ms' }}
      >
        {t('intro_title')}
      </h1>
      <h2 
        className="font-orbitron text-xl md:text-2xl text-gold-300 mb-4"
        style={{ textShadow: '0 0 10px #daa520', animationFillMode: 'forwards', animationDelay: '600ms' }}
      >
        {t('intro_subtitle')}
      </h2>
    </section>
  );
};

export default IntroSection;