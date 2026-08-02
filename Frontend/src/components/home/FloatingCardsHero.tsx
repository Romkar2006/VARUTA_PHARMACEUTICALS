import React, { useRef, useMemo, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { createProductTexture } from '../../utils/createProductTexture';

interface CardData {
  id: string;
  skuName: string;
  category: string;
  actives: string;
  dosage: string;
  tag: string;
  gradientStart: string;
  gradientEnd: string;
  accentColor: string;
  path: string;
  baseAngle: number;
  floatSpeed: number;
}

const CARDS_CONFIG: CardData[] = [
  {
    id: 'guanolact',
    skuName: 'GUANOLACT',
    category: 'Iron Deficiency & Immunity',
    actives: 'Lactoferrin 50mg · Ferrous Bisglycinate 60mg · Disodium Guanosine 5mg',
    dosage: '1 BD (Twice Daily)',
    tag: 'Flagship Lead SKU',
    gradientStart: '#047857',
    gradientEnd: '#064e3b',
    accentColor: '#34d399',
    path: '/products/iron-immunity/guanolact',
    baseAngle: 0,
    floatSpeed: 1.4,
  },
  {
    id: 'estroclen',
    skuName: 'ESTROCLEN',
    category: "Women's Health",
    actives: 'Ocimum sanctum 420mg · Vitex agnus-castus 100mg · Resveratrol 5mg',
    dosage: '1 BD (Twice Daily)',
    tag: 'Hero Formulation',
    gradientStart: '#b45309',
    gradientEnd: '#78350f',
    accentColor: '#fbbf24',
    path: '/products/womens-health/estroclen',
    baseAngle: Math.PI / 2,
    floatSpeed: 1.8,
  },
  {
    id: 'quicknap',
    skuName: 'QUICKNAP',
    category: 'Sleep & Recovery',
    actives: 'Melatonin 5mg · Valerian 25mg · Chamomile 5mg · Vitamin B6 5mg',
    dosage: '1 Oral Film Bedtime',
    tag: 'Fast Release Film',
    gradientStart: '#4338ca',
    gradientEnd: '#1e1b4b',
    accentColor: '#818cf8',
    path: '/products/sleep-recovery/quicknap',
    baseAngle: Math.PI,
    floatSpeed: 1.2,
  },
  {
    id: 'telage',
    skuName: 'TELAGE',
    category: 'Cellular Longevity',
    actives: 'Silybum marianum 250mg · Ashwagandha 500mg · L-Arginine 50mg',
    dosage: '1 BD (Twice Daily)',
    tag: 'Anti-Oxidative Matrix',
    gradientStart: '#0f766e',
    gradientEnd: '#134e4a',
    accentColor: '#2dd4bf',
    path: '/products/cellular-longevity/telage',
    baseAngle: (3 * Math.PI) / 2,
    floatSpeed: 1.5,
  },
];

// Single Volumetric 3D Revolving Card Mesh Component
const VolumetricCardMesh: React.FC<{
  card: CardData;
  mouse: React.MutableRefObject<[number, number]>;
  orbitAngle: React.MutableRefObject<number>;
  isAnyHovered: React.MutableRefObject<boolean>;
}> = ({ card, mouse, orbitAngle, isAnyHovered }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  // Create Card Canvas Texture
  const texture = useMemo(() => createProductTexture(card), [card]);

  // Frame Loop for Unconstrained 3D Orbital Revolving Motion & Mouse Parallax
  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Increment global orbit angle if not hovered
    if (!isAnyHovered.current) {
      orbitAngle.current += delta * 0.26; // Smooth revolving speed
    }

    const currentAngle = card.baseAngle + orbitAngle.current;
    
    // Perfectly proportioned 3D orbital bounds inside viewport
    const radiusX = 2.65;
    const radiusZ = 1.55;

    // Calculate 3D Orbital Coordinates
    const xBase = Math.sin(currentAngle) * radiusX;
    const zBase = Math.cos(currentAngle) * radiusZ;
    const yBase = Math.sin(currentAngle * 2) * 0.28; // Subtle vertical wave

    // Depth-scaled mouse parallax offset
    const depthFactor = (zBase + 2.5) * 0.10;
    const targetX = xBase + mouse.current[0] * depthFactor;
    const targetY = yBase + mouse.current[1] * depthFactor;
    const targetZ = zBase;

    // Smoothly interpolate position
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.08);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.08);
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.08);

    // Dynamic rotation facing camera while orbiting
    const targetRotY = -Math.sin(currentAngle) * 0.32;
    const targetRotX = Math.cos(currentAngle) * 0.06;
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.08);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.08);

    // Hover scale & depth perspective scaling
    const targetScale = hovered ? 1.10 : 0.96 + (zBase / 2.0) * 0.12;
    meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1);
    meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.1);
    meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.1);

    // Scroll camera drift
    const scrollY = window.scrollY || 0;
    state.camera.rotation.x = THREE.MathUtils.lerp(state.camera.rotation.x, -scrollY * 0.0002, 0.05);
  });

  return (
    <Float
      speed={card.floatSpeed}
      rotationIntensity={0.15}
      floatIntensity={0.25}
    >
      <group
        ref={meshRef}
        onPointerOver={() => {
          setHovered(true);
          isAnyHovered.current = true;
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          isAnyHovered.current = false;
          document.body.style.cursor = 'auto';
        }}
        onClick={() => {
          document.body.style.cursor = 'auto';
          navigate(card.path);
        }}
      >
        {/* Volumetric 3D Card Body (Real Physical Thickness & Glossy Surface) */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 3.35, 0.08]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.12}
            metalness={0.08}
          />
        </mesh>

        {/* Front Textured Surface */}
        <mesh position={[0, 0, 0.042]}>
          <planeGeometry args={[2.48, 3.33]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.15}
            metalness={0.05}
          />
        </mesh>

        {/* Back Metallic Surface */}
        <mesh position={[0, 0, -0.042]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[2.48, 3.33]} />
          <meshStandardMaterial
            color="#0b835c"
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
};

