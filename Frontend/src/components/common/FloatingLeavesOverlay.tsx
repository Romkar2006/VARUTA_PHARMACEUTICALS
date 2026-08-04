import React from 'react';

export const FloatingLeavesOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-emerald-400/40 blur-xs animate-ping" />
      <div className="absolute top-1/3 right-12 w-3 h-3 rounded-full bg-[#0b835c]/30 blur-xs animate-pulse" />
      <div className="absolute bottom-20 left-1/4 w-2.5 h-2.5 rounded-full bg-teal-400/30 blur-xs animate-ping" />
    </div>
  );
};
