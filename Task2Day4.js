     // Day4

// The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator to log a string like this 
// to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is
// below average'. Notice how only one word changes between these two sentences!

// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

// Solution:

let population= 33;
let country= "portugal";
let message  = population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`;
console.log(message);

// 2. After checking the result, change the population temporarily to 13 and then to
 population = 13;
message = population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`;
console.log(message);

population = 130;
message = population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`;
console.log(message);

// 130. See the different results, and set the population back to original

population = 33;
message = population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`;
console.log(message);