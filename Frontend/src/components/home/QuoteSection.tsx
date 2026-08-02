import React from 'react';
import { Quote } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-[#eff1f6] text-left">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="w-12 h-12 rounded-xl bg-[#eff1f6] flex items-center justify-center text-[#0b835c]">
          <Quote className="w-6 h-6" />
        </div>

        <blockquote className="font-editorial-serif text-2xl sm:text-3xl lg:text-4xl text-[#1c1c1e] leading-snug tracking-tight font-normal">
          "Human health does not fail overnight—it deteriorates through subtle biological deficiencies. Our purpose is to restore that balance at the cellular core, giving every generation the <span className="text-[#0b835c] italic">precision care</span> it was born to inherit."
        </blockquote>

      </div>
    </section>
  );
};
