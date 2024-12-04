import run from "aocrunner";

const parseInput = (rawInput: string) => {
  return rawInput.split("\n").join("");
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const opList = input.split("mul(").map((n) => {
    let nums = n.split(",");
    if (nums.length < 2) {
      return 0;
    }

    nums = nums.slice(0, 2);
    if (!nums[1].includes(")")) {
      return 0;
    }

    nums[1] = nums[1].slice(0, nums[1].indexOf(")"));

    if (isNaN(+nums[0]) || isNaN(+nums[1].split(")")[0])) {
      return 0;
    }

    return +nums[0] * +nums[1];
  });

  return opList.reduce((a, v) => a + v);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const opList = [
    ...input.matchAll(/(?<=(^|do\(\))(.(?!don't\(\)))*)mul\((\d+),(\d+)\)/gs),
  ];

  return opList.reduce((a, [, , , b, c]) => a + +b * +c, 0);
};

run({
  part1: {
    tests: [
      {
        input: `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`,
        expected: 161,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`,
        expected: 48,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
