class HTMLBoardDisplay extends BoardDisplayBase {
  #_oldBoard;
  constructor(board, callbackFunctionOnClick, boardElement) {
    super();
    this.#_oldBoard = board;
    // Create the board.
    this.#PrepareBoard(callbackFunctionOnClick, boardElement);
  }
  UpdateDisplay(newBoard) {
    //Detect where the change has happened.
    let diffs = this.#_oldBoard.ScanDifferences(newBoard);
    let diff1 = this.#DifferenceToCellId(changes[0]);
    let diff2 = this.#DifferenceToCellId(changes[1]);
    // Move the nodes according to the change.
    this.#SwapCells(change1, change2);
    // Update the board.
    this.#_oldBoard = newBoard;
  }
  // todo.
  #SwapCells(oldPosition, newPosition) {}
  #DifferenceToCellId(change) {
    return change.X.toString() + "," + change.Y.toString();
  }
  #PrepareBoard(callbackFunctionOnClick, boardElement) {
    const boardLength = this.#_oldBoard.BoardLength;
    for (let y = 0; y < boardLength; y++) {
      for (let x = 0; x < boardLength; x++) {
        const buttonElement = document.createElement("button");
        const elementAtPos = this.#_oldBoard.ElementAt(x, y);
        // Add the event of clicking.
        buttonElement.addEventListener("click", () => {
          console.debug("User clicked on button: (" + x + ", " + y + ")");
          callbackFunctionOnClick(x, y);
        });
        // the text in the button.
        buttonElement.innerText = this.#GenerateTextByValue(elementAtPos);
        // the id of the button.
        buttonElement.setAttribute(
          "id",
          this.#DifferenceToCellId({ X: x, Y: y })
        );
        boardElement.appendChild(buttonElement);
      }
    }
  }
  #GenerateTextByValue(value) {
    return value ? value : "";
  }
}
