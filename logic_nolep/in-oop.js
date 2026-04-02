class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  register(person, memberType, initialDeposit) {
    let accountNumber = Math.floor(1000000 + Math.random() * 9000000); 
    let newAccount;

    if (memberType.toLowerCase() === "platinum") {
      if (initialDeposit < 50000) {
        console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
        return;
      }
      newAccount = new Platinum(person.name, accountNumber, initialDeposit);
    } else if (memberType.toLowerCase() === "silver") {
      if (initialDeposit < 10000) {
        console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
        return;
      }
      newAccount = new Silver(person.name, accountNumber, initialDeposit);
    } else {
      console.log("Tipe member tidak dikenali");
      return;
    }

    person.bankAccount = newAccount;
    this.accounts.push(newAccount);
    console.log(
      `Selamat datang ke ${this.name}, ${person.name}. Nomor Akun anda adalah ${accountNumber}. Total saldo adalah ${initialDeposit}`
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
  constructor(memberName, accountNumber, minimumBalance, balance) {
    this.memberName = memberName;
    this.accountNumber = accountNumber;
    this.minimumBalance = minimumBalance;
    this.balance = balance;
    this.transactions = [];
  }

  credit(amount) {
    if (amount < 5000) {
      console.log("Belum memenuhi minimal uang yang dapat di setor");
      return;
    }
    this.balance += amount;
    this.transactions.push(new Transaction(amount, "credit", "nyetor"));
    console.log("Anda sukses menyimpan uang ke dalam bank.");
  }

  debet(amount, note) {
    if (this.balance - amount < this.minimumBalance) {
      console.log(
        "Saldo minimum anda tidak terpenuhi untuk melakukan transaksi."
      );
      return;
    }
    if (amount > this.balance) {
      console.log("Saldo anda tidak cukup");
      return;
    }
    this.balance -= amount;
    this.transactions.push(new Transaction(amount, "debet", note));
    console.log("Anda sukses menarik uang dari bank");
  }

  transfer(targetAccount, amount) {
    if (this.balance - amount < this.minimumBalance) {
      console.log(`Anda gagal transfer ke ${targetAccount.memberName}`);
      return;
    }
    if (amount > this.balance) {
      console.log(`Anda gagal transfer ke ${targetAccount.memberName}`);
      return;
    }
    this.balance -= amount;
    targetAccount.balance += amount;
    this.transactions.push(
      new Transaction(
        amount,
        "debet",
        `transfer ke akun ${targetAccount.memberName}`
      )
    );
    console.log(`Anda sukses transfer ke ${targetAccount.memberName}`);
  }
}

class Platinum extends Member {
  constructor(memberName, accountNumber, balance) {
    super(memberName, accountNumber, 50000, balance);
    this.type = "platinum";
  }
}

class Silver extends Member {
  constructor(memberName, accountNumber, balance) {
    super(memberName, accountNumber, 10000, balance);
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
// Expected: Saldo awal kurang dari minimum saldo yang ditentukan

yudhistiraBank.register(nadia, "platinum", 540000);
// Expected: Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 54000

let nadiaAccount = nadia.bankAccount;

/* PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI */
nadiaAccount.credit(300000);
// Expected: Anda sukses menyimpan uang ke dalam bank.

nadiaAccount.credit(1000);
// Expected: Belum memenuhi minimal uang yang dapat di setor

nadiaAccount.debet(200000, "Beli Keyboard");
// Expected: Anda sukses menarik uang dari bank

nadiaAccount.debet(480000, "Beli Keyboard Lagi");
// Expected: Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.

nadiaAccount.debet(600000, "Bisa gak ya lebih besar dari balance ? ");
// Expected: Saldo anda tidak cukup

let semmi = new Person("Semmi Verian");
yudhistiraBank.register(semmi, "silver", 10000000);
let semmiAccount = semmi.bankAccount;

nadiaAccount.transfer(semmiAccount, 100000);
// Anda sukses transfer ke Semmi Verian
nadiaAccount.transfer(semmiAccount, 1000000);
// Anda gagal transfer ke Semmi Verian

console.log(nadiaAccount);
// Expected:
// Platinum {
//   memberName: 'Nadia',
//   accountNumber: 5622164,
//   minimumBalance: 50000,
//   balance: 60000,
//   transactions: [
//     Transaction {
//       nominal: 300000,
//       status: 'credit',
//       date: 2024-08-03T13:21:13.818Z,
//       note: 'nyetor'
//     },
//     Transaction {
//       nominal: 200000,
//       status: 'debet',
//       date: 2024-08-03T13:21:13.819Z,
//       note: 'Beli Keyboard'
//     },
//     Transaction {
//       nominal: 480000,
//       status: 'debet',
//       date: 2024-08-03T13:21:13.819Z,
//       note: 'Beli Keyboard Lagi'
//     },
//     Transaction {
//       nominal: 100000,
//       status: 'debet',
//       date: 2024-08-03T13:21:13.820Z,
//       note: 'transfer ke akun Semmi Verian'
//     }
//   ],
//   type: 'platinum'
// }
