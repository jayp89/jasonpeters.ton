
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

  return (
    <div className="w-full flex flex-col items-center gap-12 md:gap-20 pb-24">
        <Helmet>
            <title>Biography | Jason Peters - The Digital Alchemist</title>
            <meta name="description" content="Read the comprehensive biography of Jason Peters (JayP). From his early life in Addis Ababa and career at Afro FM to founding Ethio Tech AI and the ETN Ecosystem on TON Blockchain." />
            <link rel="canonical" href="http://jasonpeters-ton.etnecosystem.org/biography" />
            <meta property="og:title" content="Biography | Jason Peters - The Digital Alchemist" />
            <meta property="og:description" content="Read the comprehensive biography of Jason Peters (JayP). From his early life in Addis Ababa to founding the ETN Ecosystem." />
            <meta property="og:url" content="http://jasonpeters-ton.etnecosystem.org/biography" />
        </Helmet>

        <div className="w-full max-w-5xl px-4 md:px-0 pt-4">
            <Link 
                to="/"
                className="cursor-pointer inline-flex items-center text-amber-400 hover:text-amber-200 transition-colors duration-300 text-lg group font-orbitron tracking-widest uppercase"
            >
                <span className="transform transition-transform duration-300 group-hover:-translate-x-2 mr-2 text-2xl">«</span>
                <span>{t('back_to_home')}</span>
            </Link>
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