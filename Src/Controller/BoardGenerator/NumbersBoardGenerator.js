class NumbersBoardGenerator extends BoardGeneratorBase {
  #_rng;
  constructor(rng) {
    super();
    this.#_rng = rng;
  }
  GenerateBoard(boardParams) {
    const boardLen = boardParams.Length;
    const maxValue = boardLen * boardLen;
    console.debug("Board length " + boardLen + " max value " + maxValue);
    let numbersGenerated = new Set();
    while (numbersGenerated.size < maxValue) {
      numbersGenerated.add(this.#_rng.GenerateNumber(0, maxValue - 1));
    }
    console.debug("generated board: " + Array.from(numbersGenerated));
    return new GameBoard(Array.from(numbersGenerated));
  }
}
