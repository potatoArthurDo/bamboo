import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera, useScroll, Environment } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
import { useFrame } from '@react-three/fiber'

import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/model/bamboo.gltf')

  //color
  const bambooMaterial = new MeshStandardMaterial({
    color: '#6B8E23', // Green
    roughness: 0.8,   // Less reflective
    metalness: 0.1,   // Slight metallic feel
  })

  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll();

//   useFrame(() => {
//     tl.current.seek(scroll.offset * tl.current.duration());
//   })

//   useLayoutEffect( () => {
//     tl.current = WebGLSampler.timeline();

//     //Vertical animation
//     tl.current.to (
//         ref.current.position,
//         {
//             duration: 2,
//             y: -FLOOR_HEIGHT * (NB_FLOORS -1),


//         },
//     )
//   })
    
return (
    <group {...props} dispose={null} scale ={[6,6,6]}>
      <group scale={0.01}>
        <group position={[-35.305, -25, 6.171]} scale={[2.213, 2.126, 2.399]}>
          <group
            position={[-1.15, 0, 1.571]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.04, 1.201, 1]}>
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
                  geometry={nodes.Object_66.geometry}
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
        <directionalLight intensity={0.7} decay={2} rotation={[-0.506, 0.629, 0.756]} />
        <PerspectiveCamera
          makeDefault={false}
          far={100000}
          near={70}
          fov={45}
          position={[82.05, 29.713, -112.523]}
          rotation={[-2.883, 0.614, 2.991]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/model/bamboo.gltf') // Preload for better performance
