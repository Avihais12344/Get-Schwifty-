export class GameBoard {
  #_board;
  constructor(boardValues) {
    this.#_board = boardValues;
  }
  get Data() {
    return this.#_board;
  }
}
