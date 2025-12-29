
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type Language = 'en' | 'ru' | 'am' | 'om';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'English' },
        { code: 'ru', label: 'Русский' },
        { code: 'am', label: 'አማርኛ' },
        { code: 'om', label: 'Afaan Oromoo' },
    ];

    const currentLangLabel = languages.find(l => l.code === language)?.label || 'English';

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative pointer-events-auto" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/10 hover:border-amber-500/50 rounded-full px-4 py-2 shadow-lg transition-all duration-300 text-gray-300 hover:text-amber-400 group"
            >
                <i className="fas fa-globe text-sm group-hover:rotate-12 transition-transform duration-300"></i>
                <span className="font-orbitron text-xs font-bold uppercase tracking-wider hidden sm:inline">{currentLangLabel}</span>
                <span className="font-orbitron text-xs font-bold uppercase tracking-wider sm:hidden">Lang</span>
                <i className={`fas fa-chevron-down text-[10px] ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#0a0a0f] border border-white/10 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden z-50 animate-fade-in-up backdrop-blur-xl">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`
                                    w-full text-left px-4 py-3 text-sm font-orbitron transition-all duration-200 flex items-center justify-between
                                    ${language === lang.code
                                        ? 'bg-amber-500/10 text-amber-400 border-l-2 border-amber-500'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white hover:pl-5'
                                    }
                                `}
                            >
                                <span>{lang.label}</span>
                                {language === lang.code && <i className="fas fa-check text-xs"></i>}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
