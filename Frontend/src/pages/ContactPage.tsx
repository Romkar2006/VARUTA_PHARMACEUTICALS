import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  CheckCircle2,
  Send,
  Globe,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  Clock,
  Compass,
  MessageSquare,
  ArrowRight,
  Headphones,
  X
} from 'lucide-react';

interface OfficeLocation {
  id: string;
  type: string;
  title: string;
  tag: string;
  address: string;
  city: string;
  stateCountry: string;
  pincode: string;
  phone?: string;
  email?: string;
  mapQuery: string;
  embedUrl: string;
  isPrimary?: boolean;
}

const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'hyderabad',
    type: 'CORPORATE HQ',
    title: 'Hyderabad Corporate Office',
    tag: 'Primary Operational Center',
    address: 'H No, Srt 283, Alwyn Housing Colony, Sanath Nagar',
    city: 'Hyderabad',
    stateCountry: 'Telangana, India',
    pincode: '500018',
    phone: '+91 9985553875',
    email: 'manager@varutapharmaceuticals.com',
    mapQuery: 'Varuta+Pharma+Sanath+Nagar+Hyderabad+Telangana+500018',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.071295914611!2d78.4415!3d17.4560!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c1f5555555%3A0x123456789abcdef!2sSanath%20Nagar%2C%20Hyderabad%2C%20Telangana%20500018!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    isPrimary: true,
  },
  {
    id: 'pune',
    type: 'REGISTERED HQ',
    title: 'Pune Registered Office',
    tag: 'Statutory Registered Office',
    address: 'Flat No. B-120, Sebiyan Apartments, Street No. 2/1/1, Near Indu Lawns',
    city: 'Pune',
    stateCountry: 'Maharashtra, India',
    pincode: '411046',
    phone: '+91 9985553875',
    email: 'manager@varutapharmaceuticals.com',
    mapQuery: 'Sebiyan+Apartments+Pune+Maharashtra+411046',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.500000000000!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06500000000%3A0x123456789abcdef!2sPune%2C%20Maharashtra%20411046!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },
  {
    id: 'melbourne',
    type: 'GLOBAL APAC HUB',
    title: 'Australia APAC Representative Office',
    tag: 'International Trade & Liaison',
    address: 'Suite 7.12, Level 7, 365 Little Collins St.',
    city: 'Melbourne',
    stateCountry: 'VIC, Australia',
    pincode: '3000',
    email: 'manager@varutapharmaceuticals.com',
    mapQuery: '365+Little+Collins+St+Melbourne+VIC+3000+Australia',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9614!3d-37.8163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758ec5b5%3A0x5045675218ce840!2s365%20Little%20Collins%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },
];

