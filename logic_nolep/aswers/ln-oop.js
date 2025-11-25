class Bank {
  // Tulis Code Disini
  constructor(inputName) {
    this.bankName = inputName;
  }
  register(nasabah, membership, saldo) {
    if (!nasabah || !membership || !saldo) {
      console.log("Mohon isi datanya terlebih dahulu");
    }

    const accountNumber = Number(Date.now().toString().slice(6));
    if (membership.toLowerCase() === "platinum") {
      nasabah.bankAccount = new Platinum(nasabah.name);
      nasabah.bankAccount.deposit(saldo, accountNumber);
    }
    if (membership.toLowerCase() === "silver") {
      nasabah.bankAccount = new Silver(nasabah.name);
      nasabah.bankAccount.deposit(saldo, accountNumber);
    }
  }
}

class Person {
  // Tulis Code Disini
  name;
  bankAccount;
  constructor(inputName) {
    this.name = inputName;
  }
}

class Member {
  // Tulis Code Disini
  #balance = 0;
  #accountNumber;
  constructor(name) {
    this.memberName = name;
  }
  getBalance() {
    return this.#balance;
  }
  getAccountNumber() {
    return this.#accountNumber;
  }
  setBalance(nominal) {
    this.#balance += nominal;
  }
  setAccountNumber(number) {
    this.#accountNumber = number;
  }
}

class Platinum extends Member {
  // Tulis Code Disini
  accountNumber;
  minimumBalance = 50000;
  balance;
  transactions = [];
  type = "platinum";

  constructor(name) {
    super(name);
  }

  deposit(amount, number) {
    if (amount < this.minimumBalance) {
      console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
      return;
    }
    super.setBalance(amount);
    this.balance = super.getBalance();
    super.setAccountNumber(number);
    this.accountNumber = super.getAccountNumber();

    console.log(
      `Selamat datang ke Yudhistira Bank, ${this.memberName}. Nomor Akun anda adalah ${this.accountNumber}. Total saldo adalah ${this.balance}`
    );
  }

  credit(amount, note = "nyetor", type = "setor") {
    if (amount < this.minimumBalance) {
      console.log("Belum memenuhi minimal uang yang dapat di setor");
      return;
    }
    this.balance += amount;
    this.transactions.push(new Transaction(amount, "credit", note));
    if (type === "transfer") {
      return;
    }
    console.log("Anda sukses menyimpan uang ke dalam bank.");
  }

  debet(amount, note) {
    if (amount > this.balance) {
      console.log("Saldo anda tidak cukup");
      return;
    }
    if (this.balance - amount < this.minimumBalance) {
      console.log(
        "Saldo minimum anda tidak terpenuhi untuk melakukan transaksi."
      );
      return;
    }
    this.balance -= amount;
    this.transactions.push(new Transaction(amount, "debet", note));
    console.log("Anda sukses menarik uang dari bank");
  }

  transfer(address, amount) {
    if (amount > this.balance || this.balance - amount < this.minimumBalance) {
      console.log(`Anda gagal transfer ke ${address.memberName}`);
      return;
    }
    this.balance -= amount;
    this.transactions.push(
      new Transaction(amount, "debet", `transfer ke akun ${address.memberName}`)
    );
    address.credit(amount, `transfer dari akun ${this.memberName}`, "transfer");
    console.log(`Anda sukses transfer ke ${address.memberName}`);
  }
}

class Silver extends Member {
  // Tulis Code Disini
  accountNumber;
  minimumBalance = 10000;
  balance;
  transactions = [];
  type = "silver";

  constructor(name) {
    super(name);
  }

  deposit(amount, number) {
    if (amount < this.minimumBalance) {
      console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
      return;
    }
    super.setBalance(amount);
    this.balance = super.getBalance();
    super.setAccountNumber(number);
    this.accountNumber = super.getAccountNumber();

    console.log(
      `Selamat datang ke Yudhistira Bank, ${this.memberName}. Nomor Akun anda adalah ${this.accountNumber}. Total saldo adalah ${this.balance}`
    );
  }

  credit(amount, note = "nyetor", type = "setor") {
    if (amount < this.minimumBalance) {
      console.log("Belum memenuhi minimal uang yang dapat di setor");
      return;
    }
    this.balance += amount;
    this.transactions.push(new Transaction(amount, "credit", note));
    if (type === "transfer") {
      return;
    }
    console.log("Anda sukses menyimpan uang ke dalam bank.");
  }

  debet(amount, note) {
    if (amount > this.balance) {
      console.log("Saldo anda tidak cukup");
      return;
    }
    if (this.balance - amount < this.minimumBalance) {
      console.log(
        "Saldo minimum anda tidak terpenuhi untuk melakukan transaksi."
      );
      return;
    }
    this.balance -= amount;
    this.transactions.push(new Transaction(amount, "debet", note));
    console.log("Anda sukses menarik uang dari bank");
  }

  transfer(address, amount) {
    if (amount > this.balance || this.balance - amount < this.minimumBalance) {
      console.log(`Anda gagal transfer ke ${address.memberName}`);
      return;
    }
    this.balance -= amount;
    this.transactions.push(
      new Transaction(amount, "debet", `transfer ke akun ${address.memberName}`)
    );
    address.credit(amount, `transfer dari akun ${this.memberName}`, "transfer");
    console.log(`Anda sukses transfer ke ${address.memberName}`);
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

nadiaAccount.transfer(semmiAccount, 100000); // bikin NaN
// Anda sukses transfer ke Semmi Verian
nadiaAccount.transfer(semmiAccount, 1000000); // bikin NaN
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
