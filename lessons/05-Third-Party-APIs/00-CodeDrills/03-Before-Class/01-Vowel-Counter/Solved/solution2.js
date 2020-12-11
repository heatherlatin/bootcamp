// In interview problems it is still good to try to name
// your function something relevant to the problem you are trying
// to solve, even if it might be unclear what situation it is
// being used for.
// Good naming should also be used for inputs to the function,
// if there's not a good descriptive name for an input
// you may often see "num", or "arr" for numbers and arrays.
// The more readable the names the better!
var countVowels = function (str) {
    // create a variable to hold count
    var count = 0;
    // create a new string filled with lower case versions of the input string;
    // e.g. Example Sentence Like This One. => example sentence like this one.
    var input = str.toLowerCase();
    // create an array of possible vowels and use this array to help keep
    // our vowel checker if statement clean.
    var vowelArr = ["a", "e", "i", "o", "u"];
    // loop through every letter in the string.
    for (var i = 0; i < input.length; i++) {
        // if the vowel array includes the current letter,
        // increase count by 1.
        // Knowing array methods that are available can help
        // clean up your code as long as you remember what is
        // available for use.
        if (vowelArr.includes(input[i])) {
            count++;
        }
    }
    // most importantly return the count so that this function has meaning!
    return count;
}