const country = "Chaina";
const continent = "Asia";
const isIsland = false;
let population = 1.41;// in millon
let language = "Mandarin";

// 1. Half the population
console.log(population / 2);

// 2. Increase the population by 1
population++;
console.log(population);

// 3. Compare with Finland's population
const finlandPopulation = 6;
console.log(population > finlandPopulation); // true

// 4. Compare with average population
const avgPopulation = 33;
console.log(population < avgPopulation);     // false

// 5. Create a description string
const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);
