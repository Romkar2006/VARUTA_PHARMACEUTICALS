import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PRODUCTS_CATALOG } from '../data/productsData';
import { Sparkles, CheckCircle2, ArrowLeft, ShieldCheck, FileText, ChevronRight, Building2, Atom } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { sku: skuParam } = useParams<{ sku?: string }>();
  const navigate = useNavigate();

  const sku = PRODUCTS_CATALOG.find(
    (p) => p.slug.toLowerCase() === (skuParam || '').toLowerCase() || p.id.toLowerCase() === (skuParam || '').toLowerCase()
  ) || PRODUCTS_CATALOG[0];

  return (
    <div className="min-h-screen bg-white text-[#1c1c1e] selection:bg-[#0b835c] selection:text-white font-sans">
      <Navbar />

      <main className="pt-28 pb-20">
        
        {/* Breadcrumb Bar */}
        <section className="py-4 bg-[#eff1f6]/60 border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-[#676768]">
              <Link to="/" className="hover:text-[#0b835c]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/products" className="hover:text-[#0b835c]">Products</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#0b835c] font-semibold">{sku.category}</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#1c1c1e] font-bold">{sku.title}</span>
            </div>
          </div>
        </section>

        {/* Product Detail Hero */}
        <section className="py-16 bg-white border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0b835c] hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Catalog</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (5 cols): Product Card Showcase */}
              <div className="lg:col-span-5">
                <div className="card-mist p-8 rounded-[32px] bg-gradient-to-br from-slate-50 via-[#eff1f6] to-emerald-50/40 border border-slate-200/90 shadow-md relative overflow-hidden text-left space-y-6">
                  
                  {/* Header Badge */}
                  <div className="flex items-center justify-between">
                    <span className="tag-pill-green bg-white shadow-xs">
                      {sku.badge}
                    </span>
                    <span className="text-xs font-semibold text-[#0b835c] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#0b835c]" /> {sku.evidenceGrade}
                    </span>
                  </div>

                  {/* SKU Hero Graphic Block */}
                  <div className="w-full h-[280px] rounded-[24px] bg-gradient-to-br from-[#071311] via-[#0b835c] to-[#044e36] text-white p-6 flex flex-col justify-between shadow-inner relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest text-emerald-300 uppercase">
                        {sku.category}
                      </span>
                      <span className="text-[10px] text-emerald-100/80">FSSAI LIC. 13624999000034</span>
                    </div>

                    <div>
                      <h2 className="text-4xl font-extrabold tracking-tight text-white mb-1">
                        {sku.title}
                      </h2>
                      <p className="text-xs text-emerald-200 font-medium">
                        {sku.tagline}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                      <span className="text-slate-200">Form: {sku.form}</span>
                      <span className="font-bold text-white">{sku.dosage}</span>
                    </div>
                  </div>

                  {/* Verification Badges */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/80">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#1c1c1e]">
                      <Building2 className="w-4 h-4 text-[#0b835c]" />
                      <span>Partner Facility: {sku.manufacturer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#1c1c1e]">
                      <ShieldCheck className="w-4 h-4 text-[#0b835c]" />
                      <span>{sku.licence}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column (7 cols): SKU Technical Details */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <span className="clinical-label text-[11px] block">
                    FORMULATION SPECIFICATION
                  </span>
                  <h1 className="font-editorial-serif text-4xl sm:text-5xl text-[#1c1c1e] font-normal tracking-tight mt-1">
                    {sku.title}
                  </h1>
                  <p className="text-base text-[#0b835c] font-semibold mt-1">
                    {sku.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#eff1f6] text-[#1c1c1e]">
                    {sku.form}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0b835c]/10 text-[#0b835c]">
                    Recommended Dose: {sku.dosage}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#303033] font-medium leading-relaxed">
                  {sku.description}
                </p>

                {/* Primary Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-[#eff1f6]">
                  <Link
                    to="/contact"
                    className="btn-dark-pill flex items-center gap-2 text-xs py-3 px-6"
                  >
                    <span>Request HCP Prescribing Dossier</span>
                    <FileText className="w-4 h-4 text-emerald-300" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Declared Active Formulation Breakdown */}
        <section className="py-16 bg-slate-50 border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-2 mb-8">
              <span className="clinical-label text-[11px]">DECLARATION OF ACTIVE INGREDIENTS</span>
              <h2 className="font-editorial-serif text-2xl sm:text-3xl text-[#1c1c1e] font-normal tracking-tight">
                Assay-Declared <span className="text-[#0b835c] italic font-normal">Active Formulation</span>
              </h2>
            </div>

            <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <div className="space-y-4">
                {sku.actives.map((act, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#eff1f6] border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1c1e]">{act.name}</h4>
                      <p className="text-xs text-[#676768] mt-0.5">{act.purpose}</p>
                    </div>
                    <span className="text-xs font-extrabold text-[#0b835c] bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs self-start sm:self-center">
                      {act.dose}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Target Mechanism & Indications Grid */}
        <section className="py-16 bg-white border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Target Biological Deficiency Pathway (7 cols) */}
              <div className="lg:col-span-7 space-y-4 card-mist p-8 rounded-[32px] bg-gradient-to-br from-slate-50 to-[#eff1f6] border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-2">
                  <Atom className="w-4 h-4 text-[#0b835c] animate-spin" style={{ animationDuration: '10s' }} />
                  <span className="clinical-label text-[11px]">BIOLOGICAL MECHANISM OF ACTION</span>
                </div>
                <h3 className="text-xl font-bold text-[#1c1c1e]">Target Pathway</h3>
                <p className="text-xs sm:text-sm text-[#303033] leading-relaxed font-medium">
                  {sku.mechanism}
                </p>
              </div>

              {/* Approved Clinical Indications (5 cols) */}
              <div className="lg:col-span-5 space-y-4 card-mist p-8 rounded-[32px] bg-white border border-slate-200/90 shadow-xs">
                <span className="clinical-label text-[11px]">CLINICAL INDICATIONS</span>
                <h3 className="text-xl font-bold text-[#1c1c1e]">Recommended Prescribing Scope</h3>
                <div className="space-y-2.5 pt-1">
                  {sku.indications.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#1c1c1e] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#0b835c] flex-shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mandatory Statutory FSSAI Disclosure Block */}
        <section className="py-12 bg-white text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-mist p-6 rounded-[24px] bg-[#1c1c1e] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
