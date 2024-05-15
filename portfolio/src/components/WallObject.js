import React, { useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useFrame } from '@react-three/fiber'; // used for rendering frames in Treejs

function WallObject({ position, rotation, onClick, imageUrl }) {
  const meshRef = useRef();

  const handleClick = () => {
    if (onClick) onClick();
  };

  // perform operations on every frame render
  useFrame(() => {
    const loader = new OBJLoader();
    // loading the object file
    loader.load('/PM.obj', (obj) => {
      const textureLoader = new THREE.TextureLoader();
      // loading the texture
      textureLoader.load(imageUrl, (texture) => {
      // new material with the loaded texture
        const material = new THREE.MeshBasicMaterial({ map: texture });
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        obj.scale.set(2, 2, 2);
        obj.position.set(position.x, position.y, position.z);
        obj.rotation.set(rotation.x, rotation.y, rotation.z);
        if(meshRef.current !== null){
          meshRef.current.add(obj);
        }
      });
    });
  });

  {/* render a mesh with the reference and onClick event */}
  return (
    <mesh ref={meshRef} onClick={handleClick}>
    </mesh>
  );
}

export default WallObject;
