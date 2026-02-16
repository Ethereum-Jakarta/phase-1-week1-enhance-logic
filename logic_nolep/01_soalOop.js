class Bank {
  constructor(name) {
    this.bankName = name;
  }
  register(person, type, amount) {
    if (
      (type == "platinum" && amount < 50000) ||
      (type == "silver" && amount < 10000)
    )
      console.log(`Saldo awal kurang dari minimum saldo yang ditentukan`);
    else {
      this.accountNumber = Math.floor(Math.random() * 10000000);
      console.log(
        `Selamat datang ke ${this.bankName}, ${person.name}. Nomor Akun anda adalah ${this.accountNumber}. Total saldo adalah ${amount}`
      );
      let newMember = new Member(person, type, amount, this.accountNumber);
    }
  }
}

class Person {
  constructor(person) {
    this.name = person;
  }
}

class Member {
  constructor(person, type, amount, number) {
    if (type == "platinum") {
      let platinumMember = new Platinum(person, amount, number);
    } else if (type == "silver") {
      let silverMember = new Silver(person, amount, number);
    }
  }
}

class Platinum extends Member {
  constructor(person, amount, number) {
    super();
    this.memberName = person.name;
    this.accountNumber = number;
    this.minimumBalance = 50000;
    this.balance = amount;
    this.transaction = [];
    this.type = "platinum";
    person.bankAccount = this;
  }
  credit(amount) {
    if (amount < 50000)
      console.log(`Belum memenuhi minimal uang yang dapat di setor`);
    else {
      console.log(`Anda sukses menyimpan uang ke dalam bank.`);
      this.balance = this.balance + amount;
      let today = new Date();
      let transaction = new Transaction(amount, `credit`, today, `nyetor`);
      this.transaction.push(transaction);
    }
  }
  debet(amount, note) {
    if (this.balance - amount >= 50000) {
      this.balance = this.balance - amount;
      let today = new Date();
      let transaction = new Transaction(amount, `debet`, today, note);
      this.transaction.push(transaction);
      console.log(`Anda sukses menarik uang dari bank`);
    } else if (this.balance < amount) console.log(`Saldo anda tidak cukup`);
    else {
      console.log(
        `Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.`
      );
    }
  }
  transfer(tujuan, amount) {
    if (this.balance - amount >= 50000) {
      this.balance = this.balance - amount;
      tujuan.balance = tujuan.balance + amount;
      let note = `'transfer ke akun ${tujuan.memberName}`;
      let today = new Date();
      let transaction = new Transaction(amount, "debet", today, note);
      this.transaction.push(transaction);
      note = `transfer dari akun ${this.memberName}`;
      transaction = new Transaction(amount, "credit", today, note);
      tujuan.transaction.push(transaction);
      console.log(`Anda sukses transfer ke ${tujuan.memberName}`);
    } else {
      console.log(`Anda gagal transfer ke ${tujuan.memberName}`);
    }
  }
}

class Silver extends Member {
  constructor(person, amount, number) {
    super();
    this.memberName = person.name;
    this.accountNumber = number;
    this.minimumBalance = 10000;
    this.balance = amount;
    this.transaction = [];
    this.type = "silver";
    person.bankAccount = this;
  }
  credit(amount) {
    if (amount < 10000)
      console.log(`Belum memenuhi minimal uang yang dapat di setor`);
    else {
      console.log(`Anda sukses menyimpan uang ke dalam bank.`);
      this.balance = this.balance + amount;
      let today = new Date();
      let transaction = new Transaction(amount, `credit`, today, `nyetor`);
      this.transaction.push(transaction);
    }
  }
  debet(amount, note) {
    if (this.balance - amount >= 50000) {
      this.balance = this.balance - amount;
      let today = new Date();
      let transaction = new Transaction(amount, `debet`, today, note);
      this.transaction.push(transaction);
      console.log(`Anda sukses menarik uang dari bank`);
    } else if (this.balance < amount) console.log(`Saldo anda tidak cukup`);
    else {
      console.log(
        `Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.`
      );
    }
  }
  transfer(tujuan, amount) {
    if (this.balance - amount >= 50000) {
      this.balance = this.balance - amount;
      tujuan.balance = tujuan.balance + amount;
      let note = `'transfer ke akun ${tujuan.memberName}`;
      let today = new Date();
      let transaction = new Transaction(amount, "debet", today, note);
      this.transaction.push(transaction);
      note = `transfer dari akun ${this.memberName}`;
      transaction = new Transaction(amount, "credit", today, note);
      tujuan.transaction.push(transaction);
      console.log(`Anda sukses transfer ke ${tujuan.memberName}`);
    } else {
      console.log(`Anda gagal transfer ke ${tujuan.memberName}`);
    }
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

let yudhistiraBank = new Bank("Yudhistira Bank");
let nadia = new Person("Nadia");

yudhistiraBank.register(nadia, "platinum", 5000);
// Saldo awal kurang dari minimum saldo yang ditentukan
yudhistiraBank.register(nadia, "platinum", 54000);
// Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 54000

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
semmiAccount.transfer(nadiaAccount, 1000000);

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
