import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLpfIconByName } from "../utils/getLpfIconByName";
import { getPrimeraNacionalIconByName } from "../utils/getPrimeraNacionalIconByName";
import FinishedGame from "../components/FinishedGame";
import Card from "../components/Card";
import "../styles/game.css";

const Game = ({ gridSize, highestScore, updateHighestScore }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { league, gameMode } = location.state || {};
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCards(shuffleCards(gridSize));
    setSelectedCards([]);
    setMatchedCards([]);
    setScore(0);
    setShowModal(false);
  }, [gridSize]);

  const teamIcons = (league) => {
    const lpfIcons = [
      getLpfIconByName("argentinos"),
      getLpfIconByName("atleticotucuman"),
      getLpfIconByName("banfield"),
      getLpfIconByName("barracas"),
      getLpfIconByName("boca"),
      getLpfIconByName("centralcordoba"),
      getLpfIconByName("defensa"),
      getLpfIconByName("estudiantes"),
      getLpfIconByName("gimnasia"),
      getLpfIconByName("godoycruz"),
      getLpfIconByName("huracan"),
      getLpfIconByName("independiente"),
      getLpfIconByName("independienteriv"),
      getLpfIconByName("instituto"),
      getLpfIconByName("lanus"),
      getLpfIconByName("newells"),
      getLpfIconByName("platense"),
      getLpfIconByName("racing"),
      getLpfIconByName("riestra"),
      getLpfIconByName("river"),
      getLpfIconByName("rosariocentral"),
      getLpfIconByName("sanlorenzo"),
      getLpfIconByName("sarmiento"),
      getLpfIconByName("talleres"),
      getLpfIconByName("tigre"),
      getLpfIconByName("union"),
      getLpfIconByName("velez"),
    ];

    const primeraNacionalIcons = [
      getPrimeraNacionalIconByName("agropecuario"),
      getPrimeraNacionalIconByName("aldosivi"),
      getPrimeraNacionalIconByName("allboys"),
      getPrimeraNacionalIconByName("almagro"),
      getPrimeraNacionalIconByName("almirante"),
      getPrimeraNacionalIconByName("alvarado"),
      getPrimeraNacionalIconByName("atlanta"),
      getPrimeraNacionalIconByName("atleticorafaela"),
      getPrimeraNacionalIconByName("brownadrogue"),
      getPrimeraNacionalIconByName("cadu"),
      getPrimeraNacionalIconByName("chacarita"),
      getPrimeraNacionalIconByName("chacho_for_ever"),
      getPrimeraNacionalIconByName("defensores"),
      getPrimeraNacionalIconByName("depmaipu"),
      getPrimeraNacionalIconByName("deportivo_madryn"),
      getPrimeraNacionalIconByName("estudiantes"),
      getPrimeraNacionalIconByName("estudiantesrc"),
      getPrimeraNacionalIconByName("ferro"),
      getPrimeraNacionalIconByName("flandria"),
      getPrimeraNacionalIconByName("gimnasiajujuy"),
      getPrimeraNacionalIconByName("gimnasiamendoza"),
      getPrimeraNacionalIconByName("guemes"),
      getPrimeraNacionalIconByName("guilermobrown"),
      getPrimeraNacionalIconByName("mitre"),
      getPrimeraNacionalIconByName("moron"),
      getPrimeraNacionalIconByName("nueva_chicago"),
      getPrimeraNacionalIconByName("patronato"),
      getPrimeraNacionalIconByName("quilmes"),
      getPrimeraNacionalIconByName("racing_cordoba"),
      getPrimeraNacionalIconByName("riestra"),
      getPrimeraNacionalIconByName("sanmartinsj"),
      getPrimeraNacionalIconByName("sanmartintuc"),
      getPrimeraNacionalIconByName("santelmo"),
      getPrimeraNacionalIconByName("temperley"),
      getPrimeraNacionalIconByName("tristansuarez"),
      getPrimeraNacionalIconByName("villadalmine"),
    ];
    
    return league === "LPF" ? lpfIcons : primeraNacionalIcons;
  }

  const leagueIcon = (league) => {
    return league === "LPF" ? getLpfIconByName("lpf") : getPrimeraNacionalIconByName("primeranacional");
  }

  const shuffleCards = (gridSize) => {
    const selectedTeamIcons = teamIcons(league);
    const chosenImages = selectedTeamIcons.slice(0, (gridSize * gridSize) / 2);
    const deck = [...chosenImages, ...chosenImages];
    return deck.sort(() => Math.random() - 0.5);
  };

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

  const handleResetGame = () => {
    navigate("/");
  };

  const handleRestartGame = () => {
    setCards(shuffleCards(gridSize));
    setSelectedCards([]);
    setMatchedCards([]);
    setScore(0);
    setShowModal(false);
  };

  useEffect(() => {
    if (matchedCards.length === cards.length && score > highestScore) {
      updateHighestScore(score);
      setShowModal(true);
    }
  }, [matchedCards, cards, score, highestScore, updateHighestScore]);

  return (
    <div className={`game ${showModal ? "blurred" : ""}`}>
      <h1>Memo Test</h1>
      <div className="scoreboard">
        <p><strong>Puntaje actual:</strong> {score}</p>
        <p><strong>Puntaje más alto:</strong> {highestScore}</p>
      </div>

      {gameMode === "multiplayer" && (
        <MultiplayerGame gridSize={gridSize} cards={cards} league={selectedLeague} onResetGame={handleResetGame} />
      )}

      <div className="grid" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>

        {cards.map((card, index) => (
          <Card 
            card={card}
            index={index}
            cardLogo={leagueIcon(league)}
            matchedCards={matchedCards}
            selectedCards={selectedCards}
            handleCardClick={handleCardClick}
          />
        ))}

        {showModal && (
          <FinishedGame
            score={score}
            highestScore={highestScore}
            onRestart={handleRestartGame}
          />
        )}

      </div>
      <div className="controls">
        <button onClick={() => handleResetGame()}>Volver al inicio</button>
      </div>
    </div>
  );
};

export default Game;