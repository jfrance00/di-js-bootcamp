// Exercise 1

let x = 5;
let y = 2;

if (x > y) {
    alert("x is the larger number");
} else {
    alert("y is the larger number");
}


// Exercise 2

let newDog = "chihuahua";

alert(newDog.length);
 console.log(newDog.toUpperCase());
 console.log(newDog.toLowerCase());

 if (newDog == "chihuahua") {
    alert("I love Chihuahuas, it’s my favorite dog breed");
 } else {
     alert("I dont care, I prefer cats");
 }

// Exercise 3

let num = prompt("Enter a number");

if (num % 2 == 0) {
    console.log("Your number is even");
} else {
    console.log("Your number is odd");
}

// Exercise 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length == 0) {
    console.log("no one is online");
} else if (users.length == 1) {
    console.log(`${users[0]} is online`);
} else if (users.length == 2) {
    console.log(`${users[0]} and ${users[1]} are online`);
} else {
    let otherUsers = users.length - 2;
    console.log(`${users[0]}, ${users[1]} and ${otherUsers} are online`);
}