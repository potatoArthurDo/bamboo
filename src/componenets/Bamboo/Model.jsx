import React, { useLayoutEffect, useRef } from "react";
import {
  useGLTF,
  PerspectiveCamera,
  useScroll,
  Environment,
} from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { useFrame } from "@react-three/fiber";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 6;


gsap.registerPlugin(ScrollTrigger);
export function Model(props) {
  const { nodes, materials } = useGLTF("/assets/model/bamboo.glb");

  
  //color
  const bambooMaterial = new MeshStandardMaterial({
    color: "#6B8E23", // Green
    roughness: 0.8, // Less reflective
    metalness: 0.1, // Slight metallic feel
  });

  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll();
  const camera = useRef();

  const feedbackRef = useRef();
  const achievementRef = useRef();
  const serviceRef = useRef();
  const purposeRef = useRef();
  const founderRef = useRef();
  const traditionRef = useRef();
  const humanRef = useRef();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    console.log("timeline started")

    //vertical animation
    // tl.current.to(
    //   ref.current.position,
    //   {
    //     duration: 5,
    //     y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
    //     ease: "power2.inOut",
    //   },
    //   1
    // );

    // tl.current.to(ref.current.scale, {
    //     duration: 2,
    //     x: 5, // Make model 5x bigger
    //     y: 5,
    //     z: 3,
    //   });
      
    //   tl.current.to(camera.current.position, {
    //     duration: 3,
    //     x: nodes.Object_15.position.x + 0.5, // Moves closer to part of the model
    //     y: nodes.Object_15.position.y + 1, 
    //     z: nodes.Object_15.position.z + 2, 
    //     ease: "power2.inOut",
    //     onUpdate: () => camera.current.lookAt(nodes.Object_15.position), // Keeps focus
    //   });
      
      
      
    tl.current.to(camera.current.position, {
      duration: 3,
      y:5,})

    // tl.current.to(
    //     ref.current.scale,
    //     {
    //       duration: 2, // 2 seconds to zoom in
    //       x: 5,  // 2x bigger
    //       y: 5,
    //       z: 5,
    //       ease: "power2.inOut",
    //     }
    //   );
    //rotation
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y:  (60 * Math.PI) / 180 , z: 0 },
      0
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: 0, z: 0 },
      9
    );

    //movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        // x: -1,
        // y:1.5,
        x:0.6,
        y: 1,
        z: 3,
        ease: "power2.inOut",
        onUpdate: () => {
            console.log("step 1")
        }
       
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y:0.5,
        ease: "power2.inOut",
        onUpdate: () => {
            console.log("step 2")
        }
      },
      1
    );
    tl.current.to(
        ref.current.position,
        {
          duration: 1,
          y:0,
          ease: "power2.inOut",
          onUpdate: () => {
            console.log("step 3")
        }
        },
        2
      );
      tl.current.to(
        ref.current.position,
        {
          duration: 1,
          y:-0.4,
          ease: "power2.inOut",
          onUpdate: () => {
            console.log("step 4")
        }
        },
        3
      );
      tl.current.to(
        ref.current.position,
        {
          duration: 1,
          y:-0.8,
          ease: "power2.inOut",
          onUpdate: () => {
            console.log("step 5")
        }
        },
        4
      );
      tl.current.to(
        ref.current.position,
        {
          duration: 1,
          y:-1.2,
          ease: "power2.inOut",
          onUpdate: () => {
            console.log("step 6")
        }
        },
        5
      );
      tl.current.to(
        ref.current.position,
        {
          duration: 1,
          y:-1.6,
          ease: "power2.inOut",
          onUpdate: () => {
            console.log("step 7")
        }
        },
        6
      );
      tl.current.to(
        ref.current.position,
        {
          duration: 1,
          y:-1.8,
          ease: "power2.inOut",
          onUpdate: () => {
            console.log("step 8")
        }
          
        },
        7
      );
    //   tl.current.to(
    //     ref.current.position,
    //     {
    //       duration: 1,
    //       y:-1.6,
    //       ease: "power2.inOut",
    //       onUpdate: () => {
    //         console.log("step 9")
    //     }
          
    //     },
    //     8
    //   );
      tl.current.to(
        ref.current.position,
        {
          duration: 1,
          x:0,
          y:0,
          z: 0,
          ease: "power2.Out",
          onUpdate: () => {
            console.log("step 9")
        }
        },
        9
      );
      
  });


  return (
    <group {...props} dispose={null} scale={[6, 6, 6]} ref={ref}>
      <group scale={0.01}>
        <group position={[-35.305, -25, 6.171]} scale={[2.213, 2.126, 2.399]}>
          <group
            position={[-1.15, 0, 1.571]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.04, 1.201, 1]}
          >
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[20.805, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={bambooMaterial}
                />
              </group>
              <group position={[16.607, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={bambooMaterial}
                />
              </group>
              <group position={[18.7, 1.222, 0]} rotation={[0, 0, -0.17]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={bambooMaterial}
                />
              </group>
              <group
                position={[15.205, 0.343, -0.185]}
                rotation={[0, 0, 0.168]}
                scale={[0.909, 1, 0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66001.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66002.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66003.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66004.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66005.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66006.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66007.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66008.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_67.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={bambooMaterial}
                />
              </group>
            </group>
          </group>
        </group>
        <directionalLight
          intensity={0.7}
          decay={2}
          rotation={[-0.506, 0.629, 0.756]}
        />
        <PerspectiveCamera
        ref={camera}
          makeDefault={false}
          far={100000} // This is fine for big scenes
          near={0.01} // Allows very close zooming
          fov={30} // Lower FOV for zoom effect
          position={[82.05, 29.713, -112.523]}
          rotation={[-2.883, 0.614, 2.991]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/model/bamboo.glb"); // Preload for better performance
