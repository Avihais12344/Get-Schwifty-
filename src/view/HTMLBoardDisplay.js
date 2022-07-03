class HTMLBoardDisplay extends BoardDisplayBase {
  #_cellsIds;
  #_oldBoard;
  constructor(cellsIds, board) {
    this.#_cellsIds = cellsIds;
    this.#_oldBoard = board;
    super();
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
  get BoardCellsId() {
    return this.#_cellsIds;
  }
  // todo.
  #SwapCells(oldPosition, newPosition) {}
  #DifferenceToCellId(change) {
    return change.X.toString() + "," + change.Y.toString();
  }
}
