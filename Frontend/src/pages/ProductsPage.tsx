import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PRODUCTS_CATALOG } from '../data/productsData';
import { Search, Filter, ShieldAlert, FileText, ChevronRight } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedForm, setSelectedForm] = useState<string>('all');

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

      <main className="pt-28 pb-20">
        
        {/* Dark Green Gradient Top Container (Hero Header + Search/Filter Bar) */}
        <div className="bg-gradient-to-b from-[#061e18] via-[#092b23] to-[#0c362c] text-white border-b border-[#0b835c]/30 shadow-md">
          
          {/* Page Hero Header */}
          <section className="py-14 sm:py-16 text-left">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-[56px] font-normal text-white leading-[1.12] tracking-tight max-w-4xl">
                7 Standardized Bio-Nutraceutical{' '}
                <span className="text-emerald-300 italic font-normal">Formulations.</span>
              </h1>
            </div>
          </section>

          {/* Filter & Search Bar (Included inside Dark Green Header Zone) */}
          <section className="pb-10 pt-2 text-left">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Search Input */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-emerald-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search SKU name, ingredient..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/10 text-xs text-white border border-white/20 placeholder:text-slate-300 focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300 backdrop-blur-md"
                  />
                </div>

                {/* Form Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none">
                  <Filter className="w-4 h-4 text-emerald-300 hidden sm:block flex-shrink-0" />
                  {forms.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedForm(f.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                        selectedForm === f.id
                          ? 'bg-white text-[#0b835c] shadow-md font-bold'
                          : 'bg-white/10 text-slate-200 border border-white/20 hover:bg-white/20'
                      }`}
                    >
                      {f.name}
                    </button>
                  ))}
                </div>

              </div>

              {/* Category Filter Chips */}
              <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-emerald-400 text-[#061e18] shadow-md scale-105 font-bold'
                        : 'bg-white/10 text-slate-200 border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

            </div>
          </section>

        </div>

        {/* Minimalist Product Card Grid (Clean White/Mist Gray Section) */}
        <section className="py-16 bg-white text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between mb-8">
              <span className="clinical-label text-[11px] text-[#0b835c]">
                SHOWING {filteredProducts.length} QUALIFIED SKUs
              </span>
              {(searchQuery || selectedCategory !== 'all' || selectedForm !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedForm('all');
                  }}
                  className="text-xs text-[#0b835c] font-bold hover:underline"
                >
                  Reset All Filters
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-16 text-center card-mist rounded-[24px] bg-[#f8fafc] border border-slate-200/80">
                <ShieldAlert className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-[#1c1c1e]">No SKUs Match Your Search Filter</h3>
                <p className="text-xs text-[#676768] mt-1">Try clearing your keyword or selecting a different sector.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((sku) => (
                  <div
                    key={sku.id}
                    className="p-8 rounded-[32px] bg-[#f8fafc] border border-slate-200/70 hover:bg-white hover:border-[#0b835c]/50 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
                  >
                    <div className="space-y-6">
                      
                      {/* Top Header Tag & Grade */}
                      <div className="flex items-center justify-between">
                        <span className="clinical-label text-[10px] text-[#0b835c] uppercase">
                          {sku.category}
                        </span>
                        <span className="text-[11px] font-semibold text-[#0b835c] bg-white px-2.5 py-0.5 rounded-full border border-slate-200/80">
                          {sku.evidenceGrade}
                        </span>
                      </div>

                      {/* Editorial Title & Form */}
                      <div>
                        <h3 className="font-editorial-serif text-3xl font-normal text-[#1c1c1e] tracking-tight group-hover:text-[#0b835c] transition-colors">
                          {sku.title}
                        </h3>
                        <p className="text-xs text-[#676768] font-semibold mt-1">
                          {sku.form} · <span className="text-[#0b835c]">{sku.dosage}</span>
                        </p>
                      </div>

                      <p className="text-xs text-[#676768] leading-relaxed">
                        {sku.description}
                      </p>

                      {/* Clean Active Formulation Pills */}
                      <div className="space-y-2 pt-4 border-t border-slate-200/60">
                        <span className="clinical-label text-[10px] block text-[#0b835c]">
                          DECLARED ACTIVE FORMULATION
                        </span>
                        <div className="space-y-1.5">
                          {sku.actives.map((act) => (
                            <div
                              key={act.name}
                              className="bg-white px-3.5 py-2 rounded-xl border border-slate-200/70 flex items-center justify-between text-xs"
                            >
                              <span className="text-[#1c1c1e] font-medium">{act.name}</span>
                              <span className="text-[#0b835c] font-bold">{act.dose}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Bottom Minimal Action Link */}
                    <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-[11px] text-[#676768] font-medium">
                        Lic. 13624999000034
                      </span>
                      <Link
                        to={`/products/${sku.categoryId}/${sku.slug}`}
                        className="text-xs font-bold text-[#0b835c] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Inspect SKU</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* Mandatory Statutory FSSAI Disclosure Block */}
        <section className="py-12 bg-white text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-7 rounded-[28px] bg-[#1c1c1e] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0b835c] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    MANDATORY STATUTORY REGULATORY DISCLOSURE
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                    Products marketed by <strong className="text-emerald-400">Varuta Pharma Pvt. Ltd.</strong> (FSSAI Lic. No. <strong className="text-emerald-400">13624999000034</strong>) are nutraceutical and food supplements manufactured by licensed WHO-GMP certified partners (Gencleus Pharma Pvt. Ltd. & Peptas Pharma Pvt. Ltd.). They are not intended to diagnose, treat, cure, or prevent any disease. Consult a registered medical practitioner before use.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="btn-outline-pill border-white/30 text-white hover:bg-white hover:text-[#1c1c1e] text-xs py-2.5 px-5 whitespace-nowrap flex-shrink-0"
              >
                Request HCP Dossier
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