export const ContactPage: React.FC = () => {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>('hyderabad');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    designation: 'Physician / HCP',
    email: '',
    phone: '',
    sector: 'Iron Deficiency & Immunity',
    message: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [referenceNo, setReferenceNo] = useState('');
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const activeOffice = OFFICE_LOCATIONS.find((o) => o.id === selectedOfficeId) || OFFICE_LOCATIONS[0];

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'VAR-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceNo(randomRef);
    setSubmittedData({ ...formData });

    // Target Redirect Email: manager@varutapharmaceuticals.com
    const recipient = 'manager@varutapharmaceuticals.com';
    const subject = encodeURIComponent(`[Inquiry Ref #${randomRef}] ${formData.sector} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `INQUIRY REFERENCE: ${randomRef}\n` +
      `FULL NAME: ${formData.fullName}\n` +
      `DESIGNATION: ${formData.designation}\n` +
      `SENDER EMAIL: ${formData.email}\n` +
      `PHONE NUMBER: ${formData.phone}\n` +
      `THERAPEUTIC SECTOR: ${formData.sector}\n\n` +
      `MESSAGE / REQUEST DETAILS:\n${formData.message}\n\n` +
      `----------------------------------------\n` +
      `Transmitted via Varuta Pharma Corporate Inquiry Portal`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Open mail client with pre-filled payload
    window.location.href = mailtoUrl;

    // Trigger Success Pop-Up Modal & Reset Form
    setShowSuccessModal(true);
    setFormData({
      fullName: '',
      designation: 'Physician / HCP',
      email: '',
      phone: '',
      sector: 'Iron Deficiency & Immunity',
      message: '',
    });
  };

  const openGoogleMapsRedirect = (mapQuery: string) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fbfdfc] via-white to-[#f4f7f5] text-[#1c1c1e] selection:bg-[#0b835c] selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-20">
        
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative py-14 sm:py-24 overflow-hidden border-b border-[#eef2ef]">
          {/* Animated Ambient Glow Orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute -top-24 -left-20 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1.1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
            className="absolute top-1/2 -right-20 w-80 h-80 bg-teal-200/40 rounded-full blur-3xl pointer-events-none"
          />

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 max-w-4xl"
            >


              <h1 className="font-editorial-serif text-4xl sm:text-6xl lg:text-[64px] font-normal text-[#1c1c1e] leading-[1.1] tracking-tight">
                Connect with Our <br className="hidden sm:inline" />
                <span className="text-[#0b835c] italic font-normal underline decoration-emerald-200 decoration-wavy underline-offset-8">
                  Corporate & Medical
                </span>{' '}
                Headquarters
              </h1>

              <p className="text-base sm:text-xl text-[#4a4a4d] font-normal leading-relaxed max-w-3xl pt-2">
                We are structured to serve clinical inquiries, healthcare provider requests, institutional distribution partnerships, and statutory FSSAI compliance verification with maximum agility.
              </p>

              {/* Quick Action Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => openGoogleMapsRedirect('Varuta+Pharma+Sanath+Nagar+Hyderabad+Telangana+500018')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b835c] text-white text-xs font-semibold hover:bg-[#086849] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-emerald-200 animate-bounce" />
                  <span>Navigate to Hyderabad HQ</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </button>

                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-[#1c1c1e] text-xs font-semibold hover:border-[#0b835c] hover:text-[#0b835c] transition-all shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 text-[#0b835c]" />
                  <span>Submit Inquiry Form</span>
                </a>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50/70 border border-emerald-200/60 text-xs font-medium text-[#0b835c]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Response Time: &lt; 24 Hours</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* GOOGLE MAPS & HYDERABAD HQ FEATURED SECTION */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-20 border-b border-[#eef2ef] bg-white text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
              <div>
                <span className="clinical-label text-[11px]">GEOGRAPHIC FOOTPRINT & MAPS</span>
                <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#1c1c1e] font-normal tracking-tight mt-1">
                  Interactive <span className="text-[#0b835c] italic font-normal">Location Navigator</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#676768] mt-1 max-w-xl">
                  Select an office location below to update the interactive map or click to immediately navigate to our Hyderabad Corporate HQ.
                </p>
              </div>

              {/* Office Selector Tabs */}
              <div className="flex flex-wrap items-center gap-2 bg-[#f4f7f5] p-1.5 rounded-2xl border border-slate-200/70">
                {OFFICE_LOCATIONS.map((loc) => {
                  const isActive = selectedOfficeId === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedOfficeId(loc.id)}
                      className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#1c1c1e] text-white shadow-sm'
                          : 'text-[#505053] hover:text-[#1c1c1e] hover:bg-white/60'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabBadge"
                          className="absolute inset-0 bg-[#1c1c1e] rounded-xl -z-10"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="flex items-center gap-1.5">
                        {loc.isPrimary && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                        {loc.city} {loc.isPrimary ? '(HQ)' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Interactive Map & Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column (5 cols): Active Office Details Card */}
              <motion.div
                key={activeOffice.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#f8fafc] via-white to-[#f4f7f5] border border-slate-200/90 shadow-md relative overflow-hidden text-left"
              >
                {/* Visual Glow Accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-100/50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />

                <div className="space-y-6 relative z-10">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-100/80 text-[#0b835c] text-[11px] font-bold tracking-wider uppercase">
                      {activeOffice.type}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-[#0b835c]" />
                      {activeOffice.tag}
                    </span>
                  </div>

                  {/* Location Title & Address */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#1c1c1e] flex items-center gap-2">
                      {activeOffice.title}
                    </h3>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#0b835c] flex-shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-[#1c1c1e] leading-snug">
                            {activeOffice.address}
                          </p>
                          <p className="text-xs text-slate-500 font-medium">
                            {activeOffice.city}, {activeOffice.stateCountry} - {activeOffice.pincode}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Info */}
                  <div className="space-y-3 pt-2">
                    {activeOffice.phone && (
                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/70">
                        <div className="flex items-center gap-2.5 text-xs text-[#1c1c1e] font-semibold">
                          <Phone className="w-4 h-4 text-[#0b835c]" />
                          <span>{activeOffice.phone}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(activeOffice.phone!, `phone-${activeOffice.id}`)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-[#0b835c] hover:bg-emerald-50 transition-all text-xs flex items-center gap-1 font-medium cursor-pointer"
                        >
                          {copiedField === `phone-${activeOffice.id}` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                          <span>{copiedField === `phone-${activeOffice.id}` ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    )}

                    {activeOffice.email && (
                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/70">
                        <div className="flex items-center gap-2.5 text-xs text-[#1c1c1e] font-semibold truncate max-w-[210px] sm:max-w-none">
                          <Mail className="w-4 h-4 text-[#0b835c] flex-shrink-0" />
                          <span className="truncate">{activeOffice.email}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(activeOffice.email!, `email-${activeOffice.id}`)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-[#0b835c] hover:bg-emerald-50 transition-all text-xs flex items-center gap-1 font-medium flex-shrink-0 cursor-pointer"
                        >
                          {copiedField === `email-${activeOffice.id}` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                          <span>{copiedField === `email-${activeOffice.id}` ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Primary Google Maps Redirect Call-To-Action */}
                <div className="pt-6 relative z-10 space-y-3">
                  <button
                    onClick={() => openGoogleMapsRedirect(activeOffice.mapQuery)}
                    className="w-full py-4 px-6 rounded-2xl bg-[#0b835c] hover:bg-[#086849] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                  >
                    <Navigation className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
                    <span>Open {activeOffice.city} Office in Google Maps</span>
                    <ExternalLink className="w-4 h-4 opacity-80" />
                  </button>

                  {activeOffice.id === 'hyderabad' && (
                    <p className="text-[11px] text-center text-emerald-700 font-medium">
                      ⭐ Clicking opens exact GPS location for Hyderabad Corporate HQ
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Right Column (7 cols): Embedded Map View with Custom Overlay */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="relative w-full h-[400px] lg:h-full min-h-[420px] rounded-[32px] overflow-hidden border border-slate-200/90 shadow-md bg-slate-100 group">
                  
                  {/* Google Maps Iframe */}
                  <iframe
                    title={`Google Map - ${activeOffice.title}`}
                    src={activeOffice.embedUrl}
                    className="w-full h-full border-0 filter contrast-[1.02] saturate-[1.05]"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Interactive Map Overlay Banner (Top-Right) */}
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      onClick={() => openGoogleMapsRedirect(activeOffice.mapQuery)}
                      className="px-4 py-2.5 rounded-2xl bg-[#1c1c1e]/90 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-2 hover:bg-[#0b835c] transition-all shadow-lg cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
                      <span>Direct Google Maps Directions</span>
                    </button>
                  </div>

                  {/* Bottom Map Information Badge */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0b835c] flex items-center justify-center font-bold flex-shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1c1c1e]">{activeOffice.title}</h4>
                        <p className="text-[11px] text-slate-500 font-medium">{activeOffice.address}, {activeOffice.city}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => openGoogleMapsRedirect(activeOffice.mapQuery)}
                      className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#0b835c] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#086849] transition-all cursor-pointer"
                    >
                      <span>Get Driving Directions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DUAL OFFICE CARDS GRID & DIRECT CHANNELS */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#f8fafc] border-b border-[#eef2ef]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="clinical-label text-[11px]">CORPORATE NETWORK</span>
              <h2 className="font-editorial-serif text-3xl text-[#1c1c1e] font-normal tracking-tight">
                Our Corporate & Registered <span className="text-[#0b835c] italic font-normal">Offices</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {OFFICE_LOCATIONS.map((loc, idx) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`p-6 sm:p-7 rounded-[28px] bg-white border transition-all flex flex-col justify-between space-y-5 cursor-pointer hover:shadow-lg ${
                    selectedOfficeId === loc.id
                      ? 'border-[#0b835c] ring-2 ring-[#0b835c]/20 shadow-md'
                      : 'border-slate-200/80 hover:border-slate-300'
                  }`}
                  onClick={() => setSelectedOfficeId(loc.id)}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 text-[#0b835c] flex items-center justify-center font-bold">
                        {loc.id === 'hyderabad' ? (
                          <Building2 className="w-5 h-5" />
                        ) : loc.id === 'pune' ? (
                          <MapPin className="w-5 h-5" />
                        ) : (
                          <Globe className="w-5 h-5" />
                        )}
                      </div>

                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 tracking-wider uppercase">
                        {loc.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-[#1c1c1e]">{loc.title}</h3>
                      <p className="text-xs text-[#0b835c] font-semibold mt-0.5">{loc.tag}</p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed min-h-[48px]">
                      {loc.address}, {loc.city}, {loc.stateCountry} - {loc.pincode}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      {selectedOfficeId === loc.id ? '✓ Selected on Map' : 'Click to View on Map'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openGoogleMapsRedirect(loc.mapQuery);
                      }}
                      className="p-2 rounded-xl bg-emerald-50 text-[#0b835c] hover:bg-[#0b835c] hover:text-white transition-all text-xs flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Nav</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Direct Channel Strip */}
            <div className="p-6 sm:p-8 rounded-[32px] bg-[#1c1c1e] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0b835c] text-white flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Direct Medical & Executive Line</h4>
                  <p className="text-xs text-slate-300">Mon-Sat | 09:00 AM - 07:00 PM IST</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <a
                  href="tel:+919985553875"
                  className="flex-1 md:flex-initial px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+91 9985553875</span>
                </a>
                <a
                  href="mailto:manager@varutapharmaceuticals.com"
                  className="flex-1 md:flex-initial px-5 py-3 rounded-2xl bg-[#0b835c] hover:bg-[#086849] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>manager@varutapharmaceuticals.com</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE FORM SECTION */}
        {/* ========================================================================= */}
        <section id="contact-form" className="py-14 sm:py-24 bg-white border-b border-[#eef2ef]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column (5 cols): Context & Guidance */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <span className="clinical-label text-[11px]">COMMUNICATION PORTAL</span>
                <h2 className="font-editorial-serif text-3xl sm:text-5xl text-[#1c1c1e] font-normal tracking-tight leading-tight">
                  Transmit a <br />
                  <span className="text-[#0b835c] italic font-normal">Direct Inquiry</span>
                </h2>
                <p className="text-sm text-[#505053] leading-relaxed">
                  Whether you are a prescribing physician, hospital director, or distribution representative, our corporate team receives all inquiries directly at <strong className="text-[#0b835c]">manager@varutapharmaceuticals.com</strong>.
                </p>

                {/* Inquiry Types Checklist */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0b835c] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#1c1c1e]">Prescribing & Clinical Dossiers</h4>
                      <p className="text-[11px] text-slate-500">Request clinical trial data, bio-equivalence reports, and dosage charts.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0b835c] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#1c1c1e]">Distribution & Institutional Bids</h4>
                      <p className="text-[11px] text-slate-500">Connect with corporate management for dealership and supply chain inquiries.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0b835c] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#1c1c1e]">Statutory Verification</h4>
                      <p className="text-[11px] text-slate-500">FSSAI Licence verification and batch audit certificates.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (7 cols): Interactive Glassmorphism Form */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-7 sm:p-10 rounded-[36px] bg-gradient-to-b from-white to-[#f8fafc] border border-slate-200/90 shadow-xl relative text-left"
                >
                  <div className="mb-8 space-y-1">
                    <span className="clinical-label text-[10px]">DIRECT EMAIL ROUTING</span>
                    <h3 className="text-2xl font-bold text-[#1c1c1e]">Official Inquiry Form</h3>
                    <p className="text-xs text-slate-500">Inquiries are attached directly to <strong className="text-[#0b835c]">manager@varutapharmaceuticals.com</strong>.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#1c1c1e] block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Dr. Ananya Sharma"
                          className="w-full px-4 py-3.5 rounded-2xl bg-white text-sm text-[#1c1c1e] border border-slate-200 focus:outline-none focus:border-[#0b835c] focus:ring-2 focus:ring-[#0b835c]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#1c1c1e] block mb-1.5">
                          Professional Designation *
                        </label>
                        <select
                          value={formData.designation}
                          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-2xl bg-white text-sm text-[#1c1c1e] border border-slate-200 focus:outline-none focus:border-[#0b835c] focus:ring-2 focus:ring-[#0b835c]/20 transition-all"
                        >
                          <option value="Physician / HCP">Physician / Healthcare Professional</option>
                          <option value="Hospital / Clinic Director">Hospital / Clinic Director</option>
                          <option value="Pharmaceutical Distributor">Pharmaceutical Distributor</option>
                          <option value="Regulatory / Compliance Officer">Regulatory / Compliance Officer</option>
                          <option value="Patient / General Public">Patient / General Public</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#1c1c1e] block mb-1.5">
                          Official Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@clinic.com"
                          className="w-full px-4 py-3.5 rounded-2xl bg-white text-sm text-[#1c1c1e] border border-slate-200 focus:outline-none focus:border-[#0b835c] focus:ring-2 focus:ring-[#0b835c]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#1c1c1e] block mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3.5 rounded-2xl bg-white text-sm text-[#1c1c1e] border border-slate-200 focus:outline-none focus:border-[#0b835c] focus:ring-2 focus:ring-[#0b835c]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#1c1c1e] block mb-1.5">
                        Therapeutic Sector or Product Interest
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white text-sm text-[#1c1c1e] border border-slate-200 focus:outline-none focus:border-[#0b835c] focus:ring-2 focus:ring-[#0b835c]/20 transition-all"
                      >
                        <option value="Iron Deficiency & Immunity">Iron Deficiency & Immunity (GUANOLACT)</option>
                        <option value="Women's Health">Women's Health (ESTROCLEN)</option>
                        <option value="Sleep & Recovery">Sleep & Recovery (QUICKNAP ODF)</option>
                        <option value="Weight Management">Weight Management (FATEASE-5)</option>
                        <option value="Cellular Longevity">Cellular Longevity (TELAGE)</option>
                        <option value="Men's Health">Men's Health (ERECTER)</option>
                        <option value="Ovulatory Wellness">Ovulatory Wellness (CYSTORIN)</option>
                        <option value="General Corporate Inquiry">General Corporate / Distribution Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#1c1c1e] block mb-1.5">
                        Inquiry Message / Request Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="State your inquiry, dossier request, or distribution proposal..."
                        className="w-full px-4 py-3.5 rounded-2xl bg-white text-sm text-[#1c1c1e] border border-slate-200 focus:outline-none focus:border-[#0b835c] focus:ring-2 focus:ring-[#0b835c]/20 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-8 rounded-full bg-[#1c1c1e] hover:bg-[#0b835c] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-xl active:scale-[0.99] cursor-pointer"
                    >
                      <span>Transmit Corporate Inquiry</span>
                      <Send className="w-4 h-4 text-emerald-300" />
                    </button>
                  </form>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ========================================================================= */}
      {/* POP-UP SUCCESS MODAL DIALOG */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
            {/* Soft Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="fixed inset-0 bg-black/65 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-lg rounded-[32px] bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-8 z-10 text-left space-y-6"
            >
              {/* Close Button Top Right */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Icon & Title */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#0b835c] flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-[#0b835c]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0b835c] bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/80">
                    VARUTA PHARMA COMMUNICATIONS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1c1e] mt-1">Inquiry Sent Successfully</h3>
                  <p className="text-xs text-slate-500 font-medium">Reference #{referenceNo}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Thank you, <strong className="text-[#1c1c1e]">{submittedData?.fullName}</strong>. Your inquiry has been generated and pre-attached directly to <strong className="text-[#0b835c]">manager@varutapharmaceuticals.com</strong>.
              </p>

              {/* Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Redirected To:</span>
                  <span className="font-bold text-[#0b835c] truncate max-w-[210px]">manager@varutapharmaceuticals.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Designation:</span>
                  <span className="font-semibold text-[#1c1c1e]">{submittedData?.designation}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Therapeutic Sector:</span>
                  <span className="font-semibold text-[#1c1c1e]">{submittedData?.sector}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Sender Email:</span>
                  <span className="font-semibold text-[#1c1c1e]">{submittedData?.email}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:manager@varutapharmaceuticals.com?subject=${encodeURIComponent(`[Inquiry Ref #${referenceNo}] ${submittedData?.sector} - ${submittedData?.fullName}`)}`}
                  className="flex-1 py-3 px-5 rounded-full bg-[#0b835c] hover:bg-[#086849] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Mail Direct</span>
                </a>

                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="px-6 py-3 rounded-full bg-[#1c1c1e] hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Close & Done
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
