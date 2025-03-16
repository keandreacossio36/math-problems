function getRandomMathProblem() {
  const numbers = [1, 2, 3, 4, 5];
  const operator = ['+', '-', '*', '/'];
  let problem = '';

  // Generate a random number and an operator
  const num1 = numbers[Math.floor(Math.random() * numbers.length)];
  const op = operator[Math.floor(Math.random() * operator.length)];
  const num2 = numbers[Math.floor(Math.random() * numbers.length)];

  // Generate the problem and solution
  switch (op) {
    case '+':
      problem = `${num1} + ${num2}`;
      break;
    case '-':
      problem = `${num1} - ${num2}`;
      break;
    case '*':
      problem = `${num1} * ${num2}`;
      break;
    case '/':
      problem = `${num1} / ${num2}`;
      break;
  }

  // Return the solution
  return problem;
}
