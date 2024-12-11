import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLpfIconByName } from "../utils/getLpfIconByName";
import { getPrimeraNacionalIconByName } from "../utils/getPrimeraNacionalIconByName";
import MultiplayerGame from "../components/MultiplayerGame";
import SimpleGame from "../components/SimpleGame";
import "../styles/game.css";

const Game = ({ gridSize, highestScore, updateHighestScore }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { league, gameMode } = location.state || {};
  const [cardsPlayer1, setCardsPlayer1] = useState([]);
  const [cardsPlayer2, setCardsPlayer2] = useState([]);

  useEffect(() => {
    setCardsPlayer1(shuffleCards(gridSize));
    setCardsPlayer2(shuffleCards(gridSize));
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

  const handleGoBack = () => {
    navigate("/");
  };

  const handleRestartGame = () => {
    setCardsPlayer1(shuffleCards(gridSize));
    setCardsPlayer2(shuffleCards(gridSize));
  };

  return (

    <div>

      {gameMode === "multiplayer" ? (

        <MultiplayerGame 
          gridSize={gridSize} 
          cardsPlayer1={cardsPlayer1} 
          cardsPlayer2 ={cardsPlayer2} 
          league={league} 
          cardIcon={leagueIcon(league)} 
          restartGame={handleRestartGame} />
      
      ) : (

        <SimpleGame 
          gridSize={gridSize} 
          cards={cardsPlayer1} 
          league={league} 
          cardIcon={leagueIcon(league)} 
          restartGame={handleRestartGame} 
          highestScore={highestScore} 
          updateHighestScore={updateHighestScore}/>
        )}

      <div className="controls">
        <button onClick={() => handleGoBack()}>Volver al inicio</button>
      </div>

    </div>
  );
};

export default Game;