// In interview problems it is still good to try to name
// your function something relevant to the problem you are trying
// to solve, even if it might be unclear what situation it is
// being used for.
// Good naming should also be used for inputs to the function,
// if there's not a good descriptive name for an input
// you may often see "num", or "arr" for numbers and arrays.
// The more readable the names the better!
function findMax(arr) {
    // feel free to make as many local variables as you need
    // but never write any variables outside of the function

    // here we create max to hold the max as we search the array
    // we set it to the first item in the array, because when we start
    // searching it's our first "max"
    var max = arr[0];
    // here we start i at 1 because we do not need to compare 0
    // and we loop to the end of the array because that's the only way
    // we can be sure we've found the max
    for (var i = 1; i < arr.length; i++) {
        // if the current new number we are looking at is greater than
        // our currently held max, we are going to update max to the
        // new value.
        if (numArr[i] > max) {
          max = numArr[i];
        }
    }
    // return max -- this is key most interview problems are looking for
    // functions to take in some input and return a specific output.
    // do this with a return statement (not a console.log)
    return max;
}