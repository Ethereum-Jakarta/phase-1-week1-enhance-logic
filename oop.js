// Soal 1: Warisan (Inheritance) dan Metode

class Shapes {
    constructor(sides) {
        this.sides = sides
    }
}

class Triangle extends Shapes {
    constructor(width, height) {
        super(3)
        this.width = width
        this.height = height
    }
    area(){
        return 1/2 * this.width * this.height
    }
}

class Rectangle extends Shapes {
    constructor(width, height) {
        super(4)
        this.width = width
        this.height = height
    }

    area() { 
        return this.width * this.height
    }
}



const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30


//Soal 2: Polimorfisme dan Antarmuka
class Vehicle {
    constructor(merk, type, tahun){
        this.merk = merk
        this.type = type
        this.tahun = tahun
    }

    getInfo() {
        return this.merk + this.type + this.tahun
    }
}

class Car extends Vehicle{
    constructor(merk, type, tahun){
        super(merk, type, tahun)
    }

    getInfo() {
        return `${this.merk} ${this.type} ${this.tahun} Car `
    }
}

class Motorcycle extends Vehicle{
    constructor(merk, type, tahun){
        super(merk, type, tahun)
    }

    getInfo() {
        return `${this.merk} ${this.type} ${this.tahun} Motorcycle`
    }
}

const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle


// Soal 3: Enkapsulasi dan Validasi
class Student {
    constructor(nama, umur, nilai) {
        this._nama = nama
        this._umur = umur
        this._nilai = nilai 
    }

    getInfo() {
        if(this._umur >= 6 && this._umur <= 18 && this._nilai >= 0 && this._nilai <= 100){
            return `Name : ${this._nama}, Age : ${this._umur}, Grade : ${this._nilai}`
        }else{
            return 'Invalid Age or Grade'
        }
    }
}

const student1 = new Student('Alice', 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student('Bob', 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade

