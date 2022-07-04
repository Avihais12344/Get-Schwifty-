class NumbersBoardChecker extends BoardCheckerBase {
  constructor() {
    super();
  }
  IsBoardSolvable(boardToCheck) {
    const numInversions = this.#CalculateInversionsOnBoard(boardToCheck);
    // If the board has an odd number of cells.
    if (boardToCheck.boardLength % 2 != 0) {
      return numInversions % 2 == 0;
    }
    // For even number of cells, add the line number of the empty cell
    // and then check if the board is solvable.
    numInversions += this.#FindLineOfEmptyCell(boardToCheck);
    return numInversions % 2 == 0;
  }
  #CountInversions(valueToCheckIndex, board) {
    const valueToCheck = board[valueToCheckIndex];
    var numInversions = 0;
    for (
      let boardCellsIndex = valueToCheckIndex + 1;
      boardCellsIndex < board.length;
      boardCellsIndex++
    ) {
      if (
        board[boardCellsIndex] != board.EmptyCellValue &&
        valueToCheck < board[boardCellsIndex]
      ) {
        numInversions++;
      }
    }
    return numInversions;
  }
  #FindLineOfEmptyCell(board) {
    const lineOfEmptyCell =
      (board.Data.findIndex((value) => {
        value == board.EmptyCellValue;
      }) %
        board.boardLength) +
      // Line number startes from 1.
      1;
    return lineOfEmptyCell;
  }
  #CalculateInversionsOnBoard(board) {
    const boardCells = board.Data;
    var numInversions = 0;
    for (
      let boardCellIndex = 0;
      boardCellIndex < boardCells.length;
      boardCellIndex++
    ) {
      // don't count the empty cell.
      if (boardCells[boardCellIndex] == board.EmptyCellValue) {
        continue;
      }
      // Sum inversions.
      numInversions += this.#CountInversions(boardCellIndex, boardCells);
    }
    return numInversions;
  }
}
