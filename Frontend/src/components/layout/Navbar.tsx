import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Products', path: '/products' },
    { name: 'Future Scopes', path: '/future-scopes' },
    { name: 'R&D', path: '/research-and-quality' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Announcement Banner (Hidden on mobile, visible on desktop) */}
      <div className="hidden md:block bg-[#0b835c] text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-[1200px] mx-auto flex flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-xs">
            <a href="mailto:contact@varutapharmaceuticals.com" className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-200 flex-shrink-0" />
              <span>contact@varutapharmaceuticals.com</span>
            </a>
            <a href="tel:+919985553875" className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-200 flex-shrink-0" />
              <span>+91 9985553875</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-[11px] tracking-wide">
            <span className="font-semibold text-emerald-100 uppercase">FSSAI Marketer Lic.: 13624999000034</span>
            <span className="opacity-40">|</span>
            <span className="font-editorial-serif italic text-emerald-100">"Born for Generations..."</span>
          </div>
        </div>
      </div>

      {/* Glassmorphic Sticky Header Navbar */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-[#eff1f6]/80 shadow-xs">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
          
          {/* Logo & Brand Title */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="h-9 sm:h-10 w-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src="/logo-emblem.png" alt="Varuta Pharma Logo" className="h-9 sm:h-10 w-auto object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#1c1c1e] flex items-center gap-1 leading-tight">
                Varuta <span className="text-[#0b835c]">Pharma</span>
              </span>
              <span className="text-[9.5px] sm:text-[10.5px] font-editorial-serif italic text-[#0b835c] font-medium tracking-wide">
                Born for Generations...
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-[#0b835c] font-semibold bg-[#eff1f6]'
                    : 'text-[#303033] hover:text-[#0b835c] hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl text-[#1c1c1e] hover:bg-[#eff1f6] active:scale-95 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#0b835c]" /> : <Menu className="w-6 h-6 text-[#1c1c1e]" />}
          </button>

        </div>

        {/* Animated Mobile Frosted Glass Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden glass-panel-light border-t border-white/60 shadow-xl overflow-hidden"
            >
              <div className="px-5 pt-3 pb-8 space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-emerald-950/10 mb-2">
                  <span className="clinical-label text-[10px]">NAVIGATION MENU</span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-[#0b835c] bg-emerald-50 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" /> FSSAI Qualified
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-1">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all min-h-[44px] ${
                          isActive(link.path)
                            ? 'bg-[#0b835c] text-white shadow-md'
                            : 'text-[#1c1c1e] hover:bg-white/80 active:bg-emerald-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className={`w-4 h-4 opacity-70 ${isActive(link.path) ? 'text-white' : 'text-[#0b835c]'}`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
