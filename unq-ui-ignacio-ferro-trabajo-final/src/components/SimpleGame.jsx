import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import FinishedGame from "../components/FinishedGame";
import "../styles/game.css";

const SimpleGame = ({ gridSize, league, cards, cardIcon, restartGame, highestScore, updateHighestScore }) => {

    const [selectedCards, setSelectedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setSelectedCards([]);
        setMatchedCards([]);
        setScore(0);
        setShowModal(false);
    }, [gridSize, league]);

    const handleCardClick = (index) => {
        if (matchedCards.includes(index) || selectedCards.includes(index)) {
        return;
        }

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
        if (matchedCards.length === cards.length && score > 0) {
            setShowModal(true);
            if (score > highestScore) {
                updateHighestScore(score);
            }
        }
    }, [matchedCards, cards, score, highestScore, updateHighestScore]);

    const handleRestartGame = () => {
        setSelectedCards([]);
        setMatchedCards([]);
        setScore(0);
        setShowModal(false);
        restartGame();
    }

    return (
        <div className={`game ${showModal ? "blurred" : ""}`}>
          <h1 className="game-title">Memo Test - {league}</h1>

          <div>
            <div className="scoreboard">
              <p><strong>Puntaje actual:</strong> {score}</p>
              <p><strong>Puntaje más alto:</strong> {highestScore}</p>
            </div>

            <div className="grid" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>

              {cards.map((card, index) => (
                <Card 
                  card={card}
                  index={index}
                  cardLogo={cardIcon}
                  matchedCards={matchedCards}
                  selectedCards={selectedCards}
                  handleCardClick={handleCardClick}
                />
              ))}

              {showModal && (
                <FinishedGame
                  score={score}
                  highestScore={highestScore}
                  restartGame={handleRestartGame}
                />
              )}
            </div>
          </div>
        </div>
    )
}

export default SimpleGame;