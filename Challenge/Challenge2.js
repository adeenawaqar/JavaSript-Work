// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI 
// is higher than John's!" or "John's BMI is higher than Mark's!"

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher 
// than John's (23.9)!"
// Hint: Use an if/else statement 

// Data 1
let massMarks = 78;
let heightMarks = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// Step2     Calculate both BMIs
 BMIMark = massMarks / (heightMarks **2);
 BMIJohn = massJohn / (heightJohn * heightJohn);

  console.log(BMIMark,BMIJohn);
   if(BMIMark > BMIJohn)
     {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
     }
    else
    {
        console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
    }

  // Data 2
  massMarks= 95;
 heightMarks = 1.88;
 massJohn = 85;
 heightJohn = 1.76;

 // Step2     Calculate both BMIs
  BMIMark = massMarks / (heightMarks **2);
  BMIJohn = massJohn / (heightJohn * heightJohn);
 console.log(BMIMark,BMIJohn);

 if(BMIMark > BMIJohn) {
     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
 }
 else
 {
     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
 }
