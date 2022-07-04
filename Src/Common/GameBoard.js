class GameBoard {
  #_board;
  #_boardLength;
  constructor(boardValues) {
    this.#_board = boardValues;
    this.#_boardLength = Math.sqrt(boardValues.length);
    if (!this.#IsBoardLengthOk()) {
      throw new TypeError(
        "The board it got is invalid, the board must be square! The squre of the size of the values array must be a natural number!"
      );
    }
  }

  get Data() {
    return this.#_board;
  }
  get BoardLength() {
    return this.#_boardLength;
  }
  get EmptyCellValue() {
    return 0;
  }
  // The official syntax for the clone function.
  clone() {
    return new GameBoard([...this.#_board]);
  }
  ElementAt(x, y) {
    return this.#_board[this.#CalculatePosition(x, y)];
  }
  SwapPosition(sourceX, sourceY, destX, destY) {
    const sourcePos = this.#CalculatePosition(sourceX, sourceY);
    const destPos = this.#CalculatePosition(destX, destY);
    let tempValue = this.#_board[sourcePos];
    this.#_board[sourcePos] = this.#_board[destPos];
    this.#_board[destPos] = tempValue;
    console.debug(
      `Swapped items (${sourceX}, ${sourceY}) <=> (${destX}, ${destY})`
    );
  }
  ScanDifferences(otherBoard) {
    if (this.BoardLength != otherBoard.BoardLength) {
      return undefined;
    }
    let diffs = [];
    //run on y.
    for (let y = 0; y < this.#_boardLength; y++) {
      // run on x.
      for (let x = 0; x < this.#_boardLength; x++) {
        if (this.ElementAt(x, y) != otherBoard.ElementAt(x, y)) {
          diffs.push({ X: x, Y: y });
        }
      }
    }
    return diffs;
  }
  #CalculatePosition(x, y) {
    return x + y * this.#_boardLength;
  }
  #IsBoardLengthOk() {
    return (
      typeof this.#_boardLength == "number" &&
      !isNaN(this.#_boardLength) &&
      isFinite(this.#_boardLength) &&
      this.#_boardLength > 0 &&
      Math.floor(this.#_boardLength) === this.#_boardLength
    );
  }
}
