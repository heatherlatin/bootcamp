# Pre-class Drill

## Solution: 

```js

var deduper = function (numArr){
  var newArr = [];
  for (var i = 0; i < numArr.length; i++){
    if(!newArr.includes(numArr[i])){
      newArr.push(numArr[i]);
    }
  }
  return newArr;
}

```

* Take note of how helpful array methods like `.includes()` can be. 

* Here's a good article on array methods: `https://www.w3schools.com/jsref/jsref_obj_array.asp` 

* It is good to practice using these array methods. 