function InputChecker_WhenTestingValidInput_EnsureItReturnsTheDesiredResualt() {
  // Arrange.
  const EmptyCellRealX = 1,
    EmptyCellRealY = 0;
  let board = new GameBoard([6, 0, 7, 3, 2, 8, 4, 5, 1]);
  let inputChecker = new InputChecker();
  let EmptyCellX, EmptyCellY;
  // Act.
  // Trying to replace 2 with the empty cell. It is a valid move!
  [EmptyCellX, EmptyCellY] = inputChecker.CheckValidMove(board, 1, 1);
  console.debug("X = " + EmptyCellX);
  console.debug("Y = " + EmptyCellY);
  // Assert.
  return EmptyCellX == EmptyCellRealX && EmptyCellY == EmptyCellRealY;
}

function InputChecker_WhenTestingInValidInput_EnsureItReturnsTheDesiredResualt() {
  // Arrange.
  let board = new GameBoard([2, 4, 7, 6, 0, 1, 3, 8, 5]);
  let inputChecker = new InputChecker();
  // Act.
  // Because the empty cell is at the center of the board,
  // making a move on the top left cell is invalid!
  let resualt = inputChecker.CheckValidMove(board, 0, 0);
  // Assert.
  return resualt === undefined;
}

function GetFuncs() {
  const funcs = [
    InputChecker_WhenTestingValidInput_EnsureItReturnsTheDesiredResualt,
    InputChecker_WhenTestingInValidInput_EnsureItReturnsTheDesiredResualt,
  ];
  console.log("funcs = " + funcs + " typeof funcs = " + typeof funcs);
  return funcs;
}
