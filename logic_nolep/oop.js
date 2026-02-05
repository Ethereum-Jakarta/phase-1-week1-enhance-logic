class Bank {
  constructor(name) {
    this.name = name;
    this.members = [];
  }

  register(person, type, balance) {
    let minimumBalance = 0;
    if (type === "platinum") {
      minimumBalance = 50000;
    } else if (type === "silver") {
      minimumBalance = 10000;
    } else {
      return console.log("tipe member tidak ada");
    }

    if (balance < minimumBalance) {
      return console.log(
        "Saldo awal kurang dari minimum saldo yang ditentukan"
      );
    }

    let accountNumber = Math.floor(1000000 + Math.random() * 9000000);

    let member;
    if (type === "platinum")
      member = new Platinum(
        person.name,
        accountNumber,
        minimumBalance,
        balance
      );
    else
      member = new Silver(person.name, accountNumber, minimumBalance, balance);

    this.members.push(member);
    person.bankAccount = member;

    console.log(
      `Selamat datang ke ${this.name}, ${person.name}. Nomor Akun anda adalah ${accountNumber}. Total saldo adalah ${balance}`
    );
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.bankAccount = null;
  }
}

class Member {
  constructor(memberName, accountNumber, minimumBalance, balance, type) {
    this.memberName = memberName;
    this.accountNumber = accountNumber;
    this.minimumBalance = minimumBalance;
    this.balance = balance;
    this.transactions = [];
    this.type = type;
  }

  credit(nominal) {
    if (nominal > this.minimumBalance) {
      this.balance += nominal;
      this.transactions.push(new Transaction(nominal, "credit", "nyetor"));
      console.log("Anda sukses menyimpan uang ke dalam bank.");
    } else {
      return console.log("Belum memenuhi minimal uang yang dapat di setor");
    }
  }

  debet(nominal, note) {
    if (nominal > this.balance) {
      return console.log("Saldo anda tidak cukup");
    }

    if (this.balance - nominal < this.minimumBalance) {
      return console.log(
        "Saldo minimum anda tidak terpenuhi untuk melakukan transaksi."
      );
    }

    this.balance -= nominal;
    this.transactions.push(new Transaction(nominal, "debet", note));
    console.log("Anda sukses menarik uang dari bank");
  }

  transfer(person, nominal) {
    if (
      this.balance < nominal ||
      this.balance - nominal < this.minimumBalance
    ) {
      return console.log(`Anda gagal transfer ke ${person.memberName}`);
    }

    this.balance -= nominal;
    person.balance += nominal;

    this.transactions.push(
      new Transaction(nominal, "debet", `transfer ke akun ${person.memberName}`)
    );
    person.transactions.push(
      new Transaction(
        nominal,
        "credit",
        `transfer dari akun ${this.memberName}`
      )
    );

    console.log(`Anda sukses transfer ke ${person.memberName}`);
  }
}

class Platinum extends Member {
  constructor(memberName, accountNumber, minimumBalance, balance) {
    super(memberName, accountNumber, minimumBalance, balance, "platinum");
  }
}

class Silver extends Member {
  constructor(memberName, accountNumber, minimumBalance, balance) {
    super(memberName, accountNumber, minimumBalance, balance, "silver");
  }
}

class Transaction {
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
