function runLoop(n) {
    for(var i = 0; i < n; i++) {
        console.log(Math.floor(Math.random() * (i + 1)));
    }
}

console.log("Preparing to run loop...");
runLoop(100);
console.log("Ending looping.");