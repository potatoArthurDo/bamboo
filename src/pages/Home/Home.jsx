import { useState, Suspense, useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import Banner from "../../componenets/Banner/Banner";
import Fireflies from "../../componenets/Fireflies/Fireflies";
import Navbar from "../../componenets/Navbar/Navbar"
import "./Home.css";
import MobileOverlay from "../../componenets/Contents/MobileOverlay";
import Footer from "../../componenets/Footer/Footer";
function Home() {
   const [IsMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial check
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <Suspense fallback={<div className="loading">
        <div className="simple-spinner">
            <span></span>
        </div>
    </div>}>
      <Navbar />
        <div className="main-container">
      <div className="canvas-container">
        <Fireflies count={100} />
        <Canvas className="canvas">
          <Banner />
        </Canvas>
      </div>
      </div>
      <div className="mobile-view-container">
        <Fireflies count={100} />
        <MobileOverlay />
      </div>
    </Suspense>
  );
}
 export default Home