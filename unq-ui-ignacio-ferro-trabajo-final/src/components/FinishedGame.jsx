import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/finishedGame.css";

const FinishedGame = ({ score, highestScore, onRestart }) => {
  const navigate = useNavigate();

  const handleResetGame = () => {
    navigate("/");
  };

  return (
    <div className="modal">
      <h2>¡Felicidades! Completaste el memo test</h2>
      <p>Puntaje obtenido: {score}</p>
      <p>Record de la sesión: {highestScore}</p>
      <div className="modal-buttons">
        <button className="restart-button" onClick={onRestart}>Reiniciar juego</button>
        <button className="back-button" onClick={() => handleResetGame()}>Volver al inicio</button>
      </div>
    </div>
  );
};

export default FinishedGame;
