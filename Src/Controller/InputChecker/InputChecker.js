class InputChecker extends InputCheckerBase {
  CheckValidMove(gameBoard, x, y) {
    if (!this.#IsPositionValid(gameBoard, x, y)) {
      return undefined;
    }
    return this.#GetEmptyCellAsValidMove(gameBoard, x, y);
  }
  #IsPositionValid(gameBoard, x, y) {
    const numCells = gameBoard.BoardLength * gameBoard.BoardLength;
    const desiredPos = x + y * gameBoard.BoardLength;
    return desiredPos < numCells && desiredPos >= 0;
  }
  #GetEmptyCellAsValidMove(gameBoard, x, y) {
    for (let yDiff = -1; yDiff <= 1; yDiff++) {
      for (let xDiff = -1; xDiff <= 1; xDiff++) {
        const testX = x + xDiff;
        const testY = y + yDiff;
        // Check only the close valid ones (no diagonals).
        if (
          !((testX != x) ^ (testY != y)) ||
          !this.#IsPositionValid(gameBoard, testX, testY)
        ) {
          continue;
        }
        if (gameBoard.ElementAt(testX, testY) == gameBoard.EmptyCellValue) {
          return [x, y];
        }
      }
    }
    return undefined;
  }
}
