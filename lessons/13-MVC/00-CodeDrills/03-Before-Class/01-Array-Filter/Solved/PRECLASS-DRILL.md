# Pre-class Drill

## Solution:

```js
var filter = function(arr, cb){
  var newArr = [];

  for (var i = 0; i < arr.length; i++){
    var cbOutput = cb(arr[i]);
    if(cbOutput){
      newArr.push(arr[i]);
    }
  }
  
  return newArr;
}
```

* We just wrote code similar to the `.filter()` array method.  Filter is another example of a `predicate function`.


* Knowing array methods can be very helpful in simplifying code.  Take a look at what methods exist:  `https://www.w3schools.com/jsref/jsref_obj_array.asp`
