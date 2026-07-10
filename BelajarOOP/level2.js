class Transaction {
    constructor(nominal, status, note) {
        this.nominal = nominal;
        this.status = status;
        this.date = new Date()
        this.note = note;
    }
}

let t1 = new Transaction(100000, 'credit', 'nyetor')
console.log(t1)