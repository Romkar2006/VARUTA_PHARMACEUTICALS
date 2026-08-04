import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { LicenseMarquee } from '../components/home/LicenseMarquee';
import {
  ShieldCheck,
  Award,
  Building2,
  CheckCircle2,
  Atom,
  Quote,
  Microscope,
  FlaskConical,
} from 'lucide-react';

export const ResearchQualityPage: React.FC = () => {
  const pipelineStages = [
    {
      stage: '01',
      title: 'Botanical Fingerprinting & Extraction',
      subtitle: 'HPTLC Chromatographic Profiling',
      desc: 'Raw botanical extracts undergo High-Performance Thin-Layer Chromatography (HPTLC) to establish precise phytonutrient fingerprints.',
      icon: Microscope,
    },
    {
      stage: '02',
      title: 'Active Assay Quantification',
      subtitle: '100% Active Compound Declaration',
      desc: 'Every active bio-ingredient (e.g., Lactoferrin 50mg, Ocimum sanctum 420mg) is quantified to exact assay percentages with zero unverified proprietary blends.',
      icon: FlaskConical,
    },
    {
      stage: '03',
      title: 'Novel Delivery Matrix Engineering',
      subtitle: 'Sublingual ODF & Targeted Caplets',
      desc: 'Formulated into fast-acting Oral Disintegrating Films (ODF) and targeted caplet matrices for optimal mucosal absorption and bio-availability.',
      icon: Atom,
    },
    {
      stage: '04',
      title: 'Heavy Metal & Micro-Toxin Clearance',
      subtitle: 'ICP-MS Spectrometry Analysis',
      desc: 'Tested via Inductively Coupled Plasma Mass Spectrometry (ICP-MS) to guarantee zero heavy metals, pesticide residues, or microbial contaminants.',
      icon: ShieldCheck,
    },
    {
      stage: '05',
      title: 'Statutory Batch Release & Traceability',
      subtitle: 'FSSAI Marketer Lic. 13624999000034',
      desc: 'Finished goods are released with batch-level QR quality tracking and physician dossier transparency.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1c1c1e] selection:bg-[#0b835c] selection:text-white font-sans">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-20">
        {/* Page Hero Header */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-emerald-50/60 via-white to-white border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">


            <h1 className="font-editorial-serif text-3xl sm:text-5xl lg:text-[62px] font-normal text-[#1c1c1e] leading-[1.14] sm:leading-[1.12] tracking-tight max-w-4xl">
              Where Botanical Wisdom Meets{' '}
              <span className="text-[#0b835c] italic font-normal">Molecular Precision.</span>
            </h1>

            <p className="text-sm sm:text-lg text-[#303033] font-medium leading-relaxed max-w-3xl">
              Varuta Pharma Pvt. Ltd. partners with licensed WHO-GMP manufacturing facilities (**Gencleus Pharma Pvt. Ltd.** & **Peptas Pharma Pvt. Ltd.**) to bridge classical botanical research with modern analytical assay testing.
            </p>
          </div>
        </section>

        {/* Lead Advisory Member Spotlight: Dr. Ramakrishna Aradhyula */}
        <section className="py-12 sm:py-24 bg-white border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-12 rounded-[36px] glass-panel-light border border-[#0b835c]/20 shadow-md relative overflow-hidden">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Column (5 cols): Enhanced Executive Portrait of Dr. Ramakrishna Aradhyula */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="p-2.5 bg-white rounded-[32px] border border-slate-200/90 shadow-md w-full max-w-[360px]">
                    <div className="relative w-full aspect-[4/4.5] rounded-[24px] overflow-hidden bg-slate-100 group">
                      <img
                        src="/advisory/dr-ramakrishna.jpg"
                        alt="Dr. Ramakrishna Aradhyula - COO and Genyurved Research Head"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Executive Badge Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xs flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-[#0b835c] uppercase tracking-wider block">
                            LEAD RESEARCH ADVISOR
                          </span>
                          <span className="text-xs font-bold text-[#1c1c1e]">Dr. Ramakrishna Aradhyula</span>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0b835c] animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (7 cols): Credentials & Quote */}
                <div className="lg:col-span-7 space-y-6">


                  <div>
                    <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#1c1c1e] font-normal tracking-tight">
                      Dr. Ramakrishna Aradhyula
                    </h2>
                    <p className="text-xs font-semibold text-[#0b835c] uppercase tracking-wider mt-1">
                      COO and Genyurved Research Head
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b835c] flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>

                  <blockquote className="font-editorial-serif text-xl sm:text-2xl text-[#1c1c1e] font-normal leading-snug tracking-tight italic text-slate-800">
                    "The biochemically balanced human body is a significant biological factory that builds the biochemical process to keep the body bona fide. The deficiency of any Bioingredient makes all the difference."
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#676768] leading-relaxed">
                    Under Dr. Aradhyula's research guidance, Genyurved Research focuses on identifying target biological deficiency pathways and formulating standardized active bio-ingredients that restore systemic homeostasis.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#1c1c1e]">
                      <CheckCircle2 className="w-4 h-4 text-[#0b835c]" />
                      <span>Bio-Ingredient Balance</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#1c1c1e]">
                      <Award className="w-4 h-4 text-[#0b835c]" />
                      <span>Genyurved Standardisation</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 5-Stage Research & Quality Pipeline */}
        <section className="py-24 bg-[#f8fafc] border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-2xl space-y-3">
              <span className="clinical-label text-[11px]">QUALITY ASSURANCE PROTOCOL</span>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1c1c1e] font-normal leading-tight tracking-tight">
                5-Stage Assay & <span className="text-[#0b835c] italic font-normal">Quality Pipeline</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#676768]">
                Every batch manufactured by our licensed partners (Gencleus & Peptas) passes through strict analytical testing before commercial release.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pipelineStages.map((stage) => {
                const Icon = stage.icon;
                return (
                  <div
                    key={stage.stage}
                    className="p-7 rounded-[28px] bg-white border border-slate-200/80 shadow-xs space-y-4 hover:border-[#0b835c]/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#eff1f6] text-[#0b835c] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-extrabold text-[#0b835c] bg-emerald-50 px-3 py-1 rounded-full">
                        STAGE {stage.stage}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#1c1c1e] mb-0.5">{stage.title}</h3>
                      <span className="text-xs font-semibold text-[#0b835c] block">{stage.subtitle}</span>
                    </div>

                    <p className="text-xs text-[#676768] leading-relaxed">{stage.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Manufacturing Facility Alliances Section */}
        <section className="py-24 bg-white border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="clinical-label text-[11px]">WHO-GMP PARTNER INFRASTRUCTURE</span>
                <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#1c1c1e] font-normal tracking-tight">
                  State-of-the-Art <span className="text-[#0b835c] italic font-normal">Licensed Facilities</span>
                </h2>

                <p className="text-sm sm:text-base text-[#676768] leading-relaxed">
                  Varuta Pharma Pvt. Ltd. operates under an ethical marketer license model (FSSAI Lic. No. 13624999000034). Our products are exclusively produced in WHO-GMP, ISO 22000:2018, and HACCP certified facilities operated by **Gencleus Pharma Pvt. Ltd.** and **Peptas Pharma Pvt. Ltd.**
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-1">
                    <h4 className="text-sm font-bold text-[#1c1c1e] flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#0b835c]" />
                      Gencleus Pharma Pvt. Ltd.
                    </h4>
                    <p className="text-xs text-[#676768]">
                      Specialized WHO-GMP manufacturing partner for Oral Disintegrating Films (ODF), tablets, and botanical extracts.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-1">
                    <h4 className="text-sm font-bold text-[#1c1c1e] flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#0b835c]" />
                      Peptas Pharma Pvt. Ltd.
                    </h4>
                    <p className="text-xs text-[#676768]">
                      Specialized WHO-GMP partner facility for precision caplets, sachets, and hard gelatin capsules.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Seals Display */}
              <div className="lg:col-span-5 space-y-4 text-center">
                <div className="p-8 rounded-[32px] bg-[#f8fafc] border border-slate-200/80 shadow-xs space-y-4">
                  <span className="clinical-label text-[10px] block text-[#0b835c]">INTERNATIONAL QUALITY SEALS</span>
                  <p className="text-xs text-[#676768]">
                    7 Accredited Certification Standards Maintained Across Manufacturing Facilities
                  </p>
                  
                  <div className="pt-2">
                    <LicenseMarquee />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
