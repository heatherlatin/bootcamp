// In interview problems it is still good to try to name
// your function something relevant to the problem you are trying
// to solve, even if it might be unclear what situation it is
// being used for.
// Good naming should also be used for inputs to the function,
// if there's not a good descriptive name for an input
// you may often see "num", or "arr" for numbers and arrays.
// The more readable the names the better!
// We can also break down the solution into other functions
// to help our code be more readable:
var reverseString = function (str) {
    // Knowledge of string and array methods can help make your
    // code more concise and you can really wow your interviewer
    // by knowsing interesting ways to solve a problem
    return str.split("").reverse().join("");
}
var isPalindrome = function (str) {
    // we now are using functions to do our work and keep our
    // code inside of our functions short and readable.
    return reverseString(str) === str;
}