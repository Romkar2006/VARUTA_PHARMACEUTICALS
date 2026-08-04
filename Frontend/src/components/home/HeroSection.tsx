import React from 'react';
import { Link } from 'react-router-dom';
import { DnaMorphism } from './DnaMorphism';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Grove AI Announcement Pill */}
            <div>
              <span className="tag-pill-green">
                BORN FOR GENERATIONS…
              </span>
            </div>

            {/* Signature Hero Headline in Libre Caslon Text with single Forest Grove Green word */}
            <h1 className="font-editorial-serif text-4xl sm:text-6xl lg:text-[68px] font-normal leading-[1.15] tracking-tight text-[#1c1c1e]">
              Precision Nutraceuticals Born for Every{' '}
              <span className="text-[#0b835c] italic font-normal">Generation</span>
            </h1>

            {/* Subhead: Left-aligned, max-width ~520px */}
            <p className="text-base sm:text-lg text-[#303033] font-medium leading-relaxed max-w-[540px]">
              Varuta Pharma establishes doctor-channel credibility by addressing biological deficiencies through clinical evidence grading and time-tested botanical science.
            </p>

            {/* Proof Point Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[#eff1f6] max-w-[540px]">
              <div>
                <span className="clinical-label block">BIOLOGICAL</span>
                <span className="text-2xl font-semibold text-[#1c1c1e]">100%</span>
                <span className="text-xs text-[#676768] block">Targeted Actives</span>
              </div>
              <div>
                <span className="clinical-label block">EVIDENCE</span>
                <span className="text-2xl font-semibold text-[#1c1c1e]">Grade A</span>
                <span className="text-xs text-[#676768] block">Clinical Standards</span>
              </div>
              <div>
                <span className="clinical-label block">MARKETER</span>
                <span className="text-2xl font-semibold text-[#1c1c1e]">FSSAI</span>
                <span className="text-xs text-[#676768] block">Lic. 13624999000034</span>
              </div>
            </div>

            {/* Canonical CTA Pair: Dark Filled + Outlined Ghost */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#sectors"
                className="btn-dark-pill flex items-center gap-2"
              >
                <span>Explore 7 Therapeutic Sectors</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </a>

              <Link
                to="/products/womens-health/cystorin"
                className="btn-outline-pill flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#0b835c]" />
                <span>View CYSTORIN Lead SKU</span>
              </Link>
            </div>

          </div>

          {/* Right Column: DNA Morphism Canvas (Card completely removed!) */}
          <div className="lg:col-span-5 relative">
            <DnaMorphism />
          </div>

        </div>
      </div>
    </section>
  );
};
