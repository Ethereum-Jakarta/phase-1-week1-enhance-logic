class Transaction {
    constructor(nominal, status, note) {
        this.nominal = nominal;
        this.status = status;
        this.date = new Date()
        this.note = note;
    }
}

let t1 = new Transaction(100000, 'credit', 'nyetor')
console.log(t1)


class Member {
    constructor(memberName, accountNumber, minimumBalance, balance) {
        this.memberName = memberName;
        this.accountNumber = accountNumber;
        this.minimumBalance = minimumBalance;
        this.balance = balance;
        this.transactions = [];
    }

    credit(uangMasuk) {
        if (uangMasuk >= 50000) {
            this.balance += uangMasuk;
            let transaksiBaru = new Transaction(uangMasuk, "credit", "nyetor");
            this.transactions.push(transaksiBaru);
            console.log("BERHASIL !!! | Anda sukses menyimpan uang didalam bank");
        } else {
            console.log("GAGAL!!! | Belum memenuhi minimal uang yang dapat di setor yakni 50000");
        }
    }
}

member1 = new Member("Suroto", "9078563412", 120000, 30000000);
console.log(member1);
member1.credit(100000);
console.log(member1)