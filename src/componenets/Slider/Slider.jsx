import React from "react";
import "./Slider.css";

const Slider = ({ images, reverse = false, width = "200px", height = "400px", quantity = 9 }) => {

  return (
    <div
    className="slider"
    data-reverse={reverse}
      style={{
        "--width": width,
        "--height": height,
        "--quantity": quantity
      }}
    >
      <div className="list">
        {images.slice(0, quantity).map((src, index) => (
          <div key={index} className="item" style={{ "--position": index + 1 }}>
            <img src={src}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
