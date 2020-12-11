console.log(process.argv);

console.log(process.argv[2] === process.argv[3]);

if (process.argv[2] === process.argv[3]) {
    console.log("Both inputs are equal to " + process.argv[2]);
} else {
    console.log("The inputs are different: " + process.argv[2] + ", " + process.argv[3]);
}