// Exercise 1

let array1 = [1, 5, 6, 3, 75, 4];

let arraySum = (arr) => array1.reduce((previous, current) => previous + current);
console.log(arraySum());


// Exercise 2

let itemsArray = ["carrot", "pear", "pear", "apple", "squash", "banana", "apple"];
let singleArray = [];
let repeatArray = [];
// let singleItems = itemsArray.map(element => newArray.includes(element) ? removeElement(element) : newArray.push(element));

function sortArray(){
    for (let i = 0; i < itemsArray.length; i++){
        console.log(`loop iteration ${i}`);
        let checkItems = singleArray.includes(itemsArray[i]) ? repeatArray.push(itemsArray[i]) : singleArray.push(itemsArray[i])
    }
}

function removeRepeats(){
    newArray = singleArray.filter(function(value){ 
        return !repeatArray.includes(value);
    });
    return newArray;
}


sortArray();
console.log(removeRepeats());


