import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight } from 'lucide-react';
import { ParallaxLayer, ParallaxBackground } from '../common/ParallaxSection';

interface SKU {
  title: string;
  category: string;
  categoryId: string;
  form: string;
  dosage: string;
  badge: string;
  evidenceGrade: string;
  actives: { name: string; dose: string }[];
  description: string;
  path: string;
  parallaxSpeed: number;
}

export const FeaturedSKUs: React.FC = () => {
  const topSKUs: SKU[] = [
    {
      title: 'GUANOLACT',
      category: 'Iron Deficiency & Immunity',
      categoryId: 'iron-immunity',
      form: 'Tablet',
      dosage: '1 BD (Twice Daily)',
      badge: 'LEAD FLAGSHIP SKU',
      evidenceGrade: 'Grade A Evidence',
      actives: [
        { name: 'Lactoferrin', dose: '50 mg' },
        { name: 'Disodium Guanosine 5-MP', dose: '5 mg' },
        { name: 'Ferrous Bisglycinate', dose: '60 mg' },
      ],
      description: 'Engineered with bioactive lactoferrin and disodium guanosine to optimize cellular iron absorption without gut distress.',
      path: '/products/iron-immunity/guanolact',
      parallaxSpeed: 0.12,
    },
    {
      title: 'ESTROCLEN',
      category: "Women's Health",
      categoryId: 'womens-health',
      form: 'Caplet',
      dosage: '1 BD (Twice Daily)',
      badge: 'HERO FORMULATION',
      evidenceGrade: 'Grade A Evidence',
      actives: [
        { name: 'Ocimum sanctum', dose: '420 mg' },
        { name: 'Vitex agnus-castus', dose: '100 mg' },
        { name: 'Resveratrol (Vitis vinifera)', dose: '5 mg' },
      ],
      description: 'First-in-class doctor-channel formulation targeting 2-OHE1/16α-OHE1 oestrogen metabolite ratio and endocrine balance.',
      path: '/products/womens-health/estroclen',
      parallaxSpeed: -0.12,
    },
    {
      title: 'QUICKNAP',
      category: 'Sleep & Recovery',
      categoryId: 'sleep-recovery',
      form: 'Oral Film (ODF)',
      dosage: '1 Film before bedtime',
      badge: 'FAST RELEASE MATRIX',
      evidenceGrade: 'Grade B+ Evidence',
      actives: [
        { name: 'Melatonin', dose: '5 mg' },
        { name: 'Valerian Extract', dose: '25 mg' },
        { name: 'Vitamin B6', dose: '5 mg' },
      ],
      description: 'Rapid sublingual dissolution matrix engineered for immediate circadian synchronization and deep REM sleep recovery.',
      path: '/products/sleep-recovery/quicknap',
      parallaxSpeed: 0.16,
    },
  ];

  return (
    <section className="py-24 bg-[#f8fafc] border-y border-slate-200/80 relative overflow-hidden text-left">
      <ParallaxBackground speed={-0.2} />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="clinical-label">
            FLAGSHIP FORMULATIONS
          </span>
          <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[46px] text-[#1c1c1e] font-normal tracking-tight">
            Top 3 High-Priority <span className="text-[#0b835c] italic font-normal">Formulations</span>
          </h2>
          <p className="text-sm sm:text-base text-[#676768]">
            Our leading doctor-channel products engineered for maximum therapeutic efficacy and clinical evidence compliance.
          </p>
        </div>

        {/* Minimalist Editorial Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {topSKUs.map((sku) => (
            <ParallaxLayer key={sku.title} speed={sku.parallaxSpeed} className="h-full">
              <div className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-xs hover:border-[#0b835c]/50 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden">
                
                <div className="space-y-6">
                  
                  {/* Top Header Tag & Grade */}
                  <div className="flex items-center justify-between">
                    <span className="clinical-label text-[10px] text-[#0b835c] uppercase">
                      {sku.category}
                    </span>
                    <span className="text-[11px] font-semibold text-[#0b835c] bg-[#eff1f6] px-2.5 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3 text-[#0b835c] inline mr-1" />
                      {sku.evidenceGrade}
                    </span>
                  </div>

                  {/* Editorial Title & Form */}
                  <div>
                    <h3 className="font-editorial-serif text-3xl font-normal text-[#1c1c1e] tracking-tight group-hover:text-[#0b835c] transition-colors">
                      {sku.title}
                    </h3>
                    <p className="text-xs text-[#676768] font-semibold mt-1">
                      {sku.form} · <span className="text-[#0b835c]">{sku.dosage}</span>
                    </p>
                  </div>

                  <p className="text-xs text-[#676768] leading-relaxed">
                    {sku.description}
                  </p>

                  {/* Clean Active Formulation Pills */}
                  <div className="space-y-2 pt-4 border-t border-slate-200/60">
                    <span className="clinical-label text-[10px] block">
                      DECLARED ACTIVE FORMULATION
                    </span>
                    <div className="space-y-1.5">
                      {sku.actives.map((act) => (
                        <div
                          key={act.name}
                          className="bg-[#eff1f6] px-3.5 py-2 rounded-xl border border-slate-200/60 flex items-center justify-between text-xs"
                        >
                          <span className="text-[#1c1c1e] font-medium">{act.name}</span>
                          <span className="text-[#0b835c] font-bold">{act.dose}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Minimal Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] text-[#676768] font-medium">
                    FSSAI Lic. 13624999000034
                  </span>
                  <Link
                    to={sku.path}
                    className="text-xs font-bold text-[#0b835c] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Inspect SKU</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </ParallaxLayer>
          ))}
        </div>

      </div>
    </section>
  );
};
