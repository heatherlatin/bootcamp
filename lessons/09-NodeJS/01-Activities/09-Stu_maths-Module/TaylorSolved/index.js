var maths = require("./maths-big-obj.js");

var operator = process.argv[2];
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);

// switch
var result;
switch (operator) {
    case "add":
    case "+":
    case "addition":
        result = maths.add(num1, num2);
        break;
    case "subtract":
        result = maths.subtract(num1, num2);
        break;
    case "divide":
        result = maths.divide(num1, num2);
        break;
    case "multiply":
        result = maths.multiply(num1, num2);
        break;
    default:
        result = "incorrect operator, must be add, subtract, divide, or multiply";
        break;
}

console.log(result);

// Possible shorter way of doing it:


if (maths[operator]) {
    console.log(maths[operator](num1, num2));
} else {
    console.log("incorrect operator, must be add, subtract, divide, or multiply");
}
