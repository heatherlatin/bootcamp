// In interview problems it is still good to try to name
// your function something relevant to the problem you are trying
// to solve, even if it might be unclear what situation it is
// being used for.
// Good naming should also be used for inputs to the function,
// if there's not a good descriptive name for an input
// you may often see "num", or "arr" for numbers and arrays.
// The more readable the names the better!
var isPalindrome = function (str) {
  // loop through the string one character at a time.
  // (we only need to go halfway)
  for (var i = 0; i < str.length / 2; i++) {
    // compare each character in the string to it's
    // opposite the same distance from the end
    // (last character in the string is at index length - 1)
    if (str[i] !== str[str.length - (i + 1)]) {
      // if a single character doesn't match, immediately return
      // false which will exit the function
      return false;
    }
  }
  // if it hasn't exited the function and made it through the entire
  // loop, that means that every single character was a match and 
  // we therefore have it be true!
  return true;
}