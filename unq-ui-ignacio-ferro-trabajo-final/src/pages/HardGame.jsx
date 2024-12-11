import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLpfIconByName } from "../utils/getLpfIconByName";
import { getPrimeraNacionalIconByName } from "../utils/getPrimeraNacionalIconByName";
import pelota from "../assets/pelota.png";
import FinishedGame from "../components/FinishedGame";
import Card from "../components/Card";
import "../styles/game.css";

const HardGame = ({ highestScore, updateHighestScore }) => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCards(shuffleCards());
    setSelectedCards([]);
    setMatchedCards([]);
    setScore(0);
    setShowModal(false);
  }, []);

  const teamIcons = [
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
    getPrimeraNacionalIconByName("villadalmine")
    ];

  const shuffleCards = () => {
    const chosenImages = teamIcons.slice(0, (8 * 8) / 2);
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
    setCards(shuffleCards(8));
    setSelectedCards([]);
    setMatchedCards([]);
    setScore(0);
    setShowModal(false);
  };

  useEffect(() => {
    if (matchedCards.length === cards.length && score > 0) {
      setShowModal(true);
      if (score > highestScore) {
          updateHighestScore(score);
      }
  }
  }, [matchedCards, cards, score, highestScore, updateHighestScore]);


  return (
      <div className="game">
        <h1>Memo Test</h1>
        <div className="scoreboard">
          <p><strong>Puntaje actual:</strong> {score}</p>
          <p><strong>Puntaje más alto:</strong> {highestScore}</p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: `repeat(${8}, 1fr)` }}>
            {cards.map((card, index) => (
                <Card 
                  card={card}
                  index={index}
                  cardLogo={pelota}
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
        <div className="controls">
          <button onClick={() => handleResetGame()}>Volver al inicio</button>
        </div>
      </div>
  );
};

export default HardGame;