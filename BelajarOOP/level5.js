class Transaction {
    constructor(nominal, status, note) {
        this.nominal = nominal;
        this.status = status;
        this.date = new Date()
        this.note = note;
    }
}


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


class Platinum extends Member {
    constructor(memberName, accountNumber, balance) {
        super(memberName, accountNumber, 50000, balance);
        this.type = "platinum";
    }
}


class Silver extends Member {
    constructor(memberName, accountNumber, balance) {
        super(memberName, accountNumber, 10000, balance)
        this.type = "silver";
        
    }
}

let p1 = new Platinum("Nadia", 3971487, 54000);
console.log(p1);

let s1 = new Silver("Semmi Verian", 1319650, 10100000);
console.log(s1);