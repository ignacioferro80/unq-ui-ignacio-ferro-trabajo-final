import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/config.css";
import NotAvailable from "../components/NotAvailable";

const Config = () => {
  const navigate = useNavigate();
  const [league, setLeague] = useState(null);
  const [gameMode, setGameMode] = useState(null);
  const [notAvailable, setNotAvailable] = useState(false);

  const handleResetGame = () => {
    navigate("/");
  };

  const startGame = () => {
    if(league === null || gameMode === null) {
      setNotAvailable(true);
      return
    }
    navigate("/game", {
      state: { league, gameMode }
    });
  }

  return (
    <div>
      <h1>Seleccioná una liga</h1>
      <button className={`config-button ${league === "LPF" ? "selected" : ""}`} onClick={() => setLeague("LPF")}>LPF</button>
      <button className={`config-button ${league === "Primera Nacional" ? "selected" : ""}`} onClick={() => setLeague("Primera Nacional")}>Primera Nacional</button>

      <h1>Seleccioná la cantidad de jugadores</h1>
      <button className={`config-button ${gameMode === "solo" ? "selected" : ""}`} onClick={() => setGameMode("solo")}>Simple</button>
      <button className={`config-button ${gameMode === "multiplayer" ? "selected" : ""}`} onClick={() => setGameMode("multiplayer")}>1v1</button>

      <div className="decision">
        <button className="start-button" onClick={() => startGame()}>Jugar</button>
        <button className="back-button" onClick={() => handleResetGame()}>Volver</button>
      </div>

      {notAvailable && <NotAvailable text={"Seleccioná ambas opciones para comenzar"} setNotAvailable={setNotAvailable} />}
    </div>
  );
};

export default Config;
