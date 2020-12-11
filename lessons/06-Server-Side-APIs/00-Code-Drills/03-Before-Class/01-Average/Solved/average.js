var average = function (numArr) {
    var sum = 0;
    for (var i = 0; i < numArr.length; i++){
      sum += numArr[i];
    }
    return sum / numArr.length;
}

// example invocation:
console.log(average([1, 12, 5, 20]));