// Day 13 lecture...
// Enhanced object literal is used  variables as property names (shorthand)
// Define functions without the function keyword
// Use computed property names...

"use strict";

const weekDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "thursday",
  "friday",
  "Saturday",
  "Sunday",
];

const openingHours = {
  [weekDay[0]]: {
    open: 11,
    close: 11,
  },
  [weekDay[1]]: {
    open: 11,
    close: 11,
  },
  [weekDay[2]]: {
    open: 12, // open 24 hours....
    close: 12,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Firenze, Italy",
  categories: ["Italian", "Pizza", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rice"],

  // ✅ Enhanced Object Literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// Test cases
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

// Destructuring
let { name, openingHours: hoursUsed, categories } = restaurant;
console.log(name, hoursUsed, categories);

let {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
