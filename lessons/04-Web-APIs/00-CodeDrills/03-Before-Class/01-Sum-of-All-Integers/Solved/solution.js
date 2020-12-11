// In interview problems it is still good to try to name
// your function something relevant to the problem you are trying
// to solve, even if it might be unclear what situation it is
// being used for.
// Good naming should also be used for inputs to the function,
// if there's not a good descriptive name for an input
// you may often see "num", or "arr" for numbers and arrays.
// The more readable the names the better!
function sumOfAllIntegers(num) {
    // feel free to make as many local variables as you need
    // but never write any variables outside of the function

    // here we create sum to hold the sum as we build it from
    // all the integers less than or equal to num.
    var sum = 0;
    // here we start i at 1 and if num is less than 1 the loop is skipped
    // and we just return 0
    for (var i = 1; i <= num; i++) {
        // increase what is held in sum by the value of i
        sum += i;
    }
    // return sum -- this is key most interview problems are looking for
    // functions to take in some input and return a specific output.
    // do this with a return statement (not a console.log)
    return sum;
}