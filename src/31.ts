function sumSquares(numbers: number[]): number {
  return numbers.map((num) => num * num).reduce((acc, val) => acc + val, 0);
}
