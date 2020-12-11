# Pre-Class Drill

## Info:

* Write the steps first, then start with what you know.


## Solution:

```js
var isPangram = function (str) {
  str = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < alphabet.length; i++) {
    if (!str.includes(alphabet[i])){
      return false;
    }
  }
  return true;
}
```