class Bank {
  // Tulis Code Disini
  constructor(namaBank) {
    this.namaBank = namaBank;
  }

  register(nama, tipe, saldo) {
    if (tipe === "platinum" && saldo > 50000) {
      const accountNumber = Math.floor(Math.random() * 10000000);
      nama.bankAccount = new Platinum(nama.nama, accountNumber, 50000, saldo);
      console.log(
        `Selamat datang ke ${this.namaBank}, ${nama.nama}. Nomor Akun anda adalah ${accountNumber}. Total saldo adalah ${saldo}`
      );
    } else if (tipe === "silver" && saldo > 10000) {
      const accountNumber = Math.floor(Math.random() * 10000000);
      nama.bankAccount = new Silver(nama.nama, accountNumber, 10000, saldo);
      console.log(
        `Selamat datang ke ${this.namaBank}, ${nama.nama}. Nomor Akun anda adalah ${accountNumber}. Total saldo adalah ${saldo}`
      );
    } else {
      console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
    }
  }
}

class Person {
  // Tulis Code Disini
  constructor(nama) {
    this.nama = nama;
    this.bankAccount = null;
  }
}

class Member {
  // Tulis Code Disini
  constructor(memberName, accountNumber, minimumBalance, balance) {
    this.memberName = memberName;
    this.accountNumber = accountNumber;
    this.minimumBalance = minimumBalance;
    this.balance = balance;
    this.transaction = [];
  }

  credit(nominal) {
    if (nominal > 0 && nominal >= this.minimumBalance) {
      this.balance += nominal;
      const credit = new Transaction(nominal, "credit", "nyetor");
      this.transaction.push(credit);
      console.log("Anda sukses menyimpan uang ke dalam bank.");
    } else {
      console.log("Belum memenuhi minimal uang yang dapat di setor");
    }
  }

  debet(nominal, note) {
    if (
      nominal > 0 &&
      nominal <= this.balance &&
      this.balance - nominal >= this.minimumBalance
    ) {
      this.balance -= nominal;
      const debet = new Transaction(nominal, "debet", note);
      this.transaction.push(debet);
      console.log("Anda sukses menarik uang dari bank");
    } else if (nominal > this.balance) {
      console.log("Saldo anda tidak cukup");
    } else {
      console.log(
        "Saldo minimum anda tidak terpenuhi untuk melakukan transaksi."
      );
    }
  }

  transfer(account, nominal) {
    if (
      nominal > 0 &&
      nominal <= this.balance &&
      this.balance - nominal >= this.minimumBalance
    ) {
      this.balance -= nominal;
      const transferOut = new Transaction(
        nominal,
        "debet",
        "transfer ke akun " + account.memberName
      );
      this.transaction.push(transferOut);

      account.balance += nominal;
      const transferIn = new Transaction(
        nominal,
        "credit",
        "transfer dari akun " + this.memberName
      );
      account.transaction.push(transferIn);
      console.log("Anda sukses transfer ke " + account.memberName);
    } else {
      console.log("Anda gagal transfer ke " + account.memberName);
    }
  }
}

class Platinum extends Member {
  // Tulis Code Disini
  constructor(memberName, accountNumber, minimumBalance, balance) {
    super(memberName, accountNumber, minimumBalance, balance);
    this.type = "platinum";
  }
}

class Silver extends Member {
  // Tulis Code Disini
  constructor(memberName, accountNumber, minimumBalance, balance) {
    super(memberName, accountNumber, minimumBalance, balance);
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
