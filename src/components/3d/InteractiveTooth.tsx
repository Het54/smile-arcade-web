
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export const ToothModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      // Slow rotation
      meshRef.current.rotation.y += 0.01;
      
      // Scale animation on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  // Create a tooth-like shape using geometry
  const toothGeometry = new THREE.ConeGeometry(0.8, 2.5, 8);
  // Modify the geometry to make it more tooth-like
  const vertices = toothGeometry.attributes.position.array;
  for (let i = 0; i < vertices.length; i += 3) {
    const x = vertices[i];
    const y = vertices[i + 1];
    const z = vertices[i + 2];
    
    // Make the top rounder and the bottom more pointed
    if (y > 0.5) {
      vertices[i] = x * (1 - y * 0.3);
      vertices[i + 2] = z * (1 - y * 0.3);
    }
  }

  return (
    <group>
      <mesh
        ref={meshRef}
        geometry={toothGeometry}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        castShadow
        receiveShadow
      >
        <meshPhongMaterial 
          color={hovered ? "#f0f8ff" : "#ffffff"} 
          shininess={100}
          transparent
          opacity={0.95}
        />
      </mesh>
      
      {/* Smile face on the tooth */}
      {clicked && (
        <group position={[0, 0.2, 0.8]}>
          {/* Eyes */}
          <mesh position={[-0.2, 0.3, 0]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#333" />
          </mesh>
          <mesh position={[0.2, 0.3, 0]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#333" />
          </mesh>
          
          {/* Smile */}
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.25, 0.03, 8, 16, Math.PI]} />
            <meshBasicMaterial color="#333" />
          </mesh>
        </group>
      )}
      
      {/* Sparkle effects */}
      {hovered && (
        <group>
          <mesh position={[1.2, 0.5, 0]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="#ffd700" />
          </mesh>
          <mesh position={[-1.1, 0.8, 0.3]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#ffd700" />
          </mesh>
          <mesh position={[0.8, -0.5, -0.5]}>
            <sphereGeometry args={[0.025, 8, 8]} />
            <meshBasicMaterial color="#ffd700" />
          </mesh>
        </group>
      )}

      {/* Interactive text */}
      {hovered && (
        <Text
          position={[0, -2, 0]}
          fontSize={0.3}
          color="#0066cc"
          anchorX="center"
          anchorY="middle"
        >
          Click me for a smile! 😊
        </Text>
      )}
    </group>
  );
};
