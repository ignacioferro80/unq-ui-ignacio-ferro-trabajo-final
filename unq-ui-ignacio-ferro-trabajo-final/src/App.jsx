import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Config from "./pages/Config";
import Game from "./pages/Game";
import HardGame from "./pages/HardGame";
import Warning from "./pages/Warning";

const App = () => {

  const [gridSize, setGridSize] = useState(null);
  const [highestScoreSize4, setHighestScoreSize4] = useState(0);
  const [highestScoreSize6, setHighestScoreSize6] = useState(0);
  
  const handleSelectGrid = (size) => {
    setGridSize(size);
  };

  const updateHighestScore = (newScore) => {
    if(gridSize === 4) {
      setHighestScoreSize4(newScore);
    }
    else{
      setHighestScoreSize6(newScore);
    }
  }

  const highestScore = () => {
    return gridSize === 4 ? highestScoreSize4 : highestScoreSize6;
  }

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home handleSelectGrid={handleSelectGrid}/>} />

        <Route path="/config" element={<Config />} />

        <Route
          path="/game"
          element={
            <Game
              gridSize={gridSize}
              highestScore={highestScore()}
              updateHighestScore={updateHighestScore}
            />
          }
        />

        <Route
          path="/hardGame"
          element={
            <HardGame
              highestScore={highestScore()}
              updateHighestScore={updateHighestScore}
            />
          }
        />

        <Route path="/warning" element={<Warning />} />

      </Routes>
    </Router>
  );
};

export default App;
