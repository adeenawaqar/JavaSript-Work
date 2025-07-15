// Day3
// Logical operator
//Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in acountry that speaks english, 
// has less than 50 million people and is not an island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.You will need to write 
// a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution 
// if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. 
// If not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily change some variables
// in order to make the condition true (unless you live in Canada :D)

const country ="Pakistan";
const language = "Urdu";
const population= 240 //in millions
const island= false;
const speaksEnglish = false
if(language == speaksEnglish && population < 50 && !island)
{
    console.log('You should live in Pakistan');
}
else
{
    console.log('Pakistan does not meet your criteria');
}
 // change the value of the variables to make the condition true
// Example:
// const country ="Canada";
// const language = "English";
// const population= 37 //in millions
// const island= false;
// const speaksEnglish = true
// if(language == speaksEnglish && population < 50 && !island)
// {
//   console.log('You should live in Canada');
// }
// else
// {
//   console.log('Canada does not meet your criteria');
// }