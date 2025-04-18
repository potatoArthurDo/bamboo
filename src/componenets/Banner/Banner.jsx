import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Model } from "../Bamboo/Model";
import "./Banner.css";
// import { isMobile } from "react-device-detect";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { ContentOverlay } from "../Contents/ContentOverlay";
// import {MobileOverlay} from "../Contents/MobileOverlay";

export default function Banner({ progress }) {
  const [IsMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial check
  const [page_number, setPages] = useState(10.5);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      const width = window.innerWidth;
      if (width < 1536) {
        setPages(13.1); // Smaller screens
      } if (width <= 1441) {
        setPages(10.4); // 1440px to 1535px
      }
       else {
        setPages(10); // 1920px and above
      }
    };
  
    handleResize(); // 👈 Run it immediately on mount
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={1} />
      <ScrollControls pages={page_number} damping={0.25} distance={1} horizontal={false}>
        <ContentOverlay />
        {!IsMobile && <Model />} {/* Render Model only on desktop */}
      </ScrollControls>
    </>
  );
}
