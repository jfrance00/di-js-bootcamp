// Exercise 1

// 5 >= 1 true 
//0 === 1 false
// 4 <= 1 true
// 1 != 1 false
// "A" > "B" false
// "B" < "C" true
// "a" > "A" true
// "b" < "A" false
// true === false false
// true != true false


// Exercise 2

let userNumbers = prompt('Please enter some numbers seperated by commas');

let numberArray = userNumbers.split(",").map(Number)
 
const sum = numberArray.reduce((partialSum, a) => partialSum + a, 0);

console.log(sum);