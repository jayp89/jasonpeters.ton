
import React from 'react';
import Footer from '../Footer';
import ExecutiveSummaryCard from '../biography/ExecutiveSummaryCard';
import ChronologyCard from '../biography/ChronologyCard';
import EarlyLifeCard from '../biography/EarlyLifeCard';
import MarketingCard from '../biography/MarketingCard';
import MediaEcosystemCard from '../biography/MediaEcosystemCard';
// FIX: Changed to a named import to resolve the module export error.
import { VenturesCard } from '../biography/VenturesCard';
import PublicProfileCard from '../biography/PublicProfileCard';
import DisambiguationCard from '../biography/DisambiguationCard';
import ConclusionCard from '../biography/ConclusionCard';
import { useLanguage } from '../../contexts/LanguageContext';

const BiographyPage: React.FC = () => {
  const { t } = useLanguage();
  const handleBackToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
  };

  return (
    <>
        <div className="w-full max-w-4xl -mb-16">
            <a 
                href="#" 
                onClick={handleBackToHome}
                className="cursor-pointer inline-flex items-center text-amber-300 hover:text-amber-100 transition-colors duration-300 text-lg group"
            >
                <span className="transform transition-transform duration-300 group-hover:-translate-x-2">&larr;</span>
                <span className="ml-2">{t('back_to_home')}</span>
            </a>
        </div>
        <ExecutiveSummaryCard />
        <ChronologyCard />
        <EarlyLifeCard />
        <MarketingCard />
        <MediaEcosystemCard />
        <VenturesCard />
        <PublicProfileCard />
        <DisambiguationCard />
        <ConclusionCard />
        <Footer />
    </>
  );
};

export default BiographyPage;