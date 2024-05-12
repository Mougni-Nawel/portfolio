// WallObject.js
import React, { useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useFrame } from '@react-three/fiber';

function WallObject({ position, rotation, onClick }) {
  const meshRef = useRef();

  const handleClick = () => {
    if (onClick) onClick();
  };

  useFrame(() => {
    const loader = new OBJLoader();
    loader.load('/PM.obj', (obj) => {
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load('/ireland.jpg', (texture) => {
        const material = new THREE.MeshBasicMaterial({ map: texture });
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        obj.scale.set(2, 2, 2);
        obj.position.set(position.x, position.y, position.z);
        obj.rotation.set(rotation.x, rotation.y, rotation.z);
        meshRef.current.add(obj);
      });
    });
  });

  return (
    <mesh ref={meshRef} onClick={handleClick}>
    </mesh>
  );
}

export default WallObject;
