//  Day 12 lecture.
//  Arrow function and regular function....

// var firstName = "Matilda";

// regular function..
const jonas = {
  firstName: "Adeena",
  year: 2005,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);

    // ..Solution 1..
    /*
    const self = this; // self or that.
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 2005 && self.year <= 2024);
    };
*/
    // ..Solution 2..
    // parent functiom uses this keyword . in parent scope this keyword is jonas. Arrow function uses the
    // this keyword inherit from parent function...
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 2005 && this.year <= 2024);
    };
    isMillenial();
  },

  //  Arrow function..
  greet: () => {
    console.log(`Hey! ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// Argument keyword..
const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExp(2, 5);
addExp(2, 5);

/*addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
 };
 addArrow(2, 5, 8);
 */
