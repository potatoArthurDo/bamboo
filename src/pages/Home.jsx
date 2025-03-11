import { useState, Suspense, useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import Banner from "../componenets/Banner/Banner";
import Fireflies from "../componenets/Fireflies/Fireflies";
import Navbar from "../componenets/Navbar/Navbar"

function Home() {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Navbar />

      <div className="canvas-container">
        <Fireflies count={80} />
        <Canvas>
          <Banner />
        </Canvas>
      </div>
    </Suspense>
  );
}
 export default Home