import React, { useLayoutEffect, useRef } from "react";
import {
  useGLTF,
  PerspectiveCamera,
  useScroll,
  Environment,
} from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { useFrame} from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);
export function Model(props) {
  const { nodes, materials } = useGLTF("/assets/model/bamboo.glb");

  //color
  const bambooMaterial = new MeshStandardMaterial({
    color: "#006D32", // Green
    roughness: 0.8, // Less reflective
    metalness: 0.1, // Slight metallic feel
  });

  const leafMaterial = new MeshStandardMaterial({
    color: "#446A28",
    roughness: 0.8, // Less reflective
    metalness: 0.1, // Slight metallic feel
  });

  const sectionBambooMaterial = new MeshStandardMaterial({
    color: "#B8860B",
    roughness: 0.5,
    metalness: 0.7,

  })

  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      glowColor: { value: new THREE.Color("#FFD700") }, // Bright gold glow
      intensity: { value: 1.0 }, // Glow intensity
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      uniform float intensity;
      varying vec3 vNormal;
      void main() {
        float glow = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(glowColor * glow * intensity, 1.0);
      }
    `,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

//   const {scene} = useThree();

  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll();
  const camera = useRef();

 const shoot1Ref = useRef();
 const shoot2Ref = useRef();
 const shoot3Ref = useRef();
 const shoot4Ref = useRef();
 const shoot5Ref = useRef();
 const shoot6Ref = useRef();
 const shoot7Ref = useRef();
 const shoot8Ref = useRef();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    console.log("timeline started");

    //rotation
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: (60 * Math.PI) / 180, z: 0 },
      0
    );
    tl.current.to(ref.current.rotation, { duration: 1, x: 0, y: 0, z: 0 }, 9);

    //movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        // x: -1,
        // y:1.5,
        x: 0.6,
        // y: 1,
        z: 3,
        ease: "power2.inOut",
        
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: 1.5,
        ease: "power2.inOut",
        
      },
      1
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: 1,
        ease: "power2.inOut",
        
      },
      2
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: 0.8,
        ease: "power2.inOut",
        
      },
      3
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: 0.4,
        ease: "power2.inOut",
       
      },
      4
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: 0,
        ease: "power2.inOut",
        
      },
      5
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: -0.4,
        ease: "power2.inOut",
        
      },
      6
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: -0.8,
        ease: "power2.inOut",
        
      },
      7
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: -1,
        ease: "power2.inOut",
        
      },
      8
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 0,
        y: 0,
        z: 0,
        ease: "power2.Out",
        // onUpdate: () => {
        //   console.log("step 9");
        //   shoot8Ref.current.material = bambooMaterial;
        // },
      },
      9
    );
  });

  return (
    <group {...props} dispose={null} scale={[6.5, 6.5, 6.5]} ref={ref}>
      <group scale={0.01}>
        <group position={[-35.305, -35, 6.171]} scale={[2.213, 2.126, 2.399]}>
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
                  material={leafMaterial}
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
                  material={leafMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={leafMaterial}
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
                  material={leafMaterial}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={leafMaterial}
                />
              </group>
              <group
                position={[15.205, 0.343, -0.185]}
                rotation={[0, 0, 0.168]}
                scale={[0.909, 1, 0.97]}
              >
                <mesh
                  ref = {shoot1Ref}
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66001.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  ref = {shoot2Ref}
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66002.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  ref = {shoot3Ref}
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66003.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  ref = {shoot4Ref}
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66004.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  ref = {shoot5Ref}
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66005.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  ref = {shoot6Ref}
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66006.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  ref = {shoot7Ref}
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66007.geometry}
                  material={bambooMaterial}
                />
                <mesh
                  ref = {shoot8Ref}
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
                  material={leafMaterial}
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
          far={100000} 
          near={0.01} 
          fov={30} 
          position={[82.05, 29.713, -112.523]}
          rotation={[-2.883, 0.614, 2.991]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/model/bamboo.glb"); 
