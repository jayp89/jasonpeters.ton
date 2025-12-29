
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import SplashScreen from './components/SplashScreen';
import Background from './components/Background';
import HomePage from './components/pages/HomePage';
import BiographyPage from './components/pages/BiographyPage';
import { SOCIAL_LINKS } from './constants';

// Helper function to detect search engine bots
const isSearchBot = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent.toLowerCase();
  return /bot|googlebot|crawler|spider|robot|crawling/i.test(ua);
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
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

      {/* Buy $ETN Button - Centered */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <a 
          href="https://app.ston.fi/swap?chartVisible=false&chartInterval=1w&ft=TON&tt=EQAz_XrD0hA4cqlprWkpS7TIAhCG4CknAfob1VQm-2mBf5Vl&fa=%222%22"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-amber-500/50 rounded-full px-6 py-2 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:bg-amber-900/40 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all duration-300 group scale-[0.9] md:scale-100 origin-top"
        >
          <span className="text-amber-400 font-orbitron font-bold tracking-wider text-sm md:text-base group-hover:text-white transition-colors">BUY $ETN</span>
          <i className="fas fa-external-link-alt text-amber-500 text-xs group-hover:text-white transition-colors"></i>
        </a>
      </div>

      <LanguageSwitcher />
      <main className="relative z-10 flex flex-col items-center px-4 md:px-6 py-20 md:py-32 space-y-24 md:space-y-40 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
};

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const App: React.FC = () => {
  const isBot = isSearchBot();
  const [isMounted, setIsMounted] = useState(false);
  
  // Logic to determine if splash screen should be shown
  const shouldShowSplash = () => {
    if (isBot) return false;
    if (typeof window === 'undefined') return false;
    
    // Check current hash to see if we are deep linking
    const hash = window.location.hash;
    // Only show splash on root path ('', '#', or '#/')
    // If hash is '#/biography', this returns false
    return hash === '' || hash === '#' || hash === '#/';
  };

  const [showSplash, setShowSplash] = useState(shouldShowSplash());
  
  useEffect(() => {
    setIsMounted(true);
    
    if (!showSplash) return;

    // Reduced duration to 3.5s for better UX
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500); 

    return () => clearTimeout(timer);
  }, [showSplash]);

  if (!isMounted) return null;

  return (
    <HelmetProvider>
      <Helmet>
        <title>Jason Peters - The Digital Alchemist</title>
      </Helmet>
      <LanguageProvider>
        <HashRouter>
            <ScrollToTop />
            {/* Splash Screen is an overlay. It does not unmount the app content.
                This ensures bots can read content immediately behind it. */}
            <SplashScreen show={showSplash} />
            
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/biography" element={<BiographyPage />} />
                    {/* Catch-all route to handle 404s or subpaths by redirecting to Home */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </HashRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
