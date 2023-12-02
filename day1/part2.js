const actualInput = require('node:fs').readFileSync(__dirname + '/input.txt', 'utf-8').split('\n');
const testInput = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`.split('\n');

const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solve(input) {
  let result = 0;
  input.forEach((line) => {
    let firstDigit;
    firstLookup:
    for (let i = 0; i < line.length; i++) {
      let character = line[i];
      if (!isNaN(Number(character))) {
        firstDigit = character;
        break;
      }
      for (let j = 0; j < numbers.length; j++) {
        if (line.slice(i, i + numbers[j].length) === numbers[j]) {
          firstDigit = j.toString();
          break firstLookup;
        }
      };
    }
    
    let lastdigit;
    secondLookup:
    for (let i = line.length - 1; i >= 0; i--) {
      let character = line[i];
      if (!isNaN(Number(character))) {
        lastdigit = character;
        break;
      }
      for (let j = 0; j < numbers.length; j++) {
        if (line.slice(i, i + numbers[j].length) === numbers[j]) {
          lastdigit = j.toString();
          break secondLookup;
        }
      }
    }
    result += Number(firstDigit + lastdigit);
  });
  return result;
}

console.log('With test input:', solve(testInput));
console.log('With actual input:', solve(actualInput));
