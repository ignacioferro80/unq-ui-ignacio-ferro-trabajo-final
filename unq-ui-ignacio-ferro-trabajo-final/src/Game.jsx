import React, { useState, useEffect } from "react";
import "./styles/game.css";

const Game = ({ gridSize, onResetGame, highestScore, updateHighestScore }) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setCards(shuffleCards(gridSize));
    setSelectedCards([]);
    setMatchedCards([]);
    setScore(0);
  }, [gridSize]);

  const shuffleCards = (size) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letters = alphabet.slice(0, (size * size) / 2).split("");
    const deck = [...letters, ...letters];
    return deck.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (index) => {
    if (selectedCards.length < 2 && !selectedCards.includes(index)) {
      setSelectedCards([...selectedCards, index]);
    }

    if (selectedCards.length === 1) {
      const [firstIndex] = selectedCards;
      if (cards[firstIndex] === cards[index]) {
        setMatchedCards([...matchedCards, firstIndex, index]);
        setScore((prevScore) => prevScore + 10);
      } else {
        setScore((prevScore) => Math.max(0, prevScore - 5));
      }
      setTimeout(() => setSelectedCards([]), 1000);
    }
  };

  useEffect(() => {
    if (matchedCards.length === cards.length && score > highestScore) {
      updateHighestScore(score);
    }
  }, [matchedCards, cards, score, highestScore, updateHighestScore]);

  return (
    <div className="game">
      <div className="scoreboard">
        <p><strong>Puntaje actual:</strong> {score}</p>
        <p><strong>Puntaje más alto:</strong> {highestScore}</p>
      </div>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${
              matchedCards.includes(index) ? "matched" : ""
            } ${selectedCards.includes(index) ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">{card}</div>
              <div className="card-back">?</div>
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={onResetGame}>Volver al inicio</button>
      </div>
    </div>
  );
};

export default Game;
