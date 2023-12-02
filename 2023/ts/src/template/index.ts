import run from 'aocrunner';

const parseInput1 = (rawInput: string) => rawInput;

const parseInput2 = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput1(rawInput);

  return input;
};

const part2 = (rawInput: string) => {
  const input = parseInput2(rawInput);

  return;
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
