  // Day3
  
  // Declare a variable 'numNeighbours' 
// 1)based on a prompt input like this:prompt('How many neighbour countries does  your country have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality== for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of'numNeighbours'.
//  Notice what happens when there is exactly 1 border! Why is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this situation

 const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for number of neighbour countries
rl.question("How many neighbour countries does your country have? ", function (input) {

  // Step 2: Get user input (as string), convert to number
  let numNeighbours = Number(input);

  // Step 3, 4: Use if / else-if / else for decision
  if (numNeighbours === 1) {
    console.log("Only 1 border!");
  } else if (numNeighbours > 1) {
    console.log("More than 1 border");
  } else {
    console.log("No borders");
  }

  // Step 5: Test with different inputs (manually try 1, 0, 2 etc.)

  // Step 6: If you had used == instead of ===:
  // let numNeighbours = input; // (input is still string)
  // if (numNeighbours == 1) {...}  // would have worked, but not type safe

  // Step 7: We used Number(input) to convert to number safely

  // Step 8: Reflection (printed in console as message)
  console.log("\nWhy use === and type conversion?");
  console.log("Because 'prompt' or 'readline' gives string input.");
  console.log("Using === ensures both value and type match.");
  console.log("Type conversion makes input behave correctly in numeric comparisons.");

  rl.close();
});
