class Bank {
    // Tulis Code Disini
    constructor(name){
        this.name = name;
        this.person = [];
        this._bankAccountId = 1;
    }

    register(person, type, balance){
      let accountNumber = this._bankAccountId++;
          if(type === "platinum"){
            if(balance > 50000){
              const bankAccount = new Platinum(person.name, accountNumber, balance);
              person.bankAccount = bankAccount
              console.log(`Selamat datang ke ${this.name}, ${person.name}. Nomor akun anda adalah ${bankAccount.accountNumber}. Total saldo adalah ${bankAccount.balance}`);           
            }else{
              console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
            }

          }
  
          if(type === "silver"){
            if(balance > 10000){
              const bankAccount = new Silver(person.name, accountNumber, balance);
              person.bankAccount = bankAccount;
              console.log(`Selamat datang ke ${this.name}, ${person.name}. Nomor akun anda adalah ${bankAccount.accountNumber}. Total saldo adalah ${bankAccount.balance}`);

            }else{
              console.log("Saldo awal kurang dari minimum saldo yang ditentukan")
            }
          }
    }
  }
  
  class Person {
    // Tulis Code Disini
    constructor(name){
        this.name = name;
        this.bankAccount = null;
    }
  }
  
  class Member {
    // Tulis Code Disini
    constructor(name, accountNumber, balance){
      this.memberName = name;
      this.accountNumber = accountNumber;
      this.balance = balance;
      this.transactions = []
    }

    credit(nominal){
      if(nominal >= 100000){
        const transaction = new Transaction(nominal, "credit", "nyetor");
        this.transactions.push(transaction);
        this.balance += transaction.nominal;
        console.log("Anda sukses menyimpan uang ke dalam bank");
      }else{
        console.log("Belum memenuhi minimal uang yang dapat di setor");
      }
    }

    debet(nominal, note){
      const transaction = new Transaction(nominal, "debet", note);
      this.transactions.push(transaction);
      this.balance -= transaction.nominal;
      console.log("Anda sukses menarik uang dari bank");
    }

    transfer(account, nominal){
      const transaction = new Transaction(nominal, "debet", `transfer ke akun ${account.memberName}`);
      const transactionCredit = new Transaction(nominal, "credit", `transfer dari akun ${this.memberName}`);
      account.transactions.push(transactionCredit);
      account.balance += transactionCredit.nominal;
      this.transactions.push(transaction);
      this.balance -= transaction.nominal;
    }

  }  
  class Platinum extends Member{
    // Tulis Code Disini
    constructor(memberName, accountNumber, balance){
        super(memberName, accountNumber, balance)
        this.minimumBalance = 50000;
        this.type = 'platinum';
    }

    debet(nominal, note){
      const minimumNominal= this.balance - this.minimumBalance;

      if(nominal < minimumNominal){
        super.debet(nominal, note);
      }else if(nominal < this.balance && nominal>minimumNominal){
        console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.");
      }else{
        console.log("Saldo anda tidak cukup");
      }
    }

    transfer(account, nominal){
      const minimumNominal= this.balance - this.minimumBalance;

      if(nominal < minimumNominal){
        super.transfer(account, nominal)
        console.log(`Anda sukses transfer ke ${account.memberName}`);
      }else{
        console.log(`Anda gagal transfer ke ${account.memberName}`);
      }
    }

  }
  
  class Silver extends Member{
    // Tulis Code Disini
    constructor(memberName, accountNumber, balance){
        super(memberName, accountNumber, balance)
        this.minimumBalance = 10000;
        this.type = 'silver';
    }

    debet(nominal, note){
      const minimumNominal= this.balance - this.minimumBalance;
      if(nominal < minimumNominal){
        super.debet(nominal, note);
      }else if(nominal < this.balance && nominal>minimumNominal){
        console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.");
      }else{
        console.log("Saldo anda tidak cukup");
      }
    }
  }
  
  class Transaction {
    // Tulis Code Disini
    constructor(nominal, status, note){
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