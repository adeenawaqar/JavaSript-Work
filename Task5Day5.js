//   day5                      LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, 
//    similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// 2.  Call the 'describe' method

// 3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object,
//    called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. 
//    Use the ternary operator to set the property.

const myCountry =  
{
   country : 'Pakistan',
   capital : 'Islamabad',
   language : 'Urdu',
   populations: 240,
   neighbours: ['Afghanistan' , 'Iran' , 'India' , 'Chaina'],

};
myCountry.describe=function()
{
    console.log(`${this.country} is a country located in ${this.capital}. The official language is ${this.language} and the population is ${this.populations}.`);
};
myCountry.describe();

myCountry.checkIsland=function()
{
    this.isIsland= this.neighbours.length ===0 ? true:false;
}
myCountry.checkIsland();
console.log(myCountry.isIsland);