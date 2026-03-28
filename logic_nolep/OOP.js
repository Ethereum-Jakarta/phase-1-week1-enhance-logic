class Bank {
  // Tulis Code Disini
  constructor(name) {
    this.name = name;
    this.customers = new Map();
  }

  generateAccountNumber() {
    return Math.floor(Math.random() * 9000000 + 1000000);
  }

  register(person, type, initialDeposit) {
    let accountNumber = this.generateAccountNumber();
    let newMember;

    if (type === "platinum") {
      newMember = new Platinum(person.name, accountNumber, initialDeposit);
    } else if (type === "silver") {
      newMember = new Silver(person.name, accountNumber, initialDeposit);
    }

    if (newMember) {
      if (newMember.balance >= newMember.minimumBalance) {
        person.bankAccount = newMember;
        this.customers.set(newMember.memberName, newMember);
        console.log(
          `Selamat datang ke ${this.name}, ${newMember.memberName}. Nomor Akun anda adalah ${newMember.accountNumber}. Total saldo adalah ${newMember.balance}`
        );
      } else {
        console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
      }
    }
  }
}

class Person {
  // Tulis Code Disini
  constructor(name) {
    this.name = name;
    this.bankAccount = null;
  }
}

class Member {
  // Tulis Code Disini
  constructor(memberName, accountNumber, minimumBalance, balance, type) {
    this.memberName = memberName;
    this.accountNumber = accountNumber;
    this.minimumBalance = minimumBalance;
    this.balance = balance;
    this.transactions = [];
    this.type = type;
  }

  credit(amount) {
    let date = new Date();

    if (amount >= this.minimumBalance) {
      let transaction = new Transaction(amount, "credit", date, "nyetor");
      this.balance += amount;
      this.transactions.push(transaction);
      console.log("Anda sukses menyimpan uang ke dalam bank");
    } else {
      console.log("Belum memenuhi minimal uang yang dapat di setor");
    }
  }

  debet(amount, note) {
    let date = new Date();

    if (amount > this.balance) {
      console.log("Saldo anda tidak cukup");
    } else if (this.balance - amount < this.minimumBalance) {
      console.log(
        "Saldo minimum anda tidak terpenuhi untuk melakukan transaksi"
      );
    } else {
      let transaction = new Transaction(amount, "debet", date, note);
      this.balance -= amount;
      this.transactions.push(transaction);
      console.log("Anda sukses menarik uang dari bank");
    }
  }

  transfer(receiver, amount) {
    let date = new Date();

    if (amount <= this.balance) {
      let noteSender = `transfer ke akun ${receiver.memberName}`;
      let transDebet = new Transaction(amount, "debet", date, noteSender);
      this.balance -= amount;
      this.transactions.push(transDebet);

      let noteReceiver = `transfer dari akun ${this.memberName}`;
      let transCredit = new Transaction(amount, "credit", date, noteReceiver);
      receiver.balance += amount;
      receiver.transactions.push(transCredit);

      console.log(`Anda sukses transfer ke ${receiver.memberName}`);
    } else {
      console.log(`Anda gagal transfer ke ${receiver.memberName}`);
    }
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
console.log(yudhistiraBank);
