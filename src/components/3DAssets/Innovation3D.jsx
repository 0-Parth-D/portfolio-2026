import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { getAccentColorHex } from '../../theme/accentColor'

function Innovation3D() {
  const accent = useMemo(() => getAccentColorHex(), [])
  const groupRef = useRef()
  const cubeRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.005
      cubeRef.current.rotation.z += 0.005
    }
  })

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color={accent} />
      <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={1} color={accent} />
      
      <group ref={groupRef}>
        {/* Central tech cube */}
        <mesh ref={cubeRef} position={[0, 0, 0]}>
          <boxGeometry args={[2.4, 2.4, 2.4]} />
          <MeshDistortMaterial
            color={accent}
            attach="material"
            distort={0.2}
            speed={3}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.95}
          />
        </mesh>
        
        {/* Surrounding geometric shapes representing innovation */}
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2
          const radius = 3.2
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * radius, Math.sin(angle * 2) * 2, Math.sin(angle) * radius]}
              rotation={[angle, angle, 0]}
            >
              <octahedronGeometry args={[0.4, 0]} />
              <meshStandardMaterial
                color={accent}
                emissive={accent}
                emissiveIntensity={0.6}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          )
        })}
        
        {/* Connecting lines */}
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2
          const radius = 2.5
          const points = [
            [0, 0, 0],
            [
              Math.cos(angle) * radius,
              Math.sin(angle * 2) * 1.5,
              Math.sin(angle) * radius
            ]
          ]
          return (
            <line key={`line-${i}`}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array(points.flat())}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color={accent} opacity={0.25} transparent linewidth={2} />
            </line>
          )
        })}
      </group>
    </>
  )
}

export default Innovation3D

