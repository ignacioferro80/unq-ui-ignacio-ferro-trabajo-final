import React, { useState } from "react";
import Game from "./Game.jsx";

export const App = () => {
  const [gridSize, setGridSize] = useState(null);
  const [highestScore, setHighestScore] = useState(0);

  const handleSelectGrid = (size) => {
    setGridSize(size);
  };

  const handleResetGame = () => {
    setGridSize(null);
  };

  return (
    <div>
      <h1>Memo Test</h1>
      {!gridSize ? (
        <div>
          <h2>Selecciona un tamaño:</h2>
          <button onClick={() => handleSelectGrid(4)}>4x4</button>
          <button onClick={() => handleSelectGrid(5)}>5x5</button>
          <button onClick={() => handleSelectGrid(6)}>6x6</button>
        </div>
      ) : (
        <Game
          gridSize={gridSize}
          onResetGame={handleResetGame}
          highestScore={highestScore}
          updateHighestScore={setHighestScore}
        />
      )}
    </div>
  );
};

export default App;
