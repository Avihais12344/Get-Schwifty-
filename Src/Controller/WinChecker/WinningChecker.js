class WinningChecker {
  CheckWinning(boardToCheck) {
    let currExpectedValue = boardToCheck.EmptyCellValue + 1;
    const maxValue = boardToCheck.BoardLength * boardToCheck.BoardLength - 1;
    const boardCells = boardToCheck.Data;
    for (let item in boardCells) {
      // If it's not the item we are expecting
      // and we are not at the empty cell.
      if (item != currExpectedValue && currExpectedValue <= maxValue) {
        return false;
      }
    }
    return true;
  }
}
