class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  get balance() {
    let balance = 0;

    for (let i = 0; i < this.transactions.length; i++) {
      balance += this.transactions[i].value;
    }

    return balance;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  isAllowed() {
    // this.value < 0 indicates a withdrawal.
    if (this.value < 0 && this.account.balance < this.amount) {
      return false; //slightly diff from initial approach
    } else {
      return true; //slightly diff from OG  but same idea
    }
  }


  commit() {
    // guard clause
    if (!this.isAllowed()) {
      return false;
    }

    this.time = new Date();
    this.account.addTransaction(this); //if false, transaction doesn't get pushed to array above.
    // this.valueAmount = this.value; // --> To calculate balance with my initital approach, otherwise not needed 
    return true; // my sol'n didn't included this
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('snow-patrol');

// t1 = new Withdrawal(50.25, myAccount);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99, myAccount);
// t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', t2.balance);

t3 = new Deposit(120.00, myAccount);
t3.commit();
t4 = new Deposit(80.00, myAccount);
t4.commit();
t5 = new Withdrawal(190.00, myAccount);
t5.commit();
// console.log('Transaction 3:', t3);
console.log('Account Summary:', myAccount);
// console.log('Transaction Summary:', t5);
console.log('Transaction Summary:', t5.value);
console.log('Balance ->', myAccount.balance);
