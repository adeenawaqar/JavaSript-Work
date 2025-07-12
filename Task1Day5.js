//    day5              LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you 
// have been using previously. Store this array into a variable called 'populations'.

// 2. Log to the console whether the array has 4 elements or not (true or false).

// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 
// population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values.

//  Solution:

const populations = [6, 240, 84, 1441]; // Finland, Pakistan, Turkey, China

console.log(populations.length==4); // return true

const percentageOfWorld1 =(populations)=>(populations/7900)*100;

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log("Finland: " + percentages[0].toFixed(2) + "%");
console.log("Pakistan: " + percentages[1].toFixed(2) + "%");
console.log("Turkey: " + percentages[2].toFixed(2) + "%");
console.log("China: " + percentages[3].toFixed(2) + "%");