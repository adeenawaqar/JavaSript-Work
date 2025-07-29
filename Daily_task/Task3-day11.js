//  Day11 lecture.
//  This Keyword.

// Node.js : this = {} (empty object or module).
// Browser : window object.

console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  // console.log(this); // undefined.
};
calcAge(20);

const calcAgeArrow = (birthYear) => {
  console.log(2025 - birthYear);
  console.log(this); // Node.js : this = {} (empty object or module).
};
calcAgeArrow(2000);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
// borrowing method...  // copy one object to the other.
matilda.calcAge = jonas.calcAge;
matilda.calcAge();
