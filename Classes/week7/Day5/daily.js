function isAnagram(string1, string2){
    newString1 = string1.replace(/\s/g, "").toLowerCase();
    newString2 = string2.replace(/\s/g, "").toLowerCase();
    string1Array = newString1.split("");
    string2Array = newString2.split("");
    if (newString1.length != newString2.length) {
        return false;
    } else {
        string1Array.forEach(letter => {
            let containsLetter = string2Array.indexOf(letter);
            if (containsLetter === -1){
                return false;
            } else {
                string2Array.splice(containsLetter, 1);
            }
        });
    }
    if (string2Array.length === 0){
        return true;
    } else {
        return false;
    }
}

isAnagram("I am a string", "I am too");
isAnagram("Astronomer", "Moon starer");
