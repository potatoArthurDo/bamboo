import React, { useState, useEffect, useRef } from 'react';
import './ProductCarousel.css';

const ProductCarousel = ({ products }) => {
  const [active, setActive] = useState(0); // Start with the first product
  const itemsRef = useRef([]);

  useEffect(() => {
    loadShow();
  }, [active, products]);

  const loadShow = () => {
    if (!itemsRef.current || itemsRef.current.length === 0) return;

    const items = itemsRef.current;
    let stt = 0;

    if (items[active]) {
      items[active].style.transform = `none`;
      items[active].style.zIndex = 1;
      items[active].style.filter = 'none';
      items[active].style.opacity = 1;
    }

    for (let i = active + 1; i < items.length; i++) {
      stt++;
      if (items[i]) {
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      if (items[i]) {
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }
  };

  const handleNext = () => {
    setActive((prevActive) => (prevActive + 1 < products.length ? prevActive + 1 : prevActive));
  };

  const handlePrev = () => {
    setActive((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : prevActive));
  };

  return (
    <div className="product-carousel">
      <div className="product-carousel-inner">
        {products.map((product, index) => (
          <div
            className="product-card"
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h5>{product.subtitle}</h5>
            <p className="service-intro">{product.intro}</p>
            {product.details.map((detail, i) => (
              <p key={i}>{detail}</p>
            ))}
          </div>
        ))}
      </div>
      <button className="product-carousel-control prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="product-carousel-control next" onClick={handleNext}>
        &#10095;
      </button>
      <div className="product-carousel-indicators">
        {products.map((_, index) => (
          <button
            key={index}
            className={`indicator-item ${index === active ? 'active' : ''}`}
            onClick={() => setActive(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;