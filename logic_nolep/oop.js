// # LOGIC NOLEP (OOP.js)

// ## Selesaikanlah masalah Bank dengan menggunakan structur object

// ```js
class Bank {
  // Tulis Code Disini
  constructor(bankName) {
    this.bankName = bankName;
  }

  register(person, tier, deposit) {
    let minimumBalance;
    if (tier === "platinum") {
      minimumBalance = 50000;
    } else if (tier === "silver") {
      minimumBalance = 10000;
    }

    if (deposit < minimumBalance) {
      console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
      return;
    }

    const nomorAccount = Math.floor(1000000 + Math.random() * 9000000);

    if (tier === "platinum") {
      person.bankAccount = new Platinum(person.name, nomorAccount, deposit);
    } else if (tier === "silver") {
      person.bankAccount = new Silver(person.name, nomorAccount, deposit);
    }

    console.log(
      `Selamat datang ke ${this.bankName}, ${person.name}. Nomor Akun anda adalah ${nomorAccount}. Total saldo adalah ${deposit}`
    );
  }
}

class Person {
  // Tulis Code Disini
  constructor(name) {
    this.name = name;
    this.bankAccount;
  }
}

class Member {
  // Tulis Code Disini
  constructor(name, accountNumber, minimumBalance, balance, type) {
    this.memberName = name;
    this.accountNumber = accountNumber;
    this.minimumBalance = minimumBalance;
    this.transactions = [];
    this.balance = balance;
    this.type = type;
  }

  credit(deposit) {
    let minCredit = this.type === "platinum" ? 5000 : 1000;
    if (deposit < minCredit) {
      console.log("Belum memenuhi minimal uang yang dapat di setor");
      return;
    }
    this.transactions.push(new Transaction(deposit, "credit", "nyetor"));
    this.balance += deposit;
    console.log("Anda sukses menyimpan uang ke dalam bank.");
  }

  debet(harga, barang) {
    if (harga > this.balance) {
      console.log("Saldo anda tidak cukup");
      return;
    }

    if (this.balance - harga < this.minimumBalance) {
      console.log(
        "Saldo minimum anda tidak terpenuhi untuk melakukan transaksi."
      );
      return;
    }

    this.transactions.push(new Transaction(harga, "debet", barang));

    this.balance -= harga;
    console.log("Anda sukses menarik uang dari bank");
  }

  transfer(accountPenerima, jumlah) {
    if (jumlah > this.balance || this.balance - jumlah < this.minimumBalance) {
      console.log(`Anda gagal transfer ke ${accountPenerima.memberName}`);
      return;
    }

    let debitTransaction = new Transaction(
      jumlah,
      "debet",
      `transfer ke akun ${accountPenerima.memberName}`
    );
    this.transactions.push(debitTransaction);

    let creditTransaction = new Transaction(
      jumlah,
      "credit",
      `transfer dari akun ${this.memberName}`
    );
    accountPenerima.transactions.push(creditTransaction);

    this.balance -= jumlah;
    accountPenerima.balance += jumlah;
    console.log(`Anda sukses transfer ke ${accountPenerima.memberName}`);
  }
}

class Platinum extends Member {
  // Tulis Code Disini
  constructor(memberName, accountNumber, balance) {
    super(memberName, accountNumber, 50000, balance, "platinum");
  }
}

class Silver extends Member {
  // Tulis Code Disini
  constructor(memberName, accountNumber, balance) {
    super(memberName, accountNumber, 10000, balance, "silver");
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
