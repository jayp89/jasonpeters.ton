
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import StyledText from './TextWithTonIcon';

interface SplashScreenProps {
    show: boolean;
}

const BOOT_SEQUENCE_KEYS = [
    "boot_1",
    "boot_2",
    "boot_3",
    "boot_4",
    "boot_5",
    "boot_6"
];

const SplashScreen: React.FC<SplashScreenProps> = ({ show }) => {
    const { t } = useLanguage();
    const [bootIndex, setBootIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    // Handle internal visibility state for exit animation
    useEffect(() => {
        if (!show) {
            // Wait for fade out animation (700ms) before removing from DOM context if needed, 
            // but usually we just let CSS handle opacity.
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(true);
            setBootIndex(0);
        }
    }, [show]);

    useEffect(() => {
        if (show) {
            const interval = setInterval(() => {
                setBootIndex(prevIndex => {
                    if (prevIndex >= BOOT_SEQUENCE_KEYS.length) {
                        clearInterval(interval);
                        return prevIndex;
                    }
                    return prevIndex + 1;
                });
            }, 1200);

            // Start the first line a bit faster
            const initialTimeout = setTimeout(() => {
                setBootIndex(1);
            }, 1000);

            return () => {
                clearInterval(interval);
                clearTimeout(initialTimeout);
            }
        }
    }, [show]);

    // If completely done hiding, we can return null to remove from DOM, 
    // OR keep it hidden to avoid layout thrashing. 
    // Since we want SEO bots to see content BEHIND this, returning null eventually is good.
    if (!isVisible) return null;

    const renderedLines = BOOT_SEQUENCE_KEYS.slice(0, bootIndex).map(key => t(key));

    return (
        <div
            className={`
                fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f]
                transition-opacity duration-700 ease-in-out
                ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            aria-hidden={!show}
        >
            <div className="text-center animate-pulse-glow">
                <img
                    src="https://etneco.ethio-tech.com/logos/jayp.png"
                    alt="JayP Avatar"
                    className="w-40 h-40 rounded-full border-4 border-amber-400/50 shadow-xl shadow-amber-500/20 mb-6"
                />
                <h1 className="font-orbitron text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                    {t('splash_name')}
                </h1>
                <h2 className="font-orbitron text-xl text-gold-300" style={{ textShadow: '0 0 10px #daa520' }}>
                    {t('splash_title')}
                </h2>
            </div>
            
            <div className="font-mono text-amber-300 text-sm md:text-base w-full max-w-lg mt-8 text-left px-4 h-48">
                {renderedLines.map((line, index) => (
                    <p key={index}>
                        <span className="text-green-400 mr-2">{'>'}</span>
                        <StyledText text={line} />
                    </p>
                ))}
                {show && bootIndex <= BOOT_SEQUENCE_KEYS.length && (
                    <p>
                        <span className="text-green-400 mr-2">{'>'}</span>
                        <span className="inline-block align-bottom w-0 h-5 border-r-4 border-amber-300 animate-[blink-caret_1s_step-end_infinite]"></span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default SplashScreen;