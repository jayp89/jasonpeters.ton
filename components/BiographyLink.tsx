
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCard from './AnimatedCard';
import { useLanguage } from '../contexts/LanguageContext';

const BiographyLink: React.FC = () => {
    const { t } = useLanguage();

    return (
        <AnimatedCard className="text-center">
            <Link
                to="/biography"
                className="cursor-pointer inline-block bg-gradient-to-r from-yellow-500/80 via-amber-500/80 to-orange-500/80 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_#daa52090] hover:shadow-[0_0_30px_#daa520] border border-amber-400/50 hover:from-yellow-500 hover:via-amber-500 hover:to-orange-500"
            >
                {t('biography_title')} &rarr;
            </Link>
        </AnimatedCard>
    );
};

export default BiographyLink;