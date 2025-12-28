
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import SplashScreen from './components/SplashScreen';
import Background from './components/Background';
import HomePage from './components/pages/HomePage';
import BiographyPage from './components/pages/BiographyPage';
import { SOCIAL_LINKS } from './constants';

type Page = 'home' | 'biography';

const getPageFromHash = (): Page => {
  return window.location.hash === '#biography' ? 'biography' : 'home';
}

// Helper function to detect search engine bots
const isSearchBot = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent.toLowerCase();
  return /bot|googlebot|crawler|spider|robot|crawling/i.test(ua);
};

const App: React.FC = () => {
  // Check if the user is a bot once on initialization
  const isBot = isSearchBot();

  const [isMounted, setIsMounted] = useState(false);
  // Bypass loading state and splash screen immediately if it's a bot
  const [isAppLoading, setIsAppLoading] = useState(!isBot);
  const [isSplashRendered, setIsSplashRendered] = useState(!isBot);
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash());

  useEffect(() => {
    setIsMounted(true);
    
    // If it is a bot, skip the timers to render content immediately for the crawler
    if (isBot) return;

    const loadingTimer = setTimeout(() => {
      setIsAppLoading(false);
    }, 10000); 

    const renderTimer = setTimeout(() => {
      setIsSplashRendered(false);
    }, 10500); 

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(renderTimer);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo(0, 0); 
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  if (!isMounted) {
    return null; 
  }

  return (
    <LanguageProvider>
      {isSplashRendered && <SplashScreen show={isAppLoading} />}
      <div className={`relative min-h-screen transition-opacity duration-700 ${isAppLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Background />
        
        {/* Social Header */}
        <div className="fixed top-4 left-4 z-50 flex items-center gap-3 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-amber-500/30 transition-all duration-300 scale-[0.8] origin-top-left md:scale-100">
            {SOCIAL_LINKS.map((link) => (
                <a
                    key={link.key}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-all duration-300 transform hover:scale-125 ${link.color}`}
                    title={link.name}
                >
                    <i className={`${link.icon} text-lg`}></i>
                </a>
            ))}
        </div>

        <LanguageSwitcher />
        <main className="relative z-10 flex flex-col items-center px-4 md:px-6 py-20 md:py-32 space-y-24 md:space-y-40 max-w-7xl mx-auto">
          {currentPage === 'home' ? <HomePage /> : <BiographyPage />}
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;
