import run from 'aocrunner';
const Log = console.log;

const parseInput1 = (rawInput: string) => {
  const getMax = (type: string) => {
    switch (type) {
      case 'red':
        return 12;
      case 'green':
        return 13;
      case 'blue':
        return 14;
    }
  };
  let possibleSum = 0;

  const inputs = rawInput.split('\n');
  for (let input of inputs) {
    let impossibleGame = false;

    const gameNum = +input.slice(4, input.indexOf(':'));
    input = input.slice(input.indexOf(':') + 2);
    const rounds = input.split('; ');
    for (const round of rounds) {
      if (impossibleGame) break;
      const balls = round.split(', ');
      for (const ball of balls) {
        if (
          getMax(ball.slice(ball.indexOf(' ') + 1)) <
          +ball.slice(0, ball.indexOf(' '))
        ) {
          impossibleGame = true;
          break;
        }
      }
    }

    if (impossibleGame) continue;
    possibleSum += gameNum;
  }

  return possibleSum;
};

const parseInput2 = (rawInput: string) => {
  const inputs = rawInput.split('\n');
  let sum = 0;
  for (let input of inputs) {
    const maxNums = {
      red: 0,
      green: 0,
      blue: 0,
    };

    input = input.slice(input.indexOf(':') + 2);
    const rounds = input.split('; ');
    for (const round of rounds) {
      const balls = round.split(', ');
      for (const ball of balls) {
        const color = ball.slice(ball.indexOf(' ') + 1);
        const num = +ball.slice(0, ball.indexOf(' '));
        if (maxNums[color] < num) {
          maxNums[color] = num;
        }
      }
    }
    sum += maxNums['red'] * maxNums['green'] * maxNums['blue'];
  }

  return sum;
};

const part1 = (rawInput: string) => {
  const input = parseInput1(rawInput);

  return input;
};

const part2 = (rawInput: string) => {
  const input = parseInput2(rawInput);

  return input;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `Game 1: 7 red, 14 blue; 2 blue, 3 red, 3 green; 4 green, 12 blue, 15 red; 3 green, 12 blue, 3 red; 11 red, 2 green`,
        expected: 14 * 15 * 4,
      },
      {
        input: `Game 13: 1 green; 7 blue, 1 red, 2 green; 8 blue, 2 green`,
        expected: 8 * 1 * 2,
      },

      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
