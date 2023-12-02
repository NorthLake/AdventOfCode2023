const actualInput = require('node:fs').readFileSync(__dirname + '/input.txt', 'utf-8').split('\n');
const testInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`.split('\n');

function solve(/** @type string[] */ input) {
  let result = 0;
  for (let i = 0; i < input.length; i++) {  // Each game
    const game = input[i].split(': ')[1].split('; ')
      .map(grab => {  // Each grab
        const grabData = grab.split(', ');
        let colors = {
          red: 0,
          green: 0,
          blue: 0
        };
        grabData.forEach(color => {  // Each color
          const colorData = color.split(' ');
          colors[colorData[1]] = Number(colorData[0]);
        });
        return colors;
      });
      
      const leastCubes = game.reduce((prev, cur) => ({
        red: cur.red > prev.red ? cur.red : prev.red,
        green: cur.green > prev.green ? cur.green : prev.green,
        blue: cur.blue > prev.blue ? cur.blue : prev.blue,
      }));
      result += leastCubes.red * leastCubes.green * leastCubes.blue;
  }
  return result;
}

console.log('With test input:', solve(testInput));
console.log('With actual input:', solve(actualInput));
