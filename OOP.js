/**
 *
 * Inheritance
 *
 * */
class Shape {
  area() {
    return 0;
  }
}

class Triangle extends Shape {
  constructor(alas, tinggi) {
    super();
    this.alas = alas;
    this.tinggi = tinggi;
  }

  area() {
    return (1 / 2) * this.alas * this.tinggi;
  }
}

class Rectangle extends Shape {
  constructor(panjang, lebar) {
    super();
    this.panjang = panjang;
    this.lebar = lebar;
  }

  area() {
    return this.panjang * this.lebar;
  }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30

/**
 *
 * Polymorphism
 *
 * */
class Vehicle {
  constructor(nama, tipe, tahun) {
    this.nama = nama;
    this.tipe = tipe;
    this.tahun = tahun;
  }

  getInfo() {
    return `${this.nama} ${this.tipe} ${this.tahun} `;
  }
}

class Car extends Vehicle {
  getInfo() {
    return `${this.nama} ${this.tipe} ${this.tahun} Car`;
  }
}

class Motorcycle extends Vehicle {
  getInfo() {
    return `${this.nama} ${this.tipe} ${this.tahun} Motorcycle`;
  }
}

const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle("Honda", "CBR", 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

/**
 *
 * Encapsulation
 *
 * */
class Student {
  constructor(name, age, grade) {
    this._name = name;
    this._age = age;
    this._grade = grade;
  }

  getInfo() {
    const cond1 = this._age >= 18 || this._age <= 6;
    const cond2 = this._grade >= 100 || this._grade <= 0;
    if (cond1 || cond2) {
      return "Invalid Age or Grade.";
    } else {
      return `Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`;
    }
  }
}

const student1 = new Student("Alice", 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student("Bob", 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade
