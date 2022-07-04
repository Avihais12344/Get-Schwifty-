class Game extends GameBase {
  #_inputChecker;
  #_boardGenerator;
  #_boardChecker;
  #_winningChecker;
  #_isDone;
  #_isWon;
  constructor(inputChecker, boardGenerator, boardChecker, winningChecker) {
    super();
    this.#_inputChecker = inputChecker;
    this.#_boardGenerator = boardGenerator;
    this.#_boardChecker = boardChecker;
    this.#_winningChecker = winningChecker;
    this.#_isDone = false;
    this.#_isWon = false;
  }
  StartNewGame() {
    const BOARD_LEN = 3;
    let isBoardReady = false;
    this.#_isDone = false;
    this.#_isWon = false;
    while (!isBoardReady) {
      this.GameBoard = this.#_boardGenerator.GenerateBoard({
        Length: BOARD_LEN,
      });
      isBoardReady = this.#_boardChecker.IsBoardSolvable(this.GameBoard);
    }
  }
  OnNewInput(x, y) {
    // Check move.
    let move = this.#_inputChecker.CheckValidMove(this.GameBoard, x, y);
    if (!move) {
      return;
    }

    // Do move.
    let newX, newY;
    [newX, newY] = move;
    this.GameBoard.SwapPosition(newX, newY, x, y);

    // Checking of after move.
    this.#_isWon = this.#_winningChecker.CheckWinning(this.GameBoard);
    this.#_isDone =
      this.#_isWon || this.#_boardChecker.IsBoardSolvable(this.GameBoard);
  }
  get IsWon() {
    return this.#_isWon;
  }
  get IsDone() {
    return this.#_isDone;
  }
}
