let sentence = "the food is not that bad";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");


console.log(wordBad, wordNot)

if (wordNot < wordBad) {
    let sectionToChange = sentence.slice(wordNot, wordBad + 3);
    let newSentence = sentence.replace(sectionToChange, "good");
    console.log(newSentence);
} else {
    console.log(sentence);
}