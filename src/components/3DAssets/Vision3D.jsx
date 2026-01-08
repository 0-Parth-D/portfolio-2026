import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Vision3D() {
  const mainRef = useRef()
  const ring1Ref = useRef()
  const ring2Ref = useRef()
  const particlesRef = useRef()

  useFrame((state) => {
    if (mainRef.current) {
      mainRef.current.rotation.y += 0.008
      mainRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.4
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += 0.01
      ring1Ref.current.rotation.z += 0.005
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= 0.01
      ring2Ref.current.rotation.z -= 0.005
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.015
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.2
    }
  })

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[5, -5, 5]} intensity={0.6} color="#A7D129" />
      <pointLight position={[-5, 5, -5]} intensity={0.6} color="#A7D129" />
      
      {/* Main central shape - dodecahedron for future/vision */}
      <mesh ref={mainRef} position={[0, 0, 0]}>
        <dodecahedronGeometry args={[1.6, 0]} />
        <MeshDistortMaterial
          color="#A7D129"
          attach="material"
          distort={0.4}
          speed={2.5}
          roughness={0.15}
          metalness={0.85}
          transparent
          opacity={0.92}
        />
      </mesh>
      
      {/* Rotating rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.6, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#A7D129"
          emissive="#A7D129"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      <mesh ref={ring2Ref} rotation={[0, Math.PI / 4, Math.PI / 2]}>
        <torusGeometry args={[3, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#A7D129"
          emissive="#A7D129"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Floating particles in orbit */}
      <group ref={particlesRef}>
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const radius = 3.5
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 3) * 1.5,
                Math.sin(angle) * radius
              ]}
            >
              <icosahedronGeometry args={[0.2, 0]} />
              <meshStandardMaterial
                color="#A7D129"
                emissive="#A7D129"
                emissiveIntensity={1}
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>
          )
        })}
      </group>
      
      {/* Energy waves */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <ringGeometry args={[2, 2.4, 64]} />
        <meshStandardMaterial
          color="#A7D129"
          emissive="#A7D129"
          emissiveIntensity={0.3}
          side={THREE.DoubleSide}
          transparent
          opacity={0.4}
        />
      </mesh>
    </>
  )
}

export default Vision3D

