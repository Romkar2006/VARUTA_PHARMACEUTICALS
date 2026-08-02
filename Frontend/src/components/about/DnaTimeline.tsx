import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Calendar, Dna, CheckCircle2 } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  pos: [number, number, number];
}

const MILESTONES: Milestone[] = [
  {
    year: '2021',
    title: 'Founding & Scientific Blueprint',
    subtitle: 'Establishment of Varuta Pharma Pvt. Ltd.',
    description: 'Incorporated with the mission to bridge 4 decades of clinical research excellence with modern bio-nutraceutical science.',
    details: ['Ethical marketing model blueprint', 'Doctor-channel strategy initialized', 'Research focus on biological deficiency pathways'],
    pos: [-2.2, 2.5, 0.4],
  },
  {
    year: '2022',
    title: 'Statutory FSSAI License Acquisition',
    subtitle: 'FSSAI Marketer Lic. 13624999000034',
    description: 'Achieved full statutory registration and regulatory compliance for national product distribution.',
    details: ['Licence No. 13624999000034 issued', 'Quality assurance protocols locked', 'Registered office established in Pune, MH'],
    pos: [2.2, 1.2, -0.2],
  },
  {
    year: '2023',
    title: 'WHO-GMP Manufacturing Alliances',
    subtitle: 'Strategic Production Partnerships',
    description: 'Entered exclusive manufacturing partnerships with Gencleus Pharma Pvt. Ltd. and Peptas Pharma Pvt. Ltd.',
    details: ['WHO-GMP certified production lines', 'ISO 22000:2018 food safety integration', 'HPLC assay testing protocols'],
    pos: [-2.2, -0.2, 0.5],
  },
  {
    year: '2024',
    title: '7 Therapeutic Sectors Rollout',
    subtitle: 'Flagship Formulation Launch',
    description: 'Introduced 7 active SKUs targeting Iron Deficiency, Women’s Health, Sleep, Weight Management, Longevity, Men’s Health, and Fertility.',
    details: ['Launch of GUANOLACT, ESTROCLEN & QUICKNAP', 'Fast-acting Oral Disintegrating Film (ODF) tech', '7 deficiency focus areas'],
    pos: [2.2, -1.6, -0.3],
  },
  {
    year: '2025-26',
    title: 'National Doctor-Channel Expansion',
    subtitle: 'Present Operations & Future Horizon',
    description: 'Expanding physician-prescribed availability across major healthcare networks in India with strict statutory transparency.',
    details: ['Corporate office expansion in Hyderabad, TS', 'Batch-level QR quality tracking', 'Evidence-graded dossier distribution'],
    pos: [-2.2, -3.0, 0.6],
  },
];

// 3D DNA Helix Curve Particles R3F Component
const DnaHelixCurve: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = React.useMemo(() => {
    const count = 1200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const turns = 3.5;
    const height = 12;

    for (let i = 0; i < count; i++) {
      const strand = i % 2;
      const t = (i / count) - 0.5;
      const angle = t * Math.PI * 2 * turns + strand * Math.PI;
      const radius = 2.2;

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = t * height;
      pos[i * 3 + 2] = Math.sin(angle) * radius * 0.6;

      // Color gradient from Forest Emerald (#0b835c) to Mint (#a7f3d0) to Cyan (#06b6d4)
      if (strand === 0) {
        col[i * 3] = 0.043; col[i * 3 + 1] = 0.513; col[i * 3 + 2] = 0.360;
      } else {
        col[i * 3] = 0.023; col[i * 3 + 1] = 0.713; col[i * 3 + 2] = 0.831;
      }
    }
    return [pos, col];
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>

      <Sparkles count={80} scale={[6, 12, 4]} size={1.8} speed={0.4} color="#34d399" />
    </group>
  );
};

export const DnaTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-24 bg-white border-b border-[#eff1f6] text-left relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <div className="flex items-center gap-2">
            <Dna className="w-4 h-4 text-[#0b835c] animate-spin" style={{ animationDuration: '10s' }} />
            <span className="clinical-label text-[11px]">OUR CORPORATE JOURNEY</span>
          </div>
          <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[46px] text-[#1c1c1e] font-normal leading-tight tracking-tight">
            Milestones Threaded Along a{' '}
            <span className="text-[#0b835c] italic font-normal">DNA Helix Path</span>
          </h2>
          <p className="text-sm sm:text-base text-[#676768]">
            Following the signature biological particle language of Varuta Pharma, tracking our progression from research blueprint to national doctor-channel presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center 3D R3F DNA Helix Canvas (6 cols) */}
          <div className="lg:col-span-6 h-[560px] sm:h-[640px] w-full relative card-mist rounded-[32px] bg-gradient-to-b from-slate-50 via-[#eff1f6] to-emerald-50/30 border border-slate-200/90 shadow-sm overflow-hidden">
            <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }} gl={{ alpha: true, antialias: true }}>
              <ambientLight intensity={1.2} />
              <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
              <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
                <DnaHelixCurve />
              </Float>
            </Canvas>

            {/* Timeline Progress Readout Bar */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <span className="clinical-label text-[10px] block">ACTIVE MILESTONE</span>
                <span className="text-sm font-bold text-[#1c1c1e]">
                  {MILESTONES[activeStep].year} — {MILESTONES[activeStep].title}
                </span>
              </div>
              <span className="tag-pill-green text-[10px]">
                {activeStep + 1} / {MILESTONES.length}
              </span>
            </div>
          </div>

          {/* Right Milestone Detail Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {MILESTONES.map((m, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={m.year}
                  onClick={() => setActiveStep(idx)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`p-6 rounded-[24px] cursor-pointer transition-all duration-300 border relative ${
                    isActive
                      ? 'bg-white border-[#0b835c] shadow-md ring-2 ring-[#0b835c]/20 scale-[1.01]'
                      : 'bg-[#eff1f6]/70 hover:bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#0b835c] text-white">
                        {m.year}
                      </span>
                      <span className="text-xs font-bold text-[#0b835c]">{m.subtitle}</span>
                    </div>
                    <Calendar className={`w-4 h-4 ${isActive ? 'text-[#0b835c]' : 'text-slate-400'}`} />
                  </div>

                  <h3 className="text-base font-bold text-[#1c1c1e] mb-1">{m.title}</h3>
                  <p className="text-xs text-[#676768] leading-relaxed mb-3">{m.description}</p>

                  {/* SVG Stroke-Draw Connector Details */}
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="pt-3 border-t border-slate-200/80 space-y-2"
                    >
                      {m.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-[#1c1c1e] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0b835c] flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
