class Account {
  constructor(username) {
    this.username = username;
    // this.balance = 0;
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  get balance() {
    let balance = 0;

    for (let i = 0; i < this.transactions.length; i++) {
      balance += this.transactions[i].amount;
    }

    return balance;

    // couldn't get reduce to work :(
    // return this.transactions[amount]reduce((accumulator, current) => {
    //   return accumulator +  current;
    // });
  }


}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  // isAllowed(tf) {
  //   if (tf = true) {
  //     this.time = new Date();
  //     this.account.addTransaction(this);
  //   } else {
  //     return 'Transaction not permitted! Check balance.'
  //   }
  // }

  isAllowed() {
    if (this.value < 0 && this.account.balance >= this.amount) {
      return true;
    } else if (this.value > 0){
      return true;
    }else {
      return false;
    }
  }


  commit() {
    // this.isAllowed();

    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this);
    } else {
      return 'Transaction not permitted!'
    }
  }
}




class Withdrawal extends Transaction {

  // constructor() {
  //   this.isAllowed();
  // }

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
t4 = new Withdrawal(1900.00, myAccount);
t4.commit();
// console.log('Transaction 3:', t3);
console.log('Account Summary:', myAccount);
console.log('Transaction Summary:', t4);
console.log('Balance ->', myAccount.balance);
