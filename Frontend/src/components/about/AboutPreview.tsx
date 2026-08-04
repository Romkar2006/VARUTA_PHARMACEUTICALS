import React from 'react';
import { ShieldCheck, Award, Building2, CheckCircle2 } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Evidence-Graded Actives',
      desc: '100% assay-declared botanical extracts and bio-identical compounds with zero unverified proprietary blends.',
      icon: Award,
    },
    {
      num: '02',
      title: 'WHO-GMP Manufacturing',
      desc: 'Formulations manufactured exclusively in licensed partner facilities (Gencleus & Peptas) under WHO-GMP & ISO 22000:2018 standards.',
      icon: Building2,
    },
    {
      num: '03',
      title: 'Doctor-Channel Focus',
      desc: 'Engineered specifically for physician prescribing, addressing underlying biological deficiencies across 7 therapeutic sectors.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Statutory Transparency',
      desc: 'Full FSSAI Marketer compliance (Lic. No. 13624999000034) with batch-level quality verification.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#eff1f6]/60 to-white border-t border-[#eff1f6] text-left relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (6 cols): Brand Story */}
          <div className="lg:col-span-6 space-y-6">


            <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[46px] text-[#1c1c1e] font-normal leading-tight tracking-tight">
              Born for Generations…{' '}
              <span className="text-[#0b835c] italic font-normal block">
                Formulating Evidence, Not Hype.
              </span>
            </h2>

            <p className="text-base text-[#303033] font-medium leading-relaxed">
              <strong className="text-[#1c1c1e]">Varuta Pharma Pvt. Ltd.</strong> is a science-driven preventive healthcare company. We operate as an ethical marketing enterprise, partnering with WHO-GMP certified manufacturing facilities to deliver precision nutraceuticals across India.
            </p>

            <p className="text-sm text-[#676768] leading-relaxed">
              We do not formulate to follow commercial trends. Every product in our catalog—from <span className="font-semibold text-[#1c1c1e]">GUANOLACT</span> to <span className="font-semibold text-[#1c1c1e]">QUICKNAP</span>—is developed from biological mechanism to clinical evidence grading to dose.
            </p>

            {/* Corporate Office Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/80">
              <div className="card-mist p-4 rounded-xl bg-white border border-slate-200/80">
                <span className="clinical-label text-[10px] block text-[#0b835c]">REGISTERED OFFICE</span>
                <span className="text-xs font-bold text-[#1c1c1e] block mt-1">Pune, Maharashtra</span>
                <span className="text-[11px] text-[#676768] block mt-0.5">Sebiyan Apartments, Pune 411046</span>
              </div>
              <div className="card-mist p-4 rounded-xl bg-white border border-slate-200/80">
                <span className="clinical-label text-[10px] block text-[#0b835c]">CORPORATE OFFICE</span>
                <span className="text-xs font-bold text-[#1c1c1e] block mt-1">Hyderabad, Telangana</span>
                <span className="text-[11px] text-[#676768] block mt-0.5">Alwyn Colony, Sanath Nagar 500018</span>
              </div>
            </div>

          </div>

          {/* Right Column (6 cols): 4 Core Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="glass-panel-light p-6 rounded-[24px] border border-slate-200/90 shadow-xs hover:border-[#0b835c]/40 hover:scale-[1.02] transition-all duration-300 group text-left"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#eff1f6] text-[#0b835c] flex items-center justify-center group-hover:bg-[#0b835c] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-400 group-hover:text-[#0b835c] transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1c1c1e] mb-1.5 group-hover:text-[#0b835c] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#676768] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
