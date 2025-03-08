import { useState, Suspense, useRef, useEffect } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import Banner from "./componenets/Banner/Banner";
import Navbar from "./componenets/Navbar/Navbar";

function App() {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);

//   function vwToPx(value) {
//     return (window.innerWidth * parseFloat(value)) / 100;
//   }

//   function vhToPx(value) {
//     return (window.innerHeight * parseFloat(value)) / 100;
//   }

//   useEffect(() => {
//     if (!sceneRef.current) return;

//     // Kill all existing ScrollTriggers to avoid duplicate triggers
//     gsap.killTweensOf(sceneRef.current);
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     let timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: mainRef.current,
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//         invalidateOnRefresh: true,
//         fastScrollEnd: true,
//         anticipatePin: 1,
//         markers: true,
//         onUpdate: (self) => setProgress(self.progress),
//       },
//     });

//     timeline
//       .to(sceneRef.current, { ease: "none", x: vwToPx(25), y: vhToPx(30), scale: 1.1 })
//       .to(sceneRef.current, { ease: "none", x: vwToPx(30), y: vhToPx(30) })
//       .to(sceneRef.current, { ease: "none", x: vwToPx(15), y: vhToPx(30) });
//     // Ensure animations update correctly when reloading mid-scroll
//     setTimeout(() => {
//         ScrollTrigger.refresh();
//     }, 100);

//     return () => {
//       timeline.kill();
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [mainRef, sceneRef]);

  return (
    <>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Navbar />
        
          <div className="canvas-container">
            <Canvas >
              <Banner  />
            </Canvas>
          </div>
        </Suspense>

    </>
  );
}

export default App;
