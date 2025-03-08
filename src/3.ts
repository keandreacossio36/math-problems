
import { getRandomInt } from 'crypto';

function solveMathProblem(problem) {
  const solution = problem.split('=');
  if (solution.length === 2) {
    const operator = solution[0].trim();
    const num1 = parseFloat(solution[1]);
    let result;
    switch (operator) {
      case '+':
        result = num1 + getRandomInt(5);
        break;
      case '-':
        result = num1 - getRandomInt(5);
        break;
      case '*':
        result = num1 * getRandomInt(5);
        break;
      case '/':
        if (num1 !== 0) {
          result = num1 / getRandomInt(5);
        } else {
          result = 0;
        }
        break;
      default:
        result = 0;
    }
    return `${problem} = ${result}`;
  }
  return 'Invalid problem';
}