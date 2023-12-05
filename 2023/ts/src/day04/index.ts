import run from 'aocrunner';

const parseInput1 = (rawInput: string) => {
  const inputs = rawInput.split('\n');
  let winSum = 0;

  for (let input of inputs) {
    let count = 0;
    let sum = 0;
    input = input.slice(input.indexOf(':') + 1);

    const winList = input
      .slice(null, input.indexOf(' | '))
      .split(' ')
      .filter((s) => s !== '');
    const haveList = input
      .slice(input.indexOf(' | ') + 3)
      .split(' ')
      .filter((s) => s !== '');

    for (const haveNum of haveList) {
      if (winList.includes(haveNum)) {
        sum = 2 ** count;
        count += 1;
      }
    }

    winSum += sum;
  }

  return winSum;
};

const parseInput2 = (rawInput: string) => {
  const inputs = rawInput.split('\n');
  const cards = {};
  for (let input of inputs) {
    const cardNum = input.slice(4, input.indexOf(':')).trim();
    cards[cardNum] = 1;
  }

  for (let input of inputs) {
    const cardNum = input.substring(4, input.indexOf(':')).trim();
    console.log(input);
    input = input.slice(input.indexOf(':') + 1);
    const winList = input
      .slice(null, input.indexOf(' | '))
      .split(' ')
      .filter((s) => s !== '');
    const haveList = input
      .slice(input.indexOf(' | ') + 3)
      .split(' ')
      .filter((s) => s !== '');
    for (let i = 0; i < cards[cardNum]; i++) {
      let count = 1;
      for (const haveNum of haveList) {
        if (winList.includes(haveNum)) {
          cards[+cardNum + count] += 1;
          count += 1;
        }
      }
    }
  }

  let sum = 0;
  for (const card of Object.values(cards)) {
    sum += +card;
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
      //   input: `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
      //   Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
      //   Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
      //   Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
      //   Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
      //   Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`,
      //   expected: 13,
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`,
        expected: 30,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