// Main 3D R3F Scene Component with Unconstrained Viewport
const RevolvingScene: React.FC = () => {
  const mouse = useRef<[number, number]>([0, 0]);
  const orbitAngle = useRef<number>(0);
  const isAnyHovered = useRef<boolean>(false);

  const handlePointerMove = (e: React.PointerEvent) => {
    mouse.current = [
      (e.clientX / window.innerWidth - 0.5) * 2,
      -(e.clientY / window.innerHeight - 0.5) * 2,
    ];
  };

  return (
    <div className="w-full h-full relative overflow-visible" onPointerMove={handlePointerMove}>
      <Canvas
        camera={{ position: [0.2, 0.1, 7.5], fov: 42 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        {/* Studio Lighting Setup for Realistic Product Gloss */}
        <ambientLight intensity={1.1} />
        <directionalLight position={[6, 10, 8]} intensity={1.6} color="#ffffff" />
        <directionalLight position={[-6, -4, -4]} intensity={0.6} color="#a7f3d0" />
        <pointLight position={[0, 4, 4]} intensity={0.8} color="#ffffff" />

        {/* 4 Volumetric Revolving 3D Product Cards */}
        {CARDS_CONFIG.map((card) => (
          <VolumetricCardMesh
            key={card.id}
            card={card}
            mouse={mouse}
            orbitAngle={orbitAngle}
            isAnyHovered={isAnyHovered}
          />
        ))}

        {/* Soft Volumetric Floor Shadows */}
        <ContactShadows
          position={[0, -2.4, 0]}
          opacity={0.5}
          scale={14}
          blur={2.8}
          far={7}
          color="#064e3b"
        />
      </Canvas>
    </div>
  );
};

// Main Hero Section Export
export const FloatingCardsHero: React.FC = () => {
  return (
    <section className="relative min-h-[92dvh] pt-32 pb-16 flex items-center bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 overflow-hidden border-b border-[#eff1f6]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[640px]">
          
          {/* Left Third (5 cols): Crisp Plain DOM/CSS Text Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Eyebrow Badge */}
            <div>
              <span className="tag-pill-green bg-white shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0b835c]" />
                BORN FOR GENERATIONS…
              </span>
            </div>

            {/* Headline with Bold Sans + Libre Caslon Italic Split */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold leading-[1.12] tracking-tight text-[#1c1c1e]">
              Precision Nutraceuticals Built for{' '}
              <span className="font-editorial-serif italic font-normal text-[#0b835c]">
                Generations.
              </span>
            </h1>

            {/* One-Line Positioning Statement */}
            <p className="text-base sm:text-lg text-[#303033] font-medium leading-relaxed max-w-lg">
              A science-driven preventive healthcare company formulating from biological mechanism to clinical evidence to dose.
            </p>

            {/* Proof Points Strip */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#eff1f6]">
              <div>
                <span className="clinical-label text-[10px] block">FORMULATIONS</span>
                <span className="text-xl font-bold text-[#1c1c1e]">7 SKUs</span>
                <span className="text-[11px] text-[#676768] block">Active Catalogs</span>
              </div>
              <div>
                <span className="clinical-label text-[10px] block">CLINICAL</span>
                <span className="text-xl font-bold text-[#1c1c1e]">Grade A</span>
                <span className="text-[11px] text-[#676768] block">Evidence Standard</span>
              </div>
              <div>
                <span className="clinical-label text-[10px] block">MARKETER</span>
                <span className="text-xl font-bold text-[#1c1c1e]">FSSAI</span>
                <span className="text-[11px] text-[#676768] block">Lic. 13624999000034</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#sectors"
                className="btn-dark-pill flex items-center gap-2"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </a>
            </div>

          </div>

          {/* Right Two-Thirds (7 cols): Unconstrained Volumetric 3D Revolving Product Cards */}
          <div className="lg:col-span-7 h-[580px] sm:h-[640px] lg:h-[680px] w-full relative overflow-visible">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center card-mist">
                <span className="clinical-label text-xs">Loading Volumetric 3D Showcase…</span>
              </div>
            }>
              <RevolvingScene />
            </Suspense>
          </div>

        </div>
      </div>
    </section>
  );
};
