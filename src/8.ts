import { Random } from 'meteor/random';

export function getRandomTsCode(): string {
  const code = `
    function ${Random.id()}() {
      // Your code here
    }
  `;

  return code;
}