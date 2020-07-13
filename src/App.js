import React, { useState } from "react";
import "./App.css";

const initialState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [getCells, setCells] = useState(initialState);
  const [isX, setIsX] = useState(true);

  const handleClick = ([rowNumber, colNumber]) => {
    // return if cell is already full
    if (getCells[rowNumber][colNumber]) return;

    // get all cells
    const cells = [...getCells];
    // find the row
    let row = [...cells[rowNumber]];
    // update the row
    row[colNumber] = isX ? "X" : "O";
    // update the cells
    cells[rowNumber] = row;

    setCells(cells);
    setIsX(!isX);
  };

  const handleReset = () => setCells(initialState);

  return (
    <div className="App">
      <div className="board">
        {getCells.map((row, i) => {
          return (
            <div className="row" id={i}>
              {row.map((cell, k) => (
                <div
                  className="cell"
                  id={k}
                  onClick={() => {
                    handleClick([i, k]);
                  }}
                >
                  {cell && String(cell)}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
