# JavaScript OOP Money Transfer Lab Starter Code

## Overview
In this lab, you will simulate a simple money transfer system using Object-Oriented Programming in JavaScript. You will work with two classes, `Person` and `Wallet`, to create a system where individuals can transfer money between their wallets.

## Starter Files
Your project includes the following files:
- `index.js`: This is your main file where you will instantiate objects and simulate transactions.
- `Person.js`: Defines the `Person` class.
- `Wallet.js`: Defines the `Wallet` class.

## Tasks
Your goal is to complete the TODOs in each file. Follow the instructions provided in the comments.

### Wallet.js
- **TODO 1:** Assign the `money` parameter to the `money` member variable in the `Wallet` constructor.

### Person.js
- **TODO 2:** Assign the `name` parameter to `this.name` in the `Person` constructor.
- **TODO 3:** Instantiate a new `Wallet` and assign it to `this.wallet`.
- **TODO 4:** Implement `displayInfo` to show the person's name and wallet balance.
- **TODO 7:** Implement `acceptMoney` to add funds to the person's wallet.
- **TODO 8:** Implement `transferMoney` to transfer funds from one person to another and alert the transaction status.

### index.js
- **TODO 5:** Create two `Person` objects with unique names and cash amounts.
- **TODO 6:** Call `displayInfo` for each `Person` object to display their initial money amount.
- **TODO 9:** Execute a money transfer from one `Person` to another.
- **TODO 10:** Call `displayInfo` again for each `Person` to show updated balances.

## Testing Your Application
After completing each TODO, test your application by running it in a web browser console. Make sure to test after completing TODOs 5 and 6 to ensure your initial setup works correctly.

## Completion
Upon finishing all TODOs, you should have a functioning money transfer simulation. The console should display a series of messages showing the initial funds of each person, the transaction details, and the updated funds after the transfer.
