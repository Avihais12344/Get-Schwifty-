function WinChecker_WhenCheckingAWinningBoard_EnsureItReturnsDesiredResualt() {
  // Arrange.
  let boardToCheck = new GameBoard([1, 2, 3, 4, 5, 6, 7, 8, 0]);
  let winCheck = new WinningChecker();
  // Act.
  let resualt = winCheck.CheckWinning(boardToCheck);
  // Assert.
  return resualt;
}
function WinChecker_WhenCheckingANotWinningBoard_EnsureItReturnsDesiredResualt() {
  // Arrange.
  let boardToCheck = new GameBoard([1, 2, 3, 0, 5, 6, 7, 8, 4]);
  let winCheck = new WinningChecker();
  // Act.
  let resualt = winCheck.CheckWinning(boardToCheck);
  // Assert.
  return !resualt;
}
function GetFuncs() {
  const funcs = [
    WinChecker_WhenCheckingAWinningBoard_EnsureItReturnsDesiredResualt,
    WinChecker_WhenCheckingANotWinningBoard_EnsureItReturnsDesiredResualt,
  ];
  console.log("funcs = " + funcs + " typeof funcs = " + typeof funcs);
  return funcs;
}
