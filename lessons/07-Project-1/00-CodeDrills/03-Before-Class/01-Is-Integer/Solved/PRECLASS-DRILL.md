### Pre-Class Drill solutions:

```js
var isInt = function (input) {
  return parseInt(input) === input;
}

```

```js
var isInt = function (input) {
  return Math.floor(input) === input;
}
```

* The second solution is preferable. The first one actually won't work for very large numbers because of the way `parseInt` works under the hood.

* This isn't important for you to fully understand at this point, but it's a great opportunity for you to see that learning the language you work in deeply can help them write less error-prone code.

* [more info on using parseInt on numbers](https://www.gideonpyzer.com/blog/use-parseint-for-strings-not-for-numbers/)