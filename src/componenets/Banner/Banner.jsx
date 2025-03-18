import React, { useRef, useEffect, useState } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Model } from "../Bamboo/Model";
import "./Banner.css";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import {ContentOverlay} from "../Contents/ContentOverlay";

export default function Banner({ progress }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial check

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      
      <Environment preset="city" />
      <ambientLight intensity={1} />
      <ScrollControls pages={10} damping={0.25} distance={1} horizontal={false}>
      <ContentOverlay />
      {!isMobile && <Model />} {/* Render Model only on desktop */}
      </ScrollControls>
      
      
    </>
  );
}
