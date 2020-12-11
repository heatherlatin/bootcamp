# MiniBank

In this activity you will use objects to create a mini banking application.

## Instructions

Update the `MiniBank` constructor function to achieve the following:

1. Add a property `statement` that should be set to an array with one value, `0`. This array will contain all transactions made with the MiniBank objects.

2. Write an `updateStatement` method that takes in a number and pushes it to the `statement` array.

3. Write a `printStatement` method that prints each element in the in the `statement` array on its own line.

4. Write a `deposit` method that takes a value and updates the `balance` value using the `updateStatement` method.

5. Write a `withdraw` method that takes a value and updates the `balance` value using the `updateStatement` method and a negative number.

* Then, create a new `minibank` object using the `MiniBank` constructor function.

1. Print the `minibank` balance.

2. Deposit some money into the `minibank` object.

3. Print the `minibank` balance.

4. Withdraw some money from the `minibank` object.

5. Print the `minibank` balance.

## Bonus 🏆

* Add code to throw an error if the user tries to withdraw more money than they have, or try to deposit or withdraw values that aren't positive numbers.

* Add code to return a copy of the `statement` when `getStatement` is called, rather than returning the original array.
