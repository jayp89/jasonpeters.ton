
import React, { useEffect } from 'react';
import Footer from '../Footer';
import ExecutiveSummaryCard from '../biography/ExecutiveSummaryCard';
import ChronologyCard from '../biography/ChronologyCard';
import EarlyLifeCard from '../biography/EarlyLifeCard';
import MarketingCard from '../biography/MarketingCard';
import MediaEcosystemCard from '../biography/MediaEcosystemCard';
import { VenturesCard } from '../biography/VenturesCard';
import PublicProfileCard from '../biography/PublicProfileCard';
import DisambiguationCard from '../biography/DisambiguationCard';
import ConclusionCard from '../biography/ConclusionCard';
import { useLanguage } from '../../contexts/LanguageContext';

const BiographyPage: React.FC = () => {
  const { t } = useLanguage();

  // SEO: Update Title and Meta Description when component mounts
  useEffect(() => {
    const originalTitle = document.title;
    const originalDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');

    document.title = "Biography | Jason Peters - The Digital Alchemist";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', "Read the comprehensive biography of Jason Peters (JayP). From his early life in Addis Ababa and career at Afro FM to founding Ethio Tech AI and the ETN Ecosystem on TON Blockchain.");
    }

    return () => {
        document.title = originalTitle;
        if (metaDesc && originalDesc) {
            metaDesc.setAttribute('content', originalDesc);
        }
    };
  }, []);

  const handleBackToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
  };

  return (
    <div className="w-full flex flex-col items-center gap-10 md:gap-16 pb-20">
        <div className="w-full max-w-5xl px-4 md:px-0">
            <a 
                href="#" 
                onClick={handleBackToHome}
                className="cursor-pointer inline-flex items-center text-amber-400 hover:text-amber-200 transition-colors duration-300 text-lg group font-orbitron tracking-widest uppercase"
            >
                <span className="transform transition-transform duration-300 group-hover:-translate-x-2 mr-2 text-2xl">«</span>
                <span>{t('back_to_home')}</span>
            </a>
        </div>
        
        {/* Biography Content Cards */}
        <div className="w-full flex flex-col items-center gap-10 md:gap-16">
            <ExecutiveSummaryCard />
            <ChronologyCard />
            <EarlyLifeCard />
            <MarketingCard />
            <MediaEcosystemCard />
            <VenturesCard />
            <PublicProfileCard />
            <DisambiguationCard />
            <ConclusionCard />
        </div>

        <Footer />
    </div>
  );
};

export default BiographyPage;
