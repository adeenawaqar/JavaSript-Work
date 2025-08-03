// Day 12 lecture...
// Destructuring of Array...

const restaurant = {
  name: "Classico Italiano",
  location: "Firenze, Italy",
  categories: ["Italian", "Pizza", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rice Dish"],

  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
};

// structuring of array...
const arr = [2, 3, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [first, , second] = restaurant.categories;
console.log(first, second);

/* swaping variables...
let temp = first;
first = second;
second = temp;
console.log(first, second);
*/
[first, second] = [second, first];
console.log(first, second);

// receive two return value from the function...
let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested distructuring...
let nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
let [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values...
const [p = 1, q = 2, r = 3] = [8];
console.log(p, q, r);
