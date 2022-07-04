class GameBase {
  #_gameBoard;
  constructor() {
    this.#_gameBoard = undefined;
  }
  OnNewInput(x, y) {}
  StartNewGame() {}
  get GameBoard() {
    return this.#_gameBoard;
  }
  set GameBoard(newBoard) {
    this.#_gameBoard = newBoard;
  }
  get IsWon() {
    return undefined;
  }
  get IsDone() {
    return undefined;
  }
}
