// Soal 1: Warisan (Inheritance) dan Metode
class Shape {
  area() {
    return 0;
  }
}

class Triangle extends Shape {
  constructor(pedestal, height) {
    super();
    this.pedestal = pedestal;
    this.height = height;
  }

  area() {
    return (1 / 2) * this.pedestal * this.height;
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
console.log(triangle.area());

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area());

// Soal 2: Polimorfisme dan Antarmuka
class Vehicle {
  getInfo() {
    return '';
  }
}

class Car extends Vehicle {
  constructor(brand, model, production) {
    super();
    this.brand = brand;
    this.model = model;
    this.production = production;
    this.type = 'Car';
  }

  getInfo() {
    return `${this.brand} ${this.model} ${this.production} ${this.type}`
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, model, production) {
    super();
    this.brand = brand;
    this.model = model;
    this.production = production;
    this.type = 'Motorcycle';
  }

  getInfo() {
    return `${this.brand} ${this.model} ${this.production} ${this.type}`
  }
}

const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo());

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo());

//Soal 3: Enkapsulasi dan Validasi
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getInfo() {
    if(this.age >= 6 && this.age <= 18 && this.grade >= 0 && this.grade <= 100) {
      return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    } else {
      return 'Invalid Age or Grade';
    }
  }
}

const student1 = new Student('Alice', 12, 85);
console.log(student1.getInfo());

const student2 = new Student('Bob', 20, 95);
console.log(student2.getInfo());