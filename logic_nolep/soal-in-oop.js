class Bank {
  constructor(namaBank) {
      this.namaBank = namaBank;
  }

  register(person, tipeKartu, saldo) {
      if (tipeKartu === "platinum" && saldo < 50000) {
          console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
      } else if (tipeKartu === "platinum" && saldo >= 50000) {
          let platinum = new Platinum(person.namanya, tipeKartu, saldo);
          person.bankAccount = platinum;
          console.log(`Selamat datang ke ${this.namaBank}, ${person.namanya}. Nomor Akun anda adalah ${platinum.accountNumber}. Total saldo adalah ${saldo}`);
      } else if (tipeKartu === "silver") {
          let silver = new Silver(person.namanya, tipeKartu, saldo);
          person.bankAccount = silver;
      }
  }
}

class Person {
  constructor(namanya) {
      this.namanya = namanya;
      this.bankAccount = null;
  }
}

class Member {
  constructor(memberName, tipeKartu, saldo, minimumSaldo) {
      this.memberName = memberName;
      this.accountNumber = Math.floor(Math.random() * 10000000); 
      this.minimumBalance = minimumSaldo;
      this.Balance = saldo;
      this.transactions = [];
      this.type = tipeKartu;
  }

  credit(amount) {
      this.Balance += amount;
      this.transactions.push(new Transaction(amount, 'credit', new Date(), 'nyetor'));
      console.log("Anda sukses menyimpan uang ke dalam bank.");
  }

  debet(amount, note) {
      if (this.Balance - amount < this.minimumBalance) {
          console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.");
          return;
      }
      if (this.Balance >= amount) {
          this.Balance -= amount;
          this.transactions.push(new Transaction(amount, 'debet', new Date(), note));
          console.log("Anda sukses menarik uang dari bank.");
      } else {
          console.log("Saldo anda tidak cukup.");
      }
  }

  transfer(targetAccount, amount) {
      if (this.Balance >= amount) {
          this.Balance -= amount;
          targetAccount.Balance += amount;
          this.transactions.push(new Transaction(amount, 'transfer', new Date(), `transfer ke akun ${targetAccount.memberName}`));
          console.log(`Anda sukses transfer ke ${targetAccount.memberName}`);
      } else {
          console.log("Anda gagal transfer ke " + targetAccount.memberName);
      }
  }
}

class Platinum extends Member {
  constructor(memberName, tipeKartu, saldo) {
      super(memberName, tipeKartu, saldo, 50000); // Minimum balance for Platinum
  }
}

class Silver extends Member {
  constructor(memberName, tipeKartu, saldo) {
      super(memberName, tipeKartu, saldo, 20000); // Minimum balance for Silver
  }
}

class Transaction {
  constructor(nominal, status, date, note) {
      this.nominal = nominal;
      this.status = status;
      this.date = date;
      this.note = note;
  }
}

// TESTCASE
let yudhistiraBank = new Bank('Yudhistira Bank');
let nadia = new Person('Nadia');

yudhistiraBank.register(nadia, 'platinum', 5000);
// Expected: Saldo awal kurang dari minimum saldo yang ditentukan

yudhistiraBank.register(nadia, 'platinum', 540000);
// Expected: Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah ... Total saldo adalah 540000

let nadiaAccount = nadia.bankAccount;

// PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI
nadiaAccount.credit(300000);
// Expected: Anda sukses menyimpan uang ke dalam bank.

nadiaAccount.credit(1000);
// Expected: Belum memenuhi minimal uang yang dapat di setor

nadiaAccount.debet(200000, 'Beli Keyboard');
// Expected: Anda sukses menarik uang dari bank

nadiaAccount.debet(480000, 'Beli Keyboard Lagi');
// Expected: Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.

nadiaAccount.debet(600000, 'Bisa gak ya lebih besar dari balance ? ');
// Expected: Saldo anda tidak cukup

let semmi = new Person('Semmi Verian');
yudhistiraBank.register(semmi, 'silver', 10000000);
let semmiAccount = semmi.bankAccount;

nadiaAccount.transfer(semmiAccount, 100000);
// Expected: Anda sukses transfer ke Semmi Verian
nadiaAccount.transfer(semmiAccount, 1000000);
// Expected: Anda gagal transfer ke Semmi Verian

console.log(nadiaAccount);
// Expected output for Platinum account details
