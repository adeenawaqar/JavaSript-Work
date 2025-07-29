// Day 11 lecture
// Scopes Types...

let firstName = "Adeena";

let calcAge = function (birthYear) {
  const age = 2025 - birthYear;

  // Inner Function (Function scope)
  let printAge = function () {
    // Creating new varibale with same name as outer scope variable.
    let output = `${firstName}, you are ${age} years old and you were born in ${birthYear}`;
    console.log(output);

    // Block scope
    if (birthYear >= 2005 && birthYear <= 2024) {
      // function scoped
      var millennial = "true";
      let firstName = "sadia";
      const str = `Oh! You're a millennial, ${firstName}`;
      console.log(str);

      const add = function (a, b) {
        return a + b;
      };

      // Reassigning outer scope.
      output = "New output!";
      console.log(add(3, 4));
    }

    // ✅ Accessible because var is function scoped
    console.log(millennial);
    console.log(output);
    // console.log(str);
  };

  printAge();
  return age;
};
// global variable
calcAge(2005);
