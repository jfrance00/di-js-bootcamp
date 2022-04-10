// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: add a new class to each planet).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupitor", "Saturn", "Neptune", "Pluto?"]

let listPlanetsArr = document.getElementsByClassName("listPlanets");
let displayPlanets =listPlanetsArr[0];

for (let i = 0; i < planets.length; i++){
    let div = document.createElement("div");
    div.className = "planet";
    displayPlanets.appendChild(div);


    var colors = ['#ff0000', '#00ff00', '#0000ff'];                         // I know it said add a class to change the background
    var random_color = colors[Math.floor(Math.random() * colors.length)];   // color but that doesn't make any sense if every planet 
    div.style.backgroundColor = random_color;                               // needs to be a different color so I generated a different color for each planet


    // displayPlanets.appendChild(div);

}