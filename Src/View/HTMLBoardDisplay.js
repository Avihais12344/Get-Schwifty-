class HTMLBoardDisplay extends BoardDisplayBase {
  #_oldBoard;
  #_boardElement;
  #_boardDocument;
  constructor(board, callbackFunctionOnClick, boardElement) {
    super();
    this.#_oldBoard = board;
    this.#_boardElement = boardElement;
    this.#_boardDocument = boardElement.ownerDocument;
    // Create the board.
    this.#PrepareBoard(callbackFunctionOnClick);
  }
  UpdateDisplay(newBoard) {
    //Detect where the change has happened.
    let diffs = this.#_oldBoard.ScanDifferences(newBoard);
    let diff1 = this.#DifferenceToCellId(diffs[0]);
    let diff2 = this.#DifferenceToCellId(diffs[1]);
    // Move the nodes according to the change.
    this.#SwapCells(diff1, diff2);
    // Update the board.
    this.#_oldBoard = newBoard;
  }
  #SwapCells(oldPosition, newPosition) {
    const newPosElement = this.#_boardDocument.getElementById(newPosition);
    const oldPosElement = this.#_boardDocument.getElementById(oldPosition);
    const oldValue = oldPosElement.innerText;
    oldPosElement.innerText = newPosElement.innerText;
    newPosElement.innerText = oldValue;
  }
  #DifferenceToCellId(change) {
    return change.X.toString() + "," + change.Y.toString();
  }
  #PrepareBoard(callbackFunctionOnClick) {
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
        buttonElement.setAttribute("class", "board-cell");
        this.#_boardElement.appendChild(buttonElement);
      }
    }
  }
  #GenerateTextByValue(value) {
    return value ? value : "";
  }
}
