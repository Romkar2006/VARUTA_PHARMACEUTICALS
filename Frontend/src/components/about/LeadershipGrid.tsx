import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, UserCheck, Sparkles } from 'lucide-react';

interface Leader {
  id: string;
  name: string;
  role: string;
  period: string;
  status: 'past' | 'present';
  bio: string;
  highlights: string[];
}

const LEADERSHIP_TEAM: Leader[] = [
  {
    id: 'past-1',
    name: 'Dr. R. K. Paruchuri',
    role: 'Founding Advisory Director (Heritage)',
    period: '2021 - 2023',
    status: 'past',
    bio: 'Pioneered early bio-nutraceutical research frameworks and established initial clinical trial protocols for iron deficiency formulations.',
    highlights: ['Bio-Nutraceutical Research Frameworks', 'Lactoferrin Transport Studies'],
  },
  {
    id: 'present-1',
    name: 'Rohith Paruchuri',
    role: 'Managing Director & CEO',
    period: '2023 - Present',
    status: 'present',
    bio: 'Spearheading national doctor-channel expansion, WHO-GMP manufacturing partnerships, and statutory FSSAI compliance.',
    highlights: ['WHO-GMP Alliances', '7 Therapeutic Sectors Rollout', 'FSSAI Lic. 13624999000034'],
  },
  {
    id: 'present-2',
    name: 'Executive Medical Board',
    role: 'Clinical Integrity & Regulatory Panel',
    period: '2024 - Present',
    status: 'present',
    bio: 'Overseeing clinical dossier compilation, botanical assay verification, and physician literature disclosures.',
    highlights: ['Assay Standardisation', 'DMR Act 1954 Compliance'],
  },
];

export const LeadershipGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-[#eff1f6] text-left">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-[#0b835c]" />
            <span className="clinical-label text-[11px]">CORPORATE GOVERNANCE</span>
          </div>
          <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[46px] text-[#1c1c1e] font-normal leading-tight tracking-tight">
            Leadership & <span className="text-[#0b835c] italic font-normal">Scientific Board</span>
          </h2>
          <p className="text-sm sm:text-base text-[#676768]">
            Honoring historical research stewardship while driving present corporate expansion under strict regulatory governance.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="space-y-12">
          
          {/* Past Heritage Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-[#0b835c] uppercase tracking-wider">HERITAGE & ADVISORY DIRECTORS</span>
              <div className="h-px bg-slate-200 flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LEADERSHIP_TEAM.filter(l => l.status === 'past').map((leader) => (
                <div
                  key={leader.id}
                  className="card-mist p-7 rounded-[28px] bg-[#eff1f6]/60 border border-slate-200/80 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">{leader.period}</span>
                      <h3 className="text-xl font-bold text-[#1c1c1e] mt-0.5">{leader.name}</h3>
                    </div>
                    <Award className="w-6 h-6 text-[#0b835c]" />
                  </div>
                  <p className="text-xs font-semibold text-[#0b835c]">{leader.role}</p>
                  <p className="text-xs text-[#676768] leading-relaxed">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Glowing Divider Line (Past -> Present Transition Marker) */}
          <div className="relative py-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-slate-200 via-[#0b835c] to-emerald-400 rounded-full shadow-xs"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 rounded-full border border-[#0b835c]/30 text-[10px] font-bold text-[#0b835c] flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#0b835c] animate-pulse" />
              <span>THIS IS WHERE THE COMPANY STANDS TODAY</span>
            </div>
          </div>

          {/* Present Leadership Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-[#0b835c] uppercase tracking-wider">PRESENT EXECUTIVE LEADERSHIP</span>
              <div className="h-px bg-slate-200 flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LEADERSHIP_TEAM.filter(l => l.status === 'present').map((leader) => (
                <div
                  key={leader.id}
                  className="card-mist p-7 rounded-[28px] bg-white border border-[#0b835c] shadow-md ring-2 ring-[#0b835c]/10 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#0b835c] uppercase tracking-widest block">{leader.period}</span>
                      <h3 className="text-xl font-bold text-[#1c1c1e] mt-0.5">{leader.name}</h3>
                    </div>
                    <ShieldCheck className="w-6 h-6 text-[#0b835c]" />
                  </div>
                  <p className="text-xs font-semibold text-[#0b835c]">{leader.role}</p>
                  <p className="text-xs text-[#676768] leading-relaxed">{leader.bio}</p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {leader.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#eff1f6] text-[#1c1c1e]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
