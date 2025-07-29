// 🌐 GLOBAL SCOPE
let firstName = "Adeena"; // Global variable

let calcAge = function (birthYear) {
  // 📌 FUNCTION SCOPE of calcAge
  const age = 2025 - birthYear;

  let printAge = function () {
    // 📌 FUNCTION SCOPE of printAge (nested inside calcAge)

    // ✅ Using global variable `firstName`
    // ✅ Using function scoped variable `age` and parameter `birthYear`
    let output = `${firstName}, you are ${age} years old and you were born in ${birthYear}`;
    console.log(output);

    // 🔒 BLOCK SCOPE starts here (inside `if`)
    if (birthYear >= 2005 && birthYear <= 2024) {
      // ⚠️ `var` is function-scoped, NOT block-scoped
      var millennial = "true"; // Still accessible outside this block

      // 🔒 Block-scoped variables:
      let firstName = "sadia"; // Only accessible inside this block
      const str = `Oh! You're a millennial, ${firstName}`; // Block scoped
      console.log(str); // ✅ Works fine here

      // 🔒 Block-scoped function (still only accessible in block)
      const add = function (a, b) {
        return a + b;
      };

      // 🔁 Reassigning outer function-scoped variable
      output = "New output!"; // Changes `output` defined in printAge function
      console.log(add(3, 4)); // ✅ Works here
    }
    // 🔚 END of BLOCK SCOPE

    console.log(millennial); // ✅ Accessible here due to `var` (function scoped)

    console.log(output); // ✅ Accessible and updated to "New output!"

    // console.log(str);      // ❌ Error if uncommented (block scoped)
  };

  printAge(); // ✅ Function call inside `calcAge` function

  return age; // ✅ Returning age to global scope if needed
};

// 🌐 GLOBAL SCOPE
calcAge(2005); // ✅ Function call from global scope
