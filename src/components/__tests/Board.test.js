import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Board from "../Board";
import { initialState, winningSets } from "../../constants";

const { cells, gameStatus } = initialState;
const getGameStatus = (isWin) =>
  isWin ? { isWin: true, winningSet: winningSets[0] } : gameStatus;

const getDefaultProps = (overrides) => ({
  cells,
  handleCellClick: () => {},
  gameStatus,
  ...overrides,
});

describe("components/Board", () => {
  it("renders the cells that are passed to it", () => {
    const { container } = render(<Board {...getDefaultProps()} />);
    const board = container.firstChild;
    expect(board.children.length).toBe(cells.length);
    expect(board.getElementsByClassName("cell").length).toBe(cells.length);
  });

  describe("when nobody has yet won", () => {
    it("calls the handleCellClick prop when a cell is clicked, passig the cell ID", () => {
      const handleCellClick = jest.fn();
      const { container } = render(
        <Board {...getDefaultProps({ handleCellClick })} />
      );
      const cell = container.getElementsByClassName("cell").item(1);

      fireEvent.click(cell);

      expect(handleCellClick).toHaveBeenCalledWith(1);
    });
  });

  describe("when the game is won", () => {
    it("does not call the handleCellClick prop when a cell is clicked", () => {
      const handleCellClick = jest.fn();
      const gameStatus = getGameStatus(true);

      const { container } = render(
        <Board {...getDefaultProps({ handleCellClick, gameStatus })} />
      );
      const cell = container.getElementsByClassName("cell").item(1);

      fireEvent.click(cell);

      expect(handleCellClick.mock.calls.length).toBe(0);
    });

    it("adds a CSS class to a winning set, if there is one", () => {
      const gameStatus = getGameStatus(true);
      const { winningSet } = gameStatus;

      const { container } = render(
        <Board {...getDefaultProps({ gameStatus })} />
      );
      const board = container.firstChild;
      expect(board.getElementsByClassName("isWin").length).toBe(
        winningSet.length
      );
      for (const cell of winningSet) {
        expect(board.children.item(cell).className.includes("isWin")).toBe(
          true
        );
      }
    });
  });
});
