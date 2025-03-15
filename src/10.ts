import { random } from 'math';

let myMathProblem = () => {
    const numbers = [];
    while(numbers.length < 4) {
        numbers.push(random() * 10);
    }
    return `What is the value of ${numbers[0]} + ${numbers[1]} - ${numbers[2]} / ${numbers[3]}`;
};
