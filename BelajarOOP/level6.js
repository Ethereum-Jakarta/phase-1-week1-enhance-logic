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

    debet(nominalDitarik, note) {
        if (nominalDitarik > this.balance) {
            console.log("Saldo anda tidak cukup");
        } else if (this.balance - nominalDitarik  < this.minimumBalance) {
            console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi")
        } else {
            this.balance -= nominalDitarik;
            let transaksiBaru = new Transaction(nominalDitarik, "debet", note);
            this.transactions.push(transaksiBaru);
            console.log("Anda sukses menarik uang dari bank")
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
//console.log(s1);

p1.credit(100000);
p1.debet(500, "Beli Baju");
console.log(p1)