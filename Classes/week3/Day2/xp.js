// Exercise 1

let favoriteFood = "cheese";
let favoriteMeal = "Lunch";

console.log("I eat " + favoriteFood + "at every " + favoriteMeal );
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`)

// Exercise 2

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let watchedSeriesLength = myWatchedSeries.length;


// myWatchedSeries.splice(-1, 0, "and") // if wanted to make dynamic (challenging because need to find a solution to not make "and" part of the list)
// let watchedSeriesSentance = myWatchedSeries.toString()

let watchedSeriesSentance = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;

console.log(`I watched ${watchedSeriesLength + 1} series: ${watchedSeriesSentance}`)

myWatchedSeries.splice(-1, 1, "Friends") 


// Exercise 3

let tempCelcius = 14;

let tempFahrenheit = (tempCelcius/5)*9+32;

console.log(`${tempCelcius} is ${tempFahrenheit}`)

/* Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
 */