import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Moon,
  Zap,
  Shield,
  Flame,
  Activity,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  Atom,
  Dna,
  CheckCircle2,
} from 'lucide-react';

interface Sector {
  id: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  icon: any;
  skus: string[];
  gradient: string;
  accentBg: string;
  accentText: string;
  pathway: string;
  highlightActives: string[];
  gridSpan: string;
}

export const SectorGrid: React.FC = () => {
  // Default Active Sector initialized to QUICKNAP (Sleep & Recovery)
  const [activeSectorId, setActiveSectorId] = useState<string>('sleep-recovery');

  const sectors: Sector[] = [
    {
      id: 'sleep-recovery',
      num: '01',
      name: 'Sleep & Recovery (QUICKNAP)',
      tagline: 'Circadian Rhythm & Fast-Release Neuro-Relaxation',
      description:
        'Advanced fast-acting oral disintegrating film (ODF) technology combining micro-dosed melatonin with valerian & chamomile for restorative non-REM sleep cycles.',
      icon: Moon,
      skus: ['QUICKNAP'],
      gradient: 'from-[#1e1b4b] via-[#0b835c] to-[#0f172a]',
      accentBg: 'bg-indigo-500/20',
      accentText: 'text-indigo-300',
      pathway: 'Suprachiasmatic Nucleus MT1/MT2 Melatonergic Signaling Pathway',
      highlightActives: ['Melatonin 5mg (Fast ODF Film)', 'Valeriana wallichii 25mg', 'Matricaria recutita 5mg', 'Vitamin B6 5mg'],
      gridSpan: 'lg:col-span-2 lg:row-span-1',
    },
    {
      id: 'iron-immunity',
      num: '02',
      name: 'Iron Deficiency & Immunity',
      tagline: 'Bio-available Hemoglobin & Cellular Defense',
      description:
        'Advanced disodium guanosine & lactoferrin complexes engineered to optimize mucosal iron transport and strengthen humoral immune resilience.',
      icon: Shield,
      skus: ['GUANOLACT'],
      gradient: 'from-emerald-900/30 via-[#0b835c]/20 to-teal-500/10',
      accentBg: 'bg-emerald-500/15',
      accentText: 'text-emerald-600',
      pathway: 'Mucosal Transferrin Receptor & Ferroportin Translocation Pathway',
      highlightActives: ['Lactoferrin 50mg', 'Ferrous Bisglycinate 60mg', 'Disodium Guanosine 5mg'],
      gridSpan: 'lg:col-span-1 lg:row-span-1',
    },
    {
      id: 'womens-health',
      num: '03',
      name: "Women's Health",
      tagline: 'Oestrogen Metabolism & Endocrine Support',
      description:
        'Targeted botanical complexes engineered to balance oestrogen 2-OHE1/16α-OHE1 metabolites, support ovarian function, and reduce oxidative uterine inflammation.',
      icon: HeartPulse,
      skus: ['ESTROCLEN', 'CYSTORIN'],
      gradient: 'from-amber-900/30 via-[#78350f]/20 to-amber-500/10',
      accentBg: 'bg-amber-500/15',
      accentText: 'text-amber-600',
      pathway: 'Hepatic Phase-II CYP1A1 Oestrogen Hydroxylation',
      highlightActives: ['Ocimum sanctum 420mg', 'Vitex agnus-castus 100mg', 'Resveratrol 5mg'],
      gridSpan: 'lg:col-span-1 lg:row-span-1',
    },
    {
      id: 'weight-management',
      num: '04',
      name: 'Weight Management',
      tagline: 'Lipid Metabolism & Carbohydrate Control',
      description:
        'Phaseolus vulgaris & spirulina extract blend designed to modulate alpha-amylase starch digestion and regulate postprandial glycemic excursions.',
      icon: Flame,
      skus: ['FATEASE-5'],
      gradient: 'from-orange-900/20 via-orange-500/10 to-amber-500/10',
      accentBg: 'bg-orange-500/15',
      accentText: 'text-orange-600',
      pathway: 'Pancreatic Alpha-Amylase Enzymatic Inhibition',
      highlightActives: ['Phaseolus vulgaris 500mg', 'Spirulina platensis 100mg'],
      gridSpan: 'lg:col-span-1 lg:row-span-1',
    },
    {
      id: 'cellular-longevity',
      num: '05',
      name: 'Cellular Longevity',
      tagline: 'Anti-Oxidative & Mitochondrial Vitality',
      description:
        'Silybum marianum & Ashwagandha complexes formulated to protect cellular telomeres and neutralize mitochondrial reactive oxygen species (ROS).',
      icon: Sparkles,
      skus: ['TELAGE'],
      gradient: 'from-teal-900/20 via-teal-500/10 to-emerald-500/10',
      accentBg: 'bg-teal-500/15',
      accentText: 'text-teal-600',
      pathway: 'Nrf2-ARE Antioxidant Response Element Activation',
      highlightActives: ['Silybum marianum 250mg', 'Withania somnifera 500mg', 'L-Arginine 50mg'],
      gridSpan: 'lg:col-span-2 lg:row-span-1',
    },
    {
      id: 'mens-health',
      num: '06',
      name: "Men's Health",
      tagline: 'Vitality & Endocrine Homeostasis',
      description:
        'High-purity Protodioscin & Withanolide extracts tailored for male stamina, vascular nitric oxide production, and androgen receptor sensitivity.',
      icon: Zap,
      skus: ['ERECTER'],
      gradient: 'from-sky-900/20 via-blue-500/10 to-cyan-500/10',
      accentBg: 'bg-blue-500/15',
      accentText: 'text-blue-600',
      pathway: 'eNOS Nitric Oxide Synthase & Free Testosterone Binding',
      highlightActives: ['Tribulus terrestris 450mg', 'Mucuna pruriens 100mg'],
      gridSpan: 'lg:col-span-1 lg:row-span-1',
    },
    {
      id: 'fertility',
      num: '07',
      name: 'Fertility Support',
      tagline: 'Reproductive Biomarker Health',
      description:
        'Specialized botanical and mineral support designed for clinical reproductive biomarker wellness for both men and women.',
      icon: Activity,
      skus: ['CYSTORIN', 'ERECTER'],
      gradient: 'from-emerald-900/20 via-[#0b835c]/10 to-teal-500/10',
      accentBg: 'bg-[#0b835c]/15',
      accentText: 'text-[#0b835c]',
      pathway: 'Gamete Mitochondrial Bioenergetics & Follicular Maturation',
      highlightActives: ['Inositol 1000mg', 'Coenzyme Q10 100mg', 'Zinc Picolinate 15mg'],
      gridSpan: 'lg:col-span-2 lg:row-span-1',
    },
  ];

  const activeSector = sectors.find((s) => s.id === activeSectorId) || sectors[0];

  return (
    <section id="sectors" className="py-24 bg-white border-t border-[#eff1f6] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0b835c] animate-pulse" />
              <span className="clinical-label text-[11px]">THERAPEUTIC FOCUS AREAS</span>
            </div>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[46px] text-[#1c1c1e] font-normal leading-tight tracking-tight">
              7 Interactive <span className="text-[#0b835c] italic font-normal">Therapeutic Sectors</span>
            </h2>
            <p className="text-sm sm:text-base text-[#676768] font-normal">
              Every Varuta formulation is engineered to target specific biological pathways across these seven medical domains.
            </p>
          </div>

          {/* Quick Nav Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {sectors.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSectorId(s.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeSectorId === s.id
                    ? 'bg-[#0b835c] text-white shadow-xs scale-105'
                    : 'bg-[#eff1f6] text-[#303033] hover:bg-slate-200'
                }`}
              >
                {s.num}. {s.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Animated Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            const isActive = activeSectorId === sector.id;

            return (
              <div
                key={sector.id}
                onClick={() => setActiveSectorId(sector.id)}
                className={`group relative rounded-[28px] p-7 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between border ${
                  sector.id === 'sleep-recovery'
                    ? 'bg-gradient-to-br from-[#1e1b4b] via-[#0b835c] to-[#0f172a] text-white border-[#0b835c] shadow-lg lg:col-span-2'
                    : isActive
                    ? 'bg-white border-[#0b835c] shadow-md ring-2 ring-[#0b835c]/20 scale-[1.01]'
                    : 'bg-[#eff1f6]/80 hover:bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Background Glow Effect */}
                <div
                  className={`absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
                    isActive ? 'opacity-30' : 'opacity-0'
                  } bg-gradient-to-br ${sector.gradient}`}
                />

                {/* Top Bar: Sector Number & Icon */}
                <div className="flex items-center justify-between z-10 mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        sector.id === 'sleep-recovery'
                          ? 'bg-white/10 text-indigo-200 border border-white/20'
                          : 'bg-white text-[#0b835c] border border-slate-200/80 shadow-xs'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span
                        className={`text-[11px] font-bold tracking-widest uppercase block ${
                          sector.id === 'sleep-recovery' ? 'text-indigo-300' : 'text-[#0b835c]'
                        }`}
                      >
                        SECTOR {sector.num}
                      </span>
                      <span
                        className={`text-[11px] font-medium ${
                          sector.id === 'sleep-recovery' ? 'text-indigo-100/70' : 'text-[#676768]'
                        }`}
                      >
                        {sector.skus.length} Active Formulation
                      </span>
                    </div>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      sector.id === 'sleep-recovery'
                        ? 'bg-white/15 text-white group-hover:bg-white group-hover:text-[#0b835c]'
                        : 'bg-white text-[#1c1c1e] border border-slate-200 group-hover:bg-[#0b835c] group-hover:text-white'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-3 z-10 mb-6 text-left">
                  <h3
                    className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                      sector.id === 'sleep-recovery'
                        ? 'text-white'
                        : 'text-[#1c1c1e] group-hover:text-[#0b835c]'
                    }`}
                  >
                    {sector.name}
                  </h3>
                  <p
                    className={`text-xs font-semibold ${
                      sector.id === 'sleep-recovery' ? 'text-indigo-200' : sector.accentText
                    }`}
                  >
                    {sector.tagline}
                  </p>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      sector.id === 'sleep-recovery' ? 'text-indigo-50/80' : 'text-[#676768]'
                    }`}
                  >
                    {sector.description}
                  </p>
                </div>

                {/* Bottom Bar: SKU Chips */}
                <div className="pt-4 border-t border-slate-200/40 z-10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {sector.skus.map((sku) => (
                      <span
                        key={sku}
                        className={`text-[10.5px] font-bold px-2.5 py-1 rounded-md transition-transform group-hover:scale-105 ${
                          sector.id === 'sleep-recovery'
                            ? 'bg-white/20 text-white border border-white/30'
                            : 'bg-white text-[#1c1c1e] border border-slate-200 shadow-xs'
                        }`}
                      >
                        {sku}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Sector Inspector Panel (Active Sector Spotlight) */}
        <div className="card-mist p-8 rounded-[32px] bg-gradient-to-br from-indigo-900/5 via-[#eff1f6] to-emerald-50/40 border border-slate-200/90 shadow-sm relative overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Inspector Left (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Atom className="w-4 h-4 text-[#0b835c] animate-spin" style={{ animationDuration: '12s' }} />
                <span className="clinical-label text-[11px]">ACTIVE SECTOR CLINICAL DEEP-DIVE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1c1e] tracking-tight">
                {activeSector.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#0b835c]">
                Target Mechanism: {activeSector.pathway}
              </p>
              <p className="text-xs sm:text-sm text-[#676768] leading-relaxed max-w-xl">
                {activeSector.description}
              </p>

              {/* Standardized Actives Breakdown */}
              <div className="pt-2">
                <span className="text-xs font-bold text-[#1c1c1e] block mb-2">
                  Declared Active Formulations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSector.highlightActives.map((active, i) => (
                    <div
                      key={i}
                      className="bg-white px-3 py-1.5 rounded-lg border border-slate-200/90 shadow-xs flex items-center gap-2 text-xs font-medium text-[#1c1c1e]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0b835c]" />
                      <span>{active}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inspector Right (5 cols): CTA Card */}
            <div className="lg:col-span-5 bg-white p-6 rounded-[24px] border border-slate-200/80 shadow-xs space-y-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0b835c]/10 text-[#0b835c] flex items-center justify-center font-bold">
                  <Dna className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1c1c1e]">Explore Products in {activeSector.name}</h4>
                  <p className="text-xs text-[#676768]">Grade A evidence-backed SKUs</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/products/sleep-recovery/quicknap"
                  className="btn-dark-pill w-full sm:w-auto flex items-center justify-center gap-2 text-xs py-2.5 px-5"
                >
                  <span>Inspect QUICKNAP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
                </Link>

                <Link
                  to="/contact"
                  className="btn-outline-pill w-full sm:w-auto flex items-center justify-center gap-2 text-xs py-2.5 px-5"
                >
                  <span>Request Dossier</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
