import getCellClassName from "../getCellClassName";

describe("getCellClassName", () => {
  it('always returns a className of "cell"', () => {
    const test1 = getCellClassName({ isWin: false, winningSet: [] }, 4);
    expect(test1.includes("cell")).toBe(true);

    const test2 = getCellClassName({ isWin: true, winningSet: [0, 1, 2] }, 2);
    expect(test2.includes("cell")).toBe(true);
  });

  it('returns an additional className of "isWin" if the cell is part of a winning set', () => {
    const result = getCellClassName({ isWin: true, winningSet: [0, 4, 8] }, 4);
    expect(result.includes("isWin")).toBe(true);
  });
});
