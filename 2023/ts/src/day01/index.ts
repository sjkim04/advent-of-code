import run from "aocrunner";

const parseInput1 = (rawInput: string) => {
  const inputs = rawInput.split('\n');
  let ans = 0;
  for (let input of inputs) {
    const matches = input.match(/[1-9]/g);
    ans += +(matches[0]+matches[matches.length-1]+'\n')
  } 
  return ans;
}
const parseInput2 = (rawInput: string) => {
  const checkStr = (input: string, target: string) => input.includes(target);

  const inputs = rawInput.split('\n');
  let ans = 0;
  for (let input of inputs) {
    let numStr = '';
    for (let i = 0; i < input.length; i++) {
      let isFound = false;
      const sliced = input.substring(0,i);
      if (sliced.match(/[1-9]/g)) {
        numStr += sliced.match(/[1-9]/g)[0];
        break;
      }
      switch (true) {
        case checkStr(sliced, 'one'):
          numStr += '1';
          isFound = true;
          break;
        case checkStr(sliced, 'two'):
          numStr += '2';
          isFound = true;
          break;
        case checkStr(sliced, 'three'):
          numStr += '3';
          isFound = true;
          break;
        case checkStr(sliced, 'four'):
          numStr += '4';
          isFound = true;
          break;
        case checkStr(sliced, 'five'):
          numStr += '5';
          isFound = true;
          break;
        case checkStr(sliced, 'six'):
          numStr += '6';
          isFound = true;
          break;
        case checkStr(sliced, 'seven'):
          numStr += '7';
          isFound = true;
          break;
        case checkStr(sliced, 'eight'):
          numStr += '8';
          isFound = true;
          break;
        case checkStr(sliced, 'nine'):
          numStr += '9';
          isFound = true;
          break;
      }
      if (isFound) break;
    }

    for (let i = 0; i < input.length; i++) {
      let isFound = false;
      const sliced = input.substring(input.length-1-i);
      if (sliced.match(/[1-9]/g)) {
        numStr += sliced.match(/[1-9]/g)[0];
        break;
      }
      switch (true) {
        case checkStr(sliced, 'one'):
          numStr += '1';
          isFound = true;
          break;
        case checkStr(sliced, 'two'):
          numStr += '2';
          isFound = true;
          break;
        case checkStr(sliced, 'three'):
          numStr += '3';
          isFound = true;
          break;
        case checkStr(sliced, 'four'):
          numStr += '4';
          isFound = true;
          break;
        case checkStr(sliced, 'five'):
          numStr += '5';
          isFound = true;
          break;
        case checkStr(sliced, 'six'):
          numStr += '6';
          isFound = true;
          break;
        case checkStr(sliced, 'seven'):
          numStr += '7';
          isFound = true;
          break;
        case checkStr(sliced, 'eight'):
          numStr += '8';
          isFound = true;
          break;
        case checkStr(sliced, 'nine'):
          numStr += '9';
          isFound = true;
          break;
      }
      if (isFound) break;
    }


    if (numStr.length === 1) {
      const matches = input.match(/[1-9]/g);
      numStr += matches[matches.length-1];
    } else if (numStr.length === 0) {
      const matches = input.match(/[1-9]/g);
      numStr += matches[0] + matches[matches.length-1];
    }

    ans += +numStr
  }
  return ans;
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
    //  {
    //    input: `sadfklj;2jklsajfk;saj4`,
    //    expected: 24,
    //  },
    //  {
    //    input: `twone`,
    //    expected: 21,
    //  },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
