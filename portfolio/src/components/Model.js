import React from 'react';
import { useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/room.glb');
  return <primitive object={scene} />;
}

export default Model;
