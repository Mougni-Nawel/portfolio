'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'; // used to manage the scene
import { OrbitControls, useGLTF } from '@react-three/drei'; // used for camera control and loading 3D models
import WallObject from '../../components/WallObject';
import LoadingScreen from '../../components/LoadingScreen';
import styles from '../../assets/styles/Home.module.scss'

function BackgroundImage() {
  return null;
}

function Model() {
  const { scene } = useGLTF('/room.glb');
  return <primitive object={scene} />;
}

function Home() {
  const controls = useRef();
  const camera = useRef();
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkCamera = () => {
      if (camera.current) {
        camera.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
        camera.current.lookAt(0, 0, 0);
        controls.current.target.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
        controls.current.update();
        setLoading(false);
      } else {
        // check every 100 ms
        setTimeout(checkCamera, 100);
      }
    };
  
    checkCamera();
  
    return () => clearTimeout();
  }, [camera.current, cameraPosition]);

  const handleWallObjectClick = (projectId) => {
    console.log('WallObject clicked!');
    window.location.href = `/projects?id=${projectId}`;
  };

  return (
    <>
     {/* loading screen displaying here */}
      {loading && <LoadingScreen />}
      <div className={styles['home-container']}>
        <Canvas className={styles['canvas-container']}>
          <ambientLight intensity={0.5} />
          <BackgroundImage />
          {/* Model 3D here */}
          <Model /> 
          {!loading && (
            <>
            {/* WallObject components with different positions and click handlers */}
              <WallObject position={{ x: -7.5, y: 1.8, z: -0.5 }} rotation={{ x: 0, y: 0, z: 0 }} onClick={() => handleWallObjectClick(1)}  imageUrl="/eshop.png"/>
              <WallObject position={{ x: 11.25, y: 1.8, z: -0.5 }} rotation={{ x: 0, y: 0, z: 0 }} onClick={() => handleWallObjectClick(2)} imageUrl="/buddy.png" />
              <WallObject position={{ x: 7.5, y: 1.8, z: 2 }} rotation={{ x: 0, y: (90 * Math.PI) / 180, z: 0 }} onClick={() => handleWallObjectClick(3)}  imageUrl="/api.jpg"/>
              <WallObject position={{ x: 7.5, y: 1.8, z: -3.4 }} rotation={{ x: 0, y: (90 * Math.PI) / 180, z: 0 }} onClick={() => handleWallObjectClick(4)}  imageUrl="/api.jpg"/>
              <WallObject position={{ x: 1.3, y: 1.8, z: -3.4 }} rotation={{ x: 0, y: (90 * Math.PI) / 180, z: 0 }} onClick={() => handleWallObjectClick(5)}  imageUrl="/api.jpg"/>
              <WallObject position={{ x: -2.5, y: 1.8, z: -3.4 }} rotation={{ x: 0, y: (90 * Math.PI) / 180, z: 0 }} onClick={() => handleWallObjectClick(6)}  imageUrl="/ireland.jpg"/>
            </>
          )}
          <OrbitControls
            ref={controls}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minDistance={1}
            maxDistance={10}
          />
          <perspectiveCamera ref={camera} />
        </Canvas>
      </div>
    </>
  );
}

export default Home;
