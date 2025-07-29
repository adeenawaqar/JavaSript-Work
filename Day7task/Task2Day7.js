//  Using Google , Stackflow & MDN.
//  problem no 2.
//  function should now receieve 2 arrays of temps.

//  1. Understanding the problem.
//  - with 2 arrays, we should implement functionality twice / No. We can merage arrays.

//  2. Breaking into subproblems.
//  - How to merage to arrays.

const CalcTempAmpNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

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

const amplitudeNew = CalcTempAmpNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
