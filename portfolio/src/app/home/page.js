'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
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
        setLoading(false); // Set loading to false when the camera is available
      } else {
        setTimeout(checkCamera, 100); // Check again after 100 milliseconds
      }
    };
  
    checkCamera(); // Start checking for camera availability
  
    return () => clearTimeout(); // Cleanup function to clear the timeout
  }, [camera.current, cameraPosition]); // Update when camera.current, cameraPosition, or scene changes

  const handleWallObjectClick = (projectId) => {
    // Define the behavior when a WallObject is clicked
    console.log('WallObject clicked!');
    window.location.href = `/projects?id=${projectId}`;
  };

  return (
    <>
      {loading && <LoadingScreen />} {/* Display loading screen here */}
      <div className={styles['home-container']}>
        <Canvas className={styles['canvas-container']}>
          <ambientLight intensity={0.5} />
          <BackgroundImage />
          <Model />
          {!loading && (
            <>
              <WallObject position={{ x: -7.5, y: 1.8, z: -0.5 }} rotation={{ x: 0, y: 0, z: 0 }} onClick={() => handleWallObjectClick(1)}  imageUrl="/ireland.jpg"/>
              <WallObject position={{ x: 11.25, y: 1.8, z: -0.5 }} rotation={{ x: 0, y: 0, z: 0 }} onClick={() => handleWallObjectClick(2)} imageUrl="/logo.png" />
              <WallObject position={{ x: 7.5, y: 1.8, z: 2 }} rotation={{ x: 0, y: (90 * Math.PI) / 180, z: 0 }} onClick={() => handleWallObjectClick(3)}  imageUrl="/ireland.jpg"/>
              <WallObject position={{ x: 7.5, y: 1.8, z: -3.4 }} rotation={{ x: 0, y: (90 * Math.PI) / 180, z: 0 }} onClick={() => handleWallObjectClick(4)}  imageUrl="/ireland.jpg"/>
              <WallObject position={{ x: 1.3, y: 1.8, z: -3.4 }} rotation={{ x: 0, y: (90 * Math.PI) / 180, z: 0 }} onClick={() => handleWallObjectClick(5)}  imageUrl="/ireland.jpg"/>
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
