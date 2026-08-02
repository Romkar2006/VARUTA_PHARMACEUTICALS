import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowRight, Dna, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const N = 1200; // Refined particle count for crisp performance & elegance
const TAU = Math.PI * 2;
const GA = Math.PI * (3 - Math.sqrt(5));

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeIO = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

let _s = 20260801;
const rnd = () => (_s = (_s * 1664525 + 1013904223) >>> 0) / 4294967296;
const hash = (i: number) => ((Math.sin(i * 12.9898) * 43758.5453) % 1 + 1) % 1;

// Refined Clinical Color Palette: Jade Green, Mint, Cyan, Slate
const COL = {
  jade: [0.043, 0.513, 0.360],    // #0b835c
  mint: [0.654, 0.952, 0.815],    // #a7f3d0
  cyan: [0.023, 0.713, 0.831],    // #06b6d4
  emerald: [0.062, 0.725, 0.505], // #10b981
  slate: [0.188, 0.188, 0.200],   // #303033
  pearl: [0.886, 0.910, 0.941],   // #e2e8f0
};

const put = (arr: Float32Array, i: number, c: number[]) => {
  arr[i * 3] = c[0];
  arr[i * 3 + 1] = c[1];
  arr[i * 3 + 2] = c[2];
};

export const HeroThread: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeStage, setActiveStage] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let mesh: THREE.InstancedMesh;
    let lineH: THREE.LineSegments;

    const P: Float32Array[] = [
      new Float32Array(N * 3), // Stage 0: DNA Helix
      new Float32Array(N * 3), // Stage 1: Bio-Molecule Cluster
      new Float32Array(N * 3), // Stage 2: Precision Caplet
    ];

    const C: Float32Array[] = [
      new Float32Array(N * 3),
      new Float32Array(N * 3),
      new Float32Array(N * 3),
    ];

    // --- 1. SLEEK ELEGANT DNA HELIX ---
    const HELIX_RUNGS = 28;
    const HELIX_PER = 10;
    const HELIX_STRAND = N - HELIX_RUNGS * HELIX_PER;

    const buildHelix = (pos: Float32Array, col: Float32Array) => {
      const R = 2.4;
      const H = 16;
      const TURNS = 4;
      const half = HELIX_STRAND / 2;

      for (let i = 0; i < HELIX_STRAND; i++) {
        const s = i & 1;
        const k = i >> 1;
        const t = k / (half - 1);
        const a = t * TAU * TURNS + s * Math.PI;
        pos[i * 3] = Math.cos(a) * R;
        pos[i * 3 + 1] = (t - 0.5) * H;
        pos[i * 3 + 2] = Math.sin(a) * R;
        put(col, i, s ? COL.jade : COL.cyan);
      }

      for (let j = 0; j < HELIX_RUNGS * HELIX_PER; j++) {
        const i = HELIX_STRAND + j;
        const rung = Math.floor(j / HELIX_PER);
        const m = j % HELIX_PER;
        const t = rung / (HELIX_RUNGS - 1);
        const a = t * TAU * TURNS;
        const f = 1 - 2 * ((m + 0.5) / HELIX_PER);
        pos[i * 3] = Math.cos(a) * R * f;
        pos[i * 3 + 1] = (t - 0.5) * H;
        pos[i * 3 + 2] = Math.sin(a) * R * f;
        put(col, i, m % 3 === 0 ? COL.mint : COL.emerald);
      }
    };

    const helixBonds = () => {
      const p: number[] = [];
      const half = HELIX_STRAND / 2;
      for (let k = 0; k < half - 1; k++) {
        p.push(2 * k, 2 * k + 2);
        p.push(2 * k + 1, 2 * k + 3);
      }
      for (let r = 0; r < HELIX_RUNGS; r++) {
        const b = HELIX_STRAND + r * HELIX_PER;
        for (let m = 0; m < HELIX_PER - 1; m++) p.push(b + m, b + m + 1);
      }
      return p;
    };

    // --- 2. BIO-MOLECULE CLUSTER ---
    const buildMolecule = (pos: Float32Array, col: Float32Array) => {
      const R = 4.8;
      for (let i = 0; i < N; i++) {
        const y = 1 - ((i + 0.5) / N) * 2;
        const r = Math.sqrt(Math.max(0, 1 - y * y));
        const th = i * GA;
        pos[i * 3] = Math.cos(th) * r * R + (rnd() - 0.5) * 0.4;
        pos[i * 3 + 1] = y * R + (rnd() - 0.5) * 0.4;
        pos[i * 3 + 2] = Math.sin(th) * r * R + (rnd() - 0.5) * 0.4;
        put(col, i, i % 5 === 0 ? COL.cyan : i % 2 === 0 ? COL.jade : COL.mint);
      }
    };

    // --- 3. PRECISION BIO-CAPLET ---
    const buildCaplet = (pos: Float32Array, col: Float32Array) => {
      const R = 2.2;
      const L = 7.5;
      const TILT = 0.35;
      const ct = Math.cos(TILT);
      const st = Math.sin(TILT);

      for (let i = 0; i < N; i++) {
        const u = i / N;
        const th = i * GA;
        const x = (u - 0.5) * L;
        const y = Math.cos(th) * R;
        const z = Math.sin(th) * R;

        const x1 = x * ct - y * st;
        const y1 = x * st + y * ct;
        pos[i * 3] = x1;
        pos[i * 3 + 1] = y1;
        pos[i * 3 + 2] = z;

        put(col, i, x < 0 ? COL.jade : COL.pearl);
      }
    };

    buildHelix(P[0], C[0]);
    buildMolecule(P[1], C[1]);
    buildCaplet(P[2], C[2]);

    const SCALE = [0.18, 0.16, 0.17];
    const CAMZ = 22;

    // --- THREE.JS ENGINE SETUP ---
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, CAMZ);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xe2e8f0, 0.9));
    const d1 = new THREE.DirectionalLight(0x10b981, 1.8);
    d1.position.set(6, 10, 10);
    scene.add(d1);

    const geo = new THREE.IcosahedronGeometry(1, 1);
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.25, metalness: 0.1 });
    mesh = new THREE.InstancedMesh(geo, mat, N);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(N * 3), 3);
    mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
    scene.add(mesh);

    // Helix bond lines
    const hBonds = helixBonds();
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(hBonds.length * 3), 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(hBonds.length * 3), 3));
    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
    });
    lineH = new THREE.LineSegments(lineGeo, lineMat);
    lineH.userData.idx = hBonds;
    scene.add(lineH);

    const curPos = new Float32Array(N * 3);
    const ccol = new Float32Array(N * 3);

    const resize = () => {
      if (!canvas || !container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    // Animation Loop
    let spin = 0;
    let stageProgress = 0;

    const render = () => {
      spin += 0.012;

      // Morph interpolation based on active stage
      let stageA = 0;
      let stageB = 0;
      let t = 0;

      if (stageProgress < 0.5) {
        stageA = 0;
        stageB = 1;
        t = stageProgress / 0.5;
      } else {
        stageA = 1;
        stageB = 2;
        t = (stageProgress - 0.5) / 0.5;
      }

      const tt = easeIO(t);
      const A = P[stageA];
      const B = P[stageB];
      const CA = C[stageA];
      const CB = C[stageB];
      const sA = SCALE[stageA];
      const sB = SCALE[stageB];

      const im = mesh.instanceMatrix.array as Float32Array;
      const ic = mesh.instanceColor!.array as Float32Array;

      for (let i = 0; i < N; i++) {
        const k = i * 3;
        const x = lerp(A[k], B[k], tt);
        const y = lerp(A[k + 1], B[k + 1], tt);
        const z = lerp(A[k + 2], B[k + 2], tt);
        curPos[k] = x;
        curPos[k + 1] = y;
        curPos[k + 2] = z;

        ccol[k] = ic[k] = lerp(CA[k], CB[k], tt);
        ccol[k + 1] = ic[k + 1] = lerp(CA[k + 1], CB[k + 1], tt);
        ccol[k + 2] = ic[k + 2] = lerp(CA[k + 2], CB[k + 2], tt);

        const s = lerp(sA, sB, tt) * (0.8 + hash(i) * 0.4);
        const o = i * 16;
        im[o] = s; im[o + 1] = 0; im[o + 2] = 0; im[o + 3] = 0;
        im[o + 4] = 0; im[o + 5] = s; im[o + 6] = 0; im[o + 7] = 0;
        im[o + 8] = 0; im[o + 9] = 0; im[o + 10] = s; im[o + 11] = 0;
        im[o + 12] = x; im[o + 13] = y; im[o + 14] = z; im[o + 15] = 1;
      }

      mesh.instanceMatrix.needsUpdate = true;
      mesh.instanceColor!.needsUpdate = true;

      // Update Helix lines
      lineH.visible = stageA === 0 && tt < 0.5;
      if (lineH.visible) {
        const idx = lineH.userData.idx as number[];
        const lp = lineH.geometry.attributes.position.array as Float32Array;
        const lc = lineH.geometry.attributes.color.array as Float32Array;
        for (let v = 0; v < idx.length; v++) {
          const src = idx[v] * 3;
          const dst = v * 3;
          lp[dst] = curPos[src]; lp[dst + 1] = curPos[src + 1]; lp[dst + 2] = curPos[src + 2];
          lc[dst] = ccol[src]; lc[dst + 1] = ccol[src + 1]; lc[dst + 2] = ccol[src + 2];
        }
        lineH.geometry.attributes.position.needsUpdate = true;
        lineH.geometry.attributes.color.needsUpdate = true;
      }

      mesh.rotation.y = spin;
      mesh.rotation.x = -0.12;
      lineH.rotation.copy(mesh.rotation);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Auto morph interval for smooth visual presentation
    const stageInterval = setInterval(() => {
      setActiveStage((prev) => {
        const next = (prev + 1) % 3;
        stageProgress = next === 0 ? 0 : next === 1 ? 0.5 : 1.0;
        return next;
      });
    }, 4500);

    return () => {
      window.removeEventListener('resize', resize);
      clearInterval(stageInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const stagesInfo = [
    {
      num: '01',
      title: 'Genomic Helix',
      sub: 'Biological Code & Origin',
      desc: 'Formulations engineered around core cellular pathways.',
    },
    {
      num: '02',
      title: 'Bio-Active Pathway',
      sub: 'High-Purity Botanical Actives',
      desc: 'Standardized ingredients declared to assay without unverified claims.',
    },
    {
      num: '03',
      title: 'Targeted Caplet',
      sub: 'Clinical Dose Stability',
      desc: 'Manufactured in licensed WHO-GMP facilities for reliable absorption.',
    },
  ];

  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden border-b border-[#eff1f6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols): Editorial Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Announcement Tag Pill */}
            <div>
              <span className="tag-pill-green">
                <Sparkles className="w-3.5 h-3.5 text-[#0b835c]" />
                BORN FOR GENERATIONS…
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-[62px] font-normal leading-[1.12] tracking-tight text-[#1c1c1e]">
              Health Begins Where Life Is{' '}
              <span className="text-[#0b835c] italic font-normal">Written</span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-[#303033] font-medium leading-relaxed max-w-[540px]">
              Varuta Pharma establishes doctor-channel credibility by addressing biological deficiencies through clinical evidence grading and time-tested botanical science.
            </p>

            {/* Proof Points Strip */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#eff1f6] max-w-[540px]">
              <div>
                <span className="clinical-label text-[10px] block">PRECISION</span>
                <span className="text-2xl font-bold text-[#1c1c1e]">100%</span>
                <span className="text-xs text-[#676768] block">Targeted Actives</span>
              </div>
              <div>
                <span className="clinical-label text-[10px] block">CLINICAL</span>
                <span className="text-2xl font-bold text-[#1c1c1e]">Grade A</span>
                <span className="text-xs text-[#676768] block">Evidence Standard</span>
              </div>
              <div>
                <span className="clinical-label text-[10px] block">LICENSED</span>
                <span className="text-2xl font-bold text-[#1c1c1e]">FSSAI</span>
                <span className="text-xs text-[#676768] block">Lic. 13624999000034</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#sectors" className="btn-dark-pill flex items-center gap-2">
                <span>Explore 7 Therapeutic Sectors</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </a>

              <Link to="/contact" className="btn-outline-pill flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0b835c]" />
                <span>HCP & Clinical Literature</span>
              </Link>
            </div>

          </div>

          {/* Right Column (5 cols): Sleek 3D DNA Canvas (Compact & Contained) */}
          <div className="lg:col-span-5" ref={containerRef}>
            <div className="card-mist p-6 rounded-[24px] border border-slate-200/80 shadow-xs relative overflow-hidden bg-gradient-to-b from-slate-50 to-[#eff1f6]">
              
              {/* Canvas Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0b835c]">
                  <Dna className="w-4 h-4 animate-spin text-[#0b835c]" style={{ animationDuration: '10s' }} />
                  <span className="clinical-label text-[11px]">3D BIOLOGICAL MODEL</span>
                </div>
                <span className="tag-pill-green text-[10px] px-2.5 py-0.5">
                  STAGE {stagesInfo[activeStage].num}
                </span>
              </div>

              {/* 3D WebGL Canvas */}
              <div className="w-full h-[320px] relative">
                <canvas ref={canvasRef} className="w-full h-full block" />
              </div>

              {/* Active Morph Stage Info Box */}
              <div className="pt-3 border-t border-slate-200/80 space-y-1 text-left">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#1c1c1e]">
                    {stagesInfo[activeStage].title}
                  </h4>
                  <span className="text-[11px] font-semibold text-[#0b835c]">
                    {stagesInfo[activeStage].sub}
                  </span>
                </div>
                <p className="text-xs text-[#676768]">
                  {stagesInfo[activeStage].desc}
                </p>
              </div>

              {/* Interactive Stage Step Dots */}
              <div className="flex justify-center gap-2 pt-3">
                {stagesInfo.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeStage === idx ? 'w-6 bg-[#0b835c]' : 'w-2 bg-slate-300'
                    }`}
                    aria-label={`Jump to stage ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
