
import React from 'react';
import IntroSection from '../IntroSection';
import AboutSection from '../AboutSection';
import JourneySection from '../JourneySection';
import EcosystemSection from '../EcosystemSection';
import ConnectSection from '../ConnectSection';
import CoffeeSection from '../CoffeeSection';
import Footer from '../Footer';
import MissionSection from '../MissionSection';
import BiographyLink from '../BiographyLink';

const HomePage: React.FC = () => {
  return (
    <>
      <IntroSection />
      <MissionSection />
      <AboutSection />
      <JourneySection />
      <EcosystemSection />
      <ConnectSection />
      <CoffeeSection />
      <BiographyLink />
      <Footer />
    </>
  );
};

export default HomePage;
