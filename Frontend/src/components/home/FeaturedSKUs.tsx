import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { ParallaxLayer, ParallaxBackground } from '../common/ParallaxSection';
import { PRODUCTS_CATALOG } from '../../data/productsData';

export const FeaturedSKUs: React.FC = () => {
  const navigate = useNavigate();
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

  // Get top 3 featured products from catalog (CYSTORIN, QUICK NAP, FATEASE-5)
  const featuredIds = ['cystorin', 'quicknap', 'fatease-5'];
  const featuredProducts = PRODUCTS_CATALOG.filter((sku) =>
    featuredIds.includes(sku.id)
  );

  return (
    <section className="py-20 sm:py-24 bg-[#f8fafc] border-y border-slate-200/80 relative overflow-hidden text-left">
      <ParallaxBackground speed={-0.2} />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0b835c] animate-pulse" />
              <span className="clinical-label text-[11px]">FLAGSHIP FORMULATIONS</span>
            </div>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[46px] text-[#1c1c1e] font-normal tracking-tight">
              Top Featured <span className="text-[#0b835c] italic font-normal">Formulations</span>
            </h2>
            <p className="text-sm sm:text-base text-[#676768]">
              Our leading doctor-channel products engineered for maximum therapeutic efficacy and clinical evidence compliance.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-[#0b835c] transition-all shadow-xs cursor-pointer"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid matching ProductsPage.tsx */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((sku, index) => {
            const parallaxSpeed = index === 0 ? 0.12 : index === 1 ? -0.12 : 0.16;

            return (
              <ParallaxLayer key={sku.id} speed={parallaxSpeed} className="h-full">
                <div
                  className={`rounded-[32px] bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between group text-left overflow-hidden cursor-pointer h-full transition-all duration-300 ease-out ${
                    pressedSkuId === sku.id
                      ? 'scale-[0.985] shadow-xl -translate-y-0.5 ring-1 ring-[#0b835c]/15'
                      : 'hover:shadow-xl hover:-translate-y-1.5'
                  }`}
                  onClick={() => openProduct(sku)}
                >
                  {/* Top Image Showcase Container */}
                  <div className="relative h-64 w-full bg-slate-100 overflow-hidden flex items-center justify-center border-b border-slate-100">
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

                    {/* Gallery Views Badge */}
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
                        <span className="text-[10px] font-bold text-[#0b835c] uppercase tracking-wider block mb-1">
                          {sku.category}
                        </span>
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
              </ParallaxLayer>
            );
          })}
        </div>

      </div>
    </section>
  );
};
