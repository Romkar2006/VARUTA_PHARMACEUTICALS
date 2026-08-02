import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import Globe from '../components/originkit/Globe';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Dna,
  ArrowRight,
  UserCheck,
  Atom,
} from 'lucide-react';



export const AboutPage: React.FC = () => {

  const metrics = [
    { label: 'ESTABLISHED', val: '2021', sub: 'Incorporated Entity' },
    { label: 'LOCATIONS', val: 'Pune & Hyd', sub: 'Dual Office Network' },
    { label: 'HERITAGE', val: '4+ Decades', sub: 'Clinical Research Foundation' },
  ];

  const directors = [
    {
      name: 'Dr. R. K. Paruchuri',
      role: 'Founding Advisory Director',
      period: 'Heritage Leadership',
      bio: 'Pioneered 4 decades of clinical research in bio-nutraceuticals, laying the scientific foundation for Varuta Pharma’s evidence-graded formulations.',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Rohith Paruchuri',
      role: 'Managing Director & CEO',
      period: 'Executive Leadership',
      bio: 'Driving national doctor-channel expansion, WHO-GMP manufacturing alliances with Gencleus & Peptas, and statutory FSSAI compliance.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Executive Medical Board',
      role: 'Clinical Integrity Panel',
      period: 'Regulatory Oversight',
      bio: 'Overseeing botanical assay standardisation, physician literature disclosures, and strict adherence to Drugs & Magic Remedies Act 1954.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop',
    },
  ];

  const journeyTimeline = [
    {
      year: '2021',
      title: 'Company Incorporation & Blueprint',
      desc: 'Established Varuta Pharma Pvt. Ltd. with a core mandate to deliver evidence-graded preventive healthcare across India.',
      side: 'left',
    },
    {
      year: '2022',
      title: 'FSSAI License Acquisition',
      desc: 'Acquired FSSAI Marketer License No. 13624999000034, establishing full statutory transparency for batch distribution.',
      side: 'right',
    },
    {
      year: '2023',
      title: 'WHO-GMP Partner Alliances',
      desc: 'Formed exclusive manufacturing partnerships with Gencleus Pharma Pvt. Ltd. and Peptas Pharma Pvt. Ltd. for WHO-GMP production.',
      side: 'left',
    },
    {
      year: '2024',
      title: '7 Therapeutic Sectors Launch',
      desc: 'Rolled out flagship formulations GUANOLACT, ESTROCLEN, and QUICKNAP across 7 core deficiency domains.',
      side: 'right',
    },
    {
      year: '2025-26',
      title: 'National Doctor-Channel Expansion',
      desc: 'Expanding physician prescribing availability across major hospital networks and specialized clinic channels.',
      side: 'left',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1c1c1e] selection:bg-[#0b835c] selection:text-white font-sans">
      <Navbar />

      <main className="pt-28">
        
        {/* SECTION 1: HERO SECTION ("Poised to Serve Humanity") */}
        <section className="py-20 bg-gradient-to-b from-emerald-50/50 via-white to-white border-b border-[#eff1f6] text-left relative overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left 5 Cols: Vision Statement & CTAs */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="tag-pill-green bg-white shadow-xs">
                    <Dna className="w-3.5 h-3.5 text-[#0b835c]" />
                    POISED TO SERVE GENERATIONS
                  </span>
                </div>

                <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#1c1c1e] leading-[1.12] tracking-tight">
                  Health Begins Where Life Is{' '}
                  <span className="text-[#0b835c] italic font-normal">Written.</span>
                </h1>

                <div className="space-y-3 pt-2 border-t border-slate-200/80">
                  <span className="clinical-label text-[10px] block">OUR VISION</span>
                  <p className="text-sm sm:text-base text-[#303033] font-medium leading-relaxed">
                    To be a globally admired preventive healthcare company, formulating from biological mechanism to clinical evidence to dose.
                  </p>

                  <span className="clinical-label text-[10px] block pt-2">OUR MISSION</span>
                  <p className="text-xs sm:text-sm text-[#676768] leading-relaxed">
                    Targeting human biological deficiencies through standardized botanical science, WHO-GMP licensed partner manufacturing, and statutory transparency under FSSAI Lic. <strong className="text-[#0b835c]">13624999000034</strong>.
                  </p>
                </div>

                <div className="pt-4">
                  <a href="#philosophy" className="btn-dark-pill inline-flex items-center gap-2 text-xs py-3 px-6">
                    <span>Explore Our Philosophy</span>
                    <ArrowRight className="w-4 h-4 text-emerald-300" />
                  </a>
                </div>
              </div>

              {/* Right 7 Cols: Medium-Sized Interactive 3D Globe with Location Pointers */}
              <div className="lg:col-span-7 h-[480px] sm:h-[560px] w-full relative flex items-center justify-center pointer-events-auto">
                
                {/* Floating Location Badges Overlay */}
                <div className="absolute top-2 left-2 z-20 space-y-1.5 pointer-events-none">
                  <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs flex items-center gap-2 text-[11px] font-bold text-[#1c1c1e]">
                    <span className="w-2 h-2 rounded-full bg-[#0b835c] animate-pulse" />
                    <span>Registered Office: Pune, MH</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs flex items-center gap-2 text-[11px] font-bold text-[#1c1c1e]">
                    <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
                    <span>Corporate Office: Hyderabad, TS</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs flex items-center gap-2 text-[11px] font-bold text-[#1c1c1e]">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    <span>International Office: Melbourne, Australia</span>
                  </div>
                </div>

                <Globe
                  speed={2}
                  scale={10.2}
                  dots={{ color: "#0b835c", size: 5.5, density: 8, allDots: false }}
                  outlineColor="#06b6d4"
                  fillColor="#0b835c"
                  graticuleColor="#38bdf8"
                  showGrid={true}
                  showOutline={true}
                  outlineWidth={1.2}
                  markerConfig={{
                    markers: [
                      { lat: 18.5204, lng: 73.8567 }, // Registered Office: Pune, MH
                      { lat: 17.3850, lng: 78.4867 }, // Corporate Office: Hyderabad, TS
                      { lat: -37.8136, lng: 144.9631 }, // International Office: Melbourne, Australia
                    ],
                    color: "#06b6d4",
                    size: 45,
                  }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: PHILOSOPHY SECTION ("The Brainchild Formed from Philosophy") */}
        <section id="philosophy" className="py-24 bg-white border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left 5 Cols: 3D Molecular / Biological Structure Canvas */}
              <div className="lg:col-span-5 h-[420px] rounded-[32px] bg-[#eff1f6] border border-slate-200/80 p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center gap-2">
                  <Atom className="w-5 h-5 text-[#0b835c] animate-spin" style={{ animationDuration: '10s' }} />
                  <span className="clinical-label text-[11px]">BIOLOGICAL FOUNDATION</span>
                </div>

                <div className="space-y-3 z-10">
                  <h3 className="font-editorial-serif text-3xl text-[#1c1c1e]">
                    Mechanism-First <span className="text-[#0b835c] italic">Formulation</span>
                  </h3>
                  <p className="text-xs text-[#676768] leading-relaxed">
                    We do not follow commercial health trends. Every product in our portfolio is designed around validated biological pathways and 100% assay-declared active extracts.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0b835c]">
                  <span>WHO-GMP Facility Partnered</span>
                  <CheckCircle2 className="w-4 h-4 text-[#0b835c]" />
                </div>
              </div>

              {/* Right 7 Cols: Detailed Philosophy Story */}
              <div className="lg:col-span-7 space-y-6">
                <span className="clinical-label text-[11px]">THE VARUTA BRAINCHILD</span>
                <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1c1c1e] font-normal leading-tight tracking-tight">
                  Formed from Four Decades of <span className="text-[#0b835c] italic font-normal">Clinical Research Excellence</span>
                </h2>

                <p className="text-sm sm:text-base text-[#303033] font-medium leading-relaxed">
                  <strong className="text-[#1c1c1e]">Varuta Pharma Pvt. Ltd.</strong> was established to eliminate the ambiguity in nutraceutical prescribing. Operating as an ethical marketing enterprise, we combine deep academic pharmacology with licensed WHO-GMP manufacturing infrastructure.
                </p>

                <p className="text-xs sm:text-sm text-[#676768] leading-relaxed">
                  Our formulations—such as <span className="font-semibold text-[#1c1c1e]">GUANOLACT</span> for iron absorption and <span className="font-semibold text-[#1c1c1e]">QUICKNAP</span> for circadian synchronization—are produced strictly in partner facilities (**Gencleus Pharma Pvt. Ltd.** & **Peptas Pharma Pvt. Ltd.**) equipped with state-of-the-art HPLC assay testing laboratories.
                </p>

                {/* Operating Office Badges */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/80">
                  <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80">
                    <span className="clinical-label text-[10px] block text-[#0b835c]">REGISTERED OFFICE</span>
                    <span className="text-xs font-bold text-[#1c1c1e] block mt-1">Pune, Maharashtra</span>
                    <span className="text-[11px] text-[#676768] block mt-0.5">Sebiyan Apartments, Pune 411046</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80">
                    <span className="clinical-label text-[10px] block text-[#0b835c]">CORPORATE OFFICE</span>
                    <span className="text-xs font-bold text-[#1c1c1e] block mt-1">Hyderabad, Telangana</span>
                    <span className="text-[11px] text-[#676768] block mt-0.5">Alwyn Colony, Sanath Nagar 500018</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: KEY METRIC COUNTERS ("Established", "Location", "Experience") */}
        <section className="py-14 bg-[#f8fafc] border-b border-[#eff1f6] text-center">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {metrics.map((m, idx) => (
                <div key={idx} className="p-6 rounded-[24px] bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <span className="clinical-label text-[10px] block text-[#0b835c]">{m.label}</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1e] block">{m.val}</span>
                  <span className="text-xs text-[#676768] font-medium block">{m.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: DIRECTORS & LEADERSHIP BOARD ("Our Directors") */}
        <section className="py-24 bg-white border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#0b835c]" />
                <span className="clinical-label text-[11px]">CORPORATE GOVERNANCE</span>
              </div>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1c1c1e] font-normal leading-tight tracking-tight">
                Our Executive <span className="text-[#0b835c] italic font-normal">Board & Directors</span>
              </h2>
            </div>

            {/* 3-Column Director Cards with Duotone Focus Reveal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {directors.map((d, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-[32px] bg-[#f8fafc] border border-slate-200/80 shadow-xs hover:bg-white hover:border-[#0b835c]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-4">
                    {/* Director Photo Frame */}
                    <div className="w-full aspect-square rounded-[24px] overflow-hidden bg-slate-200 relative shadow-sm border border-slate-200/80">
                      <img
                        src={d.image}
                        alt={d.name}
                        className="w-full h-full object-cover filter grayscale contrast-110 group-hover:filter-none transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#0b835c]">
                        {d.period}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#1c1c1e] group-hover:text-[#0b835c] transition-colors">
                        {d.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#0b835c] mt-0.5">
                        {d.role}
                      </p>
                    </div>

                    <p className="text-xs text-[#676768] leading-relaxed">
                      {d.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#1c1c1e]">
                    <span>Varuta Board</span>
                    <ShieldCheck className="w-4 h-4 text-[#0b835c]" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 5: THE VARUTA CORPORATE JOURNEY ("The Zenith Journey") */}
        <section className="py-24 bg-[#f8fafc] border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="clinical-label text-[11px]">CORPORATE MILESTONE STRAND</span>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1c1c1e] font-normal leading-tight tracking-tight">
                The Varuta <span className="text-[#0b835c] italic font-normal">Journey</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#676768]">
                Milestones threaded along our corporate timeline from research foundation to national doctor-channel presence.
              </p>
            </div>

            {/* Alternating Timeline Strand Layout */}
            <div className="relative max-w-4xl mx-auto">
              
              {/* Vertical Center Spine Line */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#0b835c] via-[#06b6d4] to-[#0b835c]" />

              <div className="space-y-12 relative z-10">
                {journeyTimeline.map((item, idx) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`flex items-center gap-8 ${
                      item.side === 'right' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Box (1/2 width) */}
                    <div className="w-1/2 text-right sm:text-left">
                      <div
                        className={`p-6 rounded-[24px] bg-white border border-slate-200/80 shadow-xs hover:border-[#0b835c]/50 transition-all ${
                          item.side === 'right' ? 'text-left' : 'text-right sm:text-left'
                        }`}
                      >
                        <span className="text-xs font-extrabold text-[#0b835c] bg-[#eff1f6] px-3 py-1 rounded-full uppercase inline-block mb-2">
                          YEAR {item.year}
                        </span>
                        <h3 className="text-base font-bold text-[#1c1c1e] mb-1">{item.title}</h3>
                        <p className="text-xs text-[#676768] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Center Circle Year Badge */}
                    <div className="w-12 h-12 rounded-full bg-[#0b835c] text-white font-extrabold text-xs flex items-center justify-center border-4 border-white shadow-md flex-shrink-0 z-20">
                      {item.year.slice(-2)}
                    </div>

                    {/* Empty Half Space for Alignment */}
                    <div className="w-1/2 hidden sm:block" />
                  </motion.div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 6: PRODUCT RANGE BANNER ("Discover Our Product Range") */}
        <section className="py-20 bg-gradient-to-br from-[#071311] via-[#0b835c] to-[#044e36] text-white text-left relative overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="tag-pill-green bg-white/10 text-emerald-200 border border-white/20">
                  QUALIFIED NUTRACEUTICAL PORTFOLIO
                </span>

                <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[48px] text-white font-normal leading-tight tracking-tight">
                  Discover Our 7 Standardized{' '}
                  <span className="text-emerald-300 italic font-normal">Therapeutic Sectors.</span>
                </h2>

                <p className="text-sm sm:text-base text-emerald-50/90 leading-relaxed max-w-xl">
                  Formulated from biological mechanism to clinical evidence to dose. Explore flagship SKUs including <strong className="text-white">GUANOLACT</strong>, <strong className="text-white">ESTROCLEN</strong>, and <strong className="text-white">QUICKNAP</strong>.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/products"
                    className="btn-dark-pill bg-white text-[#1c1c1e] hover:bg-emerald-100 flex items-center gap-2 text-xs py-3.5 px-7"
                  >
                    <span>View Product Catalog</span>
                    <ArrowRight className="w-4 h-4 text-[#0b835c]" />
                  </Link>
                </div>
              </div>

              {/* Product Range Visual Banner */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="p-8 rounded-[36px] bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-4 max-w-sm w-full">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#0b835c] flex items-center justify-center font-bold mx-auto shadow-md">
                    <Dna className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">7 Active SKUs</h3>
                  <p className="text-xs text-emerald-100">Manufactured in licensed WHO-GMP facilities under FSSAI Lic. 13624999000034</p>
                  <Link
                    to="/products"
                    className="btn-outline-pill border-white/30 text-white hover:bg-white hover:text-[#1c1c1e] text-xs py-2 px-5 inline-block"
                  >
                    Inspect All Formulations
                  </Link>
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
