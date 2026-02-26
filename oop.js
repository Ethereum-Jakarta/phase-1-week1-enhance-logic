class Bank {
  // Tulis Code Disini
  constructor(bankName) {
    this.bankName = bankName;
  }

  register(person, type, balance) {
    if (type == "platinum") {
      person.bankAccount = new Platinum(person.name, balance);
    } else if (type == "silver") {
      person.bankAccount = new Silver(person.name, balance);
    }

    if (balance < person.bankAccount.minimumBalance) {
      console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
      return;
    } else {
      console.log(
        `Selamat datang ke ${this.bankName}, ${person.name}. Nomor Akun anda adalah 6332937. Total saldo adalah ${balance}`
      );
      return;
    }
  }
}

class Person {
  // Tulis Code Disini
  constructor(name) {
    this.name = name;
    this.bankAccount = undefined;
  }
}

class Member {
  // Tulis Code Disini
  constructor(memberName, balance) {
    this.memberName = memberName;
    this.accountNumber = this.generateRandomAccountNumber();
    this.balance = balance;
    this.transactions = [];
  }

  generateRandomAccountNumber() {
    const prefix = 6;
    const randomDigits = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
    return parseInt(`${prefix}${randomDigits}`);
  }

  credit(nominal) {
    if (nominal <= 1000) {
      console.log("Belum memenuhi minimal uang yang dapat di setor");
      return;
    }

    const transaction = new Transaction(nominal, "credit", "nyetor");

    this.balance += nominal;
    this.transactions.push(transaction);
    console.log("Anda sukses menyimpan uang ke dalam bank.");
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

    const transaction = new Transaction(nominal, "debet", note);

    this.balance -= nominal;
    this.transactions.push(transaction);
    console.log("Anda sukses menarik uang dari bank");
  }

  transfer(account, nominal) {
    if (nominal > this.balance) {
      console.log(`Anda gagal transfer ke ${account.memberName}`);
      return;
    }

    const transactionSend = new Transaction(nominal, "debet", `Transfer ke akun ${account.memberName}`);
    const transactionAccept = new Transaction(nominal, "credit", `Transfer dari akun ${this.memberName}`);
    
    this.balance -= nominal;
    account.balance += nominal;
    this.transactions.push(transactionSend);
    account.transactions.push(transactionAccept);

    console.log(`Anda sukses transfer ke ${account.memberName}`);
  }
}

class Platinum extends Member {
  // Tulis Code Disini
  constructor(memberName, balance) {
    super(memberName, balance);
    this.minimumBalance = 50000;
    this.type = "platinum";
  }
}

class Silver extends Member {
  // Tulis Code Disini
  constructor(memberName, balance) {
    super(memberName, balance);
    this.minimumBalance = 10000;
    this.type = "silver";
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
//       note: 'transfer dari akun Semmi Verian'
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