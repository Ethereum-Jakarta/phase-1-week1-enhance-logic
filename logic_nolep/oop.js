class Bank {
  // Tulis Code Disini
  constructor(name) {
    this.name = name;
  }

  register(person, type, balance) {
    if(type === "platinum" && balance < 50000) {
      console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
    } else if (type == "platinum" && balance >= 50000) {
      person.bankAccount = new Platinum(person.name, balance, type, 50000);
      console.log(`Selamat datang ke ${this.name}, ${person.name}. Nomor akun anda adalah ${person.bankAccount.accountNumber}. Total saldo adalah ${person.bankAccount.balance}`);
    } else if (type == "siver" && balance < 10000) {
      console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
    } else {
      person.bankAccount = new Silver(person.name, balance, type, 10000);
      console.log(`Selamat datang ke ${this.name}, ${person.name}. Nomor akun anda adalah ${person.bankAccount.accountNumber}. Total saldo adalah ${person.bankAccount.balance}`);
    }
  }
}

class Person {
  // Tulis Code Disini
  constructor(name) {
    this.name = name;
  }
}

class Member {
  // Tulis Code Disini
  constructor(name, balance, type, minimumBalance) {
    this.memberName = name;
    this.accountNumber = Math.floor(Math.random() * 1000000);
    this.minimumBalance = minimumBalance;
    this.balance = balance;
    this.transactions = [];
    this.type = type;
  }
}

class Platinum extends Member{
  // Tulis Code Disini
  credit(amount) {
    if(amount < this.minimumBalance) {
      console.log("Belum memenuhi minimal uang yang dapat di setor");
    } else {
      this.balance += amount;
      this.transactions.push(new Transaction(amount, "credit", "nyetor"));
      console.log(`Anda sukses menyimpan uang ke dalam bank`);
    }
  }

  debet(amount, note) {
    if(this.balance < amount) {
      console.log("Saldo anda tidak cukup");
    } else if (this.balance - amount < this.minimumBalance) {
      console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi");
    } else if(this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(new Transaction(amount, "debit", note));
      console.log(`Anda sukses menarik uang dari bank`);
    }
  }

  transfer(receiver, amount) {
     if(this.balance < amount) {
      console.log(`Anda gagal transfer ke ${receiver.memberName}`);
    } else if (this.balance - amount < this.minimumBalance){
      console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transfer");
    } else if (this.balance >= amount) {
      this.balance -= amount;
      receiver.balance += amount;
      receiver.transactions.push(new Transaction(amount, "credit", `transfer dari akun ${this.memberName}`));
      this.transactions.push(new Transaction(amount, "debit", `transfer ke akun ${receiver.memberName}`));
      console.log(`Anda sukses transfer ke ${receiver.memberName}`);
    }
  }
}

class Silver extends Member{
  // Tulis Code Disini
  credit(amount) {
    if(amount < this.minimumBalance) {
      console.log("Belum memenuhi minimal uang yang dapat di setor");
    } else {
      this.balance += amount;
      this.transactions.push(new Transaction(amount, "credit", "nyetor"));
      console.log(`Anda sukses menyimpan uang ke dalam bank`);
    }
  }

  debet(amount, note) {
    if(this.balance < amount) {
      console.log("Saldo anda tidak cukup");
    } else if (this.balance - amount < this.minimumBalance) {
      console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi");
    } else if(this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(new Transaction(amount, "debit", note));
      console.log(`Anda sukses menarik uang dari bank`);
    }
  }

  transfer(receiver, amount) {
    if(this.balance < amount) {
      console.log(`Anda gagal transfer ke ${receiver.memberName}`);
    } else if (this.balance - amount < this.minimumBalance){
      console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transfer");
    } else if (this.balance >= amount) {
      this.balance -= amount;
      receiver.balance += amount;
      receiver.transactions.push(new Transaction(amount, "credit", `transfer dari akun ${this.memberName}`));
      this.transactions.push(new Transaction(amount, "debit", `transfer ke akun ${receiver.memberName}`));
      console.log(`Anda sukses transfer ke ${receiver.memberName}`);
    }
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

// /* PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI */
nadiaAccount.credit(300000)
// // Anda sukses menyimpan uang ke dalam bank.

nadiaAccount.credit(1000)
// // Belum memenuhi minimal uang yang dapat di setor

nadiaAccount.debet(200000, 'Beli Keyboard')
// // Anda sukses menarik uang dari bank

nadiaAccount.debet(130000, 'Beli Keyboard Lagi')
// // Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.
nadiaAccount.debet(600000, 'Bisa gak ya lebih besar dari balance ? ')
// // Saldo anda tidak cukup

let semmi = new Person('Semmi Verian')
yudhistiraBank.register(semmi, 'silver', 10000000)
let semmiAccount = semmi.bankAccount

nadiaAccount.transfer(semmiAccount, 100000)
// // Anda sukses transfer ke Semmi Verian
nadiaAccount.transfer(semmiAccount, 1000000)
// // Anda gagal transfer ke Semmi Verian

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
//       note: 'transfer dari akun Nadia'
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
