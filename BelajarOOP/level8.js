function generateLuhn7() {
      let data = Math.floor(Math.random() * 900000) + 100000;
      if (!/^\d{6}$/.test(data)) {
        throw new Error("Input harus tepat 6 digit.");
      }

      let sum = 0;
      let shouldDouble = true; // karena check digit akan berada di paling kanan

      for (let i = data.length - 1; i >= 0; i--) {
        let digit = Number(data[i]);

        if (shouldDouble) {
          digit *= 2;
          if (digit > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
      }

      const checkDigit = (10 - (sum % 10)) % 10;
      return data + checkDigit;
}


class Person {
    constructor(name){
        this._name = name; // dikasih "_" biar gak infinite recursive
        this._bankAccount = null;
    }

    get name() {
        return this._name;
    }

    get bankAccount() {
        return this._bankAccount;
    }
}

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


class Bank {
    constructor(namaBank) {
        this.namaBank = namaBank;
    }

    register(nama, type, saldoAwal) {
        if (type === "platinum") {
            if (saldoAwal < 50000) {
                console.log(`Saldo awal kurang dari minimum saldo yang ditentukan`);
            } else {
                nama._bankAccount = new Platinum(nama._name, generateLuhn7(), saldoAwal )
                console.log(`Selamat datang ke ${this.namaBank}, ${nama._name}. Nomor Akun anda adalah ${nama._bankAccount.accountNumber}. Total saldo adalah ${nama._bankAccount.balance}`);
            }
        } else if (type === "silver") {
            if (saldoAwal < 10000) {
                console.log(`Saldo awal kurang dari minimum saldo yang ditentukan`);
            } else {
                nama._bankAccount = new Silver(nama._name, generateLuhn7(), saldoAwal);
                console.log(`Selamat datang ke ${this.namaBank}, ${nama._name}. Nomor Akun anda adalah ${nama._bankAccount.accountNumber}. Total saldo adalah ${nama._bankAccount.balance}`);
            }
        }
    }
}

// mini test
let yudhistiraBank = new Bank('Yudhistira Bank')
let nadia = new Person('Nadia')

yudhistiraBank.register(nadia, 'platinum', 5000)
yudhistiraBank.register(nadia, 'platinum', 54000)

let nadiaAccount = nadia.bankAccount

nadiaAccount.credit(300000)
nadiaAccount.credit(1000)
nadiaAccount.debet(200000, 'Beli Keyboard')
nadiaAccount.debet(130000, 'Beli Keyboard Lagi')
nadiaAccount.debet(600000, 'Bisa gak ya lebih besar dari balance ? ')

let semmi = new Person('Semmi Verian')
yudhistiraBank.register(semmi, 'silver', 10000000)
let semmiAccount = semmi.bankAccount

nadiaAccount.transfer(semmiAccount, 100000)
nadiaAccount.transfer(semmiAccount, 1000000)

console.log(semmiAccount)
console.log(nadiaAccount)