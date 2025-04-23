function calculateSum(arr: number[]): number {
  let total = arr.reduce((acc, val) => acc + val, 0);
  return total;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers)); // Output: 15
