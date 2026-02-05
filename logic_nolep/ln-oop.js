class Bank {
  // Tulis Code Disini
  constructor(name) {
    this.name = name;
    this.members = [];
  }

  register(customer, tier, startingAmount) {
    if (startingAmount < 50000) {
      return "Saldo awal kurang dari minimum saldo yang ditentukan";
    }
    let accountTier =
      tier === "platinum"
        ? new Platinum(customer.name, startingAmount)
        : new Silver(customer.name, startingAmount);
    customer.addAccount(accountTier);
  }
}

class Person {
  // Tulis Code Disini
  #bankAccount;
  constructor(name) {
    this.name = name;
    this.#bankAccount;
  }

  get bankAccount() {
    return this.#bankAccount;
  }

  addAccount(account) {
    if (this.#bankAccount) return;
    this.#bankAccount = account;
  }
}

class Member {
  constructor(memberName, balance) {
    this.memberName = memberName;
    this.accountNumber = Math.floor(Math.random() * 10000000) + 1;
    this.minimumBalance = this.setMinimumBalance();
    this.balance = balance;
    this.transactions = [];
  }
  setMinimumBalance() {
    return 0;
  }

  credit(amount, message) {
    message = message || "nyetor";
    if (amount < 10000)
      return "Belum memenuhi minimal uang yang dapat di setor";
    let transaction = new Transaction(amount, "credit", message);
    this.transactions.push(transaction);

    this.balance += amount;
  }
  debet(amount, message) {
    if (amount > this.balance) return "Saldo anda tidak cukup";
    if (this.balance - amount < this.minimumBalance)
      return "Saldo minimum tidak terpenuhi untuk melakukan transaksi";

    let transaction = new Transaction(amount, "debet", message);
    this.transactions.push(transaction);

    this.balance -= amount;
  }
  transfer(account, amount) {
    let senderName = this.memberName;
    let transferMessage = `transfer dari akun ${senderName}`;
    let debetMessage = `transfer ke akun ${account.memberName}`;
    if (amount > this.balance) return "Gagal Transfer, Saldo tidak cukup";
    this.debet(amount, debetMessage);
    account.credit(amount, transferMessage);
  }
}

class Platinum extends Member {
  constructor(customer, balance) {
    super(customer, balance);

    this.type = "platinum";
  }

  setMinimumBalance() {
    return 50000;
  }
}

class Silver extends Member {
  constructor(customer, balance) {
    super(customer, balance);
    this.type = "silver";
  }
  setMinimumBalance() {
    return 100000;
  }
}

class Transaction {
  constructor(amount, action, message) {
    this.nominal = amount;
    this.status = action;
    this.date = this.formattedDate();
    this.note = message;
  }

  formattedDate() {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "short",
      timeStyle: "long",
      timeZone: "Asia/Jakarta",
    }).format(new Date());
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
// // Saldo anda tidak cukup

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
