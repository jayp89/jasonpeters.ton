import React, { useState, useEffect } from 'react';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import JourneySection from './components/JourneySection';
import EcosystemSection from './components/EcosystemSection';
import ConnectSection from './components/ConnectSection';
import CoffeeSection from './components/CoffeeSection';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import SplashScreen from './components/SplashScreen';
import Background from './components/Background';
import MissionSection from './components/MissionSection';

const App: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isSplashRendered, setIsSplashRendered] = useState(true);

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
          <IntroSection />
          <MissionSection />
          <AboutSection />
          <JourneySection />
          <EcosystemSection />
          <ConnectSection />
          <CoffeeSection />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;