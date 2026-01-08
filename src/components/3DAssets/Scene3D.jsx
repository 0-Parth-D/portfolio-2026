import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function Scene3D({ Component, className }) {
  return (
    <div className={`scene-3d-container ${className || ''}`}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 70 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene3D

