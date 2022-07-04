class RNGBase {
  // Generates a number between [min, max].
  GenerateNumber(min, max) {
    if (min > max) {
      throw new TypeError(
        "the minimum value of the number is bigger then the maximum value of the number."
      );
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
