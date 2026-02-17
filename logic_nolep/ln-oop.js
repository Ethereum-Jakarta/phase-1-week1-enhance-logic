// # LOGIC NOLEP (OOP.js)

// ## Selesaikanlah masalah Bank dengan menggunakan structur object

// ```js
class Bank {
  // Tulis Code Disini
  constructor(bankName) {
    this.bankName = bankName;
  }

  register(person, type, depo) {
    let akun;
    let nomor = Math.floor(1000000 + Math.random() * 9000000);
    if (type == "platinum" && depo < 50000) {
      console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
    } else if (type == "silver" && depo < 10000) {
      console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
    } else {
      if (type == "platinum") {
        akun = new Platinum(person.name, nomor, depo);
      } else {
        akun = new Silver(person.name, nomor, depo);
      }
      person.bankAccount = akun;
      console.log(
        `Selamat datang ke ${this.bankName}, ${person.name}. Nomor Akun anda adalah ${nomor}. Total saldo adalah ${depo}`,
      );
    }
  }
}

class Person {
  // Tulis Code Disini
  constructor(nama) {
    this.name = nama;
    this.bankAccount = null;
  }
}

class Member {
  // Tulis Code Disini
  constructor(Membername, accountNumber, balance) {
    this.memberName = Membername;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.transactions = [];
  }
  credit(nominal, note) {
    if (nominal <= 1000) {
      console.log("Belum memenuhi minimal uang yang dapat disetor");
    } else {
      this.balance += nominal;
      if (note == undefined) note = "nyetor";
      const crt = new Transaction(nominal, "credit", note);
      this.transactions.push(crt);
      console.log("Anda sukses menyimpan uang ke dalam bank.");
    }
  }

  debet(nominal, note) {
    if (nominal > this.balance) {
      console.log("Saldo anda tidak cukup");
    } else if (this.balance - nominal < this.minimumBalance) {
      console.log("Saldo minimum anda tidak terpenuhi untuk melakukan debet.");
    } else {
      this.balance -= nominal;
      const dbt = new Transaction(nominal, "debet", note);
      this.transactions.push(dbt);
      console.log("Anda sukses menarik uang dari bank");
    }
  }
  
  transfer(targetAccount, nominal) {
    if (this.balance - nominal < this.minimumBalace || this.balance - nominal < 0) {
      console.log(`Anda gagal transfer ke ${targetAccount.memberName}`);
    } else {
      this.balance -= nominal;
      targetAccount.credit(nominal,`transfer dari akun ${this.memberName}`);
      console.log(`Anda sukses transfer ke ${targetAccount.memberName}`);
      const tf = new Transaction(nominal, "debet", `transfer ke akun ${targetAccount.memberName}`);
      this.transactions.push(tf);
    }
  }
}

class Platinum extends Member {
  // Tulis Code Disini
  constructor(name, account, balance) {
    super(name, account, balance);
    this.type = "platinum";
    this.minimumBalance = 50000;
  }
}

class Silver extends Member {
  // Tulis Code Disini
  constructor(name, account, balance) {
    super(name, account, balance);
    this.type = "silver";
    this.minimumBalance = 10000;
  }
}

class Transaction {
  // Tulis Code Disini
  constructor(nominal, status, note) {
    this.nominal = nominal;
    this.status = status;
    this.date = new Date();
    this.note = note;
  }
}

// TESTCASE
// TIDAK BOLEH MENGUBAH CODE DI BAWAH INI

let yudhistiraBank = new Bank("Yudhistira Bank");
let nadia = new Person("Nadia");

yudhistiraBank.register(nadia, "platinum", 5000);
// Saldo awal kurang dari minimum saldo yang ditentukan
yudhistiraBank.register(nadia, "platinum", 54000);
//Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 54000

let nadiaAccount = nadia.bankAccount;

/* PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI */
nadiaAccount.credit(300000);
// Anda sukses menyimpan uang ke dalam bank.

nadiaAccount.credit(1000);
// Belum memenuhi minimal uang yang dapat di setor

nadiaAccount.debet(200000, "Beli Keyboard");
// Anda sukses menarik uang dari bank

nadiaAccount.debet(130000, "Beli Keyboard Lagi");
// Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.
nadiaAccount.debet(600000, "Bisa gak ya lebih besar dari balance ? ");
// Saldo anda tidak cukup

let semmi = new Person("Semmi Verian");
yudhistiraBank.register(semmi, "silver", 10000000);
let semmiAccount = semmi.bankAccount;

nadiaAccount.transfer(semmiAccount, 100000);
// Anda sukses transfer ke Semmi Verian
nadiaAccount.transfer(semmiAccount, 1000000);
// Anda gagal transfer ke Semmi Verian

console.log(semmiAccount);
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

console.log(nadiaAccount);
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

// **Dilarang mengubah code testcase**
