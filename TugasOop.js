// Soal 1: Warisan (Inheritance) dan Metode

class Shape {
    constructor(sides) {
        this.sides = sides;
    }
}

class Triangle extends Shape {
    constructor(basis, heigth) {
        super(3);
        this.basis = basis
        this.heigth = heigth
    }

    area() {
        return 0.5 * this.basis * this.heigth;
    }
}

class Rectangle extends Shape {
    constructor(width, heigth) {
        super(4);
        this.width = width
        this.heigth = heigth
    }

    area() {
        return this.width * this.heigth;
    }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30

// Soal 2: Polimorfisme dan Antarmuka

class Vehicle {
    constructor(brand, name, year) {
        this.brand = brand,
        this.name = name,
        this.year = year
    }
}

class Car extends Vehicle {
    getInfo() {
        return `${this.brand}, ${this.name}, ${this.year} Car`
    }
}

class Motorcycle extends Vehicle {
    getInfo() {
        return `${this.brand}, ${this.name}, ${this.year} Motorcycle`
    }
}

const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

// Soal 3: Enkapsulasi dan Validasi

class Student {
    constructor(name, age, grade) {
        this._name = name,
        this._age = age,
        this._grade = grade
    }

    getInfo() {
        if(this._age < 6 || this._age > 18 && this._grade < 0 || this._grade > 100) {
            return "Invalid age or grade"
        } else {
            return `Name: ${this._age}, Age: ${this._age}, Grade: ${this._grade}`
        }
    }
}

const student1 = new Student('Alice', 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student('Bob', 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade