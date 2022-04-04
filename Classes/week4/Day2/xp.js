// Exercise 1 

function infoAboutMe() {
    console.log("My name is Julie I am 32 years old and I like to climb");
}

infoAboutMe()

function infoAboutPerson( personName, personAge, personFavoriteColor){
    console.log(`Your name is ${personName} and you are ${personAge} years old. You're favorite color is ${personFavoriteColor}`);
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


// Exercise 2

function calculateTip(){
    let billTotal = parseInt(prompt("how much was the bill?"));
    let tip = 0;
    if (billTotal < 50) {
        tip = billTotal * 0.2;
    } else if (billTotal > 200) {
        tip = billTotal * 0.1;
    } else {
        tip = billTotal * 0.15;
    }
    let billWithTip = billTotal + tip;
    console.log(`The total is: ` + billWithTip);
}

// Exercise 3

function isDivisable(){
    let numbersDivisable = []
    let sum = 0
    for (let i = 0; i < 500; i++){
        if (i % 23 === 0){
            numbersDivisable.push(i);
        }
    }
    console.log(numbersDivisable);
    for (let i in numbersDivisable){
        sum = sum + numbersDivisable[i];
    }
    console.log(`The numbers divisible by 23 are ${numbersDivisable}`)
    console.log(`The sum of those numbers is ${sum}`)
}

// Exercise 4

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let bill = 0;
    for (let i in shoppingList){
        console.log(shoppingList[i]);
        if (stock[shoppingList[i]] > 0) {
            bill = bill + prices[shoppingList[i]]
            stock[shoppingList[i]] = stock[shoppingList[i]] - 1;
        }
    }
}


