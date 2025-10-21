// 'use client';
// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// function RotatingRings() {
//   const groupRef = useRef<THREE.Group>(null);

//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += 0.01;
//       groupRef.current.rotation.x += 0.002;
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       {[...Array(12)].map((_, i) => {
//         const radius = 1.5 + i * 0.1;
//         const color = i % 2 === 0 ? '#ff80ff' : '#80bfff';
//         return (
//           <mesh key={i} rotation={[Math.random(), Math.random(), 0]}>
//             <torusGeometry args={[radius, 0.03, 16, 100]} />
//             <meshStandardMaterial
//               color={color}
//               transparent
//               opacity={0.6}
//               emissive={color}
//               emissiveIntensity={0.3}
//               roughness={0.4}
//             />
//           </mesh>
//         );
//       })}
//     </group>
//   );
// }

// function EarthCore() {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame(() => {
//     if (meshRef.current) meshRef.current.rotation.y += 0.002;
//   });

//   return (
//     <mesh ref={meshRef}>
//       <sphereGeometry args={[1, 64, 64]} />
//       <meshStandardMaterial
//         color="#003366"
//         metalness={0.4}
//         roughness={0.6}
//         emissive="#00ffff"
//         emissiveIntensity={0.2}
//       />
//     </mesh>
//   );
// }

// const StylishEarth = () => {
//   return (
//     <div className="flex justify-center items-center bg-black rounded-2xl p-6">
//       <Canvas style={{ width: 320, height: 320 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} intensity={1.5} />
//         <pointLight position={[0, 0, 5]} intensity={1.2} />
//         <EarthCore />
//         <RotatingRings />
//         <OrbitControls enableZoom={false} enablePan={false} />
//       </Canvas>
//     </div>
//   );
// };

// export default StylishEarth;


// 'use client';
// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';
// import { EffectComposer, Bloom } from '@react-three/postprocessing'; // ✅ import here

// function RotatingRings() {
//   const groupRef = useRef<THREE.Group>(null);

//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += 0.01;
//       groupRef.current.rotation.x += 0.002;
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       {[...Array(12)].map((_, i) => {
//         const radius = 1.5 + i * 0.1;
//         const color = i % 2 === 0 ? '#ff80ff' : '#80bfff';
//         return (
//           <mesh key={i} rotation={[Math.random(), Math.random(), 0]}>
//             <torusGeometry args={[radius, 0.03, 16, 100]} />
//             <meshStandardMaterial
//               color={color}
//               transparent
//               opacity={0.6}
//               emissive={color}
//               emissiveIntensity={0.3}
//               roughness={0.4}
//             />
//           </mesh>
//         );
//       })}
//     </group>
//   );
// }

// function EarthCore() {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame(() => {
//     if (meshRef.current) meshRef.current.rotation.y += 0.002;
//   });

//   return (
//     <mesh ref={meshRef}>
//       <sphereGeometry args={[1, 64, 64]} />
//       <meshStandardMaterial
//         color="#003366"
//         metalness={0.4}
//         roughness={0.6}
//         emissive="#00ffff"
//         emissiveIntensity={0.2}
//       />
//     </mesh>
//   );
// }

// const StylishEarth = () => {
//   return (
//     <div className="flex justify-center items-center bg-black rounded-2xl p-6">
//       <Canvas style={{ width: 320, height: 320 }}>
//         {/* ✨ Lights */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} intensity={1.5} />
//         <pointLight position={[0, 0, 5]} intensity={1.2} />

//         {/* 🌍 Earth + Rings */}
//         <EarthCore />
//         <RotatingRings />

//         {/* ✨ Bloom Effect — ADD HERE */}
//         <EffectComposer>
//           <Bloom
//             luminanceThreshold={0.2}
//             luminanceSmoothing={0.9}
//             intensity={1.5}
//           />
//         </EffectComposer>

//         <OrbitControls enableZoom={false} enablePan={false} />
//       </Canvas>
//     </div>
//   );
// };

// export default StylishEarth;


// 'use client';
// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';
// import { EffectComposer, Bloom } from '@react-three/postprocessing'; 

// function RotatingRings() {
//   const groupRef = useRef<THREE.Group>(null);

//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += 0.01;
//       groupRef.current.rotation.x += 0.002;
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       {[...Array(12)].map((_, i) => {
//         const radius = 1.5 + i * 0.1;
//         const color = i % 2 === 0 ? '#ff80ff' : '#80bfff';
//         return (
//           <mesh key={i} rotation={[Math.random(), Math.random(), 0]}>
//             <torusGeometry args={[radius, 0.03, 16, 100]} />
//             <meshStandardMaterial
//               color={color}
//               transparent
//               opacity={0.6}
//               emissive={color}
//               emissiveIntensity={0.3}
//               roughness={0.4}
//             />
//           </mesh>
//         );
//       })}
//     </group>
//   );
// }

// function EarthCore() {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame(() => {
//     if (meshRef.current) meshRef.current.rotation.y += 0.002;
//   });

//   return (
//     <mesh ref={meshRef}>
//       <sphereGeometry args={[1, 64, 64]} />
//       <meshStandardMaterial
//         color="#003366"
//         metalness={0.4}
//         roughness={0.6}
//         emissive="#00ffff"
//         emissiveIntensity={0.2}
//       />
//     </mesh>
//   );
// }

// const StylishEarth = () => {
//   return (
//     <div className="flex justify-center items-center bg-black rounded-2xl p-6">
//       <Canvas style={{ width: 320, height: 320 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} intensity={1.5} />
//         <pointLight position={[0, 0, 5]} intensity={1.2} />

//         <EarthCore />
//         <RotatingRings />

//         {/* ✨ Glow Effect */}
//         <EffectComposer>
//           <Bloom
//             luminanceThreshold={0.2}
//             luminanceSmoothing={0.9}
//             intensity={1.5}
//           />
//         </EffectComposer>

//         <OrbitControls enableZoom={false} enablePan={false} />
//       </Canvas>
//     </div>
//   );
// };

// export default StylishEarth;


'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Enhanced Earth Core with multiple layers
function GloriousEarthCore() {
  const coreRef = useRef<THREE.Group>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const mantleRef = useRef<THREE.Mesh>(null);
  const crustRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (coreRef.current) {
      // Earth's natural rotation
      coreRef.current.rotation.y += 0.002;
      
      // Subtle wobble for realism
      coreRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;
      coreRef.current.rotation.z = Math.cos(time * 0.08) * 0.03;
    }

    if (innerCoreRef.current) {
      // Inner core rotates slightly faster
      innerCoreRef.current.rotation.y += 0.004;
    }

    if (atmosphereRef.current) {
      // Pulsing atmosphere effect
      const scale = 1 + Math.sin(time * 2) * 0.02;
      atmosphereRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={coreRef}>
      {/* Inner Core - Hot, molten center */}
      <mesh ref={innerCoreRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#ff4444"
          emissive="#ff2200"
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Outer Core - Liquid metal layer */}
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#ff6600"
          emissive="#ff5500"
          emissiveIntensity={0.4}
          transparent
          opacity={0.7}
          roughness={0.4}
        />
      </mesh>

      {/* Mantle - Thick rock layer */}
      <mesh ref={mantleRef}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#663300"
          emissive="#332200"
          emissiveIntensity={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Crust - Earth's surface */}
      <mesh ref={crustRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#003366"
          metalness={0.6}
          roughness={0.4}
          emissive="#0066cc"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Atmosphere Glow */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.1, 48, 48]} />
        <meshStandardMaterial
          color="#00aaff"
          emissive="#0088ff"
          emissiveIntensity={0.2}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// Enhanced Rotating Rings with multiple orbital systems
function DynamicOrbitalSystem() {
  const systemRef = useRef<THREE.Group>(null);
  const innerRingsRef = useRef<THREE.Group>(null);
  const outerRingsRef = useRef<THREE.Group>(null);
  const particleFieldRef = useRef<THREE.Points>(null);

  // Create particle field
  const particleCount = 500;
  const particles = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    const radius = 2 + Math.random() * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() - 0.5) * 2);
    
    particles[i] = radius * Math.sin(phi) * Math.cos(theta);
    particles[i + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.5; // Flattened
    particles[i + 2] = radius * Math.cos(phi);
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (systemRef.current) {
      systemRef.current.rotation.y += 0.005;
    }

    if (innerRingsRef.current) {
      innerRingsRef.current.rotation.z += 0.003;
      innerRingsRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
    }

    if (outerRingsRef.current) {
      outerRingsRef.current.rotation.y += 0.002;
      outerRingsRef.current.rotation.x = Math.cos(time * 0.3) * 0.05;
    }

    if (particleFieldRef.current) {
      particleFieldRef.current.rotation.y += 0.001;
      particleFieldRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={systemRef}>
      {/* Inner Ring System - Fast moving */}
      <group ref={innerRingsRef}>
        {[...Array(8)].map((_, i) => {
          const radius = 1.6 + i * 0.15;
          const color = i % 2 === 0 ? '#ff80ff' : '#80bfff';
          const speed = 0.02 + i * 0.005;
          
          return (
            <mesh key={`inner-${i}`} rotation={[Math.PI / 4, 0, i * 0.5]}>
              <torusGeometry args={[radius, 0.02, 8, 100]} />
              <meshStandardMaterial
                color={color}
                transparent
                opacity={0.7}
                emissive={color}
                emissiveIntensity={0.5}
                roughness={0.3}
              />
            </mesh>
          );
        })}
      </group>

      {/* Outer Ring System - Slower, more majestic */}
      <group ref={outerRingsRef}>
        {[...Array(6)].map((_, i) => {
          const radius = 2.5 + i * 0.2;
          const color = i % 2 === 0 ? '#ff4080' : '#4080ff';
          
          return (
            <mesh key={`outer-${i}`} rotation={[Math.PI / 3, 0, i * 0.8]}>
              <torusGeometry args={[radius, 0.03, 12, 100]} />
              <meshStandardMaterial
                color={color}
                transparent
                opacity={0.5}
                emissive={color}
                emissiveIntensity={0.4}
                roughness={0.2}
              />
            </mesh>
          );
        })}
      </group>

      {/* Particle Field */}
      <points ref={particleFieldRef}>
        <bufferGeometry>
          {/* <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particles}
            itemSize={3}
          /> */}
          <bufferAttribute
  attach="attributes-position"
  args={[particles, 3]}
/>

        </bufferGeometry>
        <pointsMaterial
          color="#ffffff"
          size={0.02}
          transparent
          opacity={0.6}
        />
      </points>
    </group>
  );
}

// Energy Beams connecting rings
function EnergyBeams() {
  const beamsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (beamsRef.current) {
      beamsRef.current.rotation.y += 0.01;
      beamsRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <group ref={beamsRef}>
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <mesh key={i} rotation={[0, 0, angle]}>
            <cylinderGeometry args={[0.005, 0.02, 4, 8]} />
            <meshStandardMaterial
              color="#00ffff"
              transparent
              opacity={0.3}
              emissive="#00ffff"
              emissiveIntensity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}

const GloriousEarth = () => {
  return (
    <div className="flex justify-center items-center  bg-gradient-to-b from-black via-gray-900 to-black  shadow-lg shadow-cyan-900/40 rounded-2xl p-6">
      <Canvas style={{ width: 480, height: 350 }}>
        <color attach="background" args={['#000011']} />
        
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[0, 0, 5]} intensity={0.8} color="#00aaff" />
        <pointLight position={[5, -5, -5]} intensity={0.5} color="#ff00ff" />
        
        {/* Stars Background */}
        <Stars radius={100} depth={50} count={5000} factor={4} />
        
        {/* Earth System */}
        <GloriousEarthCore />
        <DynamicOrbitalSystem />
        <EnergyBeams />

        {/* Enhanced Post-processing */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            intensity={2}
            height={300}
          />
        </EffectComposer>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default GloriousEarth;


// 'use client';
// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import * as THREE from 'three';
// import { EffectComposer, Bloom, Glitch, Vignette } from '@react-three/postprocessing';

// function Earth() {
//   const earthRef = useRef<THREE.Mesh>(null);
//   const cloudsRef = useRef<THREE.Mesh>(null);

//   useFrame(({ clock }) => {
//     const elapsed = clock.getElapsedTime();
//     if (earthRef.current) earthRef.current.rotation.y = elapsed * 0.1;
//     if (cloudsRef.current) cloudsRef.current.rotation.y = elapsed * 0.15;
//   });

//   return (
//     <group>
//       {/* 🌍 Earth Core */}
//       <mesh ref={earthRef}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshStandardMaterial
//           color="#0055aa"
//           roughness={0.7}
//           metalness={0.3}
//           emissive="#003355"
//           emissiveIntensity={0.25}
//           shininess={30}
//         />
//       </mesh>

//       {/* ☁️ Clouds layer */}
//       <mesh ref={cloudsRef}>
//         <sphereGeometry args={[1.03, 64, 64]} />
//         <meshStandardMaterial
//           color="#ffffff"
//           transparent
//           opacity={0.15}
//           emissive="#66ccff"
//           emissiveIntensity={0.3}
//         />
//       </mesh>

//       {/* 🌫 Atmospheric glow (halo) */}
//       <mesh>
//         <sphereGeometry args={[1.1, 64, 64]} />
//         <meshBasicMaterial
//           color="#00ffff"
//           transparent
//           opacity={0.08}
//           side={THREE.BackSide}
//         />
//       </mesh>
//     </group>
//   );
// }

// function OrbitingRings() {
//   const groupRef = useRef<THREE.Group>(null);

//   useFrame(() => {
//     if (groupRef.current) groupRef.current.rotation.y += 0.002;
//   });

//   return (
//     <group ref={groupRef}>
//       {[...Array(10)].map((_, i) => {
//         const radius = 1.3 + i * 0.12;
//         const color = i % 2 === 0 ? '#00ffff' : '#ff00ff';
//         return (
//           <mesh key={i} rotation={[Math.random() * Math.PI, Math.random(), 0]}>
//             <torusGeometry args={[radius, 0.02, 16, 100]} />
//             <meshStandardMaterial
//               color={color}
//               transparent
//               opacity={0.4}
//               emissive={color}
//               emissiveIntensity={0.4}
//               roughness={0.5}
//             />
//           </mesh>
//         );
//       })}
//     </group>
//   );
// }

// const StylishEarth = () => {
//   return (
//     <div className="flex justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black rounded-2xl p-6 shadow-lg shadow-cyan-900/40">
//       <Canvas
//         style={{ width: 380, height: 380 }}
//         camera={{ position: [2.5, 1.5, 2.5], fov: 50 }}
//       >
//         {/* 🌞 Lighting setup */}
//         <ambientLight intensity={0.3} />
//         <directionalLight position={[5, 3, 5]} intensity={1.8} color="#ffffff" />
//         <pointLight position={[-3, -2, -5]} intensity={0.8} color="#00ffff" />

//         {/* 🌍 Earth + Rings */}
//         <Earth />
//         <OrbitingRings />

//         {/* ✨ Background stars */}
//         <Stars radius={50} depth={50} count={10000} factor={3} saturation={0} fade />

//         {/* 🌈 Effects */}
//         <EffectComposer>
//           <Bloom
//             intensity={1.2}
//             luminanceThreshold={0.1}
//             luminanceSmoothing={0.85}
//           />
//           <Vignette eskil={false} offset={0.3} darkness={0.9} />
//         </EffectComposer>

//         {/* 🪐 Controls */}
//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
//       </Canvas>
//     </div>
//   );
// };

// export default StylishEarth;
