// Soal 1
class Shape {
  constructor(sideOne, sideTwo) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
  }
}

class Triangle extends Shape {
  area() {
    return (1 / 2) * this.sideOne * this.sideTwo;
  }
}

class Rectangle extends Shape {
  area() {
    return this.sideOne * this.sideTwo;
  }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area());

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area());

// Soal 2
class Vehicle {
  getInfo() {
    return 0;
  }
}

class Car extends Vehicle {
  constructor(brand, name, year) {
    super();
    this.brand = brand;
    this.name = name;
    this.year = year;
  }

  getInfo() {
    return `${this.brand} ${this.name} ${this.year} Car`;
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, name, year) {
    super();
    this.brand = brand;
    this.name = name;
    this.year = year;
  }

  getInfo() {
    return `${this.brand} ${this.name} ${this.year} Motorcycle`;
  }
}

const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo());

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo());

// Soal 3
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this._age = age;
    this._grade = grade;
  }

  getInfo() {
    if (this._age < 5 || this._age > 18 && this._grade < 0 || this._grade > 100) {
      return 'Invalid Age or Grade';
    } else {
      return `Name: ${this.name}, Age: ${this._age}, Grade: ${this._grade}`;
    }
  }
}

const student1 = new Student('Alice', 12, 85);
console.log(student1.getInfo());

const student2 = new Student('Bob', 18, 45);
console.log(student2.getInfo());