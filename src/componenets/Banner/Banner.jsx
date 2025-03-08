import React, { useRef, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Model } from "../Bamboo/Model";
import "./Banner.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { AxesHelper } from "three";
import {ContentOverlay} from "../Contents/ContentOverlay";


// gsap.registerPlugin(ScrollTrigger);

export default function Banner({ progress }) {
  const cameraRef = useRef(null);
//   useFrame(() => {
//     if (cameraRef.current) {
//       cameraRef.current.lookAt(0, 0, 0);
//     }
//   });

//   useEffect(() => {
//     const updateCamPos = () => {
//       const positions = [
//         [3.5, 2.17, 7.7],
//         [3.7, 0.6, 0.1],
//         [2.3, 0.87, 0.1],
//         [0, 2.5, 0.1],
//       ];

//       if (progress >= 1) {
//         gsap.to(cameraRef.current.position, {
//           x: 0,
//           y: 2.5,
//           z: 7.6,
//           duration: 0.5,
//           ease: "power1.out",
//         });
//       } else {
//         const segmentProgress = 1 / 3;

//         const segmentIndex = Math.floor(progress / segmentProgress);
//         //   console.log(segmentIndex)
//         const percentage = (progress % segmentProgress) / segmentProgress;
//         //   console.log(percentage)
//         const [startX, startY, startZ] = positions[segmentIndex];
//         const [endX, endY, endZ] = positions[segmentIndex + 1];

//         const x = startX + (endX - startX) * percentage;
//         const y = startY + (endY - startY) * percentage;
//         const z = startZ + (endZ - startZ) * percentage;

//         gsap.to(cameraRef.current.position, {
//           x: x,
//           y: y,
//           z: z,
//           duration: 0.1,
//           ease: "power1.out",
//         });
//       }
//     };
//     updateCamPos();
//   }, [progress, cameraRef.current]);
  return (
    // <div className="canvas-container">
    //   <Canvas camera={{ position: [0, 3, 10], fov: 50 }}>
    //     <ambientLight intensity={1} />
    //     <directionalLight position={[5, 5, 5]} intensity={1} />
    //     <ScrollControls pages={3} damping={0.25}>
    //         <Model scale={0.5} /> {/* Adjust scale here */}
    //     </ScrollControls>

    //     <OrbitControls minDistance={2} maxDistance={15} enableZoom = {false}/>

    //   </Canvas>
    // </div>
    <>
      {/* <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={10000}
        makeDefault
        // position={[3.5, 2.17, 7.7]}
        // position={[3.7,.6, 4.7]}
        // position={[2.3, .87, 4.7]}
        // position={[0, 2.5, 7.6]}
        
        position={[2.5, 3.0, 5.5]}
        
      /> */}
      
      <Environment preset="city" />
      <OrbitControls enableZoom = {false} enableRotate = {false} enablePan = {false} />
      <ambientLight intensity={1} />
      <ScrollControls pages={8} damping={0.25}>
      <ContentOverlay />
      <Model />
      </ScrollControls>
      
      
    </>
  );
}
