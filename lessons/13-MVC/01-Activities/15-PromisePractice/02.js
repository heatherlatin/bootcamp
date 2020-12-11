// promises are chainable
// this means what is returned
// from a .then or a .catch will 
// result in a success on the next chain
// and the data returned will be the input
// to the next success function.
// it also means anything that is thrown
// from a .then or a .catch will
// result in a rejection on the next chain
// and the data thrown will be the input
// to the next error function.

// e.g.:
const success = new Promise((resolve) => {
    setTimeout(() => resolve("this is a success"), 100);
});

const failure = success.then((results) => {
    console.log("Here were the results from the success promise: ", results);
    throw new Error("This is now going to create a failure in the next chain.");
});

const backToSuccess = failure.catch(err => {
    console.log("Here is the error from the last promise: ", err);
    return "This turns it back to a success in the next chain."
});

backToSuccess.then(res => {
    console.log("Here were the results from the backToSuccess promise: ", res);
});