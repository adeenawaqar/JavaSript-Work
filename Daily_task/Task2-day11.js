//  Day 11  Lecture
//  Hosting and Temperal dead Zone

var me = "Adeena";
let job = "Web designer";
const year = "2025";

console.log(me);
console.log(job);
console.log(year);

console.log(addDel(2, 3));
//console.log(addExp(2, 3));  Give no output before intialization or declaration.
//console.log(addArrow(2, 3));

// functions

function addDel(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

console.log(addExp(5, 6));

const addArrow = (a, b) => a + b;

console.log(addArrow(11, 6));

//  Example

// if (!Numproducts) DeleteShoppingCart();

// var Numproducts = 10;

function DeleteShoppingCart() {
  console.log("All products is deleted!");
}
/*

var x = 1;
let y = 2;
let z = 4;

console.log(x===window.x); // true.
console.log(x===window.y); // false.
console.log(x===window.z); // false.

*/
