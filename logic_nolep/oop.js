class Bank {
  // Tulis Code Disini
  constructor(bankName){
    this.bankName = bankName;
  }

  register(person, type, firstBalance){
    if ((type === "platinum" && firstBalance >= 50000) || (type === "silver" && firstBalance >= 10000)){
      let accountNumber = Math.floor(1000000 * Math.random());
      if (type === "platinum") person.bankAccount = new Platinum (person.personName, accountNumber, firstBalance);
      else if (type === "silver"){ 
        let account = new Silver (person.personName, accountNumber, firstBalance); 
        person.bankAccount = account;
      }
      return `Selamat datang ke ${this.bankName}, ${person.personName}. Nomor akun anda adalah ${accountNumber}. Saldo anda adalah ${firstBalance}`;
      
    } else return `Maaf saldo awal tidak mencukupi`;
  }
}

class Person {
  // Tulis Code Disini
  constructor(personName){
    this.personName = personName;
    this.bankAccount = null;
  }
}

class Member {
  // Tulis Code Disini
  constructor(memberName, accountNumber, minimumBalance, balance){
    this.memberName = memberName;
    this.accountNumber = accountNumber;
    this.minimumBalance = minimumBalance;
    this.balance = balance;
    this.transactions = [];
  }

  credit(nominal) {
    if (nominal >= this.minimumBalance) {
      let dates = new Date()
      let trans = new Transaction(nominal, "credit", dates, "nyetor")
      this.balance = this.balance + nominal;
      this.transactions.push(trans);
      console.log(`Anda berhasil neyimpan uang sebesar ${nominal}`);
    } else console.log(`Belum memenuhi minimal uang yg dapat disetor`);
  }

  debet(nominal, note){
    if (nominal >= this.minimumBalance && nominal < this.balance){
      if (this.balance - nominal >= this.minimumBalance) {
        let dates = new Date();
        let trans = new Transaction(nominal, "debet", dates, note);
        this.balance = this.balance - nominal;
        this.transactions.push(trans);
        console.log(`Anda berhasil menarik uang sebesar ${nominal}`);
      } else console.log(`Saldo minimum anda tidak mencukupi untuk melakukan transaksi`)
    } else if (nominal > this.balance) console.log (`Saldo anda tidak cukup`)
  }

  transfer(account, nominal){
    if (this.balance - nominal < this.minimumBalance) console.log(`Anda gagal tranfer ke ${account.memberName}`);
    else {
      let dates = new Date();
      let transSend = new Transaction(nominal, "debet", dates, `Transfer ke akun ${account.memberName}`);
      let transReceive = new Transaction(nominal, "credit", dates, `Transfer dari akun ${this.memberName}`);
      account.balance = account.balance + nominal;
      this.balance = this.balance - nominal;
      this.transactions.push(transSend);
      account.transactions.push(transReceive);
      console.log(`Anda sukses transfer ke ${account.memberName}`);}
  }
}

class Platinum extends Member{
  // Tulis Code Disini
  constructor(memberName, accountNumber, balance){
    super(memberName, accountNumber, 50000, balance);
    this.type = "platinum";
  }
}

class Silver extends Member{
  // Tulis Code Disini
  constructor(memberName, accountNumber, balance){
    super(memberName, accountNumber, 10000, balance);
    this.type = "silver"
  }
}

class Transaction {
  // Tulis Code Disini
  constructor(nominal, status, date, note){
    this.nominal = nominal;
    this.status = status;
    this.date = date;
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


