// # LOGIC NOLEP (OOP.js)

// ## Selesaikanlah masalah Bank dengan menggunakan structur object

// ```js
class Bank {
  // Tulis Code Disini
  constructor(name) {
  this.name = name
  this.listAccount = []
  }
  register(person,type,initialBalance) {
    let minimumBalance;
    if(type == 'platinum') {
      minimumBalance = 50000
    }
    if(type == 'silver') {
      minimumBalance = 10000
    }
   if(initialBalance < minimumBalance) {
     console.log('Saldo awal kurang dari minimum saldo yang ditentukan')
     return
   }
   let accountNumber = Math.floor(Math.random() * 9000000) + 1000000
   
  let account;
  if(type == 'platinum') {
    account = new Platinum(person.name,accountNumber,initialBalance)
  }else {
    account = new Silver(person.name,accountNumber,initialBalance)
  }
  this.listAccount.push(account)
  person.bankAccount = account
  console.log(`Selamat datang ke ${this.name}, ${person.name}. Nomor Akun anda adalah ${accountNumber}. Total saldo adalah ${initialBalance}`)
  }
}

class Person {
  // Tulis Code Disini
  constructor(name) {
    this.name = name
    this.bankAccount = null
  }
}

class Member {
  // Tulis Code Disini
  constructor(memberName,accountNumber,balance,minimumBalance,type) {
    this.memberName = memberName
    this.accountNumber = accountNumber
    this.minimumBalance = minimumBalance
    this.balance = balance
    this.transactions = []
    this.type = type
  }
  credit(depo) {
    if(depo < 10000) {
      console.log('Belum memenuhi minimal uang yang dapat di setor')
      return 
    }else {
      this.balance += depo
      
      this.transactions.push(new Transaction(depo, 'credit', 'nyetor'))
      console.log('Anda sukses menyimpan uang ke dalam bank.')
    }
  }
  debet(nominalWd,note) {
    if(nominalWd > this.balance) {
      console.log('Saldo anda tidak cukup')
      return
    }
    if(this.balance -nominalWd < this.minimumBalance) {
      console.log('Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.')
      return
    }
      this.balance -= nominalWd
      this.transactions.push(new Transaction(nominalWd,'debet',note))
      console.log('Anda sukses menarik uang dari bank')
  }
  transfer(targetAccount,nominal) {
    if(nominal > this.balance|| this.balance-nominal < this.minimumBalance) {
      console.log(`Anda gagal transfer ke ${targetAccount.memberName}`)
      return
    }
    this.balance -= nominal
    targetAccount.balance += nominal
    this.transactions.push(new Transaction(nominal,'debet',`transfer ke akun ${targetAccount.memberName}`))
    targetAccount.transactions.push(new Transaction(nominal,'credit',`transfer dari akun ${this.memberName}`))
    console.log(`Anda sukses transfer ke ${targetAccount.memberName}`)
  }
}

class Platinum extends Member{
  // Tulis Code Disini
  constructor(memberName,accountNumber,balance) {
    super(memberName,accountNumber,balance,50000,'platinum')
  }
  
}

class Silver extends Member{
  // Tulis Code Disini
  constructor(memberName,accountNumber,balance) {
    super(memberName,accountNumber,balance,10000,'silver')
    
  }
}

class Transaction {
  // Tulis Code Disini
  constructor(nominal,status,note) {
    this.nominal = nominal
    this.status = status
    this.date = new Date()
    this.note = note
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

