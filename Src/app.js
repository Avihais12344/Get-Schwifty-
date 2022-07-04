class App {
  Game;
  BoardDisplay;
  constructor(boardElement) {
    this.#GenerateGame();
    // Generate the display.
    this.BoardDisplay = new HTMLBoardDisplay(
      this.Game.GameBoard,
      this.Game.OnNewInput,
      boardElement
    );
  }
  #GenerateGame() {
    let rng = new RNGBase();
    let boardGenerator = new NumbersBoardGenerator(rng);
    let boardChecker = new NumbersBoardChecker();
    let inputChecker = new InputChecker();
    let winningChecker = new WinningChecker();
    this.Game = new Game(
      inputChecker,
      boardGenerator,
      boardChecker,
      winningChecker
    );
  }
}
