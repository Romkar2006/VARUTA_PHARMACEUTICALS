import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { FloatingCardsHero } from '../components/home/FloatingCardsHero';
import { LicenseMarquee } from '../components/home/LicenseMarquee';
import { AboutPreview } from '../components/about/AboutPreview';
import { SectorGrid } from '../components/home/SectorGrid';
import { FeaturedSKUs } from '../components/home/FeaturedSKUs';
import { QuoteSection } from '../components/home/QuoteSection';
import { Footer } from '../components/layout/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#1c1c1e] selection:bg-[#0b835c] selection:text-white font-sans">
      <Navbar />
      <main>
        <FloatingCardsHero />
        <LicenseMarquee />
        <AboutPreview />
        <SectorGrid />
        <FeaturedSKUs />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};
