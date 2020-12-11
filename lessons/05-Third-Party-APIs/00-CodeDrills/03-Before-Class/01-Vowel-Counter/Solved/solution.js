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
  // loop through every letter in the string.
  for (var i = 0; i < input.length; i++) {
    // compare each individual character in the string to every vowel, if it
    // matches one, increase count by 1.
    if (input[i] === "a" || input[i] === "e" 
      || input[i] === "i" || input[i] === "o" 
      || input[i] === "u") {
      count++;
    }
  }
  // most importantly return the count so that this function has meaning!
  return count;
}