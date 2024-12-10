import React from "react";
import "../styles/card.css";

const Card = ({ card, index, cardLogo, matchedCards, selectedCards, handleCardClick }) => {

    return (
        <div
            key={index}
            className={`card    ${matchedCards.includes(index) ? "matched" : ""} 
                                ${selectedCards.includes(index) ? "flipped" : ""}`
                    }
            onClick={() => handleCardClick(index)}
            >
            <div className="card-inner">
            <div className="card-front">
                <img src={card} alt="team icon" />
            </div>
            <div className="card-back">
                <img src={cardLogo} alt="league icon" />
            </div>
            </div>
        </div>
    )
}

export default Card;