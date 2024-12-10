import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = ({ handleSelectGrid }) => {
  const navigate = useNavigate();

  const selectGrid = (size) => {
    handleSelectGrid(size);
    navigate("/config");
  };

  const selectHardGrid = () => {
    navigate("/warning");
  };

  return (
    <div>
      <div className="text">
        <h1 className="title">Memo Test de Fútbol Nacional</h1>
        <h2>¡Probá tus habilidades de memoria jugando con tus equipos favoritos!</h2>
      </div>
        <h3>Seleccioná un tamaño:</h3>
        <button onClick={() => selectGrid(4)}>4x4</button>
        <button onClick={() => selectGrid(6)}>6x6</button>
      <button className="button-hard" onClick={() => selectHardGrid()}>8x8</button>
    </div>
  );
};

export default Home;