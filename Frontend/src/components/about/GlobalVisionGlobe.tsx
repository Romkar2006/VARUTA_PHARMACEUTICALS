import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { Globe, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// 3D Reassembling Particle Globe R3F Component
const ParticleGlobeMesh: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = React.useMemo(() => {
    const count = 1800;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const radius = 2.4;
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;

      pos[i * 3] = Math.cos(theta) * r * radius;
      pos[i * 3 + 1] = y * radius;
      pos[i * 3 + 2] = Math.sin(theta) * r * radius;

      // Emerald (#0b835c) to Cyan (#06b6d4) gradient
      if (i % 3 === 0) {
        col[i * 3] = 0.043; col[i * 3 + 1] = 0.513; col[i * 3 + 2] = 0.360;
      } else if (i % 2 === 0) {
        col[i * 3] = 0.654; col[i * 3 + 1] = 0.952; col[i * 3 + 2] = 0.815;
      } else {
        col[i * 3] = 0.023; col[i * 3 + 1] = 0.713; col[i * 3 + 2] = 0.831;
      }
    }
    return [pos, col];
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.2;
      pointsRef.current.rotation.x = -0.15;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.9} sizeAttenuation />
      </points>

      {/* Inner Glowing Core */}
      <mesh>
        <sphereGeometry args={[2.1, 32, 32]} />
        <meshBasicMaterial color="#0b835c" transparent opacity={0.08} wireframe />
      </mesh>

      <Sparkles count={100} scale={[6, 6, 6]} size={2} speed={0.5} color="#34d399" />
    </group>
  );
};

export const GlobalVisionGlobe: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#071311] via-[#0b835c] to-[#044e36] text-white text-left relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (6 cols): Editorial Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="tag-pill-green bg-white/10 text-emerald-200 border border-white/20">
                <Globe className="w-3.5 h-3.5 text-emerald-300" />
                OUR GLOBAL VISION
              </span>
            </div>

            <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[46px] text-white font-normal leading-tight tracking-tight">
              One Continuous Thread of{' '}
              <span className="text-emerald-300 italic font-normal">Momentum & Purpose.</span>
            </h2>

            <p className="text-base text-emerald-50/90 font-medium leading-relaxed">
              As our research momentum expands across India, our particles reassemble into a global vision: delivering evidence-graded preventive healthcare to doctors and patients worldwide.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                <span className="text-xs font-bold text-emerald-300 uppercase block">NATIONAL REACH</span>
                <span className="text-xl font-bold text-white block mt-1">7 Sectors</span>
                <span className="text-[11px] text-emerald-100/70 block">Doctor-channel networks</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                <span className="text-xs font-bold text-emerald-300 uppercase block">STANDARDS</span>
                <span className="text-xl font-bold text-white block mt-1">WHO-GMP</span>
                <span className="text-[11px] text-emerald-100/70 block">Partner manufacturing</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="btn-dark-pill bg-white text-[#1c1c1e] hover:bg-emerald-100 flex items-center gap-2 text-xs py-3 px-6"
              >
                <span>Explore Formulations</span>
                <ArrowRight className="w-4 h-4 text-[#0b835c]" />
              </Link>

              <Link
                to="/contact"
                className="btn-outline-pill border-white/30 text-white hover:bg-white hover:text-[#1c1c1e] flex items-center gap-2 text-xs py-3 px-6"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Contact Corporate Office</span>
              </Link>
            </div>

          </div>

          {/* Right Column (6 cols): 3D Reassembling Particle Globe */}
          <div className="lg:col-span-6 h-[500px] sm:h-[580px] w-full relative">
            
            {/* Ambient Particle Marker Badge */}
            <div className="absolute top-4 left-4 z-20 tag-pill-green bg-black/40 text-emerald-200 border border-white/20 text-[10px] flex items-center gap-1.5 backdrop-blur-md">
              <MapPin className="w-3 h-3 text-emerald-300" />
              <span>3D Global Particle Sphere</span>
            </div>

            <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true, antialias: true }}>
              <ambientLight intensity={1.2} />
              <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
              <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.3}>
                <ParticleGlobeMesh />
              </Float>
            </Canvas>
          </div>

        </div>
      </div>
    </section>
  );
};
