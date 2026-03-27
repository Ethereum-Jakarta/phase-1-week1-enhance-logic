/*
Soal 1: Warisan (Inheritance) dan Metode
Deskripsi: Buatlah kelas Shape dengan properti sides yang menunjukkan jumlah sisi bentuk. Buatlah kelas turunan Triangle dan Rectangle yang mewarisi dari Shape. Implementasikan metode area di masing-masing kelas turunan.
*/

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Triangle extends Shape {
  area() {
    return (this.x * this.y) / 2;
  }
}

class Rectangle extends Shape {
  area() {
    return this.x * this.y;
  }
}

console.log("Soal 1 - Inheritance");
// Input/Output
const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30
console.log("");

/*
Soal 2: Polimorfisme dan Antarmuka
Deskripsi: Buatlah kelas Vehicle dengan metode getInfo yang mengembalikan informasi umum tentang kendaraan. Buatlah kelas turunan Car dan Motorcycle yang mewarisi dari Vehicle dan mengimplementasikan metode getInfo yang spesifik.
*/

class Vehicle {
  constructor(brand, model, year, type) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.type = type;
  }

  getInfo() {
    return `${this.brand} ${this.model} ${this.year} ${this.type}`;
  }
}

class Car extends Vehicle {
  constructor(brand, model, year) {
    super(brand, model, year, "Car");
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, model, year) {
    super(brand, model, year, "Motorcycle");
  }
}

console.log("Soal 2 - Polymorphism");
// Input/Output
const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle("Honda", "CBR", 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle
console.log("");

/*
Soal 3: Enkapsulasi dan Validasi
Deskripsi: Buatlah kelas Student dengan properti name, age, dan grade. Pastikan bahwa umur berada dalam rentang 6 hingga 18 tahun, dan nilai berada dalam rentang 0 hingga 100. Implementasikan metode getInfo untuk mencetak informasi siswa.

Catatan: Pastikan untuk memeriksa batasan umur dan nilai dalam konstruktor atau metode lainnya untuk menghindari data yang tidak valid.
*/

class Student {
  constructor(name, age, grade) {
    this._name = name;
    this._age = age; // 6 - 18
    this._grade = grade; // 0 - 100
  }

  validAge() {
    return this._age >= 6 && this._age <= 18;
  }

  validScore() {
    return this._grade > 0 && this._grade <= 100;
  }

  getInfo() {
    if (this.validAge() && this.validScore()) {
      return `Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`;
    }

    return "Invalid Age or Grade";
  }
}

console.log("Soal 3 - Encapsulation");
// Input/Output
const student1 = new Student("Alice", 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student("Bob", 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade
