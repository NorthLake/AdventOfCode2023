const actualInput = require('node:fs').readFileSync(__dirname + '/input.txt', 'utf-8').split('\n');
const testInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`.split('\n');

function solve(input) {
  let result = 0;
  input.forEach((line) => {
    let firstDigit;
    for (let i = 0; i < line.length; i++) {
      let character = line[i];
      if (!isNaN(Number(character))) {
        firstDigit = character;
        break;
      }
    }
    
    let lastdigit;
    for (let i = line.length - 1; i >= 0; i--) {
      let character = line[i];
      if (!isNaN(Number(character))) {
        lastdigit = character;
        break;
      }
    }
    result += Number(firstDigit + lastdigit);
  });
  return result;
}

console.log('With test input:', solve(testInput));
console.log('With actual input:', solve(actualInput));
