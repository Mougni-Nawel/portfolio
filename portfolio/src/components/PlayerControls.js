import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';

function PlayerControls() {
  const { camera } = useThree();
  const [movement, setMovement] = useState(0);
  const rotationSpeed = 0.00; // Adjust the rotation speed as needed
  const movementSpeed = 0.1; // Adjust the movement speed as needed

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          camera.rotation.y += rotationSpeed;
          break;
        case 'ArrowRight':
          camera.rotation.y -= rotationSpeed;
          break;
        case 'ArrowUp':
          setMovement(movement + movementSpeed);
          break;
        case 'ArrowDown':
          setMovement(movement - movementSpeed);
          break;
        default:
          break;
      }
    };

    const handleKeyUp = () => {
      setMovement(0);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [movement, camera]);

  useEffect(() => {
    camera.position.x -= movement * Math.sin(camera.rotation.y);
    camera.position.z -= movement * Math.cos(camera.rotation.y);
  }, [movement, camera]);

  return null; // PlayerControls doesn't render anything
}

export default PlayerControls;
