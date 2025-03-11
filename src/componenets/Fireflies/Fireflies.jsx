import React from 'react';
import './Fireflies.css';

const Fireflies = ({ count = 20 }) => {
  const fireflies = Array.from({ length: count });

  return (
    <div className="fireflies">
      {fireflies.map((_, index) => (
        <div
          key={index}
          className="firefly"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireflies;
