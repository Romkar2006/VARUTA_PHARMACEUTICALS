import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Award, CheckCircle2 } from 'lucide-react';

export const FounderCard: React.FC = () => {
  const [inFocus, setInFocus] = useState<boolean>(false);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-[#eff1f6] text-left">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="card-mist p-8 sm:p-12 rounded-[36px] bg-white border border-slate-200/90 shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (5 cols): Founder Photo with Duotone-to-Color Focus Reveal */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                onViewportEnter={() => setInFocus(true)}
                className="relative w-full max-w-[340px] aspect-[4/5] rounded-[28px] overflow-hidden shadow-lg border border-slate-200/80 group"
              >
                {/* Duotone Layer Base (Emerald / Charcoal Filter) */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                  alt="Founder & Managing Director"
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    inFocus ? 'filter-none scale-105' : 'contrast-125 sepia-0 saturate-0 hue-rotate-90 brightness-90'
                  }`}
                  style={{
                    filter: inFocus
                      ? 'none'
                      : 'grayscale(100%) sepia(30%) hue-rotate(110deg) saturate(300%) contrast(110%)',
                  }}
                />

                {/* Soft Focus Bloom Gradient Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none bg-gradient-to-t from-[#071311]/80 via-transparent to-transparent ${
                    inFocus ? 'opacity-40' : 'opacity-80'
                  }`}
                />

                {/* Focus Status Indicator Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#0b835c] uppercase tracking-wider block">
                      FOUNDER & MANAGING DIRECTOR
                    </span>
                    <span className="text-xs font-bold text-[#1c1c1e]">Executive Leadership</span>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0b835c] animate-pulse" />
                </div>
              </motion.div>
            </div>

            {/* Right Column (7 cols): Visionary Quote & Editorial Statement */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="tag-pill-green bg-[#eff1f6]">
                  <Sparkles className="w-3.5 h-3.5 text-[#0b835c]" />
                  FOUNDER'S PERSPECTIVE
                </span>
              </div>

              <div className="w-10 h-10 rounded-xl bg-[#eff1f6] text-[#0b835c] flex items-center justify-center">
                <Quote className="w-5 h-5" />
              </div>

              <blockquote className="font-editorial-serif text-2xl sm:text-3xl text-[#1c1c1e] font-normal leading-snug tracking-tight">
                "We founded Varuta Pharma to create a new standard of healthcare trust—one where every formulation is backed by transparent assay evidence, manufactured in WHO-GMP certified facilities, and delivered with statutory integrity."
              </blockquote>

              <p className="text-sm text-[#676768] leading-relaxed">
                By focusing on root-cause biological deficiencies rather than superficial symptoms, our goal is to empower doctors with prescribing confidence and offer patients preventive care built for generations.
              </p>

              {/* Founder Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200/80">
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1c1c1e]">
                  <CheckCircle2 className="w-4 h-4 text-[#0b835c]" />
                  <span>100% Assay Transparency</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1c1c1e]">
                  <Award className="w-4 h-4 text-[#0b835c]" />
                  <span>WHO-GMP Facility Standards</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
