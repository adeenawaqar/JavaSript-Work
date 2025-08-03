//  Day 12 lecture.
//  premetive vs object ( premetive vs Refrences type)....

// premitive value example...
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// Refrence value example...
// it point same object in memory...
const me = {
  name: "Adeena",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me:", me);

// premetive type...
let lastName = "William";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Refrence type...
const jessica = {
  firstName: "Jessica",
  lastName: "William",
  age: 27,
};
const MarriedJessica = jessica;
MarriedJessica.lastName = "Davis";

console.log("Before Marriage:", jessica);
console.log("After Marriage:", MarriedJessica);

// copying object...
const jessica2 = {
  firstName: "Jessica",
  lastName: "William",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

console.log("Before Marriage:", jessica2);
console.log("After Marriage:", jessicaCopy);

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before Marriage:", jessica2);
console.log("After Marriage:", jessicaCopy);
