function NumbersBoardGenerator_WhenGeneratingBoard_CheckBoardGeneratedCorrectly() {
  // Arrange.
  const BOARD_LEN = 3;
  let rng = new RNGBase();
  let boardGenerator = new NumbersBoardGenerator(rng);
  let itemsItGot = new Set();
  // Act.
  let board = boardGenerator.GenerateBoard({ Length: BOARD_LEN });
  // Assert.
  if (board.BoardLength != BOARD_LEN) {
    return false;
  }
  for (item in board.Data) {
    if (item < 0 || item > BOARD_LEN * BOARD_LEN - 1) {
      return false;
    }
    itemsItGot.add(item);
  }
  return itemsItGot.size == BOARD_LEN * BOARD_LEN;
}
