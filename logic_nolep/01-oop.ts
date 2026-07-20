class Bank {
  public memberName: string;

  constructor(name: string) {
    this.memberName = name;
  }

  register(person: Person, type: "platinum" | "silver", balance: number) {
    try {
      let account: Member;

      switch (type) {
        case "platinum":
          account = new Platinum(person.name, balance);
          break;
        case "silver":
          account = new Silver(person.name, balance);
          break;
      }

      person.setBankAccount(account!);

      console.log(
        `Selamat datang ke ${this.memberName}, ${person.name}. Nomor Akun anda adalah ${account!.accountNumber}. Total saldo adalah ${balance}`,
      );
    } catch (e: any) {
      console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
    }
  }
}

class Person {
  public name: string;
  public bankAccount!: Member;

  constructor(name: string) {
    this.name = name;
  }

  setBankAccount(bank: Member) {
    this.bankAccount = bank;
  }
}

class Member {
  public memberName: string;
  public accountNumber: number;
  protected balance: number;
  public transactions: Transaction[] = [];
  public type: string;

  constructor(name: string, initialBalance: number, type: string) {
    this.memberName = name;
    this.accountNumber = Math.floor(Math.random() * 10000000);
    this.balance = initialBalance;
    this.type = type;
  }

  credit(amount: number) {
    if (amount < 10000) {
      console.log("Belum memenuhi minimal uang yang dapat di setor");
      return;
    }

    this.balance += amount;

    this.transactions.push(
      new Transaction(amount, "credit", "nyetor")
    );

    console.log("Anda sukses menyimpan uang ke dalam bank.");
  }

  debet(amount: number, reason: string) {
    if (amount > this.balance) {
      console.log("Saldo anda tidak cukup");
      return;
    }

    if (this.balance - amount < (this as any).minimumBalance) {
      console.log(
        "Saldo minimum anda tidak terpenuhi untuk melakukan transaksi."
      );
      return;
    }

    this.balance -= amount;

    this.transactions.push(
      new Transaction(amount, "debet", reason)
    );

    console.log("Anda sukses menarik uang dari bank");
  }

  transfer(member: Member, amount: number) {
    if (this.balance - amount < (this as any).minimumBalance) {
      console.log(`Anda gagal transfer ke ${member.memberName}`);
      return;
    }

    this.balance -= amount;
    member.balance += amount;

    this.transactions.push(
      new Transaction(amount, "debet", `transfer ke akun ${member.memberName}`)
    );

    member.transactions.push(
      new Transaction(amount, "credit", `transfer dari akun ${this.memberName}`)
    );

    console.log(`Anda sukses transfer ke ${member.memberName}`);
  }
}

class Platinum extends Member {
  public minimumBalance = 50000;

  constructor(name: string, initialBalance: number) {
    if (initialBalance < 50000) {
      throw new Error();
    }

    super(name, initialBalance, "platinum");
  }
}

class Silver extends Member {
  public minimumBalance = 10000;

  constructor(name: string, initialBalance: number) {
    if (initialBalance < 10000) {
      throw new Error();
    }

    super(name, initialBalance, "silver");
  }
}

class Transaction {
  public nominal: number;
  public status: "credit" | "debet";
  public date: Date;
  public note: string;

  constructor(nominal: number, status: "credit" | "debet", note: string) {
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
