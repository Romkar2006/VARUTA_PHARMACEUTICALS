import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PRODUCTS_CATALOG } from '../data/productsData';
import { Search, Filter, ShieldAlert, ChevronRight } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedForm, setSelectedForm] = useState<string>('all');
  const [pressedSkuId, setPressedSkuId] = useState<string | null>(null);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }
    };
  }, []);

  const openProduct = (sku: (typeof PRODUCTS_CATALOG)[number]) => {
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }

    setPressedSkuId(sku.id);
    clickTimerRef.current = setTimeout(() => {
      setPressedSkuId(null);
      navigate(`/products/${sku.categoryId}/${sku.slug}`);
    }, 160);
  };

  const categories = [
    { id: 'all', name: 'All 7 Sectors' },
    { id: 'iron-immunity', name: 'Iron & Immunity' },
    { id: 'womens-health', name: "Women's Health" },
    { id: 'sleep-recovery', name: 'Sleep & Recovery' },
    { id: 'weight-management', name: 'Weight Management' },
    { id: 'cellular-longevity', name: 'Cellular Longevity' },
    { id: 'mens-health', name: "Men's Health" },
  ];

  const forms = [
    { id: 'all', name: 'All Formats' },
    { id: 'Tablet', name: 'Tablet' },
    { id: 'Caplet', name: 'Caplet' },
    { id: 'Film', name: 'Oral Film (ODF)' },
    { id: 'Sachet', name: 'Sachet' },
    { id: 'Capsule', name: 'Capsule' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((sku) => {
      // Category filter
      if (selectedCategory !== 'all' && sku.categoryId !== selectedCategory) {
        return false;
      }

      // Dosage form filter
      if (selectedForm !== 'all' && !sku.form.toLowerCase().includes(selectedForm.toLowerCase())) {
        return false;
      }

      // Keyword search
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = sku.title.toLowerCase().includes(q);
        const matchCategory = sku.category.toLowerCase().includes(q);
        const matchDescription = sku.description.toLowerCase().includes(q);
        const matchActives = sku.actives.some(
          (a) => a.name.toLowerCase().includes(q) || a.dose.toLowerCase().includes(q)
        );

        if (!matchTitle && !matchCategory && !matchDescription && !matchActives) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedForm]);

  return (
    <div className="min-h-screen bg-white text-[#1c1c1e] selection:bg-[#0b835c] selection:text-white font-sans">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        
        {/* Clean Light-Mode Hero Banner & Search Bar */}
        <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-[#eff1f6] relative overflow-hidden text-left">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none" />

          {/* Page Hero Header */}
          <section className="pt-12 sm:pt-16 pb-8">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#0b835c] border border-emerald-200 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0b835c] animate-pulse" />
                <span>STANDARDIZED NUTRACEUTICAL PORTFOLIO</span>
              </div>

              <h1 className="font-editorial-serif text-3xl sm:text-5xl lg:text-[56px] font-normal text-[#1c1c1e] leading-[1.14] tracking-tight max-w-4xl">
                7 Standardized Bio-Nutraceutical{' '}
                <span className="text-[#0b835c] italic font-normal">Formulations.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#676768] font-normal max-w-2xl">
                Formulated from biological mechanism to clinical evidence to dose. Explore flagship SKUs manufactured in WHO-GMP facilities.
              </p>
            </div>
          </section>

          {/* Filter & Search Bar */}
          <section className="pb-10 pt-2">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-3xl border border-slate-200/90 shadow-md">
                
                {/* Search Input */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-[#0b835c] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search SKU name, ingredient..."
                    className="w-full pl-11 pr-4 py-2.5 rounded-full bg-slate-50 text-sm text-[#1c1c1e] border border-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-[#0b835c] focus:ring-2 focus:ring-[#0b835c]/20"
                  />
                </div>

                {/* Form Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none">
                  <Filter className="w-4 h-4 text-[#0b835c] hidden sm:block flex-shrink-0" />
                  {forms.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedForm(f.id)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        selectedForm === f.id
                          ? 'bg-[#0b835c] text-white shadow-sm font-bold'
                          : 'bg-slate-100 text-[#676768] hover:bg-slate-200 hover:text-[#1c1c1e]'
                      }`}
                    >
                      {f.name}
                    </button>
                  ))}
                </div>

              </div>

              {/* Category Filter Chips */}
              <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#1c1c1e] text-white shadow-md font-bold scale-105'
                        : 'bg-white text-[#676768] border border-slate-200 hover:border-slate-300 hover:text-[#1c1c1e]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

            </div>
          </section>

        </div>

        {/* Innovative Visual Product Cards Grid */}
        <section className="py-16 bg-white text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between mb-10">
              <span className="clinical-label text-[11px] text-[#0b835c]">
                SHOWING {filteredProducts.length} QUALIFIED FORMULATIONS
              </span>
              {(searchQuery || selectedCategory !== 'all' || selectedForm !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedForm('all');
                  }}
                  className="text-xs text-[#0b835c] font-bold hover:underline cursor-pointer"
                >
                  Reset All Filters
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-16 text-center rounded-[24px] bg-slate-50 border border-slate-200/80">
                <ShieldAlert className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-[#1c1c1e]">No SKUs Match Your Search Filter</h3>
                <p className="text-xs text-[#676768] mt-1">Try clearing your keyword or selecting a different sector.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((sku) => (
                  <div
                    key={sku.id}
                    onClick={() => openProduct(sku)}
                    className={`rounded-[32px] bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between group text-left overflow-hidden cursor-pointer transition-all duration-300 ease-out ${
                      pressedSkuId === sku.id
                        ? 'scale-[0.985] shadow-xl -translate-y-0.5 ring-1 ring-[#0b835c]/15'
                        : 'hover:shadow-xl hover:-translate-y-1.5'
                    }`}
                  >
                    {/* Top Image Showcase Container */}
                    <div className="relative h-60 w-full bg-slate-100 overflow-hidden flex items-center justify-center border-b border-slate-100">
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
                      
                      {sku.galleryImages && sku.galleryImages.length > 0 && (
                        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-bold tracking-wider flex items-center gap-1 shadow-md">
                          <span>{sku.galleryImages.length} Gallery Views 🔍</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Pushed Down Content Container */}
                    <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        {/* Title & Format */}
                        <div>
                          <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#1c1c1e] tracking-tight group-hover:text-[#0b835c] transition-colors">
                            {sku.title}
                          </h3>
                          <p className="text-xs text-[#0b835c] font-bold mt-1">
                            {sku.form} · <span className="text-[#676768] font-normal">{sku.dosage}</span>
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-[#676768] leading-relaxed line-clamp-3 font-normal">
                          {sku.description}
                        </p>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to={`/products/${sku.categoryId}/${sku.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openProduct(sku);
                          }}
                          className="px-4 py-2 rounded-full bg-slate-100 group-hover:bg-[#0b835c] text-[#1c1c1e] group-hover:text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <span>View Product</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
