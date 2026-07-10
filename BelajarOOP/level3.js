class Member {
    constructor(memberName, accountNumber, minimumBalance, balance) {
        this.memberName = memberName;
        this.accountNumber = accountNumber;
        this.minimumBalance = minimumBalance;
        this.balance = balance;
        this.transactions = [];
    }
}

member1 = new Member("Suroto", "9078563412", 120000, 30000000);
console.log(member1)