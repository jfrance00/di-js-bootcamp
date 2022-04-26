// exercise 1

// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

// alert will display 3

// run in the console:
q1()

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

// run in the console:
q22() // 0
q2() // changes a to 5
q22()  // 5

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

// run in the console:
q3()  // will change a to hello
q32()  //will alert hello

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}


// run in the console:
q4() // will alert test

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);


// will alert 5 then 2 --> wrong



// Exercise 2
let experiencePoints = (winBattle ? experiencePoints = 10 : experiencePoints = 1)
let winBattle = () => true

console.log(experiencePoints);


// Exercise 3

let isString = (valueToCheck) => (typeof(valueToCheck) === "string") ? console.log(true) : console.log(false)

//Exercise 4

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach(function(color, idx) {
	console.log(`#${idx + 1} choice is ${color}`);
});

let isViolet = (colors.includes("Violet")) ? console.log("yes") : console.log("no"); 

// Exercise 5


let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
let differenceInLength = (color.length - ordinal.length)  // loop only ran twice when math placed directly in formula? weird

ordinal.push(ordinal.shift());         
for (let i = 0; i < differenceInLength; i++){
    console.log(`before push: ${ordinal}`)
    console.log(`i: ${i}`)
    ordinal.push("th")
    console.log(ordinal);

}

let printMessage = (suffixArray) => color.forEach((element, index) => console.log(`${index+1}${suffixArray[index]} choice is ${element}`));
printMessage(ordinal);


// Exercise 6

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount;
const vat = 1.17;

const expenses = [10000, -350, 50, -400, -250, -15, -70, 30, -300, -20];

expensesWithTax = expenses.map(element => element * vat);
console.log(expensesWithTax);

bankAmount = expensesWithTax.reduce((previous, current) => previous + current);

alert(`your end of month bank summary (gaining taxes on income and paying taxes on expenses) is: ${bankAmount}`);



