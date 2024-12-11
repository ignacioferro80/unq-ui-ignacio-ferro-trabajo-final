import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "../styles/game.css";
import NotAvailable from "../components/NotAvailable";

const MultiplayerGame = ({ gridSize, cardsPlayer1, cardsPlayer2, league, cardIcon, onRestart }) => {
  const [player1, setPlayer1] = useState({ matchedCards: [], selectedCards: [] });
  const [player2, setPlayer2] = useState({ matchedCards: [], selectedCards: [] });
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [notAvailable, setNotAvailable] = useState(false);

  useEffect(() => {
    setPlayer1({ matchedCards: [], selectedCards: [] });
    setPlayer2({ matchedCards: [], selectedCards: [] });
    setCurrentPlayer(1);
  }, [gridSize, league]);


  const handleCardClick = (index) => {
    
    const current = currentPlayer === 1 ? player1 : player2;
    const cards = currentPlayer === 1 ? cardsPlayer1 : cardsPlayer2;
    const setCurrent = currentPlayer === 1 ? setPlayer1 : setPlayer2;

    if (current.matchedCards.includes(index) || current.selectedCards.includes(index)) {
      return;
    }

    if (current.selectedCards.length < 2) {
      setCurrent({
        ...current,
        selectedCards: [...current.selectedCards, index],
      });
    }

    if (current.selectedCards.length === 1) {
      const [firstIndex] = current.selectedCards;
      if (cards[firstIndex] === cards[index]) {
        setCurrent({
          ...current,
          matchedCards: [...current.matchedCards, firstIndex, index],
          selectedCards: [],
        });
      } else {
        setTimeout(() => {
          setCurrent({ ...current, selectedCards: [] });
        }, 1000);
      }
      setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
    }
  };

  const handleRestartGame = () => {
    setPlayer1({ matchedCards: [], selectedCards: [] });
    setPlayer2({ matchedCards: [], selectedCards: [] });
    setCurrentPlayer(1);
    onRestart();
  }

  const isGameOver =
    player1.matchedCards.length === cardsPlayer1.length || player2.matchedCards.length === cardsPlayer2.length;

  const winnerText =
    player1.matchedCards.length > player2.matchedCards.length
      ? "¡El Jugador 1 tiene memoria de primera!"
      : player1.matchedCards.length < player2.matchedCards.length
      ? "¡El Jugador 2 tiene memoria de primera!"
      : "Hubo un empate. ¡Sigan compitiendo para ver quien es el mejor!";

  return (
    <div className="multiplayer-screen">
      <h1 className="game-title">Memo Test - 1v1 - {league}</h1>

      <div className="scoreboard">
        <p>Turno del jugador: {currentPlayer}</p>
      </div>

      <div className="grid-container">
        <div className="player-grid">
          <h2>Jugador 1</h2>
          
          <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
          >
            {cardsPlayer1.map((card, index) => (
              <Card 
                card={card}
                index={index}
                cardLogo={cardIcon}
                matchedCards={player1.matchedCards}
                selectedCards={player1.selectedCards}
                handleCardClick={() => {
                  if (currentPlayer === 1) 
                    handleCardClick(index);
                  }}
              />
            ))}
          </div>
        </div>

        <div className="divider" />

        <div className="player-grid">
          <h2>Jugador 2</h2>
          <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
          >
            {cardsPlayer2.map((card, index) => (
              <Card 
                card={card}
                index={index}
                cardLogo={cardIcon}
                matchedCards={player2.matchedCards}
                selectedCards={player2.selectedCards}
                handleCardClick={() => {
                  if (currentPlayer === 2) {
                    handleCardClick(index);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {isGameOver && (
        <div className="game-over">
          <h2>{winnerText}</h2>
          <button onClick={() => handleRestartGame()}>Reiniciar juego</button>
        </div>
      )}

    </div>
  );
};

export default MultiplayerGame;
