import React, { useEffect } from 'react';
import Lenis from 'lenis';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import ItinerarySection from './components/ItinerarySection';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { itineraryData } from './data/itineraryData';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <div className="min-h-screen">
      <SEO data={itineraryData.seoMetadata} />
      <HeroSection
        title={itineraryData.tripDetails.title}
        subtitle={itineraryData.tripDetails.subtitle}
        heroImage={itineraryData.tripDetails.heroImage}
      />
      <IntroSection
        headline={itineraryData.introContent.headline}
        body={itineraryData.introContent.body}
        introImage={itineraryData.introContent.introImage}
      />
      <ItinerarySection items={itineraryData.itineraryItems} />
      <Footer content={itineraryData.footerContent} />
    </div>
  );
}

export default App;
