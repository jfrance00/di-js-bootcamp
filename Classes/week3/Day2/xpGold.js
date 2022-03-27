// Exercise 1

let sentence = ["my","favorite","color","is","blue"];

let sentenceString = sentence.join(" ");

console.log(sentenceString) 

// Exercise 2

let str1 = "mix";
let str2 = "pod";

let firstLetterString1 = str1[0];
let firstLetterString2 = str2[0];

let str1Array = str1.split("");
let str2Array = str2.split("");

str1Array.splice(0, 1, firstLetterString2);
str2Array.splice(0, 1, firstLetterString1); 

let newStr1 = str1Array.join("")
let newStr2 = str2Array.join("")

console.log(newStr1)
console.log(newStr2)

// Exercise 3

let num1 = parseInt(prompt("enter and number"));
let num2 = parseInt(prompt("enter another number"));

let sum = num1 + num2;

alert(`The sum of the number is ${sum}`);
