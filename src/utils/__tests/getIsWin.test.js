import getIsWin from "../getIsWin";
import { winningSets } from "../../constants";

describe("getIsWin", () => {
  it("returns isWin: true and the winning set if the cells contain a winning set", () => {
    const emptyCells = [null, null, null, null, null, null, null, null, null];
    let cells;
    let result;

    for (const set of winningSets) {
      cells = [...emptyCells];
      cells[set[0]] = "x";
      cells[set[1]] = "x";
      cells[set[2]] = "x";

      result = getIsWin(cells);
      expect(result.isWin).toBe(true);
      expect(result.winningSet).toEqual(set);
    }
  });

  it("returns the initial state if there are no winning sets", () => {
    const cells = [null, null, null, null, null, null, null, null, null];
    const result = getIsWin(cells);
    expect(result.isWin).toBe(false);
    expect(result.winningSet.length).toBe(0);
  });
});
