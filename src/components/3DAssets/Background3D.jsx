import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Background3D() {
  const meshRef = useRef()
  const groupRef = useRef()

  // Animate rotation and floating
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3
    }
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.002
    }
  })

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#A7D129" />
      
      <group ref={groupRef}>
        {/* Main geometric shape - represents knowledge/learning */}
        <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#A7D129"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.9}
          />
        </Sphere>
        
        {/* Orbiting rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.8, 0.05, 16, 100]} />
          <meshStandardMaterial color="#A7D129" emissive="#A7D129" emissiveIntensity={0.3} />
        </mesh>
        
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[2.8, 0.05, 16, 100]} />
          <meshStandardMaterial color="#A7D129" emissive="#A7D129" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Small orbiting particles */}
        {[...Array(8)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 3.2,
              Math.sin((i / 8) * Math.PI * 2) * 3.2,
              0
            ]}
          >
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color="#A7D129" emissive="#A7D129" emissiveIntensity={0.8} />
          </mesh>
        ))}
      </group>
    </>
  )
}

export default Background3D

