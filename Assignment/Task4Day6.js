//             LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time 
//    using a while loop (call the array 'percentages3')

// 2. Reflect on what solution you like better for this task: the for loop or the while loop?

const population= [6, 240, 84 ,1141];
function percentageOfWorld1(population)
{
    return (population / 7900)* 100;
}
const percentages3= [];

let i=0;
while(i<population.length)
{
    const percentage = percentageOfWorld1(population[i]);
    percentages3.push(percentage);
    i++;
}
console.log("percentage3 from while loop:")
for (let j = 0; j < percentages3.length; j++)
{
  console.log(percentages3[j].toFixed(2));
}