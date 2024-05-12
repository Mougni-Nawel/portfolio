'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import WallObject from '../../components/WallObject';
import PlayerControls from '../../components/PlayerControls';
import LoadingScreen from '../../components/LoadingScreen';
import Modal from '../../components/Modal'; // Import the Modal component
import styles from '@/app/styles/Home.module.scss';
import { useRouter } from 'next/router';

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
  const { scene } = useGLTF('/room.glb');
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 0 });
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

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
  }, [camera.current, cameraPosition, scene]); // Update when camera.current, cameraPosition, or scene changes

  const handleWallObjectClick = () => {
    // Define the behavior when a WallObject is clicked
    console.log('WallObject clicked!');
    setModalVisible(true); // Show the modal when a WallObject is clicked
    window.location.href = '/contact';
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
              <WallObject position={{ x: -7.5, y: 1.8, z: -0.5 }} rotation={{ x: 0, y: 0, z: 0 }} onClick={handleWallObjectClick}  camera={camera.current}/>
              <WallObject position={{ x: 11.25, y: 1.8, z: -0.5 }} rotation={{ x: 0, y: 0, z: 0 }} onClick={handleWallObjectClick}  camera={camera.current}/>
              <WallObject position={{ x: 7.5, y: 1.8, z: 2 }} rotation={{ x: 0, y: (90 * Math.PI) / 180, z: 0 }} onClick={handleWallObjectClick}  camera={camera.current}/>
              <WallObject position={{ x: 7.5, y: 1.8, z: -3.4 }} rotation={{ x: 0, y: (90 * Math.PI) / 180, z: 0 }} onClick={handleWallObjectClick}  camera={camera.current}/>
              <WallObject position={{ x: 1.3, y: 1.8, z: -3.4 }} rotation={{ x: 0, y: (90 * Math.PI) / 180, z: 0 }} onClick={handleWallObjectClick}  camera={camera.current}/>
              <WallObject position={{ x: -2.5, y: 1.8, z: -3.4 }} rotation={{ x: 0, y: (90 * Math.PI) / 180, z: 0 }} onClick={handleWallObjectClick}  camera={camera.current}/>
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
          <PlayerControls />
        </Canvas>
      </div>
      {modalVisible && <Modal onClose={() => setModalVisible(false)}></Modal>} {/* Display modal with LOL */}
    </>
  );
}

export default Home;
