//Soal 1 = Warisan (Inheritance) dan Metode
class Shape {
  constructor(side1, side2) {
    this.side1 = side1;
    this.side2 = side2;
  }
}

class Triangle extends Shape {
  area() {
    return (this.side1 * this.side2) / 2;
  }
}

class Rectangle extends Shape {
  area() {
    return this.side1 * this.side2;
  }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30

//!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End of soal 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Soal 2 = Polimorfisme dan Antarmuka

class Vehicle {
  constructor(company, merk, publishedYear) {
    this.company = company;
    this.merk = merk;
    this.publishedYear = publishedYear;
  }
  getInfo() {
    return `${this.company} ${this.merk} ${this.publishedYear}`;
  }
}

class Motorcycle extends Vehicle {
  getInfo() {
    return `${this.company} ${this.merk} ${this.publishedYear} Motorcycle`;
  }
}

class Car extends Vehicle {
  getInfo() {
    return `${this.company} ${this.merk} ${this.publishedYear} Car`;
  }
}

const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle("Honda", "CBR", 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

//!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End of soal 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Student {
  constructor(name, age, grade) {
    this._name = name;
    this._age = age;
    this._grade = grade;
  }
  getInfo() {
    if (!(this._age >= 6 && this._age <= 18) || !(this._grade >= 0 && this._grade <= 100)) {
      return "Invalid Age or Grade";
    }
    return `Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`;
  }
}

const student1 = new Student("Alice", 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student("Bob", 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade
