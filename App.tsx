
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import SplashScreen from './components/SplashScreen';
import Background from './components/Background';

const HomePage = lazy(() => import('./components/pages/HomePage'));
const BiographyPage = lazy(() => import('./components/pages/BiographyPage'));

type Page = 'home' | 'biography';

const getPageFromHash = (): Page => {
  return window.location.hash === '#biography' ? 'biography' : 'home';
}

const App: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isSplashRendered, setIsSplashRendered] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash());

  // Effect for initial mount and splash screen timers
  useEffect(() => {
    setIsMounted(true);
    
    const loadingTimer = setTimeout(() => {
      setIsAppLoading(false);
    }, 10000); // Splash screen visible for 10s

    const renderTimer = setTimeout(() => {
      setIsSplashRendered(false);
    }, 10500); // Remove from DOM after 10.5s (allowing 0.5s for fade-out)

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(renderTimer);
    };
  }, []);

  // Effect for handling routing via hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  if (!isMounted) {
    return null; // Prevent flash of content on initial load
  }

  return (
    <LanguageProvider>
      {isSplashRendered && <SplashScreen show={isAppLoading} />}
      <div className={`relative min-h-screen transition-opacity duration-500 ${isAppLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Background />
        <LanguageSwitcher />
        <main className="relative z-10 flex flex-col items-center px-4 py-16 md:py-24 space-y-24 md:space-y-32">
          <Suspense fallback={<div>Loading...</div>}>
            {currentPage === 'home' ? <HomePage /> : <BiographyPage />}
          </Suspense>
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;