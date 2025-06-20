class Bank {
    constructor(name) {
        this.name = name;
        this.members = [];
    }

    register(person, memberType, saldoAwal) {
        let saldoMin;

        if (memberType === 'platinum') {         // min saldo berdasarkan tipe member
            saldoMin = 50000;
        } else if (memberType === ' silver') {
            saldoMin = 10000;
        }

        if (saldoAwal < saldoMin) {              // cek saldo awal memenuhi
            console.log('Saldo awal kurang dari minimum saldo yang ditentukan');
            return this;
        }

        let accountNumber = Math.floor(Math.random() * 9000000) + 1000000;

        let member;                             // buat member baru berdasarkan tipe
        if (memberType === 'platinum') {
            member = new Platinum(person.name, accountNumber, saldoAwal);
        } else if (memberType === 'silver') {
            member = new Silver(person.name, accountNumber, saldoAwal);
        }

        person.bankAccount = member;            // buat bank account untuk person
        this.members.push(member);

        console.log(`Selamat datang ke ${this.nama}, ${person.name}. Nomor Akun anda adalah ${accountNumber}. Total saldo adalah ${saldoAwal}`);
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.bankAccount = null;
    }
}

class Member {
    constructor(memberName, accountNumber, balance, minimumBalance, type) {
        this.memberName = memberName;
        this.accountNumber = accountNumber;
        this.minimumBalance = minimumBalance;
        this.balance = balance;
        this.transaction = [];
        this.type = type;
    }

    credit(jumlah) {
        let minCredit;
        if (this.type === 'platinum') minCredit = 10000;
        if (this.type === 'silver') minCredit = 5000;

        if (jumlah < minCredit) {
            console.log('Belum memenuhi minimal uang yang dapat disetor');
            return this;
        }

        this.balance += jumlah;
        let transaction = new Transaction(jumlah, 'credit', new Date(), 'nyetor');
        this.transaction.push(transaction);
        console.log('Anda sukses menyimpan uang ke dalam bank');
    }

    debet(jumlah, note) {
        if (jumlah > this.balance) {
            console.log('Saldo anda tidak cukup');
            return this;
        }

        if (this.balance - jumlah < this.minimumBalance) {
            console.log('Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.');
            return this;
        }

        this.balance -= jumlah;
        let transaction = new Transaction(jumlah, 'debet', new Date(), note);
        this.transaction.push(transaction);
        console.log('Anda sukses menari uang dari bank')
    }

    transfer(tujuan, jumlah) {
        if (jumlah > this.balance) {
            console.log(`Anda gagal transfer ke ${tujuan.memberName}`);
            return this;
        }

        this.balance -= jumlah;
        tujuan.balance += jumlah;

        // catatan untuk pengirim
        let debitTransaction = new Transaction(jumlah, 'debet', new Date(), `transfer ke ${tujuan.memberName}`);
        this.transaction.push(debitTransaction);

        // catatan untuk penerima
        let creditTransaction = new Transaction(jumlah, 'credit', new Date(), `tranfer dari akun ${this.memberName}`);
        tujuan.transaction.push(creditTransaction);

        console.log(`Anda sukses transfer ke ${tujuan.memberName}`);
    }
}

class Platinum extends Member {
    constructor(memberName, accountNumber, balance) {
        super(memberName, accountNumber, balance, 50000, 'platinum');
    }
}


class Silver extends Member {
    constructor(memberName, accountNumber, balance) {
        super(memberName, accountNumber, balance, 10000, 'silver');
    }
}

class Transaction {
    // Tulis Code Disini
    #balance
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

yudhistiraBank.register(nadia, 'platinum', 5000)
// Saldo awal kurang dari minimum saldo yang ditentukan
yudhistiraBank.register(nadia, 'platinum', 54000)
//Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 54000

let nadiaAccount = nadia.bankAccount

/* PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI */
nadiaAccount.credit(300000)
// Anda sukses menyimpan uang ke dalam bank.

nadiaAccount.credit(1000)
// Belum memenuhi minimal uang yang dapat di setor

nadiaAccount.debet(200000, 'Beli Keyboard')
// Anda sukses menarik uang dari bank

nadiaAccount.debet(130000, 'Beli Keyboard Lagi')
// Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.
nadiaAccount.debet(600000, 'Bisa gak ya lebih besar dari balance ? ')
// Saldo anda tidak cukup

let semmi = new Person('Semmi Verian')
yudhistiraBank.register(semmi, 'silver', 10000000)
let semmiAccount = semmi.bankAccount

nadiaAccount.transfer(semmiAccount, 100000)
// Anda sukses transfer ke Semmi Verian
nadiaAccount.transfer(semmiAccount, 1000000)
// Anda gagal transfer ke Semmi Verian

console.log(semmiAccount)
// Silver {
//   memberName: 'Semmi Verian',
//   accountNumber: 1319650,
//   minimumBalance: 10000,
//   balance: 10100000,
//   transactions: [
//     Transaction {
//       nominal: 100000,
//       status: 'credit',
//       date: 2025-01-28T07:13:54.802Z,
//       note: 'transfer dari akun Nadia'
//     }
//   ],
//   type: 'silver'
// }

console.log(nadiaAccount)
// Platinum {
//   memberName: 'Nadia',
//   accountNumber: 3971487,
//   minimumBalance: 50000,
//   balance: 54000,
//   transactions: [
//     Transaction {
//       nominal: 300000,
//       status: 'credit',
//       date: 2025-01-28T07:13:54.800Z,
//       note: 'nyetor'
//     },
//     Transaction {
//       nominal: 200000,
//       status: 'debet',
//       date: 2025-01-28T07:13:54.801Z,
//       note: 'Beli Keyboard'
//     },
//     Transaction {
//       nominal: 100000,
//       status: 'debet',
//       date: 2025-01-28T07:13:54.802Z,
//       note: 'transfer ke akun Semmi Verian'
//     }
//   ],
//   type: 'platinum'
// }

// ** Dilarang mengubah code testcase **