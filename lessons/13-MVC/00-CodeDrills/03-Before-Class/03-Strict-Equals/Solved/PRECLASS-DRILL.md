# Pre-class Drill

## Solution:

  * Double equals coerces one type to another to try to find equality. Triple equals does not coerce values and is looking for strict equality (equality of type and value).

  * Triple equals is generally considered safer and many offices won't allow the use of double equals. 

Some example problem code: 

```
[] == 0 //true
```

This behavior is unexpected and unexpected behavior leads to bugs. 

Another example, using double equals to check for expected input, you may find that `'2' == 2` but `'2' + 2` will not equal `2 + 2` so you may run into unexpected values later in your code.  