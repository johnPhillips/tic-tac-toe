import React, { useState } from "react";
import { initialState } from "./constants";
import getIsWin from "./utils/getIsWin";
import Board from "./components/Board";
import "./App.css";

// No point running comparisons until we have enough data to compare
const minTurnsForWin = 5;

function App() {
  const [turns, setTurns] = useState(initialState.turns);
  const [getCells, setCells] = useState(initialState.cells);
  const [isX, setIsX] = useState(initialState.isX);
  const [gameStatus, setGameStatus] = useState(initialState.gameStatus);

  const handleClick = (cellNumber) => {
    // return if cell is already full
    if (getCells[cellNumber]) return;

    // get all cells
    const cells = [...getCells];
    // find the cell
    let cell = cells[cellNumber];
    // update the cell
    cell = isX ? "X" : "O";
    // update the cells
    cells[cellNumber] = cell;

    if (turns + 1 >= minTurnsForWin) {
      setGameStatus(getIsWin(cells));
    }
    setTurns(turns + 1);
    setCells(cells);
    setIsX(!isX);
  };

  const handleReset = () => {
    setGameStatus(initialState.gameStatus);
    setIsX(initialState.isX);
    setTurns(initialState.turns);
    setCells(initialState.cells);
  };

  return (
    <div className="App">
      <Board
        cells={getCells}
        gameStatus={gameStatus}
        handleCellClick={handleClick}
      />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
