# Pre-class Drill

## Solutions:

```js
var singleWord = function (str){

  var newStr = '';

  for (var i = 0; i < str.length; i++){
    if (str[i] !== ' ' ){
      newStr += str[i];
    }
  }

  return newStr.toLowerCase();
}
```

```js
var singleWord = function (str){

  var newStr = str.toLowerCase().replace(/\s/g,'')

  return newStr;
}
```

* This second function uses regular expressions which can help with finding and replacing patterns in strings.
 