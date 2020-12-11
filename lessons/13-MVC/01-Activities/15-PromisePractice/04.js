// if you have a lot of things you want to wait for
// but they can all be working at the same time,
// you can start a lot of promises and store the promises
// in an array.  Then you can use Promise.all(arr) to 
// wait for every promise to come back

function generateLongPromise(results) {
    return new Promise(resolve => {
        setTimeout(() => resolve(results), 1000);
    })
}

// making each promise wait for the next is slow (and ugly):
generateLongPromise("slow-promise1").then(results1 => {
    console.log("slow results done: ", results1);
    generateLongPromise("slow-promise2").then(results2 => {
        console.log("slow results done: ", results2);
        generateLongPromise("slow-promise3").then(results3 => {
            console.log("slow results done: ", results3);
            generateLongPromise("slow-promise4").then(results4 => {
                console.log("slow results done: ", results4);
                generateLongPromise("slow-promise5").then(results5 => {
                    console.log("slow results done: ", results5);
                });
            });
        });
    });
});

const promise1 = generateLongPromise("fast-promise1");
const promise2 = generateLongPromise("fast-promise2");
const promise3 = generateLongPromise("fast-promise3");
const promise4 = generateLongPromise("fast-promise4");
const promise5 = generateLongPromise("fast-promise5");

const promiseArr = [promise1, promise2, promise3, promise4, promise5];

const allPromise = Promise.all(promiseArr);

allPromise.then(results => {
    console.log("fast results done: ", results);
});