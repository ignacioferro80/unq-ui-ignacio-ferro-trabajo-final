import React from "react";
import { useNavigate } from "react-router-dom";

const League = () => {
  const navigate = useNavigate();

  const handleSelectLeague = (league) => {
    navigate("/game", {
      state: { league }
    });
  };

  return (
    <div>
      <h1>Selecciona una liga</h1>
      <button onClick={() => handleSelectLeague("LPF")}>LPF</button>
      <button onClick={() => handleSelectLeague("Primera Nacional")}>Primera Nacional</button>
    </div>
  );
};

export default League;
