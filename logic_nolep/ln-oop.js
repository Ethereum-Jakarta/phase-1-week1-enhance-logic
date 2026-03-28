class Bank {
    constructor(nama) {
        this.nama = nama;
        this.accounts = [];
    }

    register(person, memberType, initialDeposit) {
        let minimumBalance;
        if (memberType.toLowerCase() === "silver") {
            minimumBalance = 10000
        } else if (memberType.toLowerCase() === "platinum") {
            minimumBalance = 50000
        }

        if (initialDeposit < minimumBalance) {
            console.log("Saldo awal kurang dari minimum saldo yang ditentukan")
            return;
        }

        let accountNumber = Math.floor(Math.random() * 9000000) + 1000000;
        let newAccount;

        if (memberType.toLowerCase() === "silver") {
            newAccount = new Silver(person.nama, accountNumber, initialDeposit)
        } else if (memberType.toLowerCase() === "platinum") {
            newAccount = new Platinum(person.nama, accountNumber, initialDeposit);
        }

        person.bankAccount = newAccount;
        this.accounts.push(newAccount)

        console.log(`Selamat datang ke ${this.nama}, ${person.nama}. Nomor akun anda adalah ${accountNumber}. Total saldo adalah ${initialDeposit}`);
    }
}

class Person {
    constructor(nama) {
        this.nama = nama;
    }
}

class Member {
    constructor(memberName, accountNumber, minimumBalance, balance, transactions = [], type) {
        this.memberName = memberName;
        this.accountNumber = accountNumber;
        this.minimumBalance = minimumBalance;
        this.balance = balance;
        this.transactions = transactions;
        this.type = type;
    }

    credit(nominal) {
        if (nominal < 5000) {
            console.log("Belum memenuhi minimal uang yang dapat di setor")
            return;
        }

        this.balance += nominal;

        let transaksi = new Transaction(nominal, "credit", "nyetor")
        this.transactions.push(transaksi);
        console.log("Anda sukses menyimpan uang ke dalam bank")
    }

    debet(nominal, note) {
        if (nominal > this.balance) {
            console.log("Saldo anda tidak cukup");
            return;
        }

        if (this.balance - nominal < this.minimumBalance) {
            console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.");
            return;
        }

        this.balance -= nominal;
        let transaksi = new Transaction(nominal, "debet", note);
        this.transactions.push(transaksi);
        console.log("Anda sukses menarik uang dari bank")
    }

    transfer(targetAccount, nominal) {
        if (nominal > this.balance) {
            console.log(`Anda gagal transfer ke ${targetAccount.memberName}`);
            return;
        }

        if (this.balance - nominal < this.minimumBalance) {
            console.log(`Anda gagal transfer ke ${targetAccount.memberName}`);
            return;
        }

        this.balance -= nominal;
        let transaksiKeluar = new Transaction(nominal, "debet", `transfer ke akun ${targetAccount.memberName}`);
        this.transactions.push(transaksiKeluar);

        targetAccount.balance += nominal;
        let transaksiMasuk = new Transaction(nominal, "credit", `transfer dari akun ${this.memberName}`);
        targetAccount.transactions.push(transaksiMasuk);

        console.log(`Anda sukses transfer ke ${targetAccount.memberName}`);
    }
}

class Platinum extends Member {
    constructor(memberName, accountNumber, balance) {
        super(memberName, accountNumber, 50000, balance, [], "platinum")
    }
}

class Silver extends Member {
    constructor(memberName, accountNumber, balance) {
        super(memberName, accountNumber, 10000, balance, [], "silver")
    }
}

class Transaction {
    constructor(nominal, status, note) {
        this.nominal = nominal;
        this.status = status;
        this.date = new Date();
        this.note = note;
    }
}

// TESTCASE
// TIDAK BOLEH MENGUBAH CODE DI BAWAH INI

let yudhistiraBank = new Bank('Yudhistira Bank')
console.log(yudhistiraBank)
let nadia = new Person('Nadia')
console.log(nadia)

yudhistiraBank.register(nadia, 'platinum', 5000)
// Saldo awal kurang dari minimum saldo yang ditentukan
yudhistiraBank.register(nadia, 'platinum', 54000)
//Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 54000

console.log("after push new account:", yudhistiraBank)
console.log("after assign bank account:", nadia)

let nadiaAccount = nadia.bankAccount
console.log(nadiaAccount)

// /* PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI */
nadiaAccount.credit(300000)
// // Anda sukses menyimpan uang ke dalam bank.
console.log(nadiaAccount)

// nadiaAccount.credit(1000)
// // Belum memenuhi minimal uang yang dapat di setor

nadiaAccount.debet(200000, 'Beli Keyboard')
// // Anda sukses menarik uang dari bank
console.log(nadiaAccount)

nadiaAccount.debet(130000, 'Beli Keyboard Lagi')
// // Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.
nadiaAccount.debet(600000, 'Bisa gak ya lebih besar dari balance ? ')
// // Saldo anda tidak cukup

let semmi = new Person('Semmi Verian')
yudhistiraBank.register(semmi, 'silver', 10000000)
let semmiAccount = semmi.bankAccount

nadiaAccount.transfer(semmiAccount, 100000)
// // Anda sukses transfer ke Semmi Verian
// nadiaAccount.transfer(semmiAccount, 1000000)
// // Anda gagal transfer ke Semmi Verian

console.log(semmiAccount)
// // Silver {
// //   memberName: 'Semmi Verian',
// //   accountNumber: 1319650,
// //   minimumBalance: 10000,
// //   balance: 10100000,
// //   transactions: [
// //     Transaction {
// //       nominal: 100000,
// //       status: 'credit',
// //       date: 2025-01-28T07:13:54.802Z,
// //       note: 'transfer dari akun Nadia'
// //     }
// //   ],
// //   type: 'silver'
// // }

console.log(nadiaAccount)
// // Platinum {
// //   memberName: 'Nadia',
// //   accountNumber: 3971487,
// //   minimumBalance: 50000,
// //   balance: 54000,
// //   transactions: [
// //     Transaction {
// //       nominal: 300000,
// //       status: 'credit',
// //       date: 2025-01-28T07:13:54.800Z,
// //       note: 'nyetor'
// //     },
// //     Transaction {
// //       nominal: 200000,
// //       status: 'debet',
// //       date: 2025-01-28T07:13:54.801Z,
// //       note: 'Beli Keyboard'
// //     },
// //     Transaction {
// //       nominal: 100000,
// //       status: 'debet',
// //       date: 2025-01-28T07:13:54.802Z,
// //       note: 'transfer ke akun Semmi Verian'
// //     }
// //   ],
// //   type: 'platinum'
// // }
