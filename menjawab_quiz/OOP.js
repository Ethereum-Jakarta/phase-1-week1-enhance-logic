class Bank {
  constructor(name){
    this.bankName = name;
    this.bankAccount = [];
  }

  register(memberName, memberType, balance) {
    if(memberType.toLowerCase() === "platinum"){
      if(balance >= 50000){
        let userName = memberName.name;
        const accountNumber = Math.floor(Math.random() * 10000000);
        let account = new Platinum(balance);
        account.memberName = memberName.name;
        account.accountNumber = accountNumber;
        account.balance = balance;
        memberName.bankAccount = account;

        this.bankAccount.push(memberName);


        return `Selamat datang ke ${this.bankName}, ${userName}. Nomor Akun anda adalah ${accountNumber}. Total saldo adalah 54000`
      } else{
        return `Saldo awal kurang dari minimum saldo yang ditentukan`
      }
    } else if(memberType.toLowerCase() === "silver"){
      if(balance >= 10000){
        let userName = memberName.name;
        const accountNumber = Math.floor(Math.random() * 10000000);
        let account = new Silver(balance);
        account.memberName = memberName.name;
        account.accountNumber = accountNumber;
        account.balance = balance;
        memberName.bankAccount = account;

        this.bankAccount.push(memberName);

        return `Selamat datang ke ${this.bankName}, ${userName}. Nomor Akun anda adalah ${accountNumber}. Total saldo adalah 54000`
      } else{
        return `Saldo awal kurang dari minimum saldo yang ditentukan`
      }
    }
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.bankAccount = null;
  }
}

class Member {
  constructor(name, accNum){
    this.memberName = name;
    this.accountNumber = accNum;
    this.minimumBalance = 0;

    this.balance = 0;
    this.transaction = [];
  }

  credit(balance){
    if(balance >= 10000){
      this.balance += balance; 
      let newTransaction = new Transaction(balance);
      newTransaction.status = "credit";
      newTransaction.note = `nyetor`;
      this.transaction.push(newTransaction);

      return `Anda sukses menyimpan uang ke dalam bank.`
    } else {
      return `Belum memenuhi minimal uang yang dapat di setor`
    }
  }

  debet(balance, note){
    if (balance < 150000) {
      return `Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.`;
    } else if(this.balance >= balance){
      this.balance -= balance;
      let newTransaction = new Transaction(balance, note);
      newTransaction.status = "debet";
      this.transaction.push(newTransaction);
    } else {
      return `Saldo anda tidak cukup`;
    }
  }

  transfer(transferTo, balance){
    if(balance > 0 && balance <= this.balance ){
      this.balance -= balance; 
      transferTo.balance += balance; 

      let newTransaction = new Transaction(balance, `transfer ke akun ${transferTo.memberName}`);
      newTransaction.status = "debet";
      this.transaction.push(newTransaction);

      let newTransaction2 = new Transaction(balance, `transfer dari akun ${this.memberName}`);
      newTransaction2.status = "credit";
      transferTo.transaction.push(newTransaction2);


      return `Anda sukses menyimpan uang ke dalam bank.`
    } else {
      return `Anda gagal transfer ke ${transferTo.memberName}`
    }
  }
}

class Platinum extends Member{
  constructor(balance){
    super();
    super.minimumBalance = 50000;
    this.type = "platinum";
  }
}

class Silver extends Member{
  constructor(balance){
    super();
    super.minimumBalance = 10000;
    this.type = "silver";
  }
}

class Transaction {
  constructor(nominal, note){
    this.nominal = nominal;
    this.status = null;
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

console.log(yudhistiraBank);
// Bank {
//   bankName: 'Yudhistira Bank',
//   bankAccount: [
//     Person { name: 'Nadia', bankAccount: [Platinum] },
//     Person { name: 'Semmi Verian', bankAccount: [Silver] }
//   ]
// }