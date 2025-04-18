/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Shahriar Shahrabi (https://sketchfab.com/shahriyarshahrabi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/floating-castle-1e157bab3a4042eb834ca07d73aa28ce
Title: Floating Castle
*/

import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/floating_castle.glb";

export function Island({isRotating, setIsRotating, setCurrentStage, ...props}) {
    const islandRef = useRef();
    // Get access to the Three.js renderer and viewport
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(islandScene)

    // Use a ref for the last mouse x position
    const lastX = useRef(0);
    // Use a ref for rotation speed
    const rotationSpeed = useRef(0);
    // Define a damping factor to control rotation damping
    const dampingFactor = 0.95;

      // Handle pointer (mouse or touch) down event
    const handlePointerDown = (event) => {
      event.stopPropagation();
      event.preventDefault();
      setIsRotating(true);

      // Calculate the clientX based on whether it's a touch event or a mouse event
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // Store the current clientX position for reference
      lastX.current = clientX;
  };

    // Handle pointer (mouse or touch) up event
    const handlePointerUp = (event) => {
      event.stopPropagation();
      event.preventDefault();
      setIsRotating(false);
    };

     // Handle pointer (mouse or touch) move event
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the island's rotation based on the mouse/touch movement
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

   // Handle keydown events
   const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007; //or 0.0125
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007; 
    }
  };

  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  // Touch events for mobile devices
  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
  
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }
  
  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
  
  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
  
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
  
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    // This function is called on each frame update
    useFrame(() => {
      // If not rotating, apply damping to slow down the rotation (smoothly)
      if (!isRotating) {
        // Apply damping factor
        rotationSpeed.current *= dampingFactor;
  
        // Stop rotation when speed is very small
        if (Math.abs(rotationSpeed.current) < 0.001) {
          rotationSpeed.current = 0;
        }
  
        islandRef.current.rotation.y += rotationSpeed.current;
      } else {
        // When rotating, determine the current stage based on island's orientation
        const rotation = islandRef.current.rotation.y;
  
        /**
         * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
         * The goal is to ensure that the rotation value remains within a specific range to
         * prevent potential issues with very large or negative rotation values.
         *  Here's a step-by-step explanation of what this code does:
         *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
         *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
         *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
         *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
         *     This is done to ensure that the value remains positive and within the range of
         *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
         *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
         *     modulo operation to the value obtained in step 2. This step guarantees that the value
         *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
         *     circle in radians.
         */
        const normalizedRotation =
          ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  
        // Set the current stage based on the island's orientation
        switch (true) {
          case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            setCurrentStage(4);
            break;
          case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
            setCurrentStage(3);
            break;
          case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
            setCurrentStage(2);
            break;
          case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(null);
        }
      }
    });

  return (
    <a.group ref = {islandRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.8}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-724.465, 399.803, 29.097]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Attachments_AllAccesoriesCombined_0.geometry}
              material={materials.AllAccesoriesCombined}
            />
            <mesh
              geometry={nodes.Attachments_AllAccesoriesCombined_0_1.geometry}
              material={materials.AllAccesoriesCombined}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.CastleTrurtleOutline_Outline_0.geometry}
              material={materials.Outline}
            />
            <mesh
              geometry={nodes.CastleTrurtleOutline_Outline_0_1.geometry}
              material={materials.Outline}
            />
            <mesh
              geometry={nodes.CastleTrurtleOutline_Outline_0_2.geometry}
              material={materials.Outline}
            />
            <mesh
              geometry={nodes.CastleTrurtleOutline_Outline_0_3.geometry}
              material={materials.Outline}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.TurtleAndCastle_CombinedCastleMaterial001_0.geometry}
              material={materials['CombinedCastleMaterial.001']}
            />
            <mesh
              geometry={nodes.TurtleAndCastle_CombinedCastleMaterial001_0_1.geometry}
              material={materials['CombinedCastleMaterial.001']}
            />
            <mesh
              geometry={nodes.TurtleAndCastle_CombinedCastleMaterial001_0_2.geometry}
              material={materials['CombinedCastleMaterial.001']}
            />
          </group>
          <mesh
            geometry={nodes.Skybox_Skybox_0.geometry}
            material={materials.Skybox}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.CloudsFlat003_CloudBaked_0.geometry}
            material={materials.CloudBaked}
            position={[1.887, -571.028, -9.53]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Outside001_CloudBakedTransparent_0.geometry}
            material={materials.CloudBakedTransparent}
            position={[3399.461, 45.327, 182.176]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Outside002_CloudBakedTransparent_0.geometry}
            material={materials.CloudBakedTransparent}
            position={[-522.979, -313.362, -3365.169]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Outside003_CloudBakedTransparent_0.geometry}
            material={materials.CloudBakedTransparent}
            position={[3089.544, -1220.537, 4199.251]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Outside004_CloudBakedTransparent_0.geometry}
            material={materials.CloudBakedTransparent}
            position={[-3795.963, -51.691, -1205.697]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Skybox001_Sky_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Spells1_Spell_0.geometry}
            material={materials.Spell}
            position={[-903.653, 436.014, -49.914]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={54.022}
          />
          <mesh
            geometry={nodes.Spells_Spell_0.geometry}
            material={materials.Spell}
            position={[-903.653, 453.707, -49.914]}
            rotation={[-Math.PI / 2, 0, 0.255]}
            scale={97.135}
          />
          <mesh
            geometry={nodes.Spells2_Spell_0.geometry}
            material={materials.Spell}
            position={[-903.653, 469.462, -49.914]}
            rotation={[-Math.PI / 2, 0, 0.31]}
            scale={69.115}
          />
          <mesh
            geometry={nodes.Spells3_Spell_0.geometry}
            material={materials.Spell}
            position={[-903.653, 490.649, -49.914]}
            rotation={[-Math.PI / 2, 0, 0.31]}
            scale={45.55}
          />
          <mesh
            geometry={nodes.Trail_Trail_0.geometry}
            material={materials.Trail}
            position={[429.786, 606.421, -866.786]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Glass_Glass_0.geometry}
            material={materials.Glass}
            position={[-724.465, 399.803, 29.097]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.WingsTrail_Trail_0.geometry}
            material={materials.Trail}
            position={[459.317, 632.189, -849.284]}
            rotation={[-0.927, 0.804, -0.823]}
            scale={46.239}
          />
          <mesh
            geometry={nodes.Birds_VertexColor_0.geometry}
            material={materials.VertexColor}
            position={[241.03, 459.307, -688.929]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh                    
            geometry={nodes.TreesOutlines_Outline_0.geometry}
            material={materials.Outline}
            position={[-724.465, 399.803, 29.097]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </a.group>
  )
}

export default Island;