import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = ({ handleSelectGrid }) => {
  const navigate = useNavigate();

  const selectGrid = (size) => {
    handleSelectGrid(size);
    navigate("/league");
  };

  const selectHardGrid = () => {
    navigate("/warning");
  };

  return (
    <div>
      <h1>Memo Test</h1>
      <h2>Selecciona un tamaño:</h2>
      <button onClick={() => selectGrid(4)}>4x4</button>
      <button onClick={() => selectGrid(6)}>6x6</button>
      <button className="button-hard" onClick={() => selectHardGrid()}>8x8</button>
    </div>
  );
};

export default Home;