class Person {
    constructor(name){
        this._name = name; // dikasih "_" biar gak infinite recursive
        this._bankAccount = null;
    }

    get name() {
        return this._name;
    }

    get bankAccount() {
        return this._bankAccount;
    }
}

let nadia = new Person('Nadia')
console.log(nadia.name)
console.log(nadia.bankAccount)