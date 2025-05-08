class Shape {
  constructor(side) {
    this.side = side;
  }
  area() {
    return 0;
  }
}
class Triangle extends Shape {
  constructor(side, height) {
    super(side);
    this.height = height;
  }
  area() {
    return (this.side * this.height) / 2;
  }
}

class Rectangle extends Shape {
  constructor(side, width) {
    super(side);
    this.width = width;
  }
  area() {
    return this.side * this.width;
  }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30

class Vehicle {
  constructor(brand, type, year) {
    this.brand = brand;
    this.type = type;
    this.year = year;
  }

  getInfo() {
    return `${this.brand} ${this.type} ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(brand, type, year) {
    super(brand, type, year);
  }
  getInfo() {
    return `${super.getInfo()} Car`;
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, type, year) {
    super(brand, type, year);
  }
  getInfo() {
    return `${super.getInfo()} Motorcycle`;
  }
}

const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle("Honda", "CBR", 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

class Student {
  #name;
  #age;
  #grade;
  constructor(name, age, grade) {
    this.#name = name;
    this.#age = age;
    this.#grade = grade;
  }
  getInfo() {
    let result;
    if (
      this.#age >= 6 &&
      this.#age <= 18 &&
      this.#grade >= 0 &&
      this.#grade <= 100
    ) {
      result = `Name: ${this.#name}, Age: ${this.#age}, Grade:${this.#grade} `;
    } else {
      result = "Invalid Age or Grade";
    }
    return result;
  }
}
