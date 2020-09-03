import React from "react";
import getCellClassName from "../utils/getCellClassName";

const Board = ({ cells, gameStatus, handleCellClick }) => {
  return (
    <div className="board">
      {cells.map((cell, i) => (
        <div
          className={getCellClassName(gameStatus, i)}
          key={`cell-${i}`}
          onClick={() => {
            !gameStatus.isWin && handleCellClick(i);
          }}
        >
          {cell && String(cell)}
        </div>
      ))}
    </div>
  );
};

export default Board;
