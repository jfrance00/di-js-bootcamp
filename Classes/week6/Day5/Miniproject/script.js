// Data/Model
let quotes = [
    {
        index: 0,
        author: "Voltaire",
        quote: "The most couragous decision that you can make each day is to be in a good mood",
        likes: 0,
    },
    {
        index: 1,
        author: "DaVinci",
        quote: "Nothing can be loved or hated unless it is understood first",
        likes: 0,

    },
    {
        index: 2, 
        author: "Gloria Steiner",
        quote: "The truth will set you free, but first it will piss you off", 
        likes: 0,
    },
    {
        index: 3, 
        author: "unknown", 
        quote: "You can tell you have created god in your image when he hates all the same people you do",
        likes: 0,
    },
    {
        index: 4, 
        author: "Abraham Lincoln",
        quote: "Don't believe everything you read on the internet",
        likes: 0,
    }
];

// Globals
let quotesHistory = [{}];
let displayIndex = 0;                              // Tracks what element in quotesHistory being displayed
let previousButton = document.getElementById("previous-button");
let addButton = document.getElementById("add-quote");
let nextButton =document.getElementById("next-button");
let quoteContent = document.getElementById("quote-content");
let form = document.getElementsByName("form")[0];



// View 

function displayQuote(data){
    console.log("displayQuote called");
    quoteContent.innerHTML = "";
    let quote =  document.createTextNode(`${data.quote} - ${data.author}`);
    quoteContent.appendChild(quote);
    console.log(`index being displayed is ${displayIndex}`);
}


//Controller

previousButton.addEventListener("click", displayPreviousQuote);
addButton.addEventListener("submit", (e) => addQuote(e))
//     addQuote(e);
// });
//    e.preventDefault;
//    console.log(`button clicked`);

//     const formData = new FormData(e.target);
//     console.log(formData);
//     // Now you can use formData.get('foo'), for example.
//     // Don't forget e.preventDefault() if you want to stop normal form .submission
//});
nextButton.addEventListener("click", showNextQuote);

function displayPreviousQuote(){
    console.log(`displayPreviousQuote called`)
    displayIndex = displayIndex - 1; 
    console.log(`will show previous quote at index ${displayIndex} after change`);
    displayQuote(quotesHistory[displayIndex]);

}

function addQuote(e) {
    e.preventDefault;
    console.log(`addQuote called`);
}

function showNextQuote(){
    console.log(`showNextQuote called`);
    console.log(`displayIndex: ${displayIndex}, quotesHistory length: ${quotesHistory.length}`)
    if (displayIndex + 1 < quotesHistory.length){
        displayIndex = displayIndex + 1;
        displayQuote(quotesHistory[displayIndex]);
    } else {
        pullQuote();
    }
};



// Program

function assignQuote(){
    console.log("assignQuote called");
    let randomNum = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[randomNum];
    return randomQuote;
}

function checkRepeat(data){
    console.log(`checkRepeat called`);
        if (data != quotesHistory.at(-1)){
            console.log(`quotes different`)
            quotesHistory.push(data);           // since there is no reason to change/manipulate this data I am okay pushing the pointer and not making a copy of the data
            displayIndex = displayIndex + 1;    // Only will increment display index if quote added to history 
            console.log(data);
            return data
        } else {
            console.log(`quotes the same`);    // TO DO: figure out why doesn't display after quotes are the same (need to double click)
            let newQuote = assignQuote();
            checkRepeat(newQuote);
        }
    };

    function pullQuote(){              // OnClick function => triggers the program
        console.log(`pullQuoteCalled`);
        initialQuoteData = assignQuote();
        quoteData = checkRepeat(initialQuoteData);          // Will pull new quote until quote differs from last, stops with new value in quotes history
        displayQuote(quoteData); 
    }

