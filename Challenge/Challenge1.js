// Step1   .... Data 1 ......
const massMarks1 = 78;
const heightMarks1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

 // Step2  Calculate both BMIs
const BMIMark1 = massMarks1 / heightMarks1**2;
const BMIJohn1 = massJohn1 / (heightJohn1 *heightJohn1);

// Step3  Check who has higher BMI
const markHigherBMI1 = BMIMark1 > BMIJohn1;
console.log("Data 1:")
console.log(BMIMark1, BMIJohn1, markHigherBMI1);

// Step1     ----- Data 2 -----
const massMarks2 = 95;
const heightMarks2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

// Step2     Calculate both BMIs
const BMIMark2= massMarks2 / (heightMarks2 **2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

// Step3    Check who has higher BMI
const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log("Data 2:");
console.log(BMIMark2, BMIJohn2, markHigherBMI2);
