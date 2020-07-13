import React, { useState } from "react";
import "./App.css";

const initialState = {
  cells: [null, null, null, null, null, null, null, null, null],
  turns: 0,
  isX: true,
  isWin: false,
};

// No point running comparisons until we have enough data to compare
const minTurnsForWin = 5;

// Since the number of winning combinations is small, I'm hard coding
// and manually checking.
const winningRows = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
const winningCols = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
const winningDiagonals = [
  [0, 4, 8],
  [3, 4, 6],
];

const isNull = (value) => typeof value === "object" && !value;

// Check whether the cells contain a winning sequence, if so, return it
const getIsWin = (cells) => {
  // went with hard coding the combinations and manually checking, because
  // the number of combinations is small, and this would be O(1);
  for (let row of winningRows) {
    if (
      cells[row[0]] === cells[row[1]] &&
      cells[row[0]] === cells[row[2]] &&
      !isNull(cells[row[0]])
    )
      return row;
  }

  for (let col of winningCols) {
    if (
      cells[col[0]] === cells[col[1]] &&
      cells[col[0]] === cells[col[2]] &&
      !isNull(cells[col[0]])
    )
      return col;
  }

  for (let diag of winningDiagonals) {
    if (
      cells[diag[0]] === cells[diag[1]] &&
      cells[diag[0]] === cells[diag[2]] &&
      !isNull(cells[diag[0]])
    )
      return diag;
  }

  return false;
};

function App() {
  const [turns, setTurns] = useState(initialState.turns);
  const [getCells, setCells] = useState(initialState.cells);
  const [isX, setIsX] = useState(initialState.isX);
  const [isWin, setIsWin] = useState(initialState.isWin);

  const handleClick = ([cellNumber]) => {
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
      setIsWin(getIsWin(cells));
    }
    setTurns(turns + 1);
    setCells(cells);
    setIsX(!isX);
  };

  const handleReset = () => {
    setIsWin(initialState.isWin);
    setIsX(initialState.isX);
    setTurns(initialState.turns);
    setCells(initialState.cells);
  };

  return (
    <div className="App">
      <div className="board">
        {getCells.map((cell, i) => (
          <div
            className={`cell ${isWin && isWin.includes(i) ? "isWin" : ""}`}
            id={i}
            onClick={() => {
              !isWin && handleClick([i]);
            }}
          >
            {cell && String(cell)}
          </div>
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
