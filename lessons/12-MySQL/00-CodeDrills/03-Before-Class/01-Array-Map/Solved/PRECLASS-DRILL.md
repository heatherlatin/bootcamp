# Pre-class Drill

## Solution:

```js
const map = function(arr, cb){
  const newArr = [];

  for (let i = 0; i < arr.length; i++){
    const newNum = cb(arr[i]);
    newArr.push(newNum);
  }
  
  return newArr;
}
```

* This function can be used to accomplish a similar thing that array.map() can.

* It would be good practicing when you can use array.map()
 