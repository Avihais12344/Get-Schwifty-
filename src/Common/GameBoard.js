class GameBoard {
  #_board;
  #_boardLength;
  constructor(boardValues, boardLength) {
    this.#_board = boardValues;
    this.#_boardLength = boardLength;
  }

  get Data() {
    return this.#_board;
  }
  get BoardLength() {
    return this.#_boardLength;
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
  }
  #CalculatePosition(x, y) {
    return x + y * this.#_boardLength;
  }
}
