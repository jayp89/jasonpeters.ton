
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Jason Peters - The Digital Alchemist</title>
        <meta name="description" content="An immersive portfolio for Jason Peters (JayP), a Tech Alchemist and founder of the ETN Ecosystem on the TON Blockchain. Explore the future of Web3 and AI." />
        <link rel="canonical" href="http://jasonpeters-ton.etnecosystem.org/" />
        <meta property="og:title" content="Jason Peters - The Digital Alchemist" />
        <meta property="og:description" content="An immersive portfolio for Jason Peters (JayP), founder of the ETN Ecosystem on TON (Jetton). Distinct from Electroneum." />
        <meta property="og:url" content="http://jasonpeters-ton.etnecosystem.org/" />
      </Helmet>
      
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