function NumbersBoardChecker_WhenCheckingSolveableBoard_CheckItReturnedDesiredAnswer() {
  // Arrange.
  let board = new GameBoard([6, 0, 7, 3, 2, 8, 4, 5, 1]);
  let boardChecker = new NumbersBoardChecker();
  // Act.
  let resualt = boardChecker.IsBoardSolvable(board);
  // Assert.
  return resualt;
}

function NumbersBoardChecker_WhenCheckingUnSolveableBoard_CheckItReturnedDesiredAnswer() {
  // Arrange.
  let board = new GameBoard([2, 4, 7, 6, 0, 1, 3, 8, 5]);
  let boardChecker = new NumbersBoardChecker();
  // Act.
  let resualt = boardChecker.IsBoardSolvable(board);
  // Assert.
  return !resualt;
}

function NumbersBoardChecker_WhenCheckingSolveableBoardWithEvenNumberOfItems_CheckItReturnedDesiredAnswer() {
  // Arrange.
  let board = new GameBoard([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 15, 13, 14, 12, 11,
  ]);
  let boardChecker = new NumbersBoardChecker();
  // Act.
  let resualt = boardChecker.IsBoardSolvable(board);
  // Assert.
  return resualt;
}

function GetFuncs() {
  const funcs = [
    NumbersBoardChecker_WhenCheckingSolveableBoard_CheckItReturnedDesiredAnswer,
    NumbersBoardChecker_WhenCheckingUnSolveableBoard_CheckItReturnedDesiredAnswer,
    NumbersBoardChecker_WhenCheckingSolveableBoardWithEvenNumberOfItems_CheckItReturnedDesiredAnswer,
  ];
  console.log("funcs = " + funcs + " typeof funcs = " + typeof funcs);
  return funcs;
}
