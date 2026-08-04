import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Package, Microscope, BookOpen, PhoneCall, Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallBanner(false);
    }
    setDeferredPrompt(null);
  };

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Products', path: '/products', icon: Package },
    { name: 'R&D', path: '/research-and-quality', icon: Microscope },
    { name: 'Blogs', path: '/blogs', icon: BookOpen },
    { name: 'Contact', path: '/contact', icon: PhoneCall },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed bottom-3 sm:bottom-4 left-0 right-0 z-40 md:hidden flex flex-col items-center pointer-events-none px-3">
      
      {/* Floating PWA Install Banner */}
      {showInstallBanner && deferredPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="pointer-events-auto w-full max-w-sm mb-2.5 p-2.5 rounded-2xl bg-[#1c1c1e]/90 text-white shadow-xl flex items-center justify-between border border-emerald-500/40 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 text-xs">
            <img src="/logo-emblem.png" alt="Varuta Logo" className="w-5 h-5 object-contain" />
            <span className="font-semibold text-[11px]">Install Varuta App for instant offline access</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleInstallPWA}
              className="px-3 py-1 rounded-full bg-[#0b835c] text-white text-[10.5px] font-bold flex items-center gap-1 shadow-sm cursor-pointer active:scale-95 transition-transform"
            >
              <Download className="w-3 h-3" />
              <span>Install</span>
            </button>
            <button
              onClick={() => setShowInstallBanner(false)}
              className="text-slate-400 hover:text-white text-xs px-1.5 py-0.5"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}

      {/* Floating Glassmorphic Capsule Nav Bar */}
      <nav className="pointer-events-auto w-full max-w-md bg-white/75 backdrop-blur-2xl border border-white/80 shadow-[0_16px_40px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5 rounded-full p-1.5 transition-all duration-300">
        <div className="flex items-center justify-around relative">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative flex flex-col items-center justify-center py-1.5 px-3 rounded-full min-w-[56px] min-h-[48px] select-none cursor-pointer"
              >
                {/* Active Sliding Indicator Pill */}
                {active && (
                  <motion.div
                    layoutId="activeBottomNavPill"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-[#0b835c] rounded-full shadow-md shadow-[#0b835c]/30 z-0"
                  />
                )}

                {/* Nav Content */}
                <div
                  className={`relative z-10 flex flex-col items-center gap-0.5 transition-colors duration-200 ${
                    active ? 'text-white font-bold' : 'text-slate-600 hover:text-slate-900 font-medium'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-200 ${active ? 'scale-110' : ''}`} />
                  <span className="text-[9.5px] tracking-tight leading-none">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

    </div>
  );
};
