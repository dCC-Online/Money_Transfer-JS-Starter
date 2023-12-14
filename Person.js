class Person {
  constructor(name, cash) {
    // TODO 2: Assign the value of the 'name' parameter to the 'name' member variable (this.name). One line.
    // TODO 3: Instantiate a new 'Wallet' object, passing the 'cash' parameter into its constructor. Assign this new Wallet to the 'wallet' member variable (this.wallet). One line.
  }

  displayInfo() {
    // TODO 4: Use string interpolation in a console.log to display the user's name and also the amount of money in their wallet (using dot notation). One line.
  }

  acceptMoney(amount) {
    // TODO 7: Use an assignment operator to increase the amount of money in the person's wallet by the value of the 'amount' parameter. One line.
  }

  transferMoney(receiver, amountToTransfer) {
    // TODO 8: Check if the amount to transfer is less than or equal to(<=) the giver's wallet amount.
    // On successful transfer, subtract from the giver's funds, add to the receiver funds, and alert() the transaction details.
    // If the transfer amount exceeds the wallet balance, alert() a failure message.

  }
}
