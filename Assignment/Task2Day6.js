//   Let's bring back the 'populations' array from a previous assignment

// 2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world 
//    population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier

// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we 
// created manually in the previous assignment, and reflect on how much better this solution is

  
const populations = [6, 240, 84, 1441]; // Finland, Pakistan, Turkey, China
function percentageOfWorld1(population)
{
  return (population / 7900) * 100;
}

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfWorld1(populations[i]);
  percentages2.push(percentage);
}

// Create  manually  array
const percentages = [
  percentageOfWorld1(6),
  percentageOfWorld1(240),
  percentageOfWorld1(84),
  percentageOfWorld1(1441)
];

// compare output
console.log("percentages2 (from loop):", percentages2);
console.log("percentages  (manual):   ", percentages);


// Step 7: Optional Reflection (just as a comment)
// Reflection:
// Using a for loop makes the code:
// - More scalable (works even if you add more countries)
// - Cleaner and avoids repetition
// - Easier to maintain in larger programs