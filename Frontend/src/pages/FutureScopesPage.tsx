import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { 
  Heart, 
  ArrowRight, 
  ChevronRight,
  Activity,
  ShieldCheck,
  Zap,
  Microscope,
  CheckCircle2
} from 'lucide-react';

export const FutureScopesPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nephrologyPillars = [
    {
      icon: Activity,
      title: 'Enteric Dialysis® & Uremic Toxin Clearance',
      subtitle: 'Targeting Nitrogenous Waste Extraction via Bowel Transit',
      description:
        'Micro-encapsulated oral probiotic-prebiotic matrices (Lactobacillus acidophilus, Bifidobacterium longum, and Acacia fiber) engineered to utilize intestinal mucosal loops as biological filters, digesting nitrogenous wastes (urea, uric acid, creatinine, indoxyl sulfate) during GI transit.',
      badge: 'PILLAR 1 · UREMIC CLEARANCE',
    },
    {
      icon: ShieldCheck,
      title: 'Non-Calcium Organic Phosphate Binders',
      subtitle: 'Preventing Hyperphosphatemia Without Vascular Calcification',
      description:
        'Plant-based organic polyphenolic and bio-chitosan complexing agents that bind dietary inorganic phosphate across intestinal pH 2–8. Eliminates systemic phosphate loading in CKD without causing hypercalcemia or arterial stiffness.',
      badge: 'PILLAR 2 · CKD-MBD CONTROL',
    },
    {
      icon: Microscope,
      title: 'Podocyte Protection & Antifibrotic Nrf2/HO-1 Shield',
      subtitle: 'Restoring Glomerular Basement Membrane & Podocyte Architecture',
      description:
        'Standardized extracts of Astragalus membranaceus (Astragaloside IV) and Boerhavia diffusa (Punarnavine) to induce renal Nrf2/Heme Oxygenase-1 transcription, reducing podocyte loss, arresting tubulointerstitial fibrosis, and diminishing proteinuria.',
      badge: 'PILLAR 3 · RENAL PROTECTIVE',
    },
    {
      icon: Zap,
      title: 'Renal Anemia & HIF-Hepcidin Modulation',
      subtitle: 'Overcoming Hepcidin Blockade in CKD Erythropoiesis',
      description:
        'Bioavailable Ferrous Bisglycinate chelate coupled with bioactive Lactoferrin and natural hypoxia-inducible factor (HIF) modulating botanicals to bypass inflammation-induced intestinal iron blockades and restore endogenous erythropoiesis.',
      badge: 'PILLAR 4 · ANEMIA MANAGEMENT',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafcfa] text-[#1c1c1e] flex flex-col font-sans selection:bg-[#0b835c] selection:text-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eef7f3] via-[#f4faf7] to-[#fafcfa] overflow-hidden">
        {/* Subtle Background Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 text-left">
          
          {/* Clinical Breadcrumb & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0b835c]">
              <Link to="/" className="hover:underline opacity-80">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Future Scopes & R&D Horizons</span>
            </div>


          </div>

          {/* Page Title & Mission Headline */}
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1c1c1e] leading-[1.12]">
              Future Scopes & <br className="hidden sm:inline" />
              <span className="text-[#0b835c]">Breakthrough Horizons</span>
            </h1>
            <p className="text-base sm:text-lg text-[#676768] font-normal leading-relaxed">
              Varuta Pharma is dedicated to pioneering life-transforming formulations. Explore our upcoming clinical pipeline across <strong className="text-[#1c1c1e]">Nephrology & Renal Care</strong>, <strong className="text-[#1c1c1e]">Cardiotherapy</strong>, and <strong className="text-[#1c1c1e]">Sublingual Delivery Systems</strong>.
            </p>
          </div>

        </div>
      </section>

      {/* Main Central Pipeline Section */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow space-y-16">
        
        {/* Central Announcement Banner: "Future products will be listed soon" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#061e18] via-[#0e3b2e] to-[#144d3d] text-white p-8 sm:p-12 shadow-2xl border border-emerald-500/30 text-left"
        >
          {/* Decorative ECG / Filtration Simulation Canvas */}
          <div className="absolute top-0 right-0 w-full h-full opacity-15 pointer-events-none overflow-hidden flex items-center justify-end">
            <svg viewBox="0 0 500 150" className="w-[600px] h-[180px] stroke-emerald-300 fill-none stroke-[2.5] stroke-linecap-round">
              <path d="M0,75 L100,75 L120,40 L140,110 L160,20 L180,95 L200,75 L300,75 L320,40 L340,110 L360,20 L380,95 L400,75 L500,75" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">


            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Future Products Will Be Listed Soon
            </h2>

            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Our clinical research teams are actively finalizing regulatory dossiers, stability trials, and bio-equivalence studies for our forthcoming formulations. From <strong className="text-white">Nephrology & Enteric Dialysis Matrices</strong> to <strong className="text-white">Cardiac Protection Complexes</strong>, ground-breaking products are currently in advanced pipeline development.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-emerald-400 text-emerald-950 font-bold text-sm shadow-lg shadow-emerald-950/40 hover:bg-emerald-300 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Inquire With Nephrology R&D Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/products')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm hover:bg-white/20 transition-all cursor-pointer"
              >
                <span>View Currently Available Products</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* NEPHROLOGY & RENAL CARE SPOTLIGHT SECTION */}
        <section className="space-y-8 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-[#0b835c]">
              <Activity className="w-5 h-5 text-[#0b835c] animate-pulse" />
              <span className="clinical-label text-xs font-bold uppercase tracking-wider">
                FEATURED PIPELINE FOCUS · NEPHROLOGY
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1c1e]">
              Innovating <span className="text-[#0b835c]">Nephrology & Renal Therapeutics</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
              Chronic Kidney Disease (CKD) affects over 850 million people globally. Varuta Pharma’s renal R&D initiative focuses on slowing eGFR decline, detoxifying nitrogenous uremic waste, and preventing tubulointerstitial fibrosis through non-invasive phyto-therapeutic and biotic matrices.
            </p>
          </div>

          {/* 4 Innovation Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nephrologyPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-8 rounded-[32px] bg-white border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#0b835c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 uppercase">
                        {pillar.badge}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-[#0b835c]/10 text-[#0b835c] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#1c1c1e] leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#0b835c]">
                      {pillar.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0b835c]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0b835c]" /> Dossier in Stability Trial
                    </span>
                    <button
                      onClick={() => navigate('/contact?topic=nephrology')}
                      className="hover:underline flex items-center gap-1"
                    >
                      <span>Inquire</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Renal Filtration Technical Card */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 text-white border border-emerald-800/40 shadow-xl space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
                  CLINICAL R&D RATIONALE · ENTERIC DIALYSIS
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Why Enteric Uremic Extraction Belongs in Modern Nephrology Care
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  When nephrons lose filtration capacity, uremic toxins accumulate in systemic circulation, causing nausea, pericarditis, and accelerated vascular stiffness. By utilizing micro-encapsulated biotics, Varuta’s enteric dialysis matrix extracts up to 35% of circulating urea and creatinine via GI epithelial diffusion.
                </p>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 text-center sm:text-left">
                <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
                  <span>Targeted Uremic Clearance</span>
                  <span>35% Reduction Target</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="bg-emerald-400 h-full rounded-full"
                    animate={{ width: ['30%', '75%', '65%', '85%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
                <p className="text-[11px] text-slate-400">
                  Simulated GI uremic clearance in pre-dialysis CKD Stages 3b–4.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CARDIAC EXPLORATION HIGHLIGHT */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-slate-200/80 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-[#0b835c]">
              <Heart className="w-5 h-5 fill-emerald-100 text-[#0b835c] animate-pulse" />
              <span className="clinical-label text-xs font-bold uppercase tracking-wider">
                CARDIORENAL SYNERGY
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1c1c1e]">
              Expanding Frontiers in <span className="text-[#0b835c]">Cardiovascular Health</span>
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Heart and kidney health are deeply interconnected through the cardiorenal axis. Varuta Pharma is developing specialized cardiovascular formulations to enhance endothelial nitric oxide syntheses, preserve myocardial micro-vascular elasticity, and reduce lipid-peroxidation stress in arterial walls.
            </p>

            <div className="pt-3">
              <button
                onClick={() => navigate('/contact?topic=cardiac')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0b835c] hover:text-[#061e18] uppercase tracking-wider group cursor-pointer"
              >
                <span>Inquire About Cardiorenal Formulations</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Interactive Animated Heartbeat Visual Indicator */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-slate-900 to-emerald-950 rounded-2xl border border-emerald-800/40 text-white relative overflow-hidden shadow-inner min-h-[220px]">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0b835c_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-6 w-full max-w-xs">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-400/40 animate-pulse shadow-lg shadow-emerald-500/10">
                <Heart className="w-10 h-10 text-emerald-400 fill-emerald-400/30" />
              </div>

              {/* Pulse Progress Bar */}
              <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-emerald-500/30">
                <motion.div 
                  className="bg-emerald-400 h-full rounded-full shadow-sm shadow-emerald-400" 
                  animate={{ width: ['20%', '85%', '60%', '95%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Direct CTA Bridge Section */}
        <section className="bg-gradient-to-r from-emerald-900 via-emerald-950 to-slate-950 rounded-[32px] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-700/40 text-left">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-2xl font-bold text-white">
              Are you a Nephrologist, Physician, or Clinical Researcher?
            </h3>
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
              Gain early access to technical whitepapers, nephrology dossier samples, or register your institution for upcoming clinical trials.
            </p>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-emerald-400 text-emerald-950 font-bold text-sm hover:bg-emerald-300 hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
          >
            <span>Inquire With Medical Board</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default FutureScopesPage;
