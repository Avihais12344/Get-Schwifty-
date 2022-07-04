// Testing.
function GameBoard_WhenSwappingItemsOnGameBoard_InsureSwappingIsCorrect() {
  // Arrange.
  let board = new GameBoard([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let valueAt00 = board.ElementAt(0, 0);
  let valueAt11 = board.ElementAt(1, 1);
  // Act. (swap beteen 1 and 5).
  board.SwapPosition(0, 0, 1, 1);
  return (
    valueAt00 == board.ElementAt(1, 1) && valueAt11 == board.ElementAt(0, 0)
  );
}
