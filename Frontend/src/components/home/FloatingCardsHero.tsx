import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  ZoomIn,
  Package
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '../../data/productsData';
import type { ProductSKU } from '../../data/productsData';

export const FloatingCardsHero: React.FC = () => {
  const navigate = useNavigate();

  // Filter 6 main products for 3D stage (excluding Guanolact)
  const heroProducts: ProductSKU[] = PRODUCTS_CATALOG.filter(p => p.id !== 'guanolact').slice(0, 6);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [pressedSkuId, setPressedSkuId] = useState<string | null>(null);
  const stageTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Constant motion auto-revolve timer (pauses seamlessly on hover)
  useEffect(() => {
    if (!isHovered) {
      stageTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % heroProducts.length);
      }, 2800);
    }
    return () => {
      if (stageTimerRef.current) clearInterval(stageTimerRef.current);
    };
  }, [isHovered, heroProducts.length]);

  useEffect(() => {
    return () => {
      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }
    };
  }, []);

  const openProduct = (sku: ProductSKU) => {
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }

    setPressedSkuId(sku.id);
    clickTimerRef.current = setTimeout(() => {
      setPressedSkuId(null);
      navigate(`/products/${sku.categoryId}/${sku.slug}`);
    }, 160);
  };

  const activeSKU = heroProducts[activeIndex];

  return (
    <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 bg-[#f4f8f6] overflow-hidden text-left min-h-[640px] lg:min-h-[700px] flex items-center">
      
      {/* Studio Pedestal Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-right lg:bg-center bg-no-repeat transition-opacity duration-700"
        style={{ backgroundImage: "url('/hero_studio_bg.png')" }}
      />

      {/* Subtle ambient light gradient overlay for maximum readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 lg:to-transparent pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: EDITORIAL HEADLINE & POSITIONING */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 space-y-6">
            


            {/* Main Headline */}
            <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-[62px] font-normal leading-[1.12] tracking-tight text-[#1c1c1e]">
              Precision Nutraceuticals Born for Every{' '}
              <span className="text-[#0b835c] italic font-normal">Generation</span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-[#303033] font-medium leading-relaxed max-w-[540px]">
              Varuta Pharma establishes doctor-channel credibility by addressing biological deficiencies through clinical evidence grading and time-tested botanical science.
            </p>

            {/* Proof Point Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-slate-200/80 max-w-[540px]">
              <div>
                <span className="clinical-label block">BIOLOGICAL</span>
                <span className="text-2xl font-bold text-[#1c1c1e]">100%</span>
                <span className="text-xs text-[#676768] block">Targeted Actives</span>
              </div>
              <div>
                <span className="clinical-label block">EVIDENCE</span>
                <span className="text-2xl font-bold text-[#1c1c1e]">Grade A</span>
                <span className="text-xs text-[#676768] block">Clinical Standards</span>
              </div>
              <div>
                <span className="clinical-label block">MARKETER</span>
                <span className="text-2xl font-bold text-[#1c1c1e]">FSSAI</span>
                <span className="text-xs text-[#676768] block">Lic. 13624999000034</span>
              </div>
            </div>

            {/* Canonical CTA Pair */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#sectors"
                className="btn-dark-pill flex items-center gap-2 shadow-md"
              >
                <span>Explore 7 Therapeutic Sectors</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </a>

              <Link
                to={`/products/${activeSKU.categoryId}/${activeSKU.slug}`}
                className="btn-outline-pill flex items-center gap-2 bg-white/90 backdrop-blur-md border-slate-300"
              >
                <ShieldCheck className="w-4 h-4 text-[#0b835c]" />
                <span>View {activeSKU.title} SKU</span>
              </Link>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: INTERACTIVE 3D REVOLVING PRODUCT STAGE OVER PEDESTAL */}
          {/* ========================================================================= */}
          <div
            className="lg:col-span-6 relative flex flex-col items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            {/* Stage Pedestal Container Aligned with Background Studio Pedestal */}
            <div className="relative w-full h-[460px] sm:h-[520px] flex items-center justify-center perspective-[1200px]">
              
              {/* Pedestal Glow Shadow Base */}
              <div className="absolute bottom-4 sm:bottom-6 w-[280px] sm:w-[360px] h-[70px] bg-emerald-400/20 rounded-[100%] blur-xl pointer-events-none" />

              {/* 3D Revolving Product Cards Ring */}
              {heroProducts.map((sku, index) => {
                const total = heroProducts.length;
                // Calculate position relative to active index
                let offset = (index - activeIndex) % total;
                if (offset < -total / 2) offset += total;
                if (offset > total / 2) offset -= total;

                const isCenter = offset === 0;

                // 3D Position Math (Responsive radius for mobile)
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
                const radiusX = isMobile ? 95 : 165;
                const angle = (offset * (2 * Math.PI)) / total;
                const translateX = Math.sin(angle) * radiusX; // Horizontal offset
                const translateZ = Math.cos(angle) * 140 - 130; // Depth offset
                const scale = isCenter ? (isMobile ? 1.02 : 1.05) : Math.max(0.65, 1 - Math.abs(offset) * 0.22);
                const opacity = isCenter ? 1 : Math.max(0.35, 1 - Math.abs(offset) * 0.35);
                const zIndex = 20 - Math.abs(offset) * 5;

                return (
                  <motion.div
                    key={sku.id}
                    onClick={() => {
                      if (isCenter) {
                        openProduct(sku);
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      x: translateX,
                      z: translateZ,
                      scale: scale,
                      opacity: opacity,
                    }}
                    transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                    style={{ zIndex }}
                    className={`absolute w-[220px] sm:w-[270px] lg:w-[290px] rounded-[32px] bg-white/95 backdrop-blur-md border transition-all duration-300 overflow-hidden cursor-pointer ${
                      pressedSkuId === sku.id
                        ? 'border-[#0b835c] shadow-[0_25px_60px_rgba(11,131,92,0.3)] ring-2 ring-[#0b835c]/40 scale-[0.98]'
                        : isCenter
                        ? 'border-[#0b835c] shadow-[0_25px_60px_rgba(11,131,92,0.3)] ring-2 ring-[#0b835c]/40'
                        : 'border-slate-200/90 shadow-lg hover:border-slate-400'
                    }`}
                  >
                    {/* Top Studio Photoshoot Viewport */}
                    <div className="relative h-48 sm:h-54 w-full bg-slate-50 overflow-hidden flex items-center justify-center border-b border-slate-100 group">
                      {sku.imageUrl ? (
                        <img
                          src={sku.imageUrl}
                          alt={sku.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${sku.imageColor} flex items-center justify-center p-6 text-white`}>
                          <span className="font-editorial-serif text-3xl font-bold tracking-tight">{sku.title}</span>
                        </div>
                      )}

                      {/* Interactive Zoom Hover Tag */}
                      {isCenter && (
                        <div className="absolute bottom-3 right-3 z-10 px-3 py-1.2 rounded-full bg-[#1c1c1e]/85 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1 opacity-90 group-hover:opacity-100 group-hover:bg-[#0b835c] transition-all shadow-md">
                          <ZoomIn className="w-3 h-3 text-emerald-300" />
                          <span>View Product</span>
                        </div>
                      )}
                    </div>

                    {/* Card Information Body */}
                    <div className="p-4 sm:p-5 space-y-2.5 bg-white text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#0b835c] uppercase tracking-wider">
                          {sku.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                          <Package className="w-3 h-3 text-[#0b835c]" />
                          {sku.form}
                        </span>
                      </div>

                      <h3 className="font-editorial-serif text-xl sm:text-2xl font-bold text-[#1c1c1e] tracking-tight">
                        {sku.title}
                      </h3>

                      <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed font-medium">
                        {sku.tagline}
                      </p>
                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
