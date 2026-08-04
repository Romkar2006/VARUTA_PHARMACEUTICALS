import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  Globe,
  AlertCircle,
  MapPin,
  ArrowUpRight,
  ChevronUp,
  Copy,
  ExternalLink,
  ShieldCheck,
  Award,
  Sparkles,
  Building2,
  Check
} from 'lucide-react';

interface LocationInfo {
  id: string;
  name: string;
  type: string;
  city: string;
  address: string;
  mapQuery: string;
  tz: string;
}

const LOCATIONS: LocationInfo[] = [
  {
    id: 'hyderabad',
    name: 'Corporate Office',
    type: 'HQ & Operations',
    city: 'Hyderabad',
    address: 'Varuta Pharma Pvt. Ltd., H No, Srt 283, Alwyn Housing Colony, Sanath Nagar, Hyderabad, Telangana 500018',
    mapQuery: 'https://maps.google.com/?q=Varuta+Pharma+Sanath+Nagar+Hyderabad',
    tz: 'IST (UTC+5:30)',
  },
  {
    id: 'pune',
    name: 'Registered Office',
    type: 'Legal & Administrative',
    city: 'Pune',
    address: 'Flat No. B-120, Sebiyan Apartments, Street No. 2/1/1, Near Indu Lawns, Pune, Maharashtra 411046',
    mapQuery: 'https://maps.google.com/?q=Sebiyan+Apartments+Pune',
    tz: 'IST (UTC+5:30)',
  },
  {
    id: 'melbourne',
    name: 'International Office',
    type: 'Global Partnerships',
    city: 'Melbourne',
    address: 'Varuta Pharma Pvt. Ltd., Suite 7.12, Level 7, 365 Little Collins St., Melbourne, VIC 3000, Australia',
    mapQuery: 'https://maps.google.com/?q=365+Little+Collins+St+Melbourne+VIC+3000',
    tz: 'AEST (UTC+10)',
  },
];

