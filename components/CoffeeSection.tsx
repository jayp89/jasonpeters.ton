
import React, { useState } from 'react';
import AnimatedCard from './AnimatedCard';
import { TON_WALLET_ADDRESS, TON_AMOUNT_NANOTON } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import StyledText from './TextWithTonIcon';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="font-orbitron text-3xl font-bold text-amber-300 mb-2">
      {children}
    </h2>
);

const CoffeeSection: React.FC = () => {
    const { t } = useLanguage();
    const [message, setMessage] = useState('');

    const handleBuyCoffee = () => {
        const comment = encodeURIComponent(message || "Cheers from your supporter!");
        const tonUrl = `ton://transfer/${TON_WALLET_ADDRESS}?amount=${TON_AMOUNT_NANOTON}&text=${comment}`;
        window.location.href = tonUrl;
    };

    return (
        <AnimatedCard>
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="relative group">
                    <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full group-hover:bg-amber-500/30 transition-all duration-500"></div>
                    <img
                        src="https://etneco.ethio-tech.com/logos/Coffee.webp"
                        alt="Cup of coffee"
                        className="relative w-48 h-48 object-contain filter drop-shadow-[0_0_15px_rgba(245,158,11,0.3)] transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6"
                    />
                </div>
                <div className="flex-grow w-full">
                    <SectionHeader>{t('coffee_title')}</SectionHeader>
                    <div className="h-1 w-20 bg-amber-500 rounded-full mb-6"></div>
                    
                    <p className="text-lg text-gray-300 mb-6 font-light">
                        <StyledText text={t('coffee_p')} />
                    </p>
                    
                    <div className="space-y-4">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={t('coffee_placeholder')}
                            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all duration-300 text-white placeholder-gray-600 resize-none font-mono text-sm"
                            rows={3}
                        ></textarea>
                        
                        <button
                            onClick={handleBuyCoffee}
                            className="w-full relative overflow-hidden group bg-gradient-to-r from-amber-600 to-yellow-500 p-[1px] rounded-xl"
                        >
                            <div className="relative bg-black/80 hover:bg-transparent text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group-hover:text-black">
                                <span className="font-orbitron tracking-wider text-sm md:text-base"><StyledText text={t('coffee_button')} /></span>
                                <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </AnimatedCard>
    );
};

export default CoffeeSection;
