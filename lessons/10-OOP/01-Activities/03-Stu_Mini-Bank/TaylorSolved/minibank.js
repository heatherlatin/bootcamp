function MiniBank() {
    this.statement = [0];
    this.balance = 0;
    this.updateStatement = (value) => {
        this.statement.push(value)
    }
    this.deposit = (value) => {
        if (value <= 0) {
            return console.log("Deposit must be larger than 0.");
        }
        this.updateStatement(value);
        this.balance += value;
    }
    this.withdraw = (value) => {
        if (value <= 0) {
            return console.log("Withdraw must be larger than 0.");
        }
        if (value > this.balance) {
            return console.log("Sorry, you don't have that much money.");
        }
        this.updateStatement(-value);
        this.balance -= value;
    }
    this.printStatement = () => {
        this.statement.forEach(transaction => console.log(transaction));
    }
    this.printBalance = () => {
        console.log(this.balance);
    }
}

const miniBank = new MiniBank();
miniBank.printBalance();
miniBank.deposit(100);
miniBank.printBalance();
miniBank.withdraw(101);
miniBank.withdraw(50);
miniBank.printBalance();
miniBank.printStatement();

const taylorBank = new MiniBank();
taylorBank.printBalance();
taylorBank.deposit(10);
taylorBank.printBalance();
taylorBank.withdraw(11);
taylorBank.withdraw(5);
taylorBank.printBalance();
taylorBank.printStatement();