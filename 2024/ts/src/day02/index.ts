import run from "aocrunner";
import { error } from "console";

const parseInput = (rawInput: string) => {
  return rawInput.split("\n").map((a) => a.split(" ").map((n) => +n));
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let count = 0;
  let flagged = false;
  for (const row of input) {
    let dir = 2;
    let flagged = false;
    for (let i = 1; i < row.length; i++) {
      if (dir === 2) {
        dir = row[i] > row[i - 1] ? 1 : 0;
      }
      if (
        (dir && row[i] <= row[i - 1]) ||
        (!dir && row[i] >= row[i - 1]) ||
        Math.abs(row[i] - row[i - 1]) > 3
      ) {
        flagged = true;
        break;
      }
    }
    count += +!flagged;
  }

  return count;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let count = 0;

  for (const row of input) {
    const res = checkErrors(row);

    if (!res.error) {
      count++;
      continue;
    }

    let editedRow = Array.from(row);
    const i = res.i;
    if (!i) continue;

    if (res.type === 1 && res.i === 2) {
      editedRow.splice(0, 1);
      const edit = checkErrors(editedRow);
      if (!edit.error) {
        count++;
        continue;
      }
    }

    editedRow = Array.from(row);

    editedRow.splice(i, 1);
    const edit1 = checkErrors(editedRow);
    if (!edit1.error) {
      count++;
      continue;
    }
    editedRow = Array.from(row);
    editedRow.splice(i - 1, 1);
    const edit2 = checkErrors(editedRow);
    if (!edit2.error) {
      count++;
    }

    continue;
  }

  return count;
};

const checkErrors = (
  row: number[],
): { error: boolean; type?: number; i?: number } => {
  let dir = 2;
  for (let i = 1; i < row.length; i++) {
    if (dir === 2) {
      dir = row[i] > row[i - 1] ? 1 : 0;
    }
    if ((dir && row[i] <= row[i - 1]) || (!dir && row[i] >= row[i - 1])) {
      // dir problem = 1
      return { error: true, type: 1, i };
    }
    if (Math.abs(row[i] - row[i - 1]) > 3) {
      // incr problem = 2
      return { error: true, type: 2, i };
    }
  }

  return { error: false };
};

run({
  part1: {
    tests: [
      {
        input: `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`,
        expected: 2,
      },
      {
        input: `1 2 3
1 0 3`,
        expected: 1,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`,
        expected: 4,
      },
      {
        input: `3 1 2 4 5`,
        expected: 1,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
