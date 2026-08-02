import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Share2, Globe, Tv, AlertCircle, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c2b27] text-slate-300 pt-16 pb-10 border-t border-[#0b835c]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mandatory Statutory Disclosure Block */}
        <div className="bg-[#0b835c]/10 border border-[#0b835c]/30 rounded-[20px] p-6 mb-12 text-slate-200">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs space-y-1.5">
              <span className="clinical-label text-emerald-300 text-[11px] block">
                MANDATORY STATUTORY REGULATORY NOTICE (FSSAI LIC. NO. 13624999000034)
              </span>
              <p className="leading-relaxed">
                Nutraceutical Supplements should not be used as a substitute for a varied diet. This product is not intended to diagnose, treat, cure, or prevent any disease. <strong className="text-white">NOT FOR MEDICAL USE.</strong>
              </p>
              <p className="text-slate-400 italic text-[11px]">
                Caution: For Adult use only. Consult your physician before using if you are pregnant, lactating, trying to conceive, taking medication or have a medical condition. Not to exceed recommended daily usage. Manufactured for Varuta Pharma Pvt. Ltd. by licensed WHO-GMP & ISO certified partners (Gencleus Pharma Pvt. Ltd. & Peptas Pharma Pvt. Ltd.).
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 text-left">
          
          {/* Brand & Corporate Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-auto flex items-center justify-center">
                <img src="/logo-emblem.png" alt="Varuta Pharma Logo" className="h-10 w-auto object-contain brightness-110" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Varuta <span className="text-emerald-400">Pharma</span>
              </span>
            </div>
            <p className="font-editorial-serif italic text-sm text-emerald-300">
              "Born for Generations..."
            </p>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Targeting human biological deficiencies through precision formulations inspired by modern clinical science and ancient botanical principles.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-all"
                aria-label="LinkedIn"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-all"
                aria-label="Instagram"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/919985553875"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-all"
                aria-label="YouTube"
              >
                <Tv className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <span className="clinical-label text-emerald-400 text-[11px] block">QUICK NAVIGATION</span>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home Page</Link></li>
              <li><Link to="/about-us" className="hover:text-emerald-400 transition-colors">About Company</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Products Portfolio</Link></li>
              <li><Link to="/#sectors" className="hover:text-emerald-400 transition-colors">7 Therapeutic Sectors</Link></li>
              <li><Link to="/research-and-quality" className="hover:text-emerald-400 transition-colors">R&D & Quality Standards</Link></li>
              <li><Link to="/blogs" className="hover:text-emerald-400 transition-colors">Clinical & Evidence Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact & Enquiries</Link></li>
            </ul>
          </div>

          {/* Lead Formulations */}
          <div className="space-y-3">
            <span className="clinical-label text-emerald-400 text-[11px] block">LEAD FORMULATIONS</span>
            <ul className="space-y-2 text-xs">
              <li><Link to="/products/iron-immunity/guanolact" className="hover:text-emerald-400 transition-colors">GUANOLACT (Lead SKU)</Link></li>
              <li><Link to="/products/womens-health/estroclen" className="hover:text-emerald-400 transition-colors">ESTROCLEN (Oestrogen Balance)</Link></li>
              <li><Link to="/products/sleep-recovery/quicknap" className="hover:text-emerald-400 transition-colors">QUICKNAP (Sleep Film)</Link></li>
              <li><Link to="/products/womens-health/cystorin" className="hover:text-emerald-400 transition-colors">CYSTORIN (PCOS Support)</Link></li>
              <li><Link to="/products/weight-management/fatease-5" className="hover:text-emerald-400 transition-colors">FATEASE-5 (Weight Mgmt)</Link></li>
              <li><Link to="/products/cellular-longevity/telage" className="hover:text-emerald-400 transition-colors">TELAGE (Cellular Support)</Link></li>
            </ul>
          </div>

          {/* Office Network & Official Contacts */}
          <div className="space-y-3">
            <span className="clinical-label text-emerald-400 text-[11px] block">OFFICE NETWORK & CONTACTS</span>
            <div className="space-y-3 text-xs">
              <div>
                <span className="font-semibold text-emerald-300 flex items-center gap-1 mb-0.5">
                  <MapPin className="w-3 h-3 text-emerald-400" /> Corporate Office (Hyderabad):
                </span>
                <p className="text-slate-300 leading-snug">
                  Varuta Pharma Pvt. Ltd., H No, Srt 283, Alwyn Housing Colony, Sanath Nagar, Hyderabad, Telangana 500018
                </p>
              </div>

              <div>
                <span className="font-semibold text-emerald-300 flex items-center gap-1 mb-0.5">
                  <MapPin className="w-3 h-3 text-emerald-400" /> Registered Office (Pune):
                </span>
                <p className="text-slate-300 leading-snug">
                  Flat No. B-120, Sebiyan Apartments, Street No. 2/1/1, Near Indu Lawns, Pune, Maharashtra 411046
                </p>
              </div>

              <div>
                <span className="font-semibold text-emerald-300 flex items-center gap-1 mb-0.5">
                  <Globe className="w-3 h-3 text-emerald-400" /> International Office (Australia):
                </span>
                <p className="text-slate-300 leading-snug">
                  Varuta Pharma Pvt. Ltd., Suite 7.12, Level 7, 365 Little Collins St., Melbourne, VIC 3000, Australia
                </p>
              </div>

              <div className="pt-1 space-y-1">
                <p className="flex items-center gap-1.5 text-slate-200">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  contact@varutapharmaceuticals.com
                </p>
                <p className="flex items-center gap-1.5 text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  +91 9985553875
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Varuta Pharma Pvt. Ltd. All rights reserved. CIN: Pending Registration.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-emerald-400">Privacy Policy (DPDP Act 2023)</Link>
            <Link to="/terms" className="hover:text-emerald-400">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-emerald-400">Medical Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
