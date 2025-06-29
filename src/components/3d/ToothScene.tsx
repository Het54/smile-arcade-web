
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { ToothModel } from './InteractiveTooth';

export const ToothScene = () => {
  return (
    <div className="h-96 w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        shadows
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, 5, 5]} intensity={0.5} />
        
        {/* 3D Tooth Model */}
        <ToothModel />
        
        {/* Ground shadow */}
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.3} 
          scale={4} 
          blur={2} 
          far={2} 
        />
        
        {/* Environment for reflections */}
        <Environment preset="studio" />
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};
