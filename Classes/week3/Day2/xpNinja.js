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

// Exercise 3

let userPhrase = prompt("Write a sentance with 'Nemo' in it");

let indexNemo = userPhrase.indexOf("Nemo");

if (indexNemo == -1) {
    alert("'Nemo' is not in your phrase");
} else {
    alert(`'Nemo' is found at index ${indexNemo}`);
}

// Exercise 4

let userNumber = prompt("please enter a number");

if (userNumber <= 2) {
    alert("boom");
} else {
    let returnMessage = "b"; 
    for (let i = 0; i < userNumber; i++){
        returnMessage = returnMessage + "o"
    } 
    returnMessage = returnMessage + "m";

    if (userNumber % 2 == 0){
        returnMessage = returnMessage + "!";
    }
    if (userNumber % 5 == 0){
        returnMessage = returnMessage.toUpperCase();
    }
    alert(returnMessage)
}