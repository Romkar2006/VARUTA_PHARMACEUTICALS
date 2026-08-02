import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const LicenseMarquee: React.FC = () => {
  const enhancedBadges = [
    {
      name: 'HACCP CERTIFIED',
      subtitle: 'Hazard Analysis Critical Control Point',
      image: '/badges/haccp.png',
      alt: 'HACCP Certified Seal',
    },
    {
      name: 'ISO 22000:2018',
      subtitle: 'Food Safety Management System',
      image: '/badges/iso.png',
      alt: 'ISO 22000:2018 Seal',
    },
    {
      name: 'GOOD MANUFACTURING PRACTICE',
      subtitle: 'WHO-GMP Partnered Standard',
      image: '/badges/gmp.png',
      alt: 'GMP Quality Seal',
    },
    {
      name: 'KOSHER CERTIFIED',
      subtitle: 'Verified Pure Formulation',
      image: '/badges/kosher.png',
      alt: 'Kosher Certified Seal',
    },
    {
      name: 'HALAL 100% CERTIFIED',
      subtitle: 'Halal Food Authenticated',
      image: '/badges/halal.png',
      alt: 'Halal 100% Certified Seal',
    },
    {
      name: 'CE COMPLIANCE',
      subtitle: 'European Conformity Mark',
      image: '/badges/ce.png',
      alt: 'CE Mark Seal',
    },
    {
      name: 'FSSAI MARKETER LICENCE',
      subtitle: 'Lic. No. 13624999000034',
      image: '/badges/fssai.png',
      alt: 'FSSAI Marketer License Badge',
    },
  ];

  // Duplicate list for continuous seamless infinite marquee animation
  const marqueeItems = [...enhancedBadges, ...enhancedBadges];

  return (
    <section className="py-10 bg-white border-y border-[#eff1f6] overflow-hidden relative">
      <div className="max-w-[1240px] mx-auto px-4 mb-5 text-left flex items-center justify-between">
        <div>
          <span className="clinical-label text-[11px] block">
            VERIFIED QUALIFIED REGULATORY LICENCES & CERTIFICATIONS
          </span>
          <h3 className="text-lg font-bold text-[#1c1c1e] tracking-tight">
            Official Product Packaging Quality Badges
          </h3>
        </div>
        <span className="text-xs text-[#676768] font-medium hidden sm:block">
          Authentic FSSAI & Certified Standards
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Edge Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee flex items-center gap-6">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="card-mist px-6 py-4 rounded-[22px] flex items-center gap-4.5 min-w-[290px] bg-[#eff1f6] border border-slate-200/90 shadow-xs hover:scale-[1.03] hover:border-[#0b835c]/40 transition-all duration-300 group"
            >
              {/* Badge Image Container */}
              <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center border border-slate-200/80 shadow-xs flex-shrink-0 group-hover:shadow-md transition-shadow">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <ShieldCheck className="w-7 h-7 text-[#0b835c]" />
                )}
              </div>

              {/* Title & Subtitle */}
              <div>
                <h4 className="text-xs font-extrabold text-[#1c1c1e] tracking-tight">{item.name}</h4>
                <p className="text-[11px] text-[#676768] font-medium mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
