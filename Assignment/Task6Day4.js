//     Day4                 // LECTURE: Functions Calling Other Functions

//  1. Create a function called 'describePopulation'. Use the function type you like the most. This 
//     function takes in two arguments: 'country' and'population', and returns a string like this: 
//     'China has 1441 million people, which is about 18.2% of the world.'

//  2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier

// 3.  Call 'describePopulation' with data for 3 countries of your choice

// Solution:

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// Function that describes a country's population using percentageOfWorld1
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage.toFixed(2)}% of the world.`;
}

// Call describePopulation with 3 countries
const describe1 = describePopulation('Finland', 6);
const describe2 = describePopulation('Pakistan', 240);
const describe3 = describePopulation('Turkey', 84);


console.log(describe1);
console.log(describe2);
console.log(describe3);