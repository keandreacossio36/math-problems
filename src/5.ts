import {random} from 'math';
function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function solveMathProblems() {
const num1 = getRandomNumber(1, 10);
const num2 = getRandomNumber(1, 10);
const operator = ['+', '-', '*', '/'][getRandomNumber(0, 3)];
let solution;
switch (operator) {
case '+':
solution = num1 + num2;
break;
case '-':
solution = num1 - num2;
break;
case '*':
solution = num1 * num2;
break;
case '/':
solution = Math.floor(num1 / num2);
break;
}
return {
question: `${num1} ${operator} ${num2}`,
answer: solution,
};
}