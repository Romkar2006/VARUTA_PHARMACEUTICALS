import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse,
  Moon,
  Zap,
  Shield,
  Flame,
  Activity,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Atom,
  Dna,
} from 'lucide-react';
import { FloatingLeavesOverlay } from '../common/FloatingLeavesOverlay';

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
  cardBg: string;
}

export const SectorGrid: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const sectors: Sector[] = [
    {
      id: 'sleep-recovery',
      num: '01',
      name: 'Sleep & Recovery',
      tagline: 'Circadian Rhythm & Fast-Release Neuro-Relaxation',
      description:
        'Advanced fast-acting oral disintegrating film (ODF) technology combining micro-dosed melatonin with valerian & chamomile for restorative non-REM sleep cycles.',
      icon: Moon,
      skus: ['QUICKNAP'],
      gradient: 'from-[#1e1b4b] via-[#0b835c] to-[#044e36]',
      accentBg: 'bg-indigo-500/20',
      accentText: 'text-indigo-300',
      pathway: 'Suprachiasmatic Nucleus MT1/MT2 Melatonergic Signaling Pathway',
      highlightActives: ['Melatonin 5mg (Fast ODF Film)', 'Valeriana wallichii 25mg', 'Matricaria recutita 5mg', 'Vitamin B6 5mg'],
      cardBg: 'bg-gradient-to-br from-[#0a1128] via-[#0b835c] to-[#042820]',
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
      gradient: 'from-[#061e18] via-[#0b835c] to-[#044e36]',
      accentBg: 'bg-emerald-500/20',
      accentText: 'text-emerald-300',
      pathway: 'Mucosal Transferrin Receptor & Ferroportin Translocation Pathway',
      highlightActives: ['Lactoferrin 50mg', 'Ferrous Bisglycinate 60mg', 'Disodium Guanosine 5mg'],
      cardBg: 'bg-gradient-to-br from-[#061e18] via-[#0b835c] to-[#033b29]',
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
      gradient: 'from-[#3b1700] via-[#d97706] to-[#78350f]',
      accentBg: 'bg-amber-500/20',
      accentText: 'text-amber-300',
      pathway: 'Hepatic Phase-II CYP1A1 Oestrogen Hydroxylation',
      highlightActives: ['Ocimum sanctum 420mg', 'Vitex agnus-castus 100mg', 'Resveratrol 5mg'],
      cardBg: 'bg-gradient-to-br from-[#2a1200] via-[#b45309] to-[#451a03]',
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
      gradient: 'from-[#3a1500] via-[#ea580c] to-[#9a3412]',
      accentBg: 'bg-orange-500/20',
      accentText: 'text-orange-300',
      pathway: 'Pancreatic Alpha-Amylase Enzymatic Inhibition',
      highlightActives: ['Phaseolus vulgaris 500mg', 'Spirulina platensis 100mg'],
      cardBg: 'bg-gradient-to-br from-[#2e1000] via-[#c2410c] to-[#7c2d12]',
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
      gradient: 'from-[#042f2e] via-[#0d9488] to-[#115e59]',
      accentBg: 'bg-teal-500/20',
      accentText: 'text-teal-300',
      pathway: 'Nrf2-ARE Antioxidant Response Element Activation',
      highlightActives: ['Silybum marianum 250mg', 'Withania somnifera 500mg', 'L-Arginine 50mg'],
      cardBg: 'bg-gradient-to-br from-[#042f2e] via-[#0f766e] to-[#134e4a]',
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
      gradient: 'from-[#0c4a6e] via-[#0284c7] to-[#0369a1]',
      accentBg: 'bg-sky-500/20',
      accentText: 'text-sky-300',
      pathway: 'eNOS Nitric Oxide Synthase & Free Testosterone Binding',
      highlightActives: ['Tribulus terrestris 450mg', 'Mucuna pruriens 100mg'],
      cardBg: 'bg-gradient-to-br from-[#082f49] via-[#0369a1] to-[#0f172a]',
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
      gradient: 'from-[#061e18] via-[#0b835c] to-[#044e36]',
      accentBg: 'bg-emerald-500/20',
      accentText: 'text-emerald-300',
      pathway: 'Gamete Mitochondrial Bioenergetics & Follicular Maturation',
      highlightActives: ['Inositol 1000mg', 'Coenzyme Q10 100mg', 'Zinc Picolinate 15mg'],
      cardBg: 'bg-gradient-to-br from-[#061e18] via-[#0b835c] to-[#022c22]',
    },
  ];
  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sectors.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, sectors.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sectors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sectors.length) % sectors.length);
  };

  const activeSector = sectors[currentIndex];
  const Icon = activeSector.icon;

  return (
    <section id="sectors" className="py-20 sm:py-28 bg-white text-[#1c1c1e] border-t border-b border-[#eff1f6] overflow-hidden relative text-left">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 pointer-events-none"
        style={{ backgroundImage: "url('/therapeutic-bg.png')" }}
      />

      {/* Light Overlay Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 pointer-events-none" />

      {/* 3D Falling Leaves Parallax Overlay */}
      <FloatingLeavesOverlay />

      {/* Background Soft Emerald Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0b835c] animate-pulse" />
              <span className="clinical-label text-[11px]">THERAPEUTIC FOCUS AREAS</span>
            </div>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[46px] text-[#1c1c1e] font-normal leading-tight tracking-tight">
              7 Standardized <span className="text-[#0b835c] italic font-normal">Therapeutic Sectors</span>
            </h2>
            <p className="text-sm sm:text-base text-[#676768] font-normal max-w-xl">
              Every Varuta formulation is engineered around validated biological mechanisms across seven core medical domains.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-xs font-mono font-bold text-[#676768]">
              <span className="text-[#0b835c] text-lg font-bold">{activeSector.num}</span> / {sectors.length.toString().padStart(2, '0')}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white hover:bg-[#0b835c] text-[#1c1c1e] hover:text-white border border-slate-200/90 shadow-xs flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Previous Sector"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white hover:bg-[#0b835c] text-[#1c1c1e] hover:text-white border border-slate-200/90 shadow-xs flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Next Sector"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Tabbed Strand Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {sectors.map((s, idx) => {
            const TabIcon = s.icon;
            const isSelected = currentIndex === idx;

            return (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-4 py-3 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2.5 border ${
                  isSelected
                    ? 'bg-white text-[#1c1c1e] border-[#0b835c] shadow-md ring-2 ring-[#0b835c]/20 scale-[1.02]'
                    : 'bg-white/60 text-[#676768] hover:bg-white border-slate-200/80 hover:border-slate-300 hover:text-[#1c1c1e]'
                }`}
              >
                <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-[#0b835c] text-white' : 'bg-slate-100 text-[#676768]'}`}>
                  <TabIcon className="w-3.5 h-3.5" />
                </span>
                <div className="text-left">
                  <span className="block font-bold text-xs">{s.num}. {s.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Stage: Light Clinical Showcase Card */}
        <div 
          className="relative rounded-[32px] bg-white border border-slate-200/90 shadow-xl overflow-hidden min-h-[440px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSector.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-8 sm:p-12 h-full w-full flex flex-col justify-between space-y-8 text-left relative"
            >
              
              {/* Top Bar: Sector Tag & Flagship SKUs */}
              <div className="flex flex-wrap items-center justify-between gap-4 z-10 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#0b835c]/10 text-[#0b835c] border border-[#0b835c]/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="clinical-label text-[10px] block text-[#0b835c]">
                      SECTOR {activeSector.num}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-editorial-serif text-[#1c1c1e] tracking-tight">{activeSector.name}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#676768]">Flagship Formulations:</span>
                  {activeSector.skus.map((sku, i) => (
                    <span key={i} className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-50 text-[#0b835c] border border-emerald-200">
                      {sku}
                    </span>
                  ))}
                </div>
              </div>

              {/* Middle Body: 2-Column Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 items-start">
                
                {/* Left 7 Cols: Narrative & Target Pathway */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-[#0b835c] uppercase tracking-wider block">
                    {activeSector.tagline}
                  </span>
                  <p className="text-base sm:text-lg text-[#303033] leading-relaxed font-medium">
                    {activeSector.description}
                  </p>
                  
                  {/* Biological Pathway Card */}
                  <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 text-xs text-[#303033] flex items-center gap-3">
                    <Atom className="w-4 h-4 text-[#0b835c] animate-spin shrink-0" style={{ animationDuration: '12s' }} />
                    <span><strong className="text-[#1c1c1e]">Target Biological Pathway:</strong> {activeSector.pathway}</span>
                  </div>
                </div>

                {/* Right 5 Cols: Active Botanical & Assay Extract Matrix */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-[#0b835c]">
                    <Dna className="w-4 h-4" />
                    <span className="clinical-label text-[10px] block">
                      DECLARED ACTIVE BOTANICAL EXTRACTS
                    </span>
                  </div>
                  <div className="space-y-2">
                    {activeSector.highlightActives.map((act, i) => (
                      <div key={i} className="text-xs font-semibold text-[#1c1c1e] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0b835c] shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between z-10">
                <span className="text-xs text-[#676768] font-medium">Varuta Standardized Healthcare Portfolio</span>
                <Link
                  to="/products"
                  className="px-6 py-2.5 rounded-full bg-[#1c1c1e] hover:bg-[#0b835c] text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-md"
                >
                  <span>Inspect Sector Catalog</span>
                  <ArrowRight className="w-4 h-4 text-emerald-300" />
                </Link>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100">
            <motion.div
              key={currentIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: isPaused ? 0 : 6, ease: 'linear' }}
              className="h-full bg-[#0b835c]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
