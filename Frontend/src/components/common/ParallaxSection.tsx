import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // Speed multiplier: positive moves up faster, negative moves down
  className?: string;
}

export const ParallaxLayer: React.FC<ParallaxProps> = ({
  children,
  speed = 0.2,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);
  const y = useSpring(yRaw, { stiffness: 100, damping: 20 });

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export const ParallaxBackground: React.FC<{ speed?: number; className?: string }> = ({
  speed = -0.3,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [-120 * speed, 120 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.3]);
  const y = useSpring(yRaw, { stiffness: 90, damping: 22 });

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      {/* Subtle Floating Parallax Bio-Particles & Glow */}
      <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-[#0b835c]/10 blur-3xl" />
      <div className="absolute bottom-1/3 right-12 w-64 h-64 rounded-full bg-[#06b6d4]/10 blur-3xl" />
    </motion.div>
  );
};
