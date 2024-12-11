import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/finishedGame.css";

const FinishedGame = ({ score, highestScore, restartGame }) => {
  const navigate = useNavigate();

  const handleResetGame = () => {
    navigate("/");
  };

  return (
    <div className="modal">
      {score >= highestScore ? (
        <h2 className="congrats">¡Felicidades! Obtuviste un nuevo record</h2>
      ) : (
        <h2 className="congrats">¡Felicidades! Completaste el memo test</h2>
      )}
      <p>Puntaje obtenido: {score}</p>
      <p>Record de la sesión: {highestScore}</p>
      <div className="modal-buttons">
        <button className="restart-button" onClick={() => restartGame()}>Reiniciar juego</button>
        <button className="back-button" onClick={() => handleResetGame()}>Volver al inicio</button>
      </div>
    </div>
  );
};

export default FinishedGame;