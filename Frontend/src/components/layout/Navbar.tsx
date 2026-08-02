import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Products', path: '/products' },
    { name: 'Sectors', path: '/#sectors' },
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
      {/* Top Announcement Banner (Grove AI Style: #0b835c fill, white text) */}
      <div className="bg-[#0b835c] text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-200" />
              contact@varutapharmaceuticals.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-200" />
              +91 9985553875
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] tracking-wide">
            <span className="font-semibold text-emerald-100 uppercase">FSSAI Marketer Lic.: 13624999000034</span>
            <span className="opacity-40">|</span>
            <span className="font-editorial-serif italic text-emerald-100">"Born for Generations..."</span>
          </div>
        </div>
      </div>

      {/* Sticky White Navbar */}
      <nav className="bg-white border-b border-[#eff1f6] shadow-xs">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo & Brand Title */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 w-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src="/logo-emblem.png" alt="Varuta Pharma Logo" className="h-10 w-auto object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#1c1c1e] flex items-center gap-1">
                Varuta <span className="text-[#0b835c]">Pharma</span>
              </span>
              <span className="text-[10.5px] font-editorial-serif italic text-[#0b835c] font-medium tracking-wide">
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1c1c1e] hover:bg-[#eff1f6]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-[#eff1f6] px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                  isActive(link.path)
                    ? 'bg-[#0b835c] text-white font-semibold'
                    : 'text-[#303033] hover:bg-[#eff1f6]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#eff1f6]">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center btn-dark-pill block"
              >
                Doctor & Distributor Portal
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
