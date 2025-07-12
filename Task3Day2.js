// Task #3 
language = "Mandarin";

// Values that will not change should be `const`
const country = "China";
const continent = "Asia";
const isIsland = false;

// Values that might change can stay as `let`
let population = 1.41 // in millon

// No changes to const variables here
console.log(country);
console.log(continent);
console.log(isIsland);
console.log(population);
console.log(language);

country = "india"; // error const value cannot be changed
continent= "Europe"; // error const value cannot be changed