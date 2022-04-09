// take user input (num)
// "99 bottles" song count down increasing by one 


let startingPoint = parseInt(prompt("please enter a number less that 100"));

if (isNaN(startingPoint)){
    console.log(`not a number`);
    startingPoint = parseInt(`please enter a NUMBER less that 100`)
} else {
    console.log(`is a number`);
}

let bottlesOfBeer = startingPoint;


for (let i = 1; i < 100; i++){
    if (bottlesOfBeer > 0){
        if (i === 1){
            console.log(`${bottlesOfBeer} bottles of beer on the wall`)
            console.log(`${bottlesOfBeer} bottles of beer on the wall`)
            console.log(`Take ${i} down, pass it around`)
            bottlesOfBeer = bottlesOfBeer - i;
        } else {
            console.log(`${bottlesOfBeer} bottles of beer on the wall`)
            console.log(`${bottlesOfBeer} bottles of beer on the wall`)
            console.log(`Take ${i} down, pass them around`)
            bottlesOfBeer = bottlesOfBeer - i;
        }
        if (bottlesOfBeer < 0) {
            console.log(`${bottlesOfBeer} on the wall`)
        }
    } else {
        break;
    }
}