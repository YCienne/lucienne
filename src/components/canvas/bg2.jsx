import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// ===== 1. Floating Grid =====
const Grid = () => {
  const gridRef = useRef()

  useFrame(({ clock }) => {
    // Subtle floating animation
    gridRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1
    gridRef.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.05) * 0.05
  })

  return (
    <group ref={gridRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20, 10, 10]} />
        <meshBasicMaterial 
          color={0x111111} 
          wireframe 
          opacity={0.3} 
          transparent 
          side={THREE.DoubleSide} 
        />
      </mesh>
    </group>
  )
}

// ===== 2. Data Particles =====
const Particles = () => {
  const particlesRef = useRef()
  const count = 500
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 30
  }

  useFrame(() => {
    // Minimal movement (like floating data points)
    particlesRef.current.rotation.y += 0.0005
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.1}
        color={0x333333}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// ===== 3. Main Component =====
export const Background2 = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1,
      background: '#000000' 
    }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color={0x555555} />
        
        <Grid />
        <Particles />
      </Canvas>
    </div>
  )
}