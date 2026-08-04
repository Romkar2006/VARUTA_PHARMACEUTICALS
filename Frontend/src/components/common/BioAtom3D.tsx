import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AtomModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const electron1Ref = useRef<THREE.Mesh>(null);
  const electron2Ref = useRef<THREE.Mesh>(null);
  const electron3Ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    // Continuous 3D rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.75;
      groupRef.current.rotation.x += delta * 0.25;
    }

    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.5;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.5;
    if (ring3Ref.current) ring3Ref.current.rotation.z += delta * 0.4;

    // Electron orbit animation
    const time = Date.now() * 0.0025;
    if (electron1Ref.current) {
      electron1Ref.current.position.x = Math.cos(time * 1.6) * 2.3;
      electron1Ref.current.position.y = Math.sin(time * 1.6) * 2.3;
    }
    if (electron2Ref.current) {
      electron2Ref.current.position.x = Math.cos(time * 1.9 + 1) * 2.3;
      electron2Ref.current.position.z = Math.sin(time * 1.9 + 1) * 2.3;
    }
    if (electron3Ref.current) {
      electron3Ref.current.position.y = Math.cos(time * 1.4 + 2) * 2.3;
      electron3Ref.current.position.z = Math.sin(time * 1.4 + 2) * 2.3;
    }
  });

  return (
    <group ref={groupRef} scale={[1.4, 1.4, 1.4]}>
      {/* Central Blue & White Nucleus */}
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#2563eb"
          emissive="#1d4ed8"
          emissiveIntensity={1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Nucleus Inner Glow Sphere */}
      <mesh scale={[1.15, 1.15, 1.15]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#60a5fa"
          transparent
          opacity={0.4}
          wireframe
        />
      </mesh>

      {/* Orbital Ring 1 (Royal Blue) */}
      <group rotation={[Math.PI / 4, Math.PI / 6, 0]}>
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.3, 0.08, 16, 100]} />
          <meshStandardMaterial
            color="#2563eb"
            emissive="#1d4ed8"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        {/* White Glowing Electron */}
        <mesh ref={electron1Ref}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} />
        </mesh>
      </group>

      {/* Orbital Ring 2 (Sky Blue) */}
      <group rotation={[-Math.PI / 4, -Math.PI / 6, 0]}>
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.3, 0.08, 16, 100]} />
          <meshStandardMaterial
            color="#0284c7"
            emissive="#0369a1"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        {/* White Glowing Electron */}
        <mesh ref={electron2Ref}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} />
        </mesh>
      </group>

      {/* Orbital Ring 3 (Cyan / Light Blue) */}
      <group rotation={[0, Math.PI / 2, Math.PI / 4]}>
        <mesh ref={ring3Ref}>
          <torusGeometry args={[2.3, 0.08, 16, 100]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        {/* White Glowing Electron */}
        <mesh ref={electron3Ref}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} />
        </mesh>
      </group>
    </group>
  );
};

export const BioAtom3DCanvas: React.FC<{ className?: string }> = ({ className = 'h-[320px] w-full' }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[0, 0, 5]} intensity={2} color="#2563eb" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <AtomModel />
        </Float>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};
