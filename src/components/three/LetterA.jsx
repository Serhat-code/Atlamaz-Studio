import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

// Contour du "A" : deux jambes distinctes séparées par une encoche en bas
// (comme une vraie lettre bâton), plus le trou du compteur au-dessus de la barre
// transversale. Le trou est enroulé dans le sens OPPOSÉ au contour extérieur,
// sinon earcut ne soustrait pas correctement la géométrie.
function buildLetterAShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 1.2);          // sommet
  shape.lineTo(0.85, -1.2);      // pied droit, coin extérieur
  shape.lineTo(0.5, -1.2);       // pied droit, coin intérieur
  shape.lineTo(0.22, -0.2);      // remonte le long de la jambe droite jusqu'à la barre
  shape.lineTo(-0.22, -0.2);     // traverse vers la jambe gauche (dessous de la barre)
  shape.lineTo(-0.5, -1.2);      // descend la jambe gauche, coin intérieur
  shape.lineTo(-0.85, -1.2);     // pied gauche, coin extérieur
  shape.closePath();

  const hole = new THREE.Path();
  hole.moveTo(0, 0.85);
  hole.lineTo(0.2, 0.05);
  hole.lineTo(-0.2, 0.05);
  hole.closePath();
  shape.holes.push(hole);

  return shape;
}

const EXTRUDE_SETTINGS = {
  depth: 1.15,
  bevelEnabled: true,
  bevelThickness: 0.12,
  bevelSize: 0.09,
  bevelSegments: 12,
  curveSegments: 1,
};

// Dégradé indigo → lavande appliqué par sommet selon la hauteur. Les parois
// internes du trou partagent ce même dégradé : en boostant l'émissif du
// matériau (qui s'applique uniformément, sans dépendre de l'angle de la
// lumière), elles restent colorées et lisibles au lieu de virer au noir.
const COLOR_TOP    = new THREE.Color('#9EA3FF');
const COLOR_BOTTOM = new THREE.Color('#3640C4');

function applyVertexGradient(geometry) {
  geometry.computeBoundingBox();
  const { min, max } = geometry.boundingBox;
  const range = max.y - min.y || 1;
  const position = geometry.attributes.position;
  const colors = new Float32Array(position.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < position.count; i++) {
    const t = (position.getY(i) - min.y) / range;
    c.copy(COLOR_BOTTOM).lerp(COLOR_TOP, t);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
}

export default function LetterA() {
  const groupRef = useRef(null);
  const meshRef = useRef(null);
  const elapsed = useRef(0);

  const geometry = useMemo(() => {
    const geo = new THREE.ExtrudeGeometry(buildLetterAShape(), EXTRUDE_SETTINGS);
    geo.center();
    applyVertexGradient(geo);
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current) return;

    // Rotation autonome lente — aucune interaction souris.
    groupRef.current.rotation.y += delta * 0.22;

    // Apparition en douceur au montage : échelle + léger overshoot élastique.
    elapsed.current = Math.min(elapsed.current + delta, 1.2);
    const t = elapsed.current / 1.2;
    const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t) * Math.cos((t * 10 - 0.75) * (2 * Math.PI) / 3);
    meshRef.current.scale.setScalar(0.2 + eased * 0.8);
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.3}>
        <mesh ref={meshRef} geometry={geometry} rotation={[0, 0.35, 0]} castShadow receiveShadow scale={0.2}>
          <meshPhysicalMaterial
            vertexColors
            metalness={0.45}
            roughness={0.22}
            clearcoat={0.8}
            clearcoatRoughness={0.15}
            iridescence={0.35}
            iridescenceIOR={1.3}
            iridescenceThicknessRange={[100, 400]}
            envMapIntensity={1.6}
            emissive="#5b63e0"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
}
