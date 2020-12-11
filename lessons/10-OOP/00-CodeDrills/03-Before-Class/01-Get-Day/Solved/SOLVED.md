# Pre-class Drill

## Solution:

```js
var getDay = function (dayNum){
  switch(dayNum){
    case 1: 
      return 'Monday';
    case 2: 
      return 'Tuesday';
    case 3: 
      return 'Wednesday';
    case 4: 
      return 'Thursday';
    case 5: 
      return 'Friday';
    case 6: 
      return 'Saturday';
    case 7: 
      return 'Sunday';
    default: 
      return undefined;
  }
}

```

* This one may have seem trivial to you but it's a great opportunity to discuss `switch` statements.

* Be sure to take a look at the `switch` syntax and how clean and readable it is compared to an if/else. 

* Switch statements are more efficient than if/else statements when you can use it and these performance advantages increase with the number of conditions. 