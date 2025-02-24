import { useState, Suspense, useRef, useEffect } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import Banner from "./componenets/Banner/Banner";

function App() {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);

  function vwToPx(value) {
    return (window.innerWidth * parseFloat(value)) / 100;
  }

  function vhToPx(value) {
    return (window.innerHeight * parseFloat(value)) / 100;
  }

  useEffect(() => {
    if (!sceneRef.current) return;

    // Kill all existing ScrollTriggers to avoid duplicate triggers
    gsap.killTweensOf(sceneRef.current);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        anticipatePin: 1,
        markers: true,
        onUpdate: (self) => setProgress(self.progress),
      },
    });

    timeline
      .to(sceneRef.current, { ease: "none", x: vwToPx(25), y: vhToPx(30) })
      .to(sceneRef.current, { ease: "none", x: vwToPx(30), y: vhToPx(30) })
      .to(sceneRef.current, { ease: "none", x: vwToPx(15), y: vhToPx(30) });
    // Ensure animations update correctly when reloading mid-scroll
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [mainRef, sceneRef]);

  return (
    <>
      <main ref={mainRef} className="main">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          {/* Hero Section (Centered) */}
        </Suspense>
        <section className="hero-section">
          <p className="hero-text top-text">Lorem ipsum</p>
          <p className="hero-text bottom-text">Lorem ipsum</p>
          <div ref={sceneRef} className="canvas-container">
            <Canvas className="bamboo">
              <Banner progress={progress} />
            </Canvas>
          </div>
        </section>

        <section className="feedback">
          <p className="feedback-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            minus cum quos voluptatibus quae neque sed dicta id, consectetur
            repellat vitae itaque a optio aut nulla expedita nobis adipisci
            asperiores.
          </p>
          <div className="feedback-video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hBvcngHRTFg?si=bUxzkTWLLLf8Pbhb"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="timeline-achievement">
          <div className="timeline">
            <div className="timeline-item">
              <img
                src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                alt="Formation of the colonies"
              />
              <div className="content">
                <h3>1200s</h3>
                <p>Formation of the colonies</p>
              </div>
            </div>

            <div className="timeline-item">
              <img
                src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                alt="Another event"
              />
              <div className="content">
                <h3>1300s</h3>
                <p>Expansion of settlements</p>
              </div>
            </div>

            <div className="timeline-item">
              <img
                src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                alt="Third event"
              />
              <div className="content">
                <h3>1400s</h3>
                <p>Rise of civilizations</p>
              </div>
            </div>

            <div className="timeline-item">
              <img
                src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                alt="Fourth event"
              />
              <div className="content">
                <h3>1500s</h3>
                <p>Industrial advancements</p>
              </div>
            </div>
          </div>
        </section>

        <section className="products">
          <div className="heading">
            <h3>EMPOWERING PLANT CARE WITH ADVANCED TOOLS</h3>
            <p className="subtext">
              With an innovative design and smart solutions, Zolve is set to
              transform how users care for their plants. Here’s what we
              envision:
            </p>

            <div className="product-container">
              <div className="product-card">
                <img
                  src="https://res.cloudinary.com/easyplant/image/fetch/f_auto,q_auto:good,c_fill,w_1140,h_1278/https://cdn.shopify.com/s/files/1/0513/8032/2473/products/MoneyTreeLarge_Iron_Gray_4b3a9b12-f226-45d6-9b02-1afcad5a0bc5.jpg?v=1709577914"
                  alt=""
                />
                <h4>Improved Plant Health Monitoring</h4>
                <p>
                  Hydration levels, soil nutrients, and plant health tracking,
                  ensuring optimal care.
                </p>
              </div>

              <div className="product-card">
                <img
                  src="https://res.cloudinary.com/easyplant/image/fetch/f_auto,q_auto:good,c_fill,w_1140,h_1278/https://cdn.shopify.com/s/files/1/0513/8032/2473/products/MoneyTreeLarge_Iron_Gray_4b3a9b12-f226-45d6-9b02-1afcad5a0bc5.jpg?v=1709577914"
                  alt=""
                />
                <h4>Improved Plant Health Monitoring</h4>
                <p>
                  Hydration levels, soil nutrients, and plant health tracking,
                  ensuring optimal care.
                </p>
              </div>

              <div className="product-card">
                <img
                  src="https://res.cloudinary.com/easyplant/image/fetch/f_auto,q_auto:good,c_fill,w_1140,h_1278/https://cdn.shopify.com/s/files/1/0513/8032/2473/products/MoneyTreeLarge_Iron_Gray_4b3a9b12-f226-45d6-9b02-1afcad5a0bc5.jpg?v=1709577914"
                  alt=""
                />
                <h4>Improved Plant Health Monitoring</h4>
                <p>
                  Hydration levels, soil nutrients, and plant health tracking,
                  ensuring optimal care.
                </p>
              </div>

              <div className="product-card">
                <img
                  src="https://res.cloudinary.com/easyplant/image/fetch/f_auto,q_auto:good,c_fill,w_1140,h_1278/https://cdn.shopify.com/s/files/1/0513/8032/2473/products/MoneyTreeLarge_Iron_Gray_4b3a9b12-f226-45d6-9b02-1afcad5a0bc5.jpg?v=1709577914"
                  alt=""
                />
                <h4>Improved Plant Health Monitoring</h4>
                <p>
                  Hydration levels, soil nutrients, and plant health tracking,
                  ensuring optimal care.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="purpose-section">
          <div class="content">
            <div class="left-text">
              <p>
                <strong>Ngôn ngữ. Tư duy. Kinh nghiệm.</strong>
              </p>
              <p>Những nơi ta đến.</p>
              <p>Những người ta gặp.</p>
              <p>Những phiên bản ta muốn trở thành.</p>
              <p>
                Đó là những mảnh ghép <strong>"the dots"</strong> trên hành
                trình học hỏi và trưởng thành.
              </p>
              <p>
                Một hành trình dài—không ngừng cắm rễ, không ngừng vươn cao.
              </p>
              <p>
                <strong>
                  Nhưng, đã bao giờ bạn dừng lại và tự hỏi ý nghĩa của hành
                  trình này?
                </strong>
              </p>
              <p>Để kết nối.</p>
              <p>Kết nối với chính mình.</p>
              <p>Kết nối với người khác.</p>
              <p>Kết nối với thế giới.</p>
            </div>

            <div class="right-text">
              <p>Connect</p>
              <p>the</p>
              <strong>"Đốt"</strong>
            </div>
          </div>
        </section>

        <section className="feedback">
          <p className="feedback-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ad
            tempore aliquam quaerat nulla pariatur! At praesentium aspernatur
            asperiores magnam quia natus, rem in impedit eius architecto odio
            ipsa suscipit?
          </p>
          <div className="feedback-video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/q9Z4caCa2yw?si=UX5M8wu1nCJp0zJR"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
