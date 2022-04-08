function playTheGame() {
    let guesses = 0
    let userPlay = confirm("do you want to play the game?")
    let userNum = willUserPlay(userPlay);                   //asks user to play, if user plays saves their number
    let numToGuess = checkUserNumber(userNum);              // checks user number validity and calls function to generate number
    while (guesses < 3){
        if (test(userNum, numToGuess)) {
            break;
        }
        userNum = getUserNumber()
        guesses++
    }
}

let willUserPlay = (response) => {
    if (response === false) {
        alert("no problem, goodbye!");        
    } else {
        return getUserNumber();
    }
}

function getUserNumber() {
     let userNumber = prompt("guess a number between 1 - 10");
     return userNumber;
}

let generateRandomNumber = () => Math.round(Math.random()*10);

function checkUserNumber(num){
    if (isNaN(num)) {
        alert(`Not a number. Goodbye`);
    } else if (num <= 0 || num > 10) {
        alert(`Not a good number. Goodbye`);
    } else {
        let computerNumber = generateRandomNumber();
        return computerNumber;
    }
}

function test(userNumber, compNumber){
    let guesses = 0;
    console.log(`number to guess: ${compNumber}`)
    if (userNumber == compNumber){
        alert(`Congrats you Win!!`);
        return true;
    } else if (userNumber > compNumber){
        alert(`Your number is too large, guess again`);
        // let newNumb = getUserNumber()                  wrote it this way according to directions, but it makes it very challenging
        // return newNumb;                                and pretty ugly to do the second part (also I makes this function do too much)
        return false
    } else {
        alert(`Your number is too small, guess again`);
        // let newNumb = getUserNumber()
        // return newNumb;
        return false
    }
}