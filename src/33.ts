function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const min = 0;
const max = 50;
console.log(getRandomInt(min, max));
