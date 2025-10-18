class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.bankMembers = [];
  }

  register(person, type, initialDeposit) {
    if (type === "platinum") {
      const account = new Platinum(person.name, initialDeposit);
      if (account.balance >= account.minimumBalance) {
        person.bankAccount = account;
        console.log(
          `Selamat datang ke ${this.bankName}, ${person.name}. Nomor Akun anda adalah ${account.accountNumber}. Total saldo adalah ${account.balance}`
        );
      } else {
        console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
      }
    } else if (type === "silver") {
      const account = new Silver(person.name, initialDeposit);
      if (account.balance >= account.minimumBalance) {
        person.bankAccount = account;
        console.log(
          `Selamat datang ke ${this.bankName}, ${person.name}. Nomor Akun anda adalah ${account.accountNumber}. Total saldo adalah ${account.balance}`
        );
      } else {
        console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
      }
    }
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Member {
  constructor(memberName, initialDeposit) {
    this.memberName = memberName;
    this.balance = initialDeposit;
    this.accountNumber = Math.floor(Math.random() * 9000000) + 1000000;
    this.transactions = [];
  }

  credit(nominal) {
    if (nominal >= this.minimumBalance) {
      this.balance += nominal;
      const transc = new Transaction(nominal, "credit", "nyetor");
      this.transactions.push(transc);
      console.log("Anda sukses menyimpan uang ke dalam bank");
    } else console.log("Belum memenuhi minimal uang yang dapat di setor");
  }

  debet(nominal, note) {
    if (nominal > this.balance) console.log("Saldo anda tidak cukup");
    else if (this.balance - nominal < this.minimumBalance){
      console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.")
    }else {
      this.balance -= nominal;
      const transc = new Transaction(nominal, "debet", note);
      this.transactions.push(transc);
      console.log("Anda sukses menarik uang dari bank");
    }
  }

  transfer(bankAccount, nominal){
    if (nominal > this.balance) console.log("Saldo anda tidak cukup");
    else if (this.balance - nominal < this.minimumBalance){
      console.log("Anda gagal transfer ke Semmi Verian")
    }else {
      this.balance -= nominal;
      bankAccount.balance += nominal;
      const transc = new Transaction(nominal, "transfer", `transfer ke akun ${bankAccount.memberName}`);
      const tf = new Transaction(nominal, "credit", `transfer dari akun ${this.memberName}`)
      this.transactions.push(transc);
      bankAccount.transactions.push(tf);
      console.log(`Anda sukses transfer ke ${bankAccount.memberName}`);
    }
  }
}

class Platinum extends Member {
  constructor(memberName, initialDeposit) {
    super(memberName, initialDeposit);
    this.minimumBalance = 50000;
    this.type = "platinum";
  }
}

class Silver extends Member {
  constructor(memberName, initialDeposit) {
    super(memberName, initialDeposit);
    this.minimumBalance = 10000;
    this.type = "silver";
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
// // Anda sukses transfer ke Semmi Verian
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
