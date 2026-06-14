"use client";

import { useRef, useState, useEffect, useMemo, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import Link from "next/link";
import { motion } from "framer-motion";
import * as THREE from "three";

// Text Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

// Realistic Skyscraper / Cityscape Centerpiece
function RealisticSkyscraper() {
  const groupRef = useRef<THREE.Group>(null);
  const glassMeshRef = useRef<THREE.InstancedMesh>(null);
  const goldMeshRef = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();
  
  // Responsive scaling
  const isMobile = viewport.width < 5;
  const scale = isMobile ? 0.7 : 1.1;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.02;
    }
  });

  const pillars = useMemo(() => [
    { pos: [0, 0, 0], size: [0.8, 4.0, 0.8] },
    { pos: [0.9, -0.5, 0.2], size: [0.5, 3.0, 0.5] },
    { pos: [-0.8, -0.3, 0.5], size: [0.6, 3.4, 0.6] },
    { pos: [0.3, -0.8, 1.0], size: [0.4, 2.4, 0.4] },
    { pos: [-0.4, -0.6, -0.9], size: [0.5, 2.8, 0.5] },
    { pos: [0.7, -0.9, -0.7], size: [0.4, 2.2, 0.4] },
    { pos: [-0.9, -1.0, -0.4], size: [0.35, 2.0, 0.35] },
    { pos: [0.1, -1.2, -1.2], size: [0.3, 1.6, 0.3] },
  ], []);

  const floorHeight = 0.1;
  const slabHeight = 0.02;
  
  // Calculate total number of instances
  const totalInstances = useMemo(() => {
    return pillars.reduce((acc, pillar) => acc + Math.floor(pillar.size[1] / floorHeight), 0);
  }, [pillars]);

  // Use a shared unit box geometry for all instances
  const boxGeo = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);



  // Calculate matrices for all floors
  useEffect(() => {
    const glassInst = glassMeshRef.current;
    const goldInst = goldMeshRef.current;
    if (!glassInst || !goldInst) return;
    
    let i = 0;
    const dummy = new THREE.Object3D();

    pillars.forEach((pillar) => {
      const numFloors = Math.floor(pillar.size[1] / floorHeight);
      const [w, , d] = pillar.size;
      const [px, py, pz] = pillar.pos;
      
      const startY = py - (pillar.size[1] / 2);

      for (let f = 0; f < numFloors; f++) {
        const y = startY + (f * floorHeight);

        // 1. Dark glass core
        dummy.position.set(px, y + (floorHeight / 2), pz);
        dummy.scale.set(w - 0.04, floorHeight - slabHeight, d - 0.04);
        dummy.updateMatrix();
        glassInst.setMatrixAt(i, dummy.matrix);

        // 2. Golden floor slab
        dummy.position.set(px, y, pz);
        dummy.scale.set(w, slabHeight, d);
        dummy.updateMatrix();
        goldInst.setMatrixAt(i, dummy.matrix);

        i++;
      }
    });

    glassInst.instanceMatrix.needsUpdate = true;
    goldInst.instanceMatrix.needsUpdate = true;
  }, [pillars, floorHeight]);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} scale={scale} position={[0, -0.5, 0]}>
        {/* Dark Reflective Glass Windows */}
        <instancedMesh ref={glassMeshRef} args={[boxGeo, undefined as any, totalInstances]}>
          <meshPhysicalMaterial
            color="#050505"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={3}
          />
        </instancedMesh>

        {/* Golden Floor Slabs */}
        <instancedMesh ref={goldMeshRef} args={[boxGeo, undefined as any, totalInstances]}>
          <meshPhysicalMaterial
            color="#b38b3a"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            reflectivity={1}
            envMapIntensity={2}
          />
        </instancedMesh>
      </group>
    </Float>
  );
}

export default function HeroSection() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 200);
      setScrollOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#05070a]">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <color attach="background" args={["#05070a"]} />
          
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#b38b3a" />
          
          {/* Photorealistic reflections */}
          <Environment preset="city" />

          <RealisticSkyscraper />
          
          {/* Floating gold dust particles */}
          <Sparkles 
            count={isMobileCheck() ? 80 : 200} 
            scale={15} 
            size={isMobileCheck() ? 3 : 2} 
            speed={0.2} 
            opacity={0.3} 
            color="#b38b3a" 
          />
        </Canvas>
      </div>

      {/* Dark vignette overlay to ensure text legibility */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,#05070a_100%)] opacity-80 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-black/30 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white px-6 max-w-5xl mx-auto mt-12 pointer-events-auto">
          {/* Accent Label */}
          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-xs md:text-sm tracking-[0.35em] uppercase mb-6 text-white/70 font-sans"
          >
            Premium Living · Since 1985
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={lineReveal}
            className="w-16 h-[1px] bg-rg-gold mx-auto mb-8 origin-left"
          />

          {/* Main Headline */}
          <motion.h1
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase mb-6 leading-[0.95] tracking-tight drop-shadow-2xl"
          >
            Crafting{" "}
            <span className="text-rg-gold block sm:inline">Landmarks.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={0.8}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-sm md:text-xl mb-12 max-w-2xl mx-auto text-white/70 font-light leading-relaxed"
          >
            Building the foundation for your tomorrow.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            custom={1.1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Link
              href="/projects"
              className="inline-block border border-white/30 bg-black/20 backdrop-blur-sm text-white text-xs md:text-sm font-semibold uppercase tracking-[0.25em] px-8 py-3 md:px-10 md:py-4 hover:bg-rg-gold hover:border-rg-gold hover:text-white transition-all duration-500"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-white/40 text-[8px] md:text-[10px] tracking-[0.3em] uppercase font-sans">
          Scroll
        </span>
        <div className="w-[1px] h-6 md:h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-rg-gold scroll-line-animation" />
        </div>
      </motion.div>
    </section>
  );
}

// Simple helper for server-safe mobile check outside of Canvas context
function isMobileCheck() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768;
  }
  return false;
}
