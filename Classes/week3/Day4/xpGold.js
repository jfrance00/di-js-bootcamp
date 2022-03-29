// Exercise 1

let language = prompt("what language do you speak");

language = language.toLowerCase();

switch (language) {
    case "french":
        console.log("Bonjour");
        break;
    case "english":
        console.log("Hello");
        break;
    case "hebrew":
        console.log("Shalom");
        break;
    default:
        console.log("01110011 01101111 01110010 01110010 01111001");
}


// Exercise 2

let grade = Number(prompt("What is your grade?"));
console.log(grade)
 
if (grade > 90) {
    console.log("Congrats you got an A");
} else if (90 >= grade && grade > 80) {
    console.log("You got a B");
} else if (80 > grade && grade > 70) { 
    console.log("you got a C");
} else if (70 > grade) {
    console.log("you got a D");
}

// Exercise 3

let verb = prompt("please enter a verb")

if (verb.length > 3 && verb.slice(verb.length - 3) !== "ing") {
    console.log(verb + "ing")
} else if (verb.length > 3 && verb.slice(verb.length - 3) === "ing") {
    console.log(verb + "ly")
} else {
    console.log(verb)
}

