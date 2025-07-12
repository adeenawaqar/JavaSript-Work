    // Day4                        // Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format:
//  'Finland has 6 million people and its capital city is Helsinki'

// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3
//  different variables, and log them to the console

// Solution:

function describeCountry(country, population, capitalCity)
{
  
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

// Function calls 

const Describe1 = describeCountry('Finland', 6, 'Helsinki');
const Describe2 = describeCountry('Pakistan', 240, 'Islamabad');
const Describe3 = describeCountry('Turkey', 84, 'Ankara');

// Logging the results
console.log(Describe1);
console.log(Describe2);
console.log(Describe3);