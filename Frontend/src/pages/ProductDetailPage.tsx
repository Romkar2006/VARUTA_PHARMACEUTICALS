import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PRODUCTS_CATALOG } from '../data/productsData';
import type { ProductSKU, ProductVariant } from '../data/productsData';
import { BLOGS_DATABASE } from '../data/blogsData';
import {
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  FileText,
  ChevronRight,
  ChevronLeft,
  Building2,
  Atom,
  Clock,
  Pill,
  Download,
  Share2,
  Check,
  Info,
  ChevronDown,
  ChevronUp,
  Package,
  ArrowRight,
  X,
  Send,
  FlaskConical,
  Award,
  HeartPulse,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { sku: skuParam } = useParams<{ sku?: string }>();
  const navigate = useNavigate();

  // Find target SKU or fallback to lead product
  const sku: ProductSKU =
    PRODUCTS_CATALOG.find(
      (p) =>
        p.slug.toLowerCase() === (skuParam || '').toLowerCase() ||
        p.id.toLowerCase() === (skuParam || '').toLowerCase()
    ) || PRODUCTS_CATALOG[0];

  // Gallery Images setup (Fallback to imageUrl if gallery empty)
  const galleryList: string[] =
    sku.galleryImages && sku.galleryImages.length > 0
      ? sku.galleryImages
      : sku.imageUrl
      ? [sku.imageUrl]
      : [];

  // Active Gallery Image & Lightbox Zoom State
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Selected Variant & Quantity state
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    sku.variants ? sku.variants[0] : { size: sku.form, packText: 'Standard Pack' }
  );
  const [quantity, setQuantity] = useState<number>(1);

  // Active Tab for Accordion & Modal States
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');
  const [showDossierModal, setShowDossierModal] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [hcpFormSubmitted, setHcpFormSubmitted] = useState<boolean>(false);

  // Active sticky header navigation highlight
  const [showStickyBar, setShowStickyBar] = useState<boolean>(false);

  useEffect(() => {
    // Reset state when SKU changes
    setSelectedImageIndex(0);
    setSelectedVariant(sku.variants ? sku.variants[0] : { size: sku.form, packText: 'Standard Pack' });
    setQuantity(1);
    setOpenAccordion('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [skuParam, sku]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard Navigation for Lightbox Modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setZoomLevel(1);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % galleryList.length);
        setZoomLevel(1);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + galleryList.length) % galleryList.length);
        setZoomLevel(1);
      }
    },
    [isLightboxOpen, galleryList.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoomLevel(1);
    setIsLightboxOpen(true);
  };

  // Gallery Angle Labels
  const getAngleLabel = (index: number) => {
    if (sku.isDevice) {
      const deviceLabels = [
        'Front Packaging Box & Scope Device',
        'User Guide & Saliva Test Manual',
        'Kit Box & Acrylic Protective Case',
        'Back Packaging Panel (MRP & Batch Info)',
        'Instructional Leaflet & Ferning Patterns'
      ];
      return deviceLabels[index % deviceLabels.length] || `Device View ${index + 1}`;
    }

    const labels = [
      'Front Packaging Box',
      'Ingredients & Certifications Panel',
      'Side View & Batch Expiry Details',
      'Top Flap & Side Panel',
      'Packaging Blister Strip & Dosage Form',
      'Blister Foil Back'
    ];
    return labels[index % labels.length] || `Angle View ${index + 1}`;
  };

  // Filter Related Products (exclude current SKU)
  const relatedProducts = PRODUCTS_CATALOG.filter((p) => p.id !== sku.id);

  // Related Blog Articles matching product category
  const relatedBlogs = BLOGS_DATABASE.filter(
    (b) => b.categoryId === sku.categoryId || b.category === sku.category
  ).slice(0, 3);

  const [downloadedDossierModal, setDownloadedDossierModal] = useState<boolean>(false);

  // Copy link handler
  const handleCopyPageLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Download Clinical Dossier & Open Pop-Up Confirmation Modal
  const handleDownloadDossier = (dossierUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = dossierUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadedDossierModal(true);
  };

  // Toggle Accordion
  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const activeMainImage = galleryList[selectedImageIndex] || sku.imageUrl || '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fbfdfc] via-white to-[#f4f7f5] text-[#1c1c1e] selection:bg-[#0b835c] selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* ========================================================================= */}
      {/* STICKY QUICK NAVIGATION BAR (Appears on scroll) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md py-3 px-4 sm:px-8"
          >
            <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0b835c] flex items-center justify-center font-bold text-xs">
                  <Pill className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#1c1c1e] flex items-center gap-2">
                    {sku.title}
                    <span className="text-[10px] text-[#0b835c] bg-emerald-50 px-2 py-0.5 rounded-full font-semibold border border-emerald-200">
                      {sku.evidenceGrade}
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium hidden sm:block">{sku.category}</p>
                </div>
              </div>

              {/* Jump Links */}
              <div className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-600">
                <a href="#overview" className="hover:text-[#0b835c] transition-colors">Overview</a>
                <a href="#gallery" className="hover:text-[#0b835c] transition-colors">360° Gallery</a>
                <a href="#ingredients" className="hover:text-[#0b835c] transition-colors">Actives</a>
                <a href="#benefits" className="hover:text-[#0b835c] transition-colors">Benefits</a>
                <a href="#how-to-use" className="hover:text-[#0b835c] transition-colors">Dosage</a>
                <a href="#moa" className="hover:text-[#0b835c] transition-colors">MOA</a>
                <a href="#safety" className="hover:text-[#0b835c] transition-colors">Safety</a>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#0b835c] bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 hidden sm:inline-block">
                  Ethical Promotion
                </span>
                <button
                  onClick={() => setShowDossierModal(true)}
                  className="px-4 py-2 rounded-full bg-[#0b835c] text-white text-xs font-bold hover:bg-[#086849] transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request Pack</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 sm:pt-28 pb-20">
        
        {/* ========================================================================= */}
        {/* BREADCRUMB BAR */}
        {/* ========================================================================= */}
        <section className="py-3.5 bg-slate-100/70 border-b border-slate-200/70 text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium overflow-x-auto scrollbar-none whitespace-nowrap">
              <Link to="/" className="hover:text-[#0b835c]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link to="/products" className="hover:text-[#0b835c]">Products</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-600 font-semibold">{sku.category}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#0b835c] font-bold">{sku.title}</span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PRODUCT HERO & MULTI-ANGLE GALLERY SHOWCASE */}
        {/* ========================================================================= */}
        <section id="overview" className="py-12 sm:py-16 bg-white border-b border-[#eef2ef] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0b835c] hover:underline mb-6 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Product Catalog</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* Left Column (5 cols): Interactive Multi-Angle Gallery Showcase */}
              <div id="gallery" className="lg:col-span-5 space-y-4">
                
                {/* Main Selected Photo Viewport */}
                <div className="bg-gradient-to-br from-[#f8fafc] via-white to-[#f4f7f5] p-5 sm:p-6 rounded-[36px] border border-slate-200/90 shadow-lg relative overflow-hidden group">
                  
                  {/* Badges Overlay */}
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className="px-3 py-1 rounded-full bg-[#0b835c] text-white text-[11px] font-bold tracking-wider uppercase shadow-xs">
                      {sku.badge}
                    </span>
                    <span className="text-xs font-bold text-[#0b835c] flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                      <Sparkles className="w-3.5 h-3.5 text-[#0b835c]" />
                      {sku.evidenceGrade}
                    </span>
                  </div>

                  {/* Active Main Product Photo */}
                  <div
                    onClick={() => openLightbox(selectedImageIndex)}
                    className="w-full h-[300px] sm:h-[360px] rounded-[28px] bg-slate-100 border border-slate-200 overflow-hidden relative shadow-sm flex items-center justify-center cursor-zoom-in group"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={selectedImageIndex}
                        src={activeMainImage}
                        alt={`${sku.title} - ${getAngleLabel(selectedImageIndex)}`}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </AnimatePresence>

                    {/* Interactive Zoom Hover Pill */}
                    <div className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-[#1c1c1e]/85 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:bg-[#0b835c] transition-all shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
                      <span>Full Zoom Inspect</span>
                    </div>

                    {/* Angle View Tag */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-xl bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold border border-slate-200/80 shadow-xs">
                      {getAngleLabel(selectedImageIndex)}
                    </div>
                  </div>

                  {/* Packaging Details Footer Pill */}
                  <div className="mt-3 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Package className="w-4 h-4 text-[#0b835c]" />
                      Form: {sku.form}
                    </span>
                    <span className="text-[#0b835c] font-bold">
                      {galleryList.length} HD Studio Angles Available
                    </span>
                  </div>

                </div>

                {/* Interactive Multi-Angle Thumbnail Strip */}
                {galleryList.length > 1 && (
                  <div className="p-4 rounded-[28px] bg-[#f8fafc] border border-slate-200/90 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 uppercase tracking-wider px-1">
                      <span>MULTI-ANGLE GALLERY PREVIEW ({galleryList.length} VIEWS)</span>
                      <span className="text-[#0b835c]">Click to Switch</span>
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                      {galleryList.map((imgUrl, idx) => {
                        const isSelected = selectedImageIndex === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setSelectedImageIndex(idx)}
                            onDoubleClick={() => openLightbox(idx)}
                            className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer group ${
                              isSelected
                                ? 'border-[#0b835c] ring-2 ring-[#0b835c]/30 shadow-md scale-105 z-10'
                                : 'border-slate-200/80 hover:border-slate-400 opacity-70 hover:opacity-100'
                            }`}
                            title={getAngleLabel(idx)}
                          >
                            <img
                              src={imgUrl}
                              alt={`Thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {isSelected && (
                              <div className="absolute inset-0 bg-[#0b835c]/10 border border-[#0b835c]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Variant & Size Selection */}
                {sku.variants && sku.variants.length > 0 && (
                  <div className="p-5 rounded-[28px] bg-[#f8fafc] border border-slate-200/90 space-y-3">
                    <label className="text-xs font-bold text-[#1c1c1e] block uppercase tracking-wider">
                      SELECT PACKAGING VARIANT & SIZE
                    </label>
                    
                    <div className="grid grid-cols-1 gap-2">
                      {sku.variants.map((variant, idx) => {
                        const isSelected = selectedVariant.size === variant.size;
                        return (
                          <button
                            key={idx}
                            onClick={() => setSelectedVariant(variant)}
                            className={`p-3 rounded-2xl text-xs font-semibold text-left transition-all flex items-center justify-between cursor-pointer border ${
                              isSelected
                                ? 'bg-[#1c1c1e] text-white border-[#1c1c1e] shadow-md ring-2 ring-[#0b835c]/30'
                                : 'bg-white text-[#1c1c1e] border-slate-200/90 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                          >
                            <div>
                              <p className="font-bold">{variant.size}</p>
                              <p className={`text-[11px] ${isSelected ? 'text-emerald-300' : 'text-slate-500'}`}>
                                {variant.packText}
                              </p>
                            </div>
                            {isSelected && (
                              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Quantity Selector */}
                    <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-700">Quantity:</span>
                        <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden shadow-xs">
                          <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-3 py-1.5 text-xs font-extrabold text-[#1c1c1e] min-w-[28px] text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <span className="text-xs font-bold text-[#0b835c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        Ethical Doctor Channel
                      </span>
                    </div>

                  </div>
                )}

                {/* Primary Prescribing & Redesigned Clinical Dossier Download Section */}
                <div className="space-y-3">
                  <button
                    onClick={() => setShowDossierModal(true)}
                    className="w-full py-4 px-6 rounded-2xl bg-[#0b835c] hover:bg-[#086849] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-emerald-200" />
                    <span>Request HCP Prescribing Pack / Sample</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {sku.dossier ? (
                    <div className="p-5 rounded-[28px] bg-gradient-to-br from-slate-900 via-[#0a2e23] to-emerald-950 text-white border border-emerald-500/40 shadow-xl space-y-4 text-left">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-400/40 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5" />
                          PEER-REVIEWED CLINICAL LITERATURE
                        </span>
                        <span className="text-[11px] font-mono font-bold text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-md">
                          {sku.dossier.fileType} · {sku.dossier.fileSize}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-white leading-snug">
                          {sku.dossier.title}
                        </h4>
                        <p className="text-[11px] text-slate-300 font-medium mt-1 leading-relaxed line-clamp-2">
                          {sku.dossier.citation}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center justify-between gap-3">
                        <button
                          onClick={() => handleDownloadDossier(sku.dossier!.fileUrl, sku.dossier!.fileName)}
                          className="flex-1 py-3 px-5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-emerald-950 text-xs font-extrabold flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download & Read Clinical Dossier</span>
                        </button>

                        <button
                          onClick={handleCopyPageLink}
                          className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all cursor-pointer"
                          title="Share Product Link"
                        >
                          {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 rounded-[28px] bg-slate-50 border border-slate-200/90 space-y-3 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#0b835c] uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          MEDICAL BOARD CLINICAL REQUEST
                        </span>
                        <button
                          onClick={handleCopyPageLink}
                          className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#0b835c] transition-all cursor-pointer"
                          title="Share Product Link"
                        >
                          {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Official clinical dossier and trial literature for <strong>{sku.title}</strong> can be requested directly from our Medical Affairs Board.
                      </p>
                      <button
                        onClick={() => navigate(`/contact?topic=${sku.slug}`)}
                        className="w-full py-3 px-4 rounded-xl bg-[#1c1c1e] hover:bg-[#0b835c] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                      >
                        <FileText className="w-4 h-4 text-emerald-300" />
                        <span>Request Clinical Dossier via Medical Board</span>
                      </button>
                    </div>
                  )}
                </div>

              </div>

              {/* Right Column (7 cols): Product Title, Clinical Rationale & Overview */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Header Titles */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-[#0b835c]/30 text-[#0b835c] text-xs font-semibold uppercase tracking-wider mb-2">
                    <FlaskConical className="w-3.5 h-3.5 text-[#0b835c]" />
                    {sku.category}
                  </div>

                  <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl text-[#1c1c1e] font-normal tracking-tight">
                    {sku.title}
                  </h1>

                  <p className="text-base sm:text-xl text-[#0b835c] font-semibold mt-1">
                    {sku.tagline}
                  </p>
                </div>

                {/* Form & Dose Pill Bar */}
                <div className="flex flex-wrap items-center gap-3 py-3 border-y border-slate-200/80">
                  <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700">
                    Form: {sku.form}
                  </span>
                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-[#0b835c]">
                    Recommended Dose: {sku.dosage}
                  </span>
                  <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#1c1c1e] text-white">
                    {galleryList.length} Studio Angles
                  </span>
                </div>

                {/* Overview Writeup */}
                <div className="space-y-3">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0b835c]">
                    CLINICAL OVERVIEW & RATIONALE
                  </h3>
                  <p className="text-sm sm:text-base text-[#303033] font-medium leading-relaxed">
                    {sku.detailsOverview || sku.description}
                  </p>
                </div>

                {/* Key Clinical Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      WHO-GMP PARTNER FACILITY
                    </span>
                    <p className="text-xs font-bold text-[#1c1c1e] flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#0b835c]" />
                      {sku.manufacturer}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      STATUTORY FSSAI LICENCE
                    </span>
                    <p className="text-xs font-bold text-[#1c1c1e] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#0b835c]" />
                      {sku.licence}
                    </p>
                  </div>
                </div>

                {/* Indications Checklist */}
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-3">
                  <h4 className="text-xs font-bold text-[#0b835c] uppercase tracking-wider flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    RECOMMENDED CLINICAL INDICATIONS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sku.indications.map((ind, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#1c1c1e]">
                        <CheckCircle2 className="w-4 h-4 text-[#0b835c] flex-shrink-0" />
                        <span>{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXPANDED ACCORDIONS / DETAIL TABS */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-[#eef2ef]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="clinical-label text-[11px]">
                {sku.isDevice ? 'DIAGNOSTIC DEVICE SPECIFICATION' : 'FORMULATION SPECIFICATION'}
              </span>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#1c1c1e] font-normal tracking-tight">
                Comprehensive Technical <span className="text-[#0b835c] italic font-normal">Dossier</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Detailed breakdowns of active ingredients, clinical benefits, administration guidelines, and safety profiles.
              </p>
            </div>

            {/* Accordion List Container */}
            <div className="max-w-4xl mx-auto space-y-4">
              
              {/* 1. DETAILS / CLINICAL RATIONALE */}
              <div id="overview-accordion" className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs">
                <button
                  onClick={() => toggleAccordion('details')}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#1c1c1e] hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#0b835c] flex items-center justify-center font-bold">
                      <Info className="w-4 h-4" />
                    </div>
                    <span>Formulation Details & Biological Rationale</span>
                  </span>
                  {openAccordion === 'details' ? (
                    <ChevronUp className="w-5 h-5 text-[#0b835c]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openAccordion === 'details' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium"
                    >
                      <p>{sku.detailsOverview || sku.description}</p>
                      <p>
                        All batches are manufactured in strict compliance with Good Manufacturing Practice (GMP) standards. Every production run undergoes rigorous assay verification to ensure consistency, purity, and thermal stability across shelf-life duration.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. INGREDIENTS (DECLARATION OF ACTIVES) */}
              <div id="ingredients" className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs">
                <button
                  onClick={() => toggleAccordion('ingredients')}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#1c1c1e] hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#0b835c] flex items-center justify-center font-bold">
                      <FlaskConical className="w-4 h-4" />
                    </div>
                    <span>
                      {sku.isDevice ? 'Optical Magnification & Component Specifications' : 'Assay-Declared Active Ingredients & Potency'}
                    </span>
                  </span>
                  {openAccordion === 'ingredients' ? (
                    <ChevronUp className="w-5 h-5 text-[#0b835c]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openAccordion === 'ingredients' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-4"
                    >
                      <div className="grid grid-cols-1 gap-3">
                        {sku.actives.map((act, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold text-[#1c1c1e]">{act.name}</h4>
                                {act.standard && (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-[#0b835c]">
                                    {act.standard}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-500">{act.purpose}</p>
                            </div>
                            <span className="text-xs font-extrabold text-[#0b835c] bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs self-start sm:self-center">
                              {act.dose}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. CLINICAL BENEFITS */}
              <div id="benefits" className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs">
                <button
                  onClick={() => toggleAccordion('benefits')}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#1c1c1e] hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#0b835c] flex items-center justify-center font-bold">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <span>Clinical Benefits & Physiological Impact</span>
                  </span>
                  {openAccordion === 'benefits' ? (
                    <ChevronUp className="w-5 h-5 text-[#0b835c]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openAccordion === 'benefits' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {sku.clinicalBenefits ? (
                          sku.clinicalBenefits.map((ben, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                              <h4 className="text-xs font-bold text-[#1c1c1e] flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#0b835c]" />
                                {ben.title}
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed font-medium">{ben.desc}</p>
                            </div>
                          ))
                        ) : (
                          <p className="text-xs text-slate-600">Formulated to deliver targeted clinical efficiency.</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 4. HOW TO USE & DOSAGE */}
              <div id="how-to-use" className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs">
                <button
                  onClick={() => toggleAccordion('howToUse')}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#1c1c1e] hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#0b835c] flex items-center justify-center font-bold">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span>How to Use & Dosage Instructions</span>
                  </span>
                  {openAccordion === 'howToUse' ? (
                    <ChevronUp className="w-5 h-5 text-[#0b835c]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openAccordion === 'howToUse' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-4"
                    >
                      {/* Prescribed Dosage Banner */}
                      <div className="p-4 rounded-2xl bg-[#1c1c1e] text-white space-y-1">
                        <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                          PRESCRIBED DOSAGE STATEMENT
                        </span>
                        <p className="text-sm font-bold">{sku.dosageInstruction || sku.dosage}</p>
                      </div>

                      {sku.howToUse && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Optimal Timing</span>
                            <p className="text-xs font-semibold text-[#1c1c1e]">{sku.howToUse.timing}</p>
                          </div>

                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Administration Protocol</span>
                            <p className="text-xs font-semibold text-[#1c1c1e]">{sku.howToUse.instructions}</p>
                          </div>

                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Recommended Therapy Duration</span>
                            <p className="text-xs font-semibold text-[#1c1c1e]">{sku.howToUse.duration}</p>
                          </div>

                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Physician Pro-Tip</span>
                            <p className="text-xs font-semibold text-[#0b835c]">{sku.howToUse.tips}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 5. MECHANISM OF ACTION (MOA) & PHARMACOKINETICS */}
              <div id="moa" className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs">
                <button
                  onClick={() => toggleAccordion('moa')}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#1c1c1e] hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#0b835c] flex items-center justify-center font-bold">
                      <Atom className="w-4 h-4 animate-spin" style={{ animationDuration: '12s' }} />
                    </div>
                    <span>Mechanism of Action (MOA) & Biological Pathway</span>
                  </span>
                  {openAccordion === 'moa' ? (
                    <ChevronUp className="w-5 h-5 text-[#0b835c]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openAccordion === 'moa' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-5"
                    >
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {sku.mechanism}
                      </p>

                      {/* 3-Step MOA Visual Pathway */}
                      {sku.moaSteps && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                          {sku.moaSteps.map((m, idx) => (
                            <div key={idx} className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 space-y-2 relative">
                              <span className="w-7 h-7 rounded-lg bg-[#0b835c] text-white text-xs font-bold flex items-center justify-center">
                                {m.step}
                              </span>
                              <h4 className="text-xs font-bold text-[#1c1c1e]">{m.title}</h4>
                              <p className="text-[11px] text-slate-500 leading-snug">{m.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Pharmacokinetics Grid */}
                      {sku.pharmacokinetics && (
                        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                          <div>
                            <span className="text-[10px] text-slate-500 font-bold uppercase block">Bioavailability</span>
                            <span className="font-extrabold text-[#0b835c]">{sku.pharmacokinetics.bioavailability}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 font-bold uppercase block">Peak (Tmax)</span>
                            <span className="font-extrabold text-[#1c1c1e]">{sku.pharmacokinetics.tMax}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 font-bold uppercase block">Half-Life (t1/2)</span>
                            <span className="font-extrabold text-[#1c1c1e]">{sku.pharmacokinetics.halfLife}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 font-bold uppercase block">Elimination</span>
                            <span className="font-extrabold text-[#1c1c1e]">{sku.pharmacokinetics.elimination}</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 6. SAFETY, CONTRAINDICATIONS & STORAGE */}
              <div id="safety" className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs">
                <button
                  onClick={() => toggleAccordion('safety')}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#1c1c1e] hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#0b835c] flex items-center justify-center font-bold">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span>Safety Profile, Contraindications & Storage Conditions</span>
                  </span>
                  {openAccordion === 'safety' ? (
                    <ChevronUp className="w-5 h-5 text-[#0b835c]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openAccordion === 'safety' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-4"
                    >
                      {sku.safetyProfile ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                            <span className="text-[10px] font-bold text-rose-600 uppercase">Contraindications</span>
                            <p className="text-xs font-medium text-slate-700">{sku.safetyProfile.contraindications}</p>
                          </div>

                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                            <span className="text-[10px] font-bold text-amber-600 uppercase">Adverse Reaction Profile</span>
                            <p className="text-xs font-medium text-slate-700">{sku.safetyProfile.adverseReactions}</p>
                          </div>

                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                            <span className="text-[10px] font-bold text-[#0b835c] uppercase">Pregnancy / Lactation Safety</span>
                            <p className="text-xs font-medium text-slate-700">{sku.safetyProfile.pregnancyCategory}</p>
                          </div>

                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Storage Instructions</span>
                            <p className="text-xs font-medium text-slate-700">{sku.safetyProfile.storage}</p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-xs text-slate-600 font-medium">Store in a cool, dry place below 25°C.</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* YOU MAY ALSO LIKE (RELATED FORMULATIONS CAROUSEL/GRID) */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-[#eef2ef] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="clinical-label text-[11px]">THERAPEUTIC CATALOG</span>
                <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#1c1c1e] font-normal tracking-tight">
                  You May <span className="text-[#0b835c] italic font-normal">Also Like</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">Explore related doctor-channel formulations across our clinical sectors.</p>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b835c] hover:underline"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Related SKU Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((relProduct, idx) => (
                <motion.div
                  key={relProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-[28px] border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
                  onClick={() => navigate(`/product/${relProduct.slug}`)}
                >
                  <div className="p-5 space-y-4">
                    {/* Thumbnail Image */}
                    <div className="w-full h-44 rounded-2xl bg-slate-100 overflow-hidden relative border border-slate-200/70">
                      {relProduct.imageUrl ? (
                        <img
                          src={relProduct.imageUrl}
                          alt={relProduct.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${relProduct.imageColor} p-4 flex flex-col justify-between text-white`}>
                          <span className="text-[10px] font-bold text-emerald-300 uppercase">{relProduct.category}</span>
                          <h4 className="text-xl font-bold">{relProduct.title}</h4>
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-[#0b835c] uppercase tracking-wider block">
                        {relProduct.category}
                      </span>
                      <h3 className="text-lg font-bold text-[#1c1c1e] group-hover:text-[#0b835c] transition-colors">
                        {relProduct.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {relProduct.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-[11px] font-bold text-[#0b835c] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {relProduct.form}
                    </span>
                    <span className="text-xs font-bold text-[#0b835c] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Specs <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* RELATED CLINICAL RESEARCH & ARTICLES ("BLOG POSTS") */}
        {/* ========================================================================= */}
        {relatedBlogs.length > 0 && (
          <section className="py-14 sm:py-20 bg-white border-b border-[#eef2ef] text-left">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="clinical-label text-[11px]">CLINICAL KNOWLEDGE HUB</span>
                  <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#1c1c1e] font-normal tracking-tight">
                    Related Clinical <span className="text-[#0b835c] italic font-normal">Research Papers</span>
                  </h2>
                </div>

                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b835c] hover:underline"
                >
                  <span>Explore All Clinical Papers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/blog/${blog.slug}`}
                    className="p-6 rounded-[28px] bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all space-y-4 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-[#0b835c] uppercase">{blog.category}</span>
                        <span className="text-slate-400">{blog.readTime}</span>
                      </div>

                      <h3 className="text-base font-bold text-[#1c1c1e] group-hover:text-[#0b835c] transition-colors leading-snug">
                        {blog.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {blog.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-[#0b835c]">
                      <span>Read Clinical Dossier</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>
        )}

      </main>

      {/* ========================================================================= */}
      {/* FULLSCREEN LIGHTBOX ZOOM INSPECT MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl p-4 sm:p-6 overflow-hidden">
            
            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between gap-4 text-white z-10 py-2 border-b border-white/15">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#0b835c] text-white text-[11px] font-bold uppercase tracking-wider">
                  {sku.title} HD GALLERY
                </span>
                <span className="text-xs text-slate-300 font-semibold hidden sm:inline">
                  {getAngleLabel(lightboxIndex)} ({lightboxIndex + 1} of {galleryList.length})
                </span>
              </div>

              {/* Zoom & Action Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.5))}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                  title="Zoom Out (-)"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>

                <span className="text-xs font-mono font-bold text-emerald-400 min-w-[40px] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>

                <button
                  onClick={() => setZoomLevel(Math.min(2.5, zoomLevel + 0.5))}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                  title="Zoom In (+)"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setIsLightboxOpen(false);
                    setZoomLevel(1);
                  }}
                  className="p-2 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white transition-all cursor-pointer ml-2"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Lightbox Zoom Container */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-auto scrollbar-none">
              
              {/* Previous Image Arrow */}
              {galleryList.length > 1 && (
                <button
                  onClick={() => {
                    setLightboxIndex((prev) => (prev - 1 + galleryList.length) % galleryList.length);
                    setZoomLevel(1);
                  }}
                  className="absolute left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#0b835c] border border-white/20 text-white transition-all shadow-lg cursor-pointer"
                  title="Previous Angle (←)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Zoomable Image Element */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: zoomLevel }}
                transition={{ duration: 0.25 }}
                className="max-w-full max-h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                <img
                  src={galleryList[lightboxIndex]}
                  alt={`${sku.title} - Full Zoom View ${lightboxIndex + 1}`}
                  className="max-h-[78vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>

              {/* Next Image Arrow */}
              {galleryList.length > 1 && (
                <button
                  onClick={() => {
                    setLightboxIndex((prev) => (prev + 1) % galleryList.length);
                    setZoomLevel(1);
                  }}
                  className="absolute right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#0b835c] border border-white/20 text-white transition-all shadow-lg cursor-pointer"
                  title="Next Angle (→)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Lightbox Footer Thumbnail Bar */}
            <div className="z-10 py-2 border-t border-white/15 flex items-center justify-center gap-3 overflow-x-auto scrollbar-none">
              {galleryList.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setLightboxIndex(idx);
                    setZoomLevel(1);
                  }}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    lightboxIndex === idx
                      ? 'border-emerald-400 ring-2 ring-emerald-400/50 scale-110 z-10'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumb ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* HCP DOSSIER & SAMPLE PACK REQUEST MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showDossierModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[32px] p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative space-y-5"
            >
              <button
                onClick={() => {
                  setShowDossierModal(false);
                  setHcpFormSubmitted(false);
                }}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#0b835c] text-[10px] font-bold tracking-wider uppercase">
                  HCP & PHYSICIAN REQUEST
                </span>
                <h3 className="text-2xl font-bold text-[#1c1c1e] mt-2">
                  Request {sku.title} Prescribing Pack
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Selected Variant: <strong className="text-[#1c1c1e]">{selectedVariant.size}</strong>
                </p>
              </div>

              {hcpFormSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#0b835c] mx-auto animate-bounce" />
                  <h4 className="text-base font-bold text-[#1c1c1e]">Request Transmitted to Medical Team</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you. Our medical representative in Hyderabad will dispatch your sample pack and clinical dossier within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setShowDossierModal(false);
                      setHcpFormSubmitted(false);
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#1c1c1e] text-white text-xs font-bold cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setHcpFormSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-xs font-bold text-[#1c1c1e] block mb-1">Full Name & Qualification *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Kumar, MD (Obs & Gyn)"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:outline-none focus:border-[#0b835c]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#1c1c1e] block mb-1">Clinic / Hospital Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Care Hospital, Hyderabad"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:outline-none focus:border-[#0b835c]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-[#1c1c1e] block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="doctor@hospital.org"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:outline-none focus:border-[#0b835c]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#1c1c1e] block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9985553875"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:outline-none focus:border-[#0b835c]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-[#0b835c] hover:bg-[#086849] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <span>Transmit Prescribing Request</span>
                    <Send className="w-4 h-4 text-emerald-200" />
                  </button>
                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* POP-UP DOSSIER DOWNLOAD CONFIRMATION MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {downloadedDossierModal && sku.dossier && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDownloadedDossierModal(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-lg rounded-[32px] bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-8 z-10 text-left space-y-6"
            >
              {/* Close Button Top Right */}
              <button
                onClick={() => setDownloadedDossierModal(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Icon & Status */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#0b835c] flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                  <Download className="w-7 h-7 text-[#0b835c] animate-bounce" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0b835c] bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/80">
                    CLINICAL DOSSIER DOWNLOADED
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1c1e] mt-1">Document Downloaded Successfully!</h3>
                  <p className="text-xs text-slate-500 font-medium">Ready for immediate reading</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The clinical literature file <strong className="text-[#1c1c1e]">{sku.dossier.fileName}</strong> ({sku.dossier.fileSize}) has been downloaded to your device. You can now open, inspect, or print the full study.
              </p>

              {/* Document Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Product:</span>
                  <span className="font-bold text-[#1c1c1e]">{sku.title} ({sku.category})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Document Title:</span>
                  <span className="font-semibold text-[#0b835c] truncate max-w-[220px]">{sku.dossier.title}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">File Format:</span>
                  <span className="font-bold text-slate-800 uppercase px-2 py-0.5 bg-slate-200 rounded">{sku.dossier.fileType}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={sku.dossier.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-5 rounded-full bg-[#0b835c] hover:bg-[#086849] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open & Read Document</span>
                </a>

                <button
                  onClick={() => handleDownloadDossier(sku.dossier!.fileUrl, sku.dossier!.fileName)}
                  className="px-5 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Re-Download</span>
                </button>

                <button
                  onClick={() => setDownloadedDossierModal(false)}
                  className="px-5 py-3.5 rounded-full bg-[#1c1c1e] hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
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
