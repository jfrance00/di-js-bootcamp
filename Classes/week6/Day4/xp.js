//  Exercise 1

let addNums = (a, b) => a + b;

// Exercise 2

function thisIsAFunction(){                      // function declaration, will be hoisted
    alert(`this is a function`);
}

thisIsAFunction();

let alsoAFunction = function () {                  // function expression, will not be hoisted
    alert(`this is also a function but different`)
 }

 // the first function will be hoisted to the top of the code, so it can be called before the declaration. The second function will not

 let oneLiner = () => `jokes hahahahaha`;

 oneLiner();


 // Exercise 3

 (function (numChildren, partner, location, job) {
    let line = document.createElement("p");
    let content = document.createTextNode(`You will be a ${job} in ${location}, and married to ${partner} with ${numChildren} kids`);
 }(3, "Amit", "Kiryat Shomna", "developer"));

 
 // Exercise 4

(function (userName){
    let spanClass = document.getElementsByClassName("navbar-brand");
    let spanTarget = spanClass[0];
    let newDiv = document.createElement("div");
    let userNameP = document.createElement("p");
    let userNameText = document.createTextNode(userName);
    userNameP.appendChild(userNameText)
    newDiv.appendChild(userNameP);

  
    let profPic = document.createElement("img");
    profPic.setAttribute("src", "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg");
    newDiv.appendChild(profPic);
    console.log(newDiv);
    spanTarget.appendChild(newDiv);

}("Julie"));

// Exercise 5


function makeJuice(size){

    let ingredients = [];
    function addIngredients(){
        let ingredientList = "";
        ingredients = prompt("Please add three ingredients separated by commas").split(",");
        console.log(ingredients);
        let div = document.getElementById("main-content");
        let content = document.createElement("h2");
        let contentText = document.createTextNode(`The client wants a ${size} juice containing`);
        function createIngredientsList(item){
            ingredientList = item + ", " + ingredientList;
            return ingredientList;
        }
        ingredients.forEach(element => createIngredientsList(element));
        ingredientList = ingredientList.slice(0,-2);
        let ingredientText = document.createTextNode(ingredientList);

        
        
        content.appendChild(contentText);
        content.appendChild(ingredientText);
        content.appendChild(ingredientText);
        div.appendChild(content);
    }
    return addIngredients();
}

makeJuice("small");