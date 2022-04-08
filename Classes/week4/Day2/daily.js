let userWords = prompt("Please enter some words seperated by a comma");

let wordsArray = userWords.split(","); //puts words into array

let wordsLength = wordsArray.map(x => x.length); // gets string lengths

function findlongestStringLength(wordLengthList) {
    let mostCharacters = 0;
    for (let i in wordLengthList) {
        if (wordLengthList[i] > mostCharacters){
            mostCharacters = wordLengthList[i];
        }
    }
    return mostCharacters;
}

let width = findlongestStringLength(wordsLength) + 4;

function printTopBottomFrame(longestStringLength){
    let frame = "*";
    for (let i = 0; i < longestStringLength; i++){
        frame = frame + " *";
    }
    console.log(frame);
}

function printMessage(words, width){
    printTopBottomFrame(findlongestStringLength(wordsLength))
    for (let i=0; i < words.length; i++) {
        let line = "* ";
        line = line + words[i];
        for (let j= line.length; j < width; j++){
            line = line + " ";
        }
        line = line + "*"
        console.log(line);
    }
    printTopBottomFrame(findlongestStringLength(wordsLength))
}

printMessage(wordsArray, width);