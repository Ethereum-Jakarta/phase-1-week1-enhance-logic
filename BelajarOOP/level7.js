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
            console.log("Anda sukses menarik uang dari bank");
        }
    }

    transfer(akunTujuan, nominalTransfer) {
        if (this.balance < nominalTransfer) {
            console.log(`Anda Gagal transfer ke ${akunTujuan.memberName}`);
        } else if(this.balance - nominalTransfer < this.minimumBalance){
            console.log(`Gagal Transfer ke ${akunTujuan.memberName} Karena Saldo minimum tidak terpenuhi`);
        } else {
            this.balance-=nominalTransfer;
            akunTujuan.balance+=nominalTransfer;
            let transaksiPengirim = new Transaction(nominalTransfer, "debet", `transfer ke akun ${akunTujuan.memberName}`);
            let transaksiPenerima = new Transaction(nominalTransfer, "credit", `transfer dari akun ${this.memberName}`);

            this.transactions.push(transaksiPengirim);
            akunTujuan.transactions.push(transaksiPenerima);
            console.log(`Anda sukses transfer ke ${akunTujuan.memberName}`)
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

//let p1 = new Platinum("Nadia", 3971487, 54000);
//console.log(p1);
//
//let s1 = new Silver("Semmi Verian", 1319650, 10100000);
////console.log(s1);
//
////p1.credit(100000);
////p1.debet(500, "Beli Baju");
////console.log(p1)
////console.log(p1.memberName)
//
////p1.transfer(s1, 1500);
//
//
//p1.transfer(s1, 100000)   // harus sukses
//p1.transfer(s1, 1000000)  // harus gagal
//console.log(s1)
//console.log(p1)

//testing

let p1 = new Platinum("Nadia", 3971487, 54000);
let s1 = new Silver("Semmi Verian", 1319650, 10100000);

p1.credit(300000);              // balance jadi 354000
p1.debet(200000, "Beli Keyboard");  // balance jadi 154000

p1.transfer(s1, 100000);   // balance cukup (154000 > 100000) & sisa (54000) >= minimumBalance (50000) → harus SUKSES
p1.transfer(s1, 1000000);  // balance gak cukup → harus GAGAL

console.log(s1)
console.log(p1)
