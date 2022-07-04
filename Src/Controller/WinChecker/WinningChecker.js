class WinningChecker {
  CheckWinning(boardToCheck) {
    let currExpectedValue = boardToCheck.EmptyCellValue + 1;
    const maxValue = boardToCheck.BoardLength * boardToCheck.BoardLength - 1;
    const boardCells = boardToCheck.Data;
    console.debug("maxValue = " + maxValue);
    console.debug("boardCells = " + boardCells);
    for (let index = 0; index < maxValue + 1; index++) {
      console.debug("item = " + boardCells[index]);
      console.debug("currExpectedValue = " + currExpectedValue);
      // If it's not the item we are expecting
      // and we are not at the empty cell.
      if (
        boardCells[index] != currExpectedValue &&
        currExpectedValue <= maxValue
      ) {
        return false;
      }
      currExpectedValue++;
    }
    return true;
  }
}
