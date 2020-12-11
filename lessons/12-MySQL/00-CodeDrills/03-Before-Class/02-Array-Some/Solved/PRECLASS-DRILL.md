# Pre-class Drill

## Solution: 

```js
const some = function(arr, cb){
  const isTrue = false;

  for (let i = 0; i < arr.length; i++){
    const cbOutput = cb(arr[i]);
    if(cbOutput){
      isTrue = cbOutput;
    }
  }
  
  return isTrue;
}
```

* We just programmed a similar function to `.some()` array method.  This is a predicate function.

Knowing array methods can be very helpful in simplifying code.  Take a look at what methods exist:  `https://www.w3schools.com/jsref/jsref_obj_array.asp`
 