import React, { useRef, useEffect } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Model } from "../Bamboo/Model";
import "./Banner.css";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import {ContentOverlay} from "../Contents/ContentOverlay";

export default function Banner({ progress }) {
  
  return (
    <>
      
      <Environment preset="city" />
      <OrbitControls enableZoom = {false} enableRotate = {false} enablePan = {false} />
      <ambientLight intensity={1} />
      <ScrollControls pages={10} damping={0.25}>
      <ContentOverlay />
      <Model />
      </ScrollControls>
      
      
    </>
  );
}
