import React, { useState, useRef } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import Globe from '../components/originkit/Globe';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  ShieldCheck,
  Dna,
  UserCheck,
  Sparkles,
  X,
  ExternalLink,
  ChevronRight,
  Building2,
  Award,
  FlaskConical,
  Stethoscope,
  Activity,
  CheckCircle2,
} from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

interface BoardMember {
  id: string;
  name: string;
  role: string;
  period: string;
  bio: string;
  image: string;
  achievements: string[];
  linkedinUrl: string;
  emailUrl: string;
}

export const AboutPage: React.FC = () => {
  const [selectedDirector, setSelectedDirector] = useState<BoardMember | null>(null);

  const journeySectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: journeySectionRef,
    offset: ['start 75%', 'end 25%'],
  });
  const pathScaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const metrics = [
    { label: 'ESTABLISHED', val: '2021', sub: 'Incorporated Entity' },
    { label: 'LOCATIONS', val: 'Pune & Hyd', sub: 'Dual Office Network' },
    { label: 'STANDARDS', val: 'WHO-GMP', sub: 'Partnered Facilities' },
  ];

  const currentBoardMembers: BoardMember[] = [
    {
      id: 'venkatesh-raichur',
      name: 'Mr. Venkatesh Raichur',
      role: 'CEO & Managing Director',
      period: 'Executive Leadership',
      bio: "With over three decades of distinguished leadership across India's premier pharmaceutical enterprises—including Elite Drug House, NATCO Pharma, Cadila Pharmaceuticals, and Abbott Healthcare—Mr. Venkatesh Raichur brings comprehensive commercial and strategic expertise to Varuta Pharma. Having served as Zonal Head of South India at NATCO Pharma, his experience spans the complete commercial value chain: driving sales & marketing excellence, business development, portfolio commercialization, enterprise transformation, and expansion into emerging international markets.",
      image: '/venkatesh-raichur.jpg',
      achievements: [
        'Served as Zonal Head of South India at NATCO Pharma, leading regional business transformation and commercial expansion.',
        'Held senior leadership roles across tier-1 pharmaceutical giants including Abbott Healthcare, Cadila Pharmaceuticals, NATCO Pharma, and Elite Drug House over a 30+ year career.',
        'Orchestrated end-to-end commercial value chain operations, doctor-channel prescribing networks, and international market entry.',
      ],
      linkedinUrl: 'https://www.linkedin.com/company/varuta-pharma-pvt-ltd',
      emailUrl: 'mailto:contact@varutapharmaceuticals.com',
    },
    {
      id: 'swapna-raichur',
      name: 'Ms. Swapna Raichur',
      role: 'Founder & Chairman',
      period: 'Executive Leadership',
      bio: 'Founder and Chairman of Varuta Pharma Pvt. Ltd. Driving strategic vision, corporate governance, and institutional growth across pharmaceutical and nutraceutical sectors.',
      image: '/swapna-raichur.jpg',
      achievements: [
        'Established Varuta Pharma Pvt. Ltd. with a mandate for evidence-based healthcare innovation.',
        'Steered corporate vision, regulatory compliance, and strategic brand governance.',
        'Built strategic alliances with licensed WHO-GMP manufacturing infrastructure.',
      ],
      linkedinUrl: 'https://www.linkedin.com/company/varuta-pharma-pvt-ltd',
      emailUrl: 'mailto:contact@varutapharmaceuticals.com',
    },
  ];

  const pastBoardMembers: BoardMember[] = [
    {
      id: 'ashutosh-sharma',
      name: 'Mr. Ashutosh Sharma',
      role: 'Former Executive Director',
      period: '4th July 2025 – 4th Dec 2025',
      bio: "Over the past three decades, Mr. Ashutosh Sharma has held senior leadership positions with some of India's most respected pharmaceutical companies—including Zenith Drugs, Morepen Laboratories, NATCO Pharma, Cadila Pharmaceuticals, Torrent Pharmaceuticals, Abbott Healthcare, and Alembic. His experience spans the complete commercial value chain: sales & marketing, business development, portfolio commercialization, enterprise P&L leadership, business transformation, and international expansion across APAC, Africa, MENA, CIS, LATAM, and other emerging markets.",
      image: '/ashutosh-sharma.jpg',
      achievements: [
        'Served as Executive Director at Varuta Pharma Pvt. Ltd., building the commercial foundation, operating framework, GTM strategy, and governance structure for domestic and international markets.',
        'Established a pilot pharmaceutical launch across four South Indian states while simultaneously building commercial, distribution & operating frameworks across West, Central, and East Africa.',
        'Secured strategic partnerships and distribution alliances in African and Asian unregulated pharmaceutical markets to create a scalable platform for multi-country expansion.',
      ],
      linkedinUrl: 'https://www.linkedin.com/in/ashutosh-sharma-a4442611b/',
      emailUrl: 'mailto:contact@varutapharmaceuticals.com',
    },
    {
      id: 'naval-kishore',
      name: 'Dr. Naval Kishore Sarda',
      role: 'Former Operations Head',
      period: 'Past Operations Leadership',
      bio: 'Former Operations Head at Varuta Pharma Pvt. Ltd. Brought extensive leadership in pharmaceutical manufacturing operations, WHO-GMP facility coordination, quality control, and supply chain logistics.',
      image: '/naval-kishore.jpg',
      achievements: [
        'Spearheaded pharmaceutical manufacturing operations and supply chain logistics across licensed WHO-GMP partner facilities.',
        'Coordinated strict quality control protocols, batch testing standards, and statutory regulatory compliance.',
        'Established operational workflows connecting precision formulation research with commercial distribution.',
      ],
      linkedinUrl: 'https://www.linkedin.com/company/varuta-pharma-pvt-ltd',
      emailUrl: 'mailto:contact@varutapharmaceuticals.com',
    },
  ];

  const journeyTimeline = [
    {
      year: '2021',
      title: 'Company Incorporation & Blueprint',
      badge: 'FOUNDATION',
      desc: 'Established Varuta Pharma Pvt. Ltd. with a core mandate to deliver evidence-graded preventive healthcare across India.',
      side: 'left',
      icon: Building2,
      stat: 'PRACTICE BLUEPRINT',
    },
    {
      year: '2022',
      title: 'FSSAI License & Statutory Compliance',
      badge: 'REGULATORY TRANSPARENCY',
      desc: 'Acquired FSSAI Marketer License No. 13624999000034, establishing full statutory transparency for batch distribution.',
      side: 'right',
      icon: ShieldCheck,
      stat: 'LIC. NO 13624999000034',
    },
    {
      year: '2023',
      title: 'WHO-GMP Partner Alliances',
      badge: 'MANUFACTURING QUALITY',
      desc: 'Formed exclusive manufacturing partnerships with Gencleus Pharma Pvt. Ltd. and Peptas Pharma Pvt. Ltd. for WHO-GMP production.',
      side: 'left',
      icon: Award,
      stat: '2 WHO-GMP FACILITIES',
    },
    {
      year: '2024',
      title: '7 Therapeutic Sectors Launch',
      badge: 'CLINICAL PORTFOLIO',
      desc: 'Rolled out flagship formulations GUANOLACT, ESTROCLEN, and QUICKNAP across 7 core deficiency domains.',
      side: 'right',
      icon: FlaskConical,
      stat: '7 CORE SECTORS',
    },
    {
      year: '2025-26',
      title: 'National Doctor-Channel Expansion',
      badge: 'PRESCRIBING EXPANSION',
      desc: 'Expanding physician prescribing availability across major hospital networks and specialized clinic channels.',
      side: 'left',
      icon: Stethoscope,
      stat: 'PAN-INDIA PRESCRIPTION NETWORK',
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
              
              {/* Left 5 Cols: About Us Title, Quote & Company Overview */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1e3a8a] tracking-tight leading-tight mb-2">
                    About Us
                  </h2>
                </div>

                <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#1c1c1e] leading-[1.12] tracking-tight">
                  Health Begins Where Life Is{' '}
                  <span className="text-[#0b835c] italic font-normal">Written.</span>
                </h1>

                <div className="space-y-4 pt-2 border-t border-slate-200/80">
                  <div className="space-y-1">
                    <span className="clinical-label text-[11px] font-bold text-[#0b835c] uppercase tracking-wider block">
                      OUR MISSION
                    </span>
                    <p className="text-xs sm:text-sm text-[#303033] leading-relaxed font-medium">
                      To become one of India's most trusted pharmaceutical and nutraceutical companies by delivering innovative, safe, and high-quality products in infertility care, women's healthcare, metabolic disorders, neurology, and related therapeutic areas, while creating lasting value for healthcare professionals and patients.
                    </p>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <span className="clinical-label text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                      OUR VISION
                    </span>
                    <p className="text-xs sm:text-sm text-[#303033] leading-relaxed font-medium">
                      To improve the quality of life by providing safe, effective, and high-quality healthcare solutions that meet global standards, making better health accessible to people across India and around the world.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right 7 Cols: Interactive 3D Globe with Location Pointers */}
              <div className="lg:col-span-7 h-[340px] sm:h-[560px] w-full relative flex items-center justify-center pointer-events-auto">
                
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

        {/* SECTION 2: SANSKRIT ETYMOLOGY & "V" LOGO SYMBOLISM SECTION */}
        <section id="etymology" className="py-20 sm:py-24 bg-white border-b border-[#eff1f6] text-left relative overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Outer Double-Bezel Hardware Card Architecture (White & Blue Theme) */}
            <div className="p-3 sm:p-4 rounded-[40px] bg-gradient-to-br from-blue-500/10 via-[#f8fafc] to-sky-400/10 border border-blue-200 shadow-xl relative overflow-hidden">
              
              {/* Background Blue Radial Aura */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-blue-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

              {/* Inner Core Container */}
              <div className="p-6 sm:p-12 rounded-[32px] glass-panel-light border border-white/90 shadow-xs relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column (5 Cols): Professional Clinical Research Trust Photo */}
                  <div className="lg:col-span-5">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="p-2.5 rounded-[32px] bg-white border border-slate-200/90 shadow-xl relative overflow-hidden group"
                    >
                      <div className="rounded-[24px] relative overflow-hidden h-[380px] sm:h-[420px] w-full">
                        {/* High-Resolution Professional Clinical Photo */}
                        <img
                          src="/clinical-trust-hero.jpg"
                          alt="Varuta Clinical Research & Quality"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                        />

                        {/* Soft Dark Gradient Overlay for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#061e18]/90 via-[#061e18]/30 to-transparent flex flex-col justify-between p-6 sm:p-8" />

                        {/* Top Trust Badge Overlay */}
                        <div className="relative z-10">
                          <span className="text-[10px] font-extrabold tracking-wider text-emerald-300 uppercase px-3 py-1 rounded-full bg-black/40 border border-emerald-400/40 backdrop-blur-md">
                            SANSKRIT: VARUTA (TO PROTECT)
                          </span>
                        </div>

                        {/* Bottom Overlay Info */}
                        <div className="relative z-10 space-y-1 text-left">
                          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Clinical Research Excellence</span>
                          </div>
                          <h4 className="text-xl font-bold text-white tracking-tight">Protecting Human Health</h4>
                          <p className="text-xs text-slate-200 font-medium leading-relaxed max-w-xs">
                            Dedicated to evidence-graded formulations and healthier future generations.
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column (7 Cols): Scroll Text-Reveal Story */}
                  <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
                    
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="tag-pill-green glass-panel-light border-blue-500/40 text-blue-700 bg-blue-50/60 shadow-xs">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        SANSKRIT ETYMOLOGY & EMBLEM SYMBOLISM
                      </span>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="font-editorial-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1c1c1e] font-normal leading-tight tracking-tight"
                    >
                      The Meaning Behind <span className="text-blue-600 italic font-normal">"Varuta"</span> & Our <span className="text-[#0b835c] italic font-normal">"V" Emblem</span>
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="space-y-4 text-slate-800"
                    >
                      <p className="text-sm sm:text-base font-medium leading-relaxed">
                        The name <strong className="text-blue-700">"Varuta"</strong> is derived from ancient Sanskrit and means <strong className="text-[#0b835c] underline decoration-blue-500/50 underline-offset-4">"to protect."</strong> This core philosophy of protection guides every formulation we research, develop, and deliver.
                      </p>

                      <p className="text-xs sm:text-sm text-[#676768] leading-relaxed">
                        Our signature <strong className="text-[#1c1c1e]">"V" logo</strong> symbolizes our unwavering commitment to protecting people's health and contributing to healthier generations through innovative, high-quality healthcare solutions.
                      </p>
                    </motion.div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: INNOVATION & SCIENTIFIC INTEGRITY COMPANY PROFILE SECTION (Clean Editorial) */}
        <section id="philosophy" className="py-20 sm:py-28 bg-white border-b border-[#eff1f6] text-left relative overflow-hidden">
          <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <span className="tag-pill-green bg-white shadow-xs">
                <Dna className="w-3.5 h-3.5 text-[#0b835c]" />
                ABOUT VARUTA PHARMA PVT. LTD.
              </span>

              <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[46px] text-[#1c1c1e] font-normal leading-tight tracking-tight">
                Innovation-Driven <span className="text-[#0b835c] italic font-normal">Healthcare Solutions</span>
              </h2>
            </motion.div>

            {/* User's Exact 3 Brand Narrative Paragraphs in Spacious Editorial Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-[#303033]"
            >
              {/* Paragraph 1 */}
              <p className="text-base sm:text-lg text-[#1c1c1e] font-medium leading-relaxed">
                <strong>Varuta Pharma Pvt. Ltd.</strong> is an innovation-driven pharmaceutical and nutraceutical company dedicated to improving human health through scientifically developed, evidence-based healthcare solutions. We combine the wisdom of nature with modern biotechnology, AI-assisted research, precision formulation, and advanced manufacturing technologies to develop products that address unmet clinical needs in fertility, women's health, men's wellness, metabolic disorders, healthy ageing, sleep health, and preventive healthcare.
              </p>

              {/* Paragraph 2 */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                Our commitment extends beyond manufacturing quality products—we strive to create innovative therapies that empower healthcare professionals and improve patients' quality of life. Guided by scientific integrity, quality excellence, and continuous innovation, we collaborate with leading researchers, clinicians, and healthcare partners to deliver reliable and effective healthcare solutions.
              </p>

              {/* Paragraph 3 */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                With a growing network of healthcare professionals, distributors, and strategic partners, <strong>Varuta Pharma Pvt. Ltd.</strong> is expanding its presence across India while building a strong foundation for global markets.
              </p>
            </motion.div>

            {/* Clean Operating Office Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200/80"
            >
              <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80">
                <span className="clinical-label text-[10px] block text-[#0b835c]">REGISTERED OFFICE</span>
                <span className="text-sm font-bold text-[#1c1c1e] block mt-1">Pune, Maharashtra</span>
                <span className="text-xs text-[#676768] block mt-0.5">Sebiyan Apartments, Street No. 2/1/1, Pune 411046</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80">
                <span className="clinical-label text-[10px] block text-[#0b835c]">CORPORATE OFFICE</span>
                <span className="text-sm font-bold text-[#1c1c1e] block mt-1">Hyderabad, Telangana</span>
                <span className="text-xs text-[#676768] block mt-0.5">H No, Srt 283, Alwyn Colony, Sanath Nagar 500018</span>
              </div>
            </motion.div>

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

        {/* SECTION 4: DIRECTORS & LEADERSHIP BOARD ("Corporate Governance") */}
        <section className="py-20 sm:py-24 bg-white border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#0b835c]" />
                <span className="clinical-label text-[11px]">CORPORATE GOVERNANCE & LEADERSHIP</span>
              </div>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1c1c1e] font-normal leading-tight tracking-tight">
                Board of <span className="text-[#0b835c] italic font-normal">Directors & Governance</span>
              </h2>
            </div>

            {/* ROW 1: CURRENT BOARD OF DIRECTORS */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0b835c] animate-pulse" />
                  <h3 className="text-xl font-bold text-[#1c1c1e]">Current Board of Directors</h3>
                </div>
                <span className="text-xs font-semibold text-[#0b835c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Active Governance
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {currentBoardMembers.map((d) => (
                  <div
                    key={d.id}
                    onClick={() => setSelectedDirector(d)}
                    className="p-7 rounded-[32px] bg-[#f8fafc] border border-slate-200/80 shadow-xs hover:bg-white hover:border-[#0b835c]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-6 cursor-pointer"
                  >
                    <div className="space-y-4">
                      {/* Director Photo Frame */}
                      <div className="w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-slate-200 relative shadow-sm border border-slate-200/80">
                        <img
                          src={d.image}
                          alt={d.name}
                          className="w-full h-full object-cover object-top sm:filter sm:grayscale sm:contrast-110 sm:group-hover:filter-none transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#0b835c]">
                          {d.period}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#1c1c1e] group-hover:text-[#0b835c] transition-colors flex items-center justify-between">
                          <span>{d.name}</span>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0b835c] transition-colors" />
                        </h3>
                        <p className="text-xs font-semibold text-[#0b835c] mt-0.5">
                          {d.role}
                        </p>
                      </div>

                      <p className="text-xs text-[#676768] leading-relaxed line-clamp-3">
                        {d.bio}
                      </p>
                    </div>

                    {/* Card Footer with Enlarged LinkedIn Account Icon on Right Side Bottom */}
                    <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0b835c]">
                      <span className="flex items-center gap-1 group-hover:underline">
                        <span>View Profile & Experience</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>

                      {/* Enlarged Right Side Bottom LinkedIn Icon */}
                      <a
                        href={d.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a66c2] text-white flex items-center justify-center hover:bg-[#084e96] hover:scale-110 active:scale-95 transition-all shadow-md shrink-0"
                        title={`Open ${d.name}'s LinkedIn Profile`}
                        aria-label={`${d.name} LinkedIn Profile`}
                      >
                        <LinkedInIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 2: FORMER DIRECTORS & LEGACY LEADERSHIP */}
            <div className="space-y-6 pt-6">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <h3 className="text-xl font-bold text-[#1c1c1e]">Former Directors & Advisory Members</h3>
                </div>
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Past Tenure & Advisory
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {pastBoardMembers.map((d) => (
                  <div
                    key={d.id}
                    onClick={() => setSelectedDirector(d)}
                    className="p-7 rounded-[32px] bg-[#f8fafc] border border-slate-200/80 shadow-xs hover:bg-white hover:border-slate-400/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-6 opacity-90 hover:opacity-100 cursor-pointer"
                  >
                    <div className="space-y-4">
                      {/* Director Photo Frame */}
                      <div className="w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-slate-200 relative shadow-sm border border-slate-200/80">
                        <img
                          src={d.image}
                          alt={d.name}
                          className="w-full h-full object-cover object-top sm:filter sm:grayscale sm:contrast-110 sm:group-hover:filter-none transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-slate-600">
                          {d.period}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#1c1c1e] group-hover:text-[#0b835c] transition-colors flex items-center justify-between">
                          <span>{d.name}</span>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0b835c] transition-colors" />
                        </h3>
                        <p className="text-xs font-semibold text-slate-600 mt-0.5">
                          {d.role}
                        </p>
                      </div>

                      <p className="text-xs text-[#676768] leading-relaxed line-clamp-3">
                        {d.bio}
                      </p>
                    </div>

                    {/* Card Footer with Enlarged LinkedIn Account Icon on Right Side Bottom */}
                    <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-700">
                      <span className="flex items-center gap-1 group-hover:underline">
                        <span>View Profile & Experience</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>

                      {/* Enlarged Right Side Bottom LinkedIn Icon */}
                      <a
                        href={d.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a66c2] text-white flex items-center justify-center hover:bg-[#084e96] hover:scale-110 active:scale-95 transition-all shadow-md shrink-0"
                        title={`Open ${d.name}'s LinkedIn Profile`}
                        aria-label={`${d.name} LinkedIn Profile`}
                      >
                        <LinkedInIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5: THE VARUTA CORPORATE JOURNEY ("The Zenith Journey") */}
        <section ref={journeySectionRef} className="py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f4f7f5] border-b border-[#eff1f6] text-left relative overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-[#0b835c]/30 text-[#0b835c] text-xs font-bold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5 text-[#0b835c] animate-pulse" />
                CORPORATE MILESTONE STRAND
              </div>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1c1c1e] font-normal leading-tight tracking-tight">
                The Varuta <span className="text-[#0b835c] italic font-normal">Journey</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#676768]">
                Milestones threaded along our corporate timeline from research foundation to national doctor-channel presence.
              </p>
            </div>

            {/* Responsive Timeline Strand Layout with Dynamic Scroll-Driven Spine */}
            <div className="relative max-w-4xl mx-auto py-4">
              
              {/* Background Spine Track (Base line) */}
              <div className="absolute top-0 bottom-0 left-5 sm:left-1/2 -translate-x-1/2 w-1 bg-slate-200/80 rounded-full" />

              {/* Scroll-Animated Active Spine Line (Grows green as user scrolls) */}
              <div className="absolute top-0 bottom-0 left-5 sm:left-1/2 -translate-x-1/2 w-1 overflow-hidden">
                <motion.div
                  style={{ scaleY: pathScaleY }}
                  className="w-full h-full origin-top bg-gradient-to-b from-[#0b835c] via-[#10b981] to-[#044e36] rounded-full shadow-[0_0_12px_rgba(11,131,92,0.8)]"
                />
              </div>

              {/* Continuous Glowing Energy Pulse Moving Down the Line */}
              <div className="absolute top-0 bottom-0 left-5 sm:left-1/2 -translate-x-1/2 w-1 pointer-events-none overflow-hidden">
                <motion.div
                  animate={{ y: ['0%', '1000%'] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                  className="w-3 h-12 -left-1 rounded-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10b981] z-20"
                />
              </div>

              <div className="space-y-12 sm:space-y-16 relative z-10">
                {journeyTimeline.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 35, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
                      className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pl-14 sm:pl-0 ${
                        item.side === 'right' ? 'sm:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Node Circle Badge (Center Spine Node) */}
                      <div className="absolute left-0 sm:static sm:translate-x-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0b835c] text-white font-extrabold text-xs sm:text-sm flex flex-col items-center justify-center border-4 border-white shadow-xl flex-shrink-0 z-30 group cursor-pointer relative">
                        
                        {/* Outer Pulsing Aura Ring */}
                        <div className="absolute -inset-1.5 rounded-full bg-[#0b835c]/30 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
                        
                        <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-200 mb-0.5" />
                        <span className="text-[10px] font-extrabold tracking-tight">{item.year.slice(-2)}</span>
                      </div>

                      {/* Milestone Card Container */}
                      <div className="w-full sm:w-1/2 text-left group">
                        <div className="p-6 sm:p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0b835c]/60 hover:-translate-y-1 transition-all duration-300 text-left space-y-3 relative overflow-hidden">
                          
                          {/* Top Tag & Year Header */}
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-[#0b835c] bg-emerald-50 px-3 py-1 rounded-full uppercase border border-emerald-200/70">
                              {item.badge}
                            </span>
                            <span className="text-xs font-bold text-slate-400 font-mono">
                              YEAR {item.year}
                            </span>
                          </div>

                          {/* Title & Desc */}
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-[#1c1c1e] group-hover:text-[#0b835c] transition-colors flex items-center justify-between">
                              <span>{item.title}</span>
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-xs sm:text-sm text-[#676768] leading-relaxed mt-1 font-medium">
                              {item.desc}
                            </p>
                          </div>

                          {/* Bottom Stat Footer Pill */}
                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                            <span className="text-[#0b835c]">{item.stat}</span>
                            <span className="flex items-center gap-1 text-slate-400 group-hover:text-[#0b835c] transition-colors">
                              Milestone Verified ✓
                            </span>
                          </div>

                        </div>
                      </div>

                      {/* Empty Half Space for Desktop Alignment Balance */}
                      <div className="w-1/2 hidden sm:block" />
                    </motion.div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>



      </main>

      {/* RESPONSIVE & ELEGANT LEADERSHIP PROFILE MODAL */}
      <AnimatePresence>
        {selectedDirector && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Soft Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDirector(null)}
              className="fixed inset-0 bg-black/65 backdrop-blur-sm"
            />

            {/* Clean Modal Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-xl max-h-[85vh] sm:max-h-[90vh] flex flex-col rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/90 shadow-2xl z-10 text-left overflow-hidden my-auto"
            >
              {/* Sticky Top Header: Photo, Name, Role & Close Button */}
              <div className="relative p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between gap-3 shrink-0 bg-white">
                <div className="flex items-center gap-3.5 pr-8">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                    <img
                      src={selectedDirector.image}
                      alt={selectedDirector.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-[#1c1c1e] leading-snug">{selectedDirector.name}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#0b835c] mt-0.5">{selectedDirector.role}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-block text-[10px] sm:text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {selectedDirector.period}
                      </span>
                      <a
                        href={selectedDirector.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-[#0a66c2] hover:bg-[#084e96] px-3 py-1 rounded-full transition-colors shadow-xs"
                      >
                        <LinkedInIcon className="w-3.5 h-3.5" />
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Close Button Top Right */}
                <button
                  onClick={() => setSelectedDirector(null)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Modal Content Body */}
              <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1 text-left">
                {/* Profile Experience */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-[#1c1c1e] uppercase tracking-wider">
                    Profile & Experience
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {selectedDirector.bio}
                  </p>
                </div>

                {/* Key Achievements */}
                <div className="space-y-2.5 pt-3 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-[#1c1c1e] uppercase tracking-wider">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedDirector.achievements.map((ach, i) => (
                      <li key={i} className="text-xs sm:text-sm text-[#475569] flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0b835c] mt-1.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sticky Bottom Close Action */}
              <div className="p-4 sm:p-5 border-t border-slate-100 flex justify-end shrink-0 bg-slate-50/60">
                <button
                  onClick={() => setSelectedDirector(null)}
                  className="px-6 py-2 rounded-full bg-[#1c1c1e] hover:bg-[#0b835c] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};
