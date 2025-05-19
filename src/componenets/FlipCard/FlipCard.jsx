import React, { useState } from "react";
import "./FlipCard.css"; // Import your CSS file for styling

const FlipCard = ({ cards }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (id) => {
    setIsFlipped((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle the specific card
    }));
  };

  

  return (
    <div className="flipcard-human">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`flip-card-human ${isFlipped[card.id] ? "flipped" : ""}`}
          onClick={() => handleCardClick(card.id)}
        >
          <div className="flip-card-inner-human">
            <div className="flip-card-front-human">
                <img src={card.image} alt="" />
            </div>
            <div className="flip-card-back-human">
              <h3>{card.name}</h3>
              <h4>{card.position}</h4>
              <ul style={{listStyle:"square"}}>
                {card.profile.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
              </ul>
              <ul style={{background: "linear-gradient(to right, #faf2c4, #fdf6d7, #f5eac3)", borderRadius:"10px"}}>
                {card.pov.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FlipCard;
