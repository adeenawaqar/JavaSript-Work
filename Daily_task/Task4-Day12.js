// Day 12 lecture...
// Destructuring of object...

const restaurant = {
  name: "Classico Italiano",
  location: "Firenze, Italy",
  categories: ["Italian", "Pizza", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rice"],

  openingHours: {
    thursday: {
      open: 11,
      close: 11,
    },
    friday: {
      open: 11,
      close: 11,
    },
    Saturday: {
      open: 12, // open 24 hours....
      close: 12,
    },
  },

  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    staterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your  delicious Pasta with ${ing1} , ${ing2} , ${ing3}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  staterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

let { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

let {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values...
/* let {
  menu: [],
  starterMenu: starters = [],
} = restaurant;
console.log(menu, starterMenu);
*/

// Mutating values...
let a = 111;
let b = 999;
let obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested object...
let {
  friday: { open: o, close: c },
} = openingHours;
console.log(o, c);

//  Day 12 lecture.
//  Spread Operator....

const arr = [7, 8, 9];
const badNewarr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewarr);
const NewArr = [1, 2, ...arr];
console.log(NewArr);
console.log(...NewArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// copy Array...
const mainMenuCopy = [...restaurant.mainMenu];

// join two array...
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Spread operator work in iterables: (array, strings ,maps , sets, but not objects)...
const str = "Adeena";
const letter = [...str];
console.log(letter);
console.log(...str);
console.log(`${str} Waqar`);

const prompt = require("prompt-sync")();

const ingredients = [
  prompt("Ingredient 1? "),
  prompt("Ingredient 2? "),
  prompt("Ingredient 3? "),
];
