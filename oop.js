class Bank {
    constructor(bankName) {
        this.bankName = bankName
    }

    register(person, type, balance) {
        if (type === 'platinum' && balance > 50000) {
            person.bankAccount = new Platinum(person.name, balance);
            console.log(`Selamat datang ke ${this.bankName}, ${person.name}. Nomor Akun anda adalah ${person.bankAccount.accountNumber}. Total saldo adalah ${balance}`);
        } else if (type === 'silver' && balance > 10000) {
            person.bankAccount = new Silver(person.name, balance);
            console.log(`Selamat datang ke ${this.bankName}, ${person.name}. Nomor Akun anda adalah ${person.bankAccount.accountNumber}. Total saldo adalah ${balance}`);
        } else {
            console.log(`Saldo awal kurang dari minimum saldo yang ditentukan.`);
        }
    }    
  }
  
  class Person {
    constructor(name) {
        this.name = name
    }
  }
  
  class Member {
    constructor(memberName, minimumBalance, balance) {
        this.memberName = memberName,
        this.accountNumber = Math.floor(Math.random() * 1000000),
        this.minimumBalance = minimumBalance, 
        this.balance = balance,
        this.transactions = []
    }

    credit(nominal) {
        if (nominal < 5000) {
            console.log(`Belum memenuhi minimal uang yang dapat disetor.`);
            return;
        }

        this.balance += nominal;
        this.transactions.push(new Transaction(nominal, 'credit', new Date(), 'nyetor'));
        console.log(`Anda sukses menyimpan uang ke dalam bank.`);
    }

    debet(nominal, note) {
        if (this.balance < nominal) {
            console.log(`Saldo anda tidak cukup.`);
            return;
        } 
        
        if (this.balance - nominal < this.minimumBalance) {
            console.log(`Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.`);
            return;
        }
        
        this.balance -= nominal;
        this.transactions.push(new Transaction(nominal, 'debet', new Date(), note));
        console.log(`Anda sukses menarik uang dari bank.`);
    }

    transfer(targetAccount, nominal) {
        if (this.balance < nominal) {
            console.log(`Anda gagal transfer ke ${targetAccount.memberName}`);
            return;
        }
        
        if (this.balance - nominal < this.minimumBalance) {
            console.log(`Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.`);
            return;
        }
        
        
        this.balance -= nominal;
        targetAccount.balance += nominal;
        targetAccount.transactions.push(new Transaction(nominal, 'credit', new Date(), `Transfer dari akun ${this.memberName}`));
        this.transactions.push(new Transaction(nominal, 'debet', new Date(), `Transfer ke akun ${targetAccount.memberName}`)); 
        console.log(`Anda sukses transfer ke ${targetAccount.memberName}`);
    }
  }
  
  class Platinum extends Member{
    constructor(memberName, balance) {
        super(memberName, 50000, balance);
        this.type = 'platinum';
    }
  }
  
  class Silver extends Member{
    constructor(memberName, balance) {
        super(memberName, 10000, balance);
        this.type = 'silver';
    }
  }
  
  class Transaction {
        constructor(nominal, status, date, note) {
            this.nominal = nominal,
            this.status = status, 
            this.date = date,
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
  
//   **Dilarang mengubah code testcase**