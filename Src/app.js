class App {
  Game;
  BoardDisplay;
  constructor(boardElement) {
    this.#GenerateGame();
    // Generate the display.
    this.BoardDisplay = new HTMLBoardDisplay(
      this.Game.GameBoard,
      (x, y) => {
        if (this.Game.OnNewInput(x, y)) {
          console.info("a change happened to the board!");
          this.BoardDisplay.UpdateDisplay(this.Game.GameBoard);
          if (this.Game.IsDone) {
            console.info("Game done!");
          }
          if (this.Game.IsWon) {
            console.info("User won");
          } else {
            console.info("User lost");
          }
        } else {
          console.info("Got invalid input from the user!");
        }
      },
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
    this.Game.StartNewGame();
  }
}
