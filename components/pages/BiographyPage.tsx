
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

  // SEO: Update Title, Meta Description, and Open Graph tags
  useEffect(() => {
    const originalTitle = document.title;
    const originalDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');

    const title = "Biography | Jason Peters - The Digital Alchemist";
    const desc = "Read the comprehensive biography of Jason Peters (JayP). From his early life in Addis Ababa and career at Afro FM to founding Ethio Tech AI and the ETN Ecosystem on TON Blockchain.";

    document.title = title;
    
    const updateMeta = (selector: string, content: string) => {
        let element = document.querySelector(selector);
        if (element) {
            element.setAttribute('content', content);
        }
    };

    const updateOg = (property: string, content: string) => {
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', property);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    }

    updateMeta('meta[name="description"]', desc);
    updateOg('og:title', title);
    updateOg('og:description', desc);
    updateOg('og:url', window.location.href);

    return () => {
        document.title = originalTitle;
        if (originalDesc) {
            updateMeta('meta[name="description"]', originalDesc);
        }
    };
  }, []);

  const handleBackToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
  };

  return (
    <div className="w-full flex flex-col items-center gap-12 md:gap-20 pb-24">
        <div className="w-full max-w-5xl px-4 md:px-0 pt-4">
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
        <div className="w-full flex flex-col items-center gap-12 md:gap-20">
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
