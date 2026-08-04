import React, { useEffect, useRef } from 'react';

export const DnaMorphism: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = 480);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 480;
    };

    window.addEventListener('resize', handleResize);

    let angle = 0;
    const baseNodes = 24; // Nodes per strand

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.28;
      const length = height * 0.75;
      const step = length / baseNodes;
      const startY = centerY - length / 2;

      angle += 0.018;

      // Draw connecting helix background glow
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#0b835c';

      for (let i = 0; i < baseNodes; i++) {
        const y = startY + i * step;
        const currentAngle = angle + i * 0.25;

        // Strand 1
        const x1 = centerX + Math.sin(currentAngle) * radius;
        const z1 = Math.cos(currentAngle);
        const scale1 = (z1 + 2) / 3;

        // Strand 2 (180 deg offset)
        const x2 = centerX + Math.sin(currentAngle + Math.PI) * radius;
        const z2 = Math.cos(currentAngle + Math.PI);
        const scale2 = (z2 + 2) / 3;

        // Draw Base Pair Connecting Line
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = `rgba(11, 131, 92, ${0.15 + (z1 + 1) * 0.15})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw Center Hydrogen Bond Nodes
        const midX = (x1 + x2) / 2;
        ctx.beginPath();
        ctx.arc(midX, y, 2.5 * scale1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(11, 131, 92, ${0.4 + scale1 * 0.4})`;
        ctx.fill();

        // Draw Strand 1 Node (Forest Grove #0b835c)
        ctx.beginPath();
        ctx.arc(x1, y, 5.5 * scale1, 0, Math.PI * 2);
        ctx.fillStyle = z1 > 0 ? '#0b835c' : '#1c2b27';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1 * scale1;
        ctx.stroke();

        // Draw Strand 2 Node (Pine Shadow / Accent)
        ctx.beginPath();
        ctx.arc(x2, y, 5.5 * scale2, 0, Math.PI * 2);
        ctx.fillStyle = z2 > 0 ? '#0b835c' : '#303033';
        ctx.fill();
        ctx.strokeStyle = 'rgba(11, 131, 92, 0.6)';
        ctx.lineWidth = 1 * scale2;
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[480px] flex items-center justify-center">
      {/* Floating Canvas Element */}
      <canvas ref={canvasRef} className="w-full h-full block relative z-10" />

      {/* Clinical Overlay Pills */}
      <div className="absolute top-6 right-6 z-20 tag-pill-green text-[11px] bg-white/90 shadow-sm border border-[#0b835c]/30">
        <span className="w-2 h-2 rounded-full bg-[#0b835c] animate-ping" />
        <span>Targeted Gene Expression</span>
      </div>

      <div className="absolute bottom-6 left-6 z-20 card-mist p-3.5 rounded-xl border border-slate-200/80 max-w-[240px] shadow-sm">
        <span className="clinical-label text-[10px] block mb-1">BIOLOGICAL PRECISION</span>
        <p className="text-xs text-[#303033] font-medium leading-snug">
          Pioneering Bio-Ingredient Research & Cellular Nutrient Transport Optimization.
        </p>
      </div>
    </div>
  );
};
