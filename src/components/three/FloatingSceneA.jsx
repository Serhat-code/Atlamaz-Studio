import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import LetterA from './LetterA';

export default function FloatingSceneA() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 35 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} color="#ffffff" />
      {/* Lumière de remplissage frontale : évite que le creux du "A" reste noir. */}
      <pointLight position={[0, 0.5, 4]} intensity={0.8} color="#cdd1ff" distance={10} decay={1.5} />

      {/* Environnement procédural (panneaux lumineux), généré localement —
          aucune requête réseau vers une HDRI externe. */}
      <Environment resolution={256}>
        <group rotation={[0, 0, 0]}>
          <Lightformer intensity={3} color="#ffffff" position={[0, 4, -4]} scale={[8, 8, 1]} />
          <Lightformer intensity={2.5} color="#9EA3FF" position={[-6, 1, 2]} rotation-y={Math.PI / 2} scale={[10, 6, 1]} />
          <Lightformer intensity={2.5} color="#4F5BFF" position={[6, -1, 2]} rotation-y={-Math.PI / 2} scale={[10, 6, 1]} />
          <Lightformer intensity={1.2} color="#ffffff" position={[0, -5, 3]} rotation-x={Math.PI / 2} scale={[8, 8, 1]} />
          <Lightformer intensity={1} color="#e8e9ff" position={[0, 0, 5]} scale={[6, 6, 1]} />
        </group>
      </Environment>

      <LetterA />
    </Canvas>
  );
}
