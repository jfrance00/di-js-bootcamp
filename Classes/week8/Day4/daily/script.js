// MODEL

const api_key = "OkaF8CyKU7KyMCcqGnZBWGe2o0mkC3sy";

// fetch(`https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${api_key}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => {
//         console.log(error);
//     });

let hrx = new XMLHttpRequest();

hrx.onreadystatechange = function() {                           // what is best practice, to include this function in the eventListener or in model since it is getting data
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       let gifURL = JSON.parse(hrx.response).data[0].embed_url;   
       console.log(gifURL);
       console.log(JSON.parse(hrx.response).data[0])
       addGIF(gifURL);
    } 
};



// VIEW

const imageDiv = document.getElementById("gifs");

function addGIF(url){
    let image = document.createElement("img");
    image.setAttribute("src", url);
    imageDiv.appendChild(image);
}


// CONTROL

const form = document.getElementById("searchGIF");
const userSearch = document.getElementById("search");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(userSearch.value)
     
    hrx.open("GET", `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${userSearch.value}&limit=1`, true);
    hrx.send();


    // e.target.map()
    // console.log(e.target);
})



// https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${api_key}


