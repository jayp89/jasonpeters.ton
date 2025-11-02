
import React, { useState } from 'react';
import AnimatedCard from './AnimatedCard';
import { TON_WALLET_ADDRESS, TON_AMOUNT_NANOTON } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import StyledText from './TextWithTonIcon';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="font-orbitron text-3xl font-bold text-amber-300 mb-6 relative pb-2
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-0.5 after:bg-amber-300 after:shadow-[0_0_10px_#daa520]">
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
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                    <img
                        src="https://etneco.ethio-tech.com/logos/Coffee.webp"
                        alt="Cup of coffee"
                        className="w-40 h-40 object-contain filter drop-shadow-[0_0_15px_#daa52099]"
                    />
                </div>
                <div className="flex-grow w-full">
                    <SectionHeader>{t('coffee_title')}</SectionHeader>
                    <p className="text-lg text-gray-300 mb-4">
                        <StyledText text={t('coffee_p')} />
                    </p>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t('coffee_placeholder')}
                        className="w-full p-3 rounded-lg bg-black/40 border border-amber-400/30 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 text-white placeholder-gray-500 mb-4"
                        rows={3}
                    ></textarea>
                    <button
                        onClick={handleBuyCoffee}
                        className="w-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-black font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-[0_0_20px_#daa520] hover:shadow-[0_0_30px_#daa520]"
                    >
                        <StyledText text={t('coffee_button')} />
                    </button>
                </div>
            </div>
        </AnimatedCard>
    );
};

export default CoffeeSection;