function generateLuhn7() { // kemarin aku baru belajar cybersecurity wak. Terus my mentor jelasin tentang Luhn Algorithm
    let data = Math.floor(Math.random() * 900000) + 100000;
    if (!/^\d{6}$/.test(data)) {
      throw new Error("Input harus tepat 6 digit.");
    }
    let sum = 0;
    let shouldDouble = true; // karena check digit akan berada di paling kanan
    for (let i = data.length - 1; i >= 0; i--) {
      let digit = Number(data[i]);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return data + checkDigit;
}


class Bank {
  // Tulis Code Disini
  constructor(namaBank) {
    this.namaBank = namaBank;
  }

  register(nama, type, saldoAwal) {
    if (type === "platinum") {
      if (saldoAwal < 50000) {
        console.log(`Saldo awal kurang dari minimum saldo yang ditentukan`);
      } else {
        nama._bankAccount = new Platinum(nama._name, generateLuhn7(), saldoAwal);
        console.log(`Selamat datang ke ${this.namaBank}, ${nama._name}. Nomor akun anda adalah ${nama._bankAccount.accountNumber}. Total saldo adalah ${nama._bankAccount.balance}`);
      }
    } else if (type === "silver"){
      if (saldoAwal < 10000) {
        console.log(`Saldo awal kurang dari minimum saldo yang ditentukan`);
      } else {
        nama._bankAccount = new Silver(nama._name, generateLuhn7(), saldoAwal);
        console.log(`Selamat datang ke ${this.namaBank}, ${nama._name}. Nomor akun anda adalah ${nama._bankAccount.accountNumber}. Total saldo adalah ${nama._bankAccount.balance}`);
      }
    }
  }
}

class Person {
  // Tulis Code Disini
  constructor(name) {
    this._name = name;
    this._bankAccount = null;
  }

  get name() {
    return this._name;
  }

  get bankAccount() {
    return this._bankAccount;
  }
}

class Member {
  // Tulis Code Disini
  constructor(memberName, accountNumber, minimumBalance, balance) {
    this.memberName = memberName;
    this.accountNumber = accountNumber;
    this.minimumBalace = minimumBalance;
    this.balance = balance;
    this.transactions = [];
  }

  credit(uangMasuk) {

    if (uangMasuk >= 50000) {
      this.balance += uangMasuk;
      let transaksiBaru = new Transaction(uangMasuk, "credit", "nyetor");
      this.transactions.push(transaksiBaru);
      console.log("Anda sukses menyimpan uang ke dalam bank");
    } else {
      console.log("Belum memenuhi minimal uang yang dapat di setor");
    }
  }

  debet(nominalDitarik, note) {
    if (nominalDitarik > this.balance) {
      console.log("Saldo anda tidak cukup");
    } else if (this.balance - nominalDitarik < this.minimumBalace) {
      console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi");
    } else {
      this.balance -= nominalDitarik;
      let transaksiBaru = new Transaction(nominalDitarik, "debet", note);
      this.transactions.push(transaksiBaru);
      console.log("Anda sukses menarik uang dari bank");
    }
  }

  transfer(akunTujuan, nominalTransfer) {
    if (this.balance < nominalTransfer) {
      console.log(`Anda Gagal transfer ke ${akunTujuan.memberName}`);
    } else if (this.balance - nominalTransfer < this.minimumBalace) {
      console.log(`Anda Gagal transfer ke ${akunTujuan.memberName} karena saldo minimum tidak terpenuhi`);
    } else {
      this.balance-=nominalTransfer;
      akunTujuan.balance+=nominalTransfer;
      let transaksiPengirim = new Transaction(nominalTransfer, "debet", `trasnfer ke akun ${akunTujuan.memberName}`);
      let transaksiPenerima = new Transaction(nominalTransfer, "credit", `transfer dari akun ${this.memberName}`);

      this.transactions.push(transaksiPengirim);
      akunTujuan.transactions.push(transaksiPenerima);
      console.log(`Anda sukses transfer ke ${akunTujuan.memberName}`);
    }
  }
}

class Platinum extends Member{
  // Tulis Code Disini
  constructor(memberName, accountNumber, balance) {
    super(memberName, accountNumber, 50000, balance);
    this.type = "platinum";
  }
}

class Silver extends Member{
  // Tulis Code Disini
  constructor(memberName, accountNumber, balance) {
    super(memberName, accountNumber, 10000, balance);
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
