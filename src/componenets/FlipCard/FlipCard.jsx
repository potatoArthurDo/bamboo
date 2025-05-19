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
    <div className="flipcard">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`flip-card ${isFlipped[card.id] ? "flipped" : ""}`}
          onClick={() => handleCardClick(card.id)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={card.image} alt="" />
            </div>
            <div className="flip-card-back">
              <p>{card.name}</p>
              <p>{card.position}</p>
              <ul>
                {card.profile.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
              </ul>
              <ul>
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