export const Footer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('hyderabad');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const selectedLocation = LOCATIONS.find((loc) => loc.id === activeTab) || LOCATIONS[0];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#061814] text-slate-300 pt-20 pb-24 md:pb-12 border-t border-[#0b835c]/30 overflow-hidden font-sans select-none">
      
      {/* Ambient Radial Mesh Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0b835c]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ==========================================
            2. MAIN 5-COLUMN BENTO GRID
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Corporate Summary (Col-span 4) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-900/40 border border-emerald-500/30 p-2 flex items-center justify-center shadow-lg shadow-emerald-950/40">
                <img src="/logo-emblem.png" alt="Varuta Pharma Logo" className="h-full w-full object-contain brightness-110" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white tracking-tight block leading-tight">
                  Varuta <span className="text-emerald-400">Pharma</span>
                </span>
                <span className="font-editorial-serif italic text-xs text-emerald-300">
                  "Born for Generations..."
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Targeting human biological deficiencies through precision formulations inspired by modern clinical science and ancient botanical principles.
            </p>

            {/* 4 Official Channels Icons: LinkedIn, Instagram, YouTube, Mail */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                OFFICIAL CHANNELS
              </span>
              
              <div className="flex items-center gap-3">
                {/* 1. LinkedIn */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-2xl bg-[#0a1f18] hover:bg-[#0a66c2]/20 border border-slate-800 hover:border-[#0a66c2] flex items-center justify-center text-slate-300 hover:text-[#0a66c2] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#0a66c2]/20 hover:-translate-y-1 cursor-pointer"
                  title="Official LinkedIn"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>

                {/* 2. Instagram */}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-2xl bg-[#0a1f18] hover:bg-[#e4405f]/20 border border-slate-800 hover:border-[#e4405f] flex items-center justify-center text-slate-300 hover:text-[#e4405f] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#e4405f]/20 hover:-translate-y-1 cursor-pointer"
                  title="Official Instagram"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* 3. YouTube */}
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-2xl bg-[#0a1f18] hover:bg-[#ff0000]/20 border border-slate-800 hover:border-[#ff0000] flex items-center justify-center text-slate-300 hover:text-[#ff0000] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#ff0000]/20 hover:-translate-y-1 cursor-pointer"
                  title="Official YouTube Channel"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* 4. Mail */}
                <a
                  href="mailto:manager@varutapharmaceuticals.com"
                  className="group relative w-11 h-11 rounded-2xl bg-[#0a1f18] hover:bg-[#0b835c]/25 border border-slate-800 hover:border-emerald-400 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 cursor-pointer"
                  title="Medical Board Email (manager@varutapharmaceuticals.com)"
                  aria-label="Mail"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

          </div>

          {/* Quick Navigation (Col-span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block border-b border-emerald-500/20 pb-2">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Home Page', path: '/' },
                { label: 'About Company', path: '/about-us' },
                { label: 'Products Portfolio', path: '/products' },
                { label: 'Future Scopes & Pipeline', path: '/future-scopes' },
                { label: 'R&D & Quality Standards', path: '/research-and-quality' },
                { label: 'Clinical & Evidence Blogs', path: '/blogs' },
                { label: 'Contact & Enquiries', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 group-hover:w-2 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lead Formulations (Col-span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block border-b border-emerald-500/20 pb-2">
              LEAD FORMULATIONS
            </span>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'GUANOLACT', desc: 'Lead SKU', path: '/products/iron-immunity/guanolact' },
                { label: 'ESTROCLEN', desc: 'Oestrogen Balance', path: '/products/womens-health/estroclen' },
                { label: 'QUICKNAP', desc: 'Sleep Film', path: '/products/sleep-recovery/quicknap' },
                { label: 'CYSTORIN', desc: 'PCOS Support', path: '/products/womens-health/cystorin' },
                { label: 'FATEASE-5', desc: 'Weight Mgmt', path: '/products/weight-management/fatease-5' },
                { label: 'TELAGE', desc: 'Cellular Support', path: '/products/cellular-longevity/telage' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="group flex flex-col text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <div className="inline-flex items-center gap-1.5">
                      <span className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                        {item.label}
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <span className="text-[10px] text-slate-400 group-hover:text-emerald-300/80">
                      {item.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Network & Location Switcher (Col-span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block border-b border-emerald-500/20 pb-2">
              GLOBAL OFFICE NETWORK
            </span>

            {/* Location Tabs */}
            <div className="flex rounded-xl bg-black/40 border border-emerald-500/20 p-1 gap-1">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveTab(loc.id)}
                  className={`flex-1 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${
                    activeTab === loc.id
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-emerald-950/40'
                  }`}
                >
                  {loc.city}
                </button>
              ))}
            </div>

            {/* Active Location Display Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLocation.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-[#09221b]/80 border border-emerald-500/25 rounded-2xl p-4 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-emerald-500/15 pb-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white">{selectedLocation.name}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {selectedLocation.tz}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{selectedLocation.address}</span>
                </p>

                <div className="flex items-center justify-between pt-1 gap-2">
                  <button
                    onClick={() => handleCopy(selectedLocation.address, selectedLocation.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-slate-700/60 text-[11px] text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-all active:scale-95"
                  >
                    {copiedText === selectedLocation.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied Address</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={selectedLocation.mapQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-[11px] text-emerald-300 hover:text-white hover:bg-emerald-600 transition-all"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Direct Contact Actions */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-black/40 border border-emerald-500/15">
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>contact@varutapharmaceuticals.com</span>
                </div>
                <button
                  onClick={() => handleCopy('contact@varutapharmaceuticals.com', 'email')}
                  className="text-slate-400 hover:text-emerald-300 p-1"
                  title="Copy Email"
                >
                  {copiedText === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-black/40 border border-emerald-500/15">
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+91 9985553875</span>
                </div>
                <a
                  href="tel:+919985553875"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20"
                >
                  Call
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* ==========================================
            3. MANDATORY STATUTORY REGULATORY NOTICE
           ========================================== */}
        <div className="mb-12">
          <div className="relative rounded-2xl bg-[#08201a]/95 border border-emerald-500/35 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400 mt-0.5">
                <AlertCircle className="w-5 h-5 animate-pulse" />
              </div>
              <div className="space-y-2 text-xs text-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-500/20 pb-2">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    MANDATORY STATUTORY REGULATORY NOTICE (FSSAI LIC. NO. 13624999000034)
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-mono">
                    GOVT REGULATED
                  </span>
                </div>
                <p className="leading-relaxed">
                  Nutraceutical Supplements should not be used as a substitute for a varied diet. This product is not intended to diagnose, treat, cure, or prevent any disease. <strong className="text-white font-bold underline decoration-emerald-500 underline-offset-2">NOT FOR MEDICAL USE.</strong>
                </p>
                <p className="text-slate-400 italic text-[11px] leading-relaxed pt-1">
                  Caution: For Adult use only. Consult your physician before using if you are pregnant, lactating, trying to conceive, taking medication or have a medical condition. Not to exceed recommended daily usage. Manufactured for Varuta Pharma Pvt. Ltd. by licensed WHO-GMP & ISO certified partners (Gencleus Pharma Pvt. Ltd. & Peptas Pharma Pvt. Ltd.).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            4. CERTIFICATIONS & ACCREDITATION BADGES
           ========================================== */}
        <div className="mb-12 pb-8 border-b border-slate-800/80 flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>WHO-GMP Certified Manufacturing</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ISO 9001:2015 Quality Standards</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>FSSAI License Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>Gencleus & Peptas Partner Network</span>
          </div>
        </div>

        {/* ==========================================
            5. BOTTOM LEGAL BAR & WATERMARK
           ========================================== */}
        <div className="relative pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Varuta Pharma Pvt. Ltd. All rights reserved. CIN: Pending Registration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy (DPDP Act 2023)
            </Link>
            <Link to="/terms" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="hover:text-emerald-400 transition-colors">
              Medical Disclaimer
            </Link>
          </div>

          {/* Magnetic Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-400 transition-all duration-300 shadow-xl group active:scale-90"
            title="Back to top"
          >
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>

      {/* Atmospheric Background Typography Watermark */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[13vw] font-black text-emerald-500/[0.02] tracking-tighter pointer-events-none select-none whitespace-nowrap uppercase">
        VARUTA PHARMA
      </div>

    </footer>
  );
};

export default Footer;
