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
  const [page_number, setPages] = useState(9.6);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      const width = window.innerWidth;
      if (width <= 1281) {
        setPages(15.5);
      }
      else if (width <= 1441) {
        setPages(9.75);
      }
      else if (width <= 1472 ) {
        setPages(9.3);
      } else if (width <= 1536) {
        setPages(12.35);
      } else if (width <= 1728) {
        setPages(8.1);
      }else if (width <= 1920) {
        setPages(9.65);
      }else if (width <= 3840) {
        setPages(4.1);
      } else {
        setPages(9.6);
      }
      
    };
//     const handleResize = () => {
//   const height = window.innerHeight;
//   setIsMobile(window.innerWidth <= 768); // still useful

//   if (height <= 600) {
//     setPages(15.5); // very short screen (e.g., small tablets/old phones)
//   }
//   else if (height <= 720) {
//     setPages(10);
//   } else if (height <= 768) {
//     setPages(11.5); // common for 1280×720 screens
//   } else if (height <= 800) {
//     setPages(11);
//   } else if (height <= 864) {
//     setPages(12.35); // your 1536×864 laptop
//   } else if (height <= 900) {
//     setPages(9.8); // 1600×900
//   } else if (height <= 1080) {
//     setPages(9.7); // Full HD screens
//   } else if (height <= 1200) {
//     setPages(9.3); // QHD+ laptops
//   } else if (height <= 1441) {
//     setPages(6.2); // 2K or taller monitors
//   } else if (height <= 2161) {
//     setPages(4.5); // 4K monitors
//   } else {
//     setPages(4.1); // ultrawide or high DPI screens
//   }
// };

  
    handleResize(); 
  
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
