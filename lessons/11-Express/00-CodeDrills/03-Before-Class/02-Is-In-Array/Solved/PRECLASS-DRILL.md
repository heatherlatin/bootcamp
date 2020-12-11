# Pre-class Drill

## Solution:

```js
var includes = function(arr, elem){
  for (var i = 0; i < arr.length; i++){
    if(elem === arr[i]){
      return true;
    }
  }
  
  return false;
}
```

* It's also good to take some time to look at the `.includes()` array method.
 
* Knowing different array methods can help on any interview problem and you should try to familiarize yourselves with as many as possible.  `https://www.w3schools.com/jsref/jsref_obj_array.asp`