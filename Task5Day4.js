   // Day4

// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

// Arrow Function
const percentageOfWorld3 = (population) => (population / 7900) * 100;

// Call the function with 3 countries
const percentageFinland3 = percentageOfWorld3(6);
const percentagePakistan3 = percentageOfWorld3(240);
const percentageTurkey3 = percentageOfWorld3(84);

// Log the results
console.log("Finland3: " + percentageFinland3.toFixed(2) + "%");
console.log("Pakistan3: " + percentagePakistan3.toFixed(2) + "%");
console.log("Turkey3: " + percentageTurkey3.toFixed(2) + "%");