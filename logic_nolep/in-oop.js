class Bank {
    constructor(name) {
        this.name = name;
        this.accounts = [];
    }

    register(person, type, initialBalance) {
        let minimumBalance;
        if (type === 'platinum') {
            minimumBalance = 50000;
        } else if (type === 'silver') {
            minimumBalance = 100000;
        } else {
            return; 
        }

        if (initialBalance < minimumBalance) {
            return 'Saldo awal kurang dari minimum saldo yang ditentukan';
        }

        let accountNumber = Math.floor(Math.random() * 10000000);
        let account;

        if (type === 'platinum') {
            account = new Platinum(person.name, accountNumber, initialBalance);
        } else if (type === 'silver') {
            account = new Silver(person.name, accountNumber, initialBalance);
        }

        person.bankAccount = account;
        this.accounts.push(account);
        return `Selamat datang ke ${this.name}, ${person.name}. Nomor Akun anda adalah ${accountNumber}. Total saldo adalah ${initialBalance}`;
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.bankAccount = null;
    }
}

class Member {
    constructor(memberName, accountNumber, initialBalance) {
        this.memberName = memberName;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.transactions = [];
    }

    credit(amount) {
        if (amount < 10000) {
            return 'Belum memenuhi minimal uang yang dapat di setor';
        }
        this.balance += amount;
        this.transactions.push(new Transaction(amount, 'credit', new Date(), 'nyetor'));
        return 'Anda sukses menyimpan uang ke dalam bank.';
    }

    debet(amount, note) {
        if (this.balance - amount < this.minimumBalance) {
            return 'Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.';
        }
        if (this.balance < amount) {
            return 'Saldo anda tidak cukup';
        }
        this.balance -= amount;
        this.transactions.push(new Transaction(amount, 'debet', new Date(), note));
        return 'Anda sukses menarik uang dari bank';
    }

    transfer(targetAccount, amount) {
        if (this.balance < amount) {
            return 'Anda gagal transfer ke ' + targetAccount.memberName;
        }
        this.debet(amount, 'transfer ke akun ' + targetAccount.memberName);
        targetAccount.credit(amount);
        return 'Anda sukses transfer ke ' + targetAccount.memberName;
    }
}

class Platinum extends Member {
    constructor(memberName, accountNumber, initialBalance) {
        super(memberName, accountNumber, initialBalance);
        this.minimumBalance = 50000;
        this.type = 'platinum';
    }
}

class Silver extends Member {
    constructor(memberName, accountNumber, initialBalance) {
        super(memberName, accountNumber, initialBalance);
        this.minimumBalance = 100000;
        this.type = 'silver';
    }
}

class Transaction {
    constructor(nominal, status, date, note) {
        this.nominal = nominal;
        this.status = status;
        this.date = date;
        this.note = note;
    }
}

// TESTCASE
// TIDAK BOLEH MENGUBAH CODE DI BAWAH INI

let yudhistiraBank = new Bank('Yudhistira Bank')
let nadia = new Person('Nadia')

console.log(yudhistiraBank.register(nadia, 'platinum', 5000))
// Expected: Saldo awal kurang dari minimum saldo yang ditentukan

console.log(yudhistiraBank.register(nadia, 'platinum', 540000))
// Expected: Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 54000

let nadiaAccount = nadia.bankAccount

/* PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI */
console.log(nadiaAccount.credit(300000))
// Expected: Anda sukses menyimpan uang ke dalam bank.

console.log(nadiaAccount.credit(1000))
// Expected: Belum memenuhi minimal uang yang dapat di setor

console.log(nadiaAccount.debet(200000, 'Beli Keyboard'))
// Expected: Anda sukses menarik uang dari bank

console.log(nadiaAccount.debet(480000, 'Beli Keyboard Lagi'))
// Expected: Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.

console.log(nadiaAccount.debet(600000, 'Bisa gak ya lebih besar dari balance ? '))
// Expected: Saldo anda
console.log(nadiaAccount.debet(600000, 'Bisa gak ya lebih besar dari balance ? '))
// Expected: Saldo anda tidak cukup

let semmi = new Person('Semmi Verian')
console.log(yudhistiraBank.register(semmi, 'silver', 10000000))
let semmiAccount = semmi.bankAccount

console.log(nadiaAccount.transfer(semmiAccount, 100000))
// Expected: Anda sukses transfer ke Semmi Verian

console.log(nadiaAccount.transfer(semmiAccount, 1000000))
// Expected: Anda gagal transfer ke Semmi Verian

console.log(nadiaAccount)
// Expected: 
// Platinum {
//   memberName: 'Nadia',
//   accountNumber: 5622164,
//   minimumBalance: 50000,
//   balance: 60000,
//   transactions: [
//     Transaction {
//       nominal: 300000,
//       status: 'credit',
//       date: 2024-08-03T13:21:13.818Z,
//       note: 'nyetor'
//     },
//     Transaction {
//       nominal: 200000,
//       status: 'debet',
//       date: 2024-08-03T13:21:13.819Z,
//       note: 'Beli Keyboard'
//     },
//     Transaction {
//       nominal: 480000,
//       status: 'debet',
//       date: 2024-08-03T13:21:13.819Z,
//       note: 'Beli Keyboard Lagi'
//     },
//     Transaction {
//       nominal: 100000,
//       status: 'debet',
//       date: 2024-08-03T13:21:13.820Z,
//       note: 'transfer ke akun Semmi Verian'
//     }
//   ],
//   type: 'platinum'
// }