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
  const [page_number, setPages] = useState(10.3);

  useEffect(() => {
    // const handleResize = () => {
    //   setIsMobile(window.innerWidth <= 768);
    //   const width = window.innerWidth;
    //   if (width <= 1281) {
    //     setPages(16);
    //   }else if (width <= 1366) {
    //     setPages(11.8);
    //   }
    //   else if (width <= 1441) {
    //     setPages(9.75);
    //   }
    //   else if (width <= 1472 ) {
    //     setPages(9.3);
    //   } else if (width <= 1536) {
    //     setPages(12.35);
    //   } else if (width <= 1728) {
    //     setPages(8.1);
    //   }else if (width <= 1920) {
    //     setPages(10.3);
    //   }else if (width <= 2305) {
    //     setPages(6.2);
    //   }
    //   else if (width <= 3840) {
    //     setPages(4.1);
    //   } else {
    //     setPages(9.6);
    //   }

    // };

    const handleResize = () => {
      const height = window.innerHeight;
      setIsMobile(window.innerWidth <= 768); // still useful

      if (height <= 564) {
        setPages(16.1); //720
      } else if (height <= 613) {
        // 768
        setPages(14.9);
      } else if (height <= 645) {
        // 800
        setPages(14.1);
      } 
      else if (height <= 708) { //1920 x 1080 125% scale
        if (window.innerWidth <= 1528) {
          setPages(13); //1600 x 900
        } else {
          setPages(12.4);
        }
      }else if (height <= 744) {
        //900
        if (window.innerWidth <= 1592) {
          setPages(12.8); //1600 x 900
        } else {
          setPages(12.3);
        }
      } else if (height <= 804) {
        //960
        setPages(11.45);
      } else if (height <= 868) {
        //1024
        if (window.innerWidth <= 1592) {
          setPages(11.1); //1600 x 1024
        } else {
          setPages(10.55);
        }
      } else if (height <= 894) {
        //1050
        if (window.innerWidth <= 1672) {
          setPages(10.75); // 1680 x 1050
        } else {
          setPages(10.22);
        }
      } else if (height <= 924) {
        //1080
        if (window.innerWidth <= 1912) {
          setPages(10.3); // 1920 x 1080
        } else {
          setPages(9.9);
        }
      }
      // MacBook Pro 13" and 14"
      else if (height <= 980) {
        setPages(9.65); // MacBook Air/Pro 13-14"
      }

      //  Pro 16" and similar high-DPI screens
      else if (height <= 1100) {
        setPages(9.4);
      } else if (height <= 1200) {
        setPages(9.2); // WUXGA or MacBook Pro 16"
      } else if (height <= 1440) {
        setPages(6.6); // QHD / 2K displays
      } else if (height <= 1600) {
        setPages(6.1); // Slightly taller 2K / studio displays
      } else if (height <= 1800) {
        setPages(5.3); // High-res large laptops or scaled 2K
      } else if (height <= 2160) {
        setPages(4.6); // 4K UHD and 5K ultrawide
      } else {
        setPages(4.2); // Massive screens / ultra DPI
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      console.log("Viewport:", window.innerWidth + "×" + window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={1} />
      <ScrollControls
        pages={page_number}
        damping={0.25}
        distance={1}
        horizontal={false}
      >
        <ContentOverlay />
        {!IsMobile && <Model />} {/* Render Model only on desktop */}
      </ScrollControls>
    </>
  );
}
