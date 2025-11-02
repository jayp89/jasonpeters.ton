
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type Language = 'en' | 'ru' | 'am' | 'om';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'EN' },
        { code: 'ru', label: 'RU' },
        { code: 'am', label: 'አማ' },
        { code: 'om', label: 'OM' },
    ];

    return (
        <div className="fixed top-4 right-4 z-50">
            <div className="flex items-center bg-black/30 backdrop-blur-md border border-amber-400/20 rounded-full shadow-lg p-1">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`
                            px-3 py-1 text-sm font-bold rounded-full transition-colors duration-300
                            ${language === lang.code
                                ? 'bg-amber-400 text-black'
                                : 'text-gray-300 hover:bg-amber-400/20'
                            }
                        `}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
