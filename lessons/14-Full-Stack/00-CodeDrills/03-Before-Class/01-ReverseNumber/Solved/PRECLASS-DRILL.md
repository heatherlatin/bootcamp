# Pre-class Drill

## Solutions:

```js
var reverseDigit = function (num){
  var newNum = '';
  var numStr = num.toString();
  for (var i = numStr.length - 1 ; i >= 0; i--){
    newNum += numStr[i];
  }

  return parseInt(newNum);
}
```

```js
var reverseDigit = function (num){
  var newNum = 0;
  var lastDigit;
  while (num > 0){
    lastDigit = num % 10;
    newNum = (newNum * 10) + lastDigit;
    num = parseInt(num / 10);
  }

  return newNum;
}
```