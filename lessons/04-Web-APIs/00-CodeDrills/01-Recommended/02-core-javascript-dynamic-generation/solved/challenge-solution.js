document.getElementById("randomLetter").addEventListener("click", function() {

    // create variable called `text` and have it equal an empty string
    var randLetter = "";
    
    // create a variable called `possibleLetters` that contains all the letters of the alphabet
    var possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    // Create a new variable `randIndex` that is a random number between 0 and the last index of `possibleLetters`
    var randIndex = Math.floor(Math.random() * possibleLetters.length);
    
    // Using the `randIndex` and `possibleLetters` variables, set `randLetter` to be a random letter
    randLetter = possibleLetters.charAt(randIndex);
    
    // console log the value of `randLetter`
    console.log(randLetter);
    
    // append to the textContent the value of `randLetter` to the element with an id of `letters`
    document.getElementById("letters").textContent += randLetter;
});
