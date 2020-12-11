### Pre-Class Drill

* It's important to write out the steps necessary to solve this in plain English first and then to start with what you know how to implement.

* You will likely struggle with this one. This is a tough one and it's okay if you can't solve it immediately.

* In interviews you will often be presented with problems that you don't know how to solve. It's imperative that you practice continually working towards a solution to tough problems.

* Example solutions:

```js
var findDup = function (arr) {
  for (var i = 1; i < arr.length; i++){
    for (var j = 0; j < i; j++){
      if(arr[i] === arr[j]){
        return arr[i];
            }
        }
    }
}
```

* This solution provides an even faster result because object key lookup times are often quite fast:

```js
var firstDup = function(arr){
	var dups = {};
	for (var i = 0; i < arr.length; i++) {
		var val = arr[i]
		if (dups[val]) {
			return val;
		}
		else{
			dups[val] = true;
		}
	}
}
```

* This solution does the following:

  * We create a new object and then update the value to true at the key corresponding to each integer in the input array. 

  * As we iterate through the input array, if we find that the corresponding key in the `dups` object is true, we know we have a duplicate and return the value. 

* The details of the implementation aren't super important. What is important is to understand that both solutions are correct, but that the second one is more efficient because it only loops through the values once. Nested for loops loop through all the elements one time *for each element* in the array.

* We will spend a full day at the end of the course focusing on this kind of efficiency.