// # LOGIC NOLEP (OOP.js)

// ## Selesaikanlah masalah Bank dengan menggunakan structur object

/* ==== ALGORITHMS ====
Algorithms in bank class :
  - Create constructor that require 1 paramter called bank name and initialize object properti
  - Create a register method for create a bank account for someone that called this method
    - Check a type card that user chose, then check if a minimum deposit that user input should be bigger than a minimum deposit
    - initialize a value of bank account user by a value  card that user chose.
    - create console that tell user that the account is created

Algorithms in class person
  - Create a constructor that require 1 parameter called name, then initialized 2 type of properti inside constructer called this.name and this.bankAccount


Algorithms in Member class 
  - Create a constructor that provide parameter like memberName, randomNumber, balance, minDeposit
  - Inside this class  I have to crete a bunch of method like credit, debet, and transfer, here's the logic :
    - credit method
      - Check if the number (money) that user input is a smaller than minDeposit, then return warning text
      - Updtae user balance 
      - Put transaction data inside array 
      - send a console.log that tell user about their transactions is success





*/


class Bank {
  // Tulis Code Disini
  constructor(bankName) {
    this.bankName = bankName;
  } 

  register(name, cardType,  deposit) {
    const minimumDeposit = {platinum: 50000, silver: 10000};

    // Make a random number for each account   
    if(deposit < minimumDeposit[cardType]) {
        console.log(`Saldo awal kurang dari minimum saldo yang ditentukan`);
        return false;
    }

    const randomNumber = Math.floor((Math.random() * 9000000) + 1000000);

    if(cardType === `platinum`) {
      name.bankAccount = new Platinum(name.memberName, randomNumber, deposit);
    } else {
      name.bankAccount = new Silver(name.memberName, randomNumber, deposit);
    }

    console.log(`Selamat datang ke ${this.bankName}, ${name.memberName}. Nomor Akun anda adalah ${randomNumber}. Total saldo adalah ${deposit}`);
    return name.bankAccount;
  }
}

class Person {
  // Tulis Code Disini
  constructor(name) {
    this.memberName = name;
    this.bankAccount = null;
  }

}

class Member {
  // Tulis Code Disini
  constructor(memberName, accountNumber, balance, minimumBalance, type) {
    this.memberName = memberName;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.minimumBalance = minimumBalance;
    this.transactions = [];
    this.type = type;
  }

  credit(nominal, note = `nyetor`) {
    if(nominal <= 1000) {
      console.log(`Belum memenuhi minimal uang yang dapat di setor`);
      return false;
    }

    this.balance += nominal;
    this.transactions.push(new Transaction(nominal, `credit`, note));
    console.log(`Anda sukses menyimpan uang ke dalam bank.`);
    return true;
  }

  debet(nominal, note) {
    if(nominal > this.balance) {
      console.log(`Saldo anda tidak cukup`);
      return false;
    }

     if(this.balance - nominal < this.minimumBalance ) {
      console.log(`Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.`);
      return false;
    }

    this.balance -= nominal;
    this.transactions.push(new Transaction(nominal, `debet`, note));
    console.log(`Anda sukses menarik uang dari bank`);
    return true;
  }

  transfer(targetAccount, nominal) {
    if(this.balance - nominal < this.minimumBalance ) {
      console.log(`Anda gagal transfer ke ${targetAccount.memberName}`);
      return false;
    }

    this.balance -= nominal;
    this.transactions.push(new Transaction(nominal, 'debet', `transfer ke akun ${targetAccount.memberName}`));

    targetAccount.balance += nominal;
    targetAccount.transactions.push(new Transaction(nominal, 'credit', `transfer dari ${this.memberName}`));

    console.log(`Anda sukses transfer ke ${targetAccount.memberName}`);
  }


  
}

class Platinum extends Member{
  // Tulis Code Disini
  constructor(memberName, randomNumber, balance) {
    super(memberName, randomNumber, balance, 50000, `platinum`);
  }
 
}

class Silver extends Member{
  // Tulis Code Disini
  constructor(memberName, randomNumber, balance) {
    super(memberName, randomNumber, balance, 10000, `silver`);
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

// **Dilarang mengubah code testcase**
