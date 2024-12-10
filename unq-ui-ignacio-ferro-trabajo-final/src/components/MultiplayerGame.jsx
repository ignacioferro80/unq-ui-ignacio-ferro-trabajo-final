import React, { useState, useEffect } from "react";
import "../styles/game.css";

const MultiplayerGame = ({ gridSize, cards, league, onResetGame }) => {
  const [player1MatchedCards, setPlayer1MatchedCards] = useState([]);
  const [player1SelectedCards, setPlayer1SelectedCards] = useState([]);
  const [player2MatchedCards, setPlayer2MatchedCards] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  useEffect(() => {
    setPlayer1MatchedCards([]);
    setPlayer1SelectedCards([]);
    setPlayer2MatchedCards([]);
    setPlayer2SelectedCards([]);
    setCurrentPlayer(1);
  }, [gridSize, league]);

  const handleCardClick = (index) => {
    if (currentPlayer === 1) {

      if (player1MatchedCards.includes(index) || player1SelectedCards.includes(index)) {
        return;
      }
  
      if (player1SelectedCards.length < 2 && !player1SelectedCards.includes(index)) {
        setPlayer1SelectedCards([...player1SelectedCards, index]);
      }
  
      if (player1SelectedCards.length === 1) {
        const [firstIndex] = player1SelectedCards;
        if (cards[firstIndex] === cards[index]) {
          setPlayer1MatchedCards([...setPlayer1MatchedCards, firstIndex, index]);
        setTimeout(() => setPlayer1SelectedCards([]), 1000);
      }
      
    }
    } else {
      if (player2MatchedCards.includes(index) || player2SelectedCards.includes(index)) {
        return;
      }
  
      if (player2SelectedCards.length < 2 && !player2SelectedCards.includes(index)) {
        setPlayer2SelectedCards([...player2SelectedCards, index]);
      }
  
      if (player2SelectedCards.length === 1) {
        const [firstIndex] = player2SelectedCards;
        if (cards[firstIndex] === cards[index]) {
          setPlayer2MatchedCards([...setPlayer2MatchedCards, firstIndex, index]);
        setTimeout(() => setPlayer2SelectedCards([]), 1000);
        }
      }
    }
    setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
  };

  const isPlayer1Winner = player1MatchedCards.length > player2MatchedCards.length;
  const isPlayer2Winner = player2MatchedCards.length > player1MatchedCards.length;

  return (
    <div className="multiplayer-game">
      <h1>Memo Test - 1v1</h1>
      <div className="grid-container">
        <div className="player-grid">
          <h2>Jugador 1</h2>
          <div className="grid">
            {cards.map((card, index) => (
              <Card 
                card={card}
                index={index}
                cardLogo={leagueIcon(league)}
                matchedCards={player1MatchedCards}
                selectedCards={player1SelectedCards}
                handleCardClick={handleCardClick}
              />
            ))}
          </div>
        </div>
        <div className="divider" />
        <div className="player-grid">
          <h2>Jugador 2</h2>
          <div className="grid">{cards.map((card, index) => (
              <Card 
                card={card}
                index={index}
                cardLogo={leagueIcon(league)}
                matchedCards={player2MatchedCards}
                selectedCards={player2SelectedCards}
                handleCardClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>
      {isPlayer1Winner && <p>¡Jugador 1 gana!</p>}
      {isPlayer2Winner && <p>¡Jugador 2 gana!</p>}
      <button onClick={onResetGame}>Volver al inicio</button>
    </div>
  );
};

export default MultiplayerGame;
