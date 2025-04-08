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
  const { nodes, materials } = useGLTF("/assets/model/bamboo_ver2.glb");

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
      { duration: 2, x: 0, y: -Math.PI / 32, z: 0 },
      0
    );
    tl.current.to(ref.current.rotation, { duration: 1, x: 0, y: -Math.PI / 2, z: 0 }, 9);

    //movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        // x: -1,
        // y:30,
        x: -15,
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
        y: -6,
        ease: "power2.inOut",
        
      },
      1
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: -10,
        ease: "power2.inOut",
        
      },
      2
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: -16,
        ease: "power2.inOut",
        
      },
      3
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: -22,
        ease: "power2.inOut",
       
      },
      4
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: -24,
        ease: "power2.inOut",
        
      },
      5
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: -30,
        ease: "power2.inOut",
        
      },
      6
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: -36,
        ease: "power2.inOut",
        
      },
      7
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: -40,
        ease: "power2.inOut",
        
      },
      8
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -20,
        y: -20,
        z: -50,
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
    <group {...props} dispose={null} ref={ref} position={[-18, -22, -50]} rotation={[0, -Math.PI / 2, 0]} >
      <group position={[-0.162, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials.bambooMat}
          position={[19.944, -0.109, -18.458]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_67.geometry}
          material={materials.bamboobranch}
          position={[19.944, -0.109, -18.458]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials.bambooalpha_basecolor}
          position={[19.944, -0.109, -18.458]}
        />
      </group>
      <group position={[25.829, 0, -20]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.bamboobranch}
          position={[-4.919, 1.302, 4.226]}
          rotation={[-0.089, -0.055, -0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_63.geometry}
          material={materials.bambooalpha_basecolor}
          position={[-4.919, 1.302, 4.226]}
          rotation={[-0.089, -0.055, -0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials.bambooold}
          position={[-4.919, 1.302, 4.226]}
          rotation={[-0.089, -0.055, -0.095]}
        />
      </group>
      <group position={[16.607, 0, -20]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.bambooalpha_basecolor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_59.geometry}
          material={materials.bamboobranch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.bambooold}
        />
      </group>
      <group position={[-0.162, 0, -20]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.bambooMat}
          position={[16.54, 0.517, 4.722]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials.bambooalpha_basecolor}
          position={[16.54, 0.517, 4.722]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.bambooold}
          position={[16.54, 0.517, 4.722]}
        />
      </group>
      <group position={[25.829, 0, -40]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.bamboobranch}
          position={[-5.512, -1.344, 11.591]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.bambooalpha_basecolor}
          position={[-5.512, -1.344, 11.591]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.bamboooldnew}
          position={[-5.512, -1.344, 11.591]}
        />
      </group>
      <group position={[16.607, 0, -40]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.bambooalpha_basecolor}
          position={[0.246, -2.148, 12.384]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials.bamboobranch}
          position={[0.246, -2.148, 12.384]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.bamboooldnew}
          position={[0.246, -2.148, 12.384]}
        />
      </group>
      <group position={[-0.162, 0, -40]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.bamboobranch}
          position={[25.982, 0.896, 20.56]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_43.geometry}
          material={materials.bambooalpha_basecolor}
          position={[25.982, 0.896, 20.56]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.bamboooldnew}
          position={[25.982, 0.896, 20.56]}
        />
      </group>
      <group position={[25.829, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.bambooMat}
          position={[-3.393, 1.869, -10.279]}
          rotation={[-0.014, -0.009, -0.015]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.bamboobranch}
          position={[-3.393, 1.869, -10.279]}
          rotation={[-0.014, -0.009, -0.015]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.bambooalpha_basecolor}
          position={[-3.393, 1.869, -10.279]}
          rotation={[-0.014, -0.009, -0.015]}
        />
      </group>
      <group position={[16.607, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.bambooMat}
          position={[6.636, 0.813, -14.976]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials.bambooalpha_basecolor}
          position={[6.636, 0.813, -14.976]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.bamboobranch}
          position={[6.636, 0.813, -14.976]}
        />
      </group>
      <group position={[30.389, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.bamboobranch}
          position={[-6.356, 2.192, -8.501]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.bambooalpha_basecolor}
          position={[-6.356, 2.192, -8.501]}
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

useGLTF.preload("/assets/model/bamboo_ver2.glb"); 
