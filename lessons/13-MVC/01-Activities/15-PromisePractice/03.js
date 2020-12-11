// if inside of a promise .then/.catch
// you return a promise it will
// pass the return from the inner promise out.

// confusing!  I know...

// e.g.:

const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("promise1's data was returned"), 100);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("promise2's data was returned"), 100);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("promise3's data was returned"), 100);
});

const whatComesBack = promise1.then(results1 => {
    return promise2.then(results2 => {
        return promise3.then(result3 => {
            return result3;
        });
    });
});

whatComesBack.then(results => {
    // What do you think this will print?
    console.log(results);
})