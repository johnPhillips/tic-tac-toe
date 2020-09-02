import { initialState, winningSets } from "../constants";
import isNull from "./isNull";

function getIsWin(cells) {
  for (const set of winningSets) {
    if (
      cells[set[0]] === cells[set[1]] &&
      cells[set[0]] === cells[set[2]] &&
      !isNull(cells[set[0]])
    ) {
      return {
        isWin: true,
        winningSet: set,
      };
    }
  }

  return initialState.gameStatus;
}

export default getIsWin;
