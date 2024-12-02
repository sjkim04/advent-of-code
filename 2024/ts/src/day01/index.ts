import run from "aocrunner";

const parseInput = (rawInput: string) => {
  const input = rawInput.split("\n").map((a) => a.split("   "));

  return [
    input.map((a) => +a[0]).sort((a, b) => a - b),
    input.map((a) => +a[1]).sort((a, b) => a - b),
  ];
};

const part1 = (rawInput: string) => {
  const [firstRow, secondRow] = parseInput(rawInput);
  const dists = [];
  for (let i = 0; i < firstRow.length; i++) {
    dists.push(Math.abs(firstRow[i] - secondRow[i]));
  }

  return dists.reduce((a, v) => a + v);
};

const part2 = (rawInput: string) => {
  const [firstRow, secondRow] = parseInput(rawInput);
  const scores: Record<number, number> = {};
  const score = [];

  for (let i = 0; i < firstRow.length; i++) {
    if (!scores[firstRow[i]]) {
      scores[firstRow[i]] =
        firstRow[i] * secondRow.filter((a) => a === firstRow[i]).length;
    }
    score.push(scores[firstRow[i]]);
  }

  return score.reduce((a, v) => a + v);
};

run({
  part1: {
    tests: [
      {
        input: `3   4
4   3
2   5
1   3
3   9
3   3`,
        expected: 11,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `3   4
4   3
2   5
1   3
3   9
3   3`,
        expected: 31,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
