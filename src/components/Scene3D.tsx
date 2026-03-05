import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingIcosahedron() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Icosahedron ref={ref} args={[1.8, 1]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#00d4aa"
          wireframe
          distort={0.3}
          speed={2}
          roughness={0}
        />
      </Icosahedron>
    </Float>
  );
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Torus ref={ref} args={[1.2, 0.15, 16, 100]} position={[3, -1, -2]}>
        <meshStandardMaterial color="#a855f7" wireframe />
      </Torus>
    </Float>
  );
}

function FloatingSphere() {
  return (
    <Float speed={3} rotationIntensity={0.3} floatIntensity={1}>
      <Sphere args={[0.6, 32, 32]} position={[-3, 1.5, -1]}>
        <MeshDistortMaterial
          color="#00d4aa"
          distort={0.5}
          speed={3}
          roughness={0.2}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
}

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00d4aa" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00d4aa" />
        <pointLight position={[-10, -10, -5]} intensity={0.4} color="#a855f7" />
        <FloatingIcosahedron />
        <FloatingTorus />
        <FloatingSphere />
        <Particles />
      </Canvas>
    </div>
  );
}
