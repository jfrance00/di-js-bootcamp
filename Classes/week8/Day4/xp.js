// Did xp using fetch because no one uses XML requests. Reviewed the material because I know I might see it is legacy code. 


const api_key = "OkaF8CyKU7KyMCcqGnZBWGe2o0mkC3sy";

console.log(`running js files`);

fetch(`https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${api_key}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.log(error);
    });