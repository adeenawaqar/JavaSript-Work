//  Using Google , Stackflow & MDN.
//  problem 1:
//  We work for a company building a smart home thermometer. our most recent task is this:
// "Given an array of temperature of one day , Calculate temperature amplitude  keep in mind that
//  sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// 1. Understand the problem.
// what is temperature amplitude? Answer: Difference between highest or lowest amplitude.
// - How to Compute Maximum & Minimum Temperature.
// - What is sensor error.

// 2. Breaking into subproblem.
// - how to ignore error.
// - find  maximum value of temp array .
// - find  minimm value of temp array .
// - stract min from max (amplitude) .

const CalcTempAmp = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const currtemp = temps[i];
    if (typeof currtemp != "number") continue;

    if (temps[i] > max) max = currtemp;
    if (temps[i] < min) min = currtemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = CalcTempAmp(temperature);
console.log(amplitude);
