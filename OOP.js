// Soal 1: Warisan (Inheritance) dan Metode
class Shape {
  constructor(sides) {
    this.sides = sides;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() {
    return (this.base * this.height) / 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30

// Soal 2: Polimorfisme dan Antarmuka
class Vehicle {
  constructor(name, brand, year) {
    this.name = name;
    this.brand = brand;
    this.year = year;
  }

  getInfo() {
    return `${this.name} ${this.brand} ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(name, brand, year) {
    super();
    this.name = name;
    this.brand = brand;
    this.year = year;
    this.type = "Car";
  }

  getInfo() {
    return `${this.name} ${this.brand} ${this.year} ${this.type}`;
  }
}

class Motorcycle extends Vehicle {
  constructor(name, brand, year) {
    super();
    this.name = name;
    this.brand = brand;
    this.year = year;
    this.type = "Motorcycle";
  }

  getInfo() {
    return `${this.name} ${this.brand} ${this.year} ${this.type}`;
  }
}

const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle("Honda", "CBR", 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

// Soal 3: Enkapsulasi dan Validasi
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getInfo() {
    switch (true) {
      case this.age < 6 || this.age > 18:
      case this.grade < 0 || this.grade > 100:
        return "Invalid age or grade";
    }

    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student1 = new Student("Alice", 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student("Bob", 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade
