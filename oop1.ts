// Soal 1: Warisan (Inheritance) dan Metode Deskripsi
class Shape {
  public constructor(public sides: number) {}

  public area(): number {
    throw Error("Area function must be overrided");
  }
}

class Triangle extends Shape {
  public constructor(public width: number, public height: number) {
    super(3);
  }

  public override area() {
    return this.width * this.height / 2;
  }
}

class Rectangle extends Shape {
  public constructor(public width: number, public height: number) {
    super(4);
  }

  public override area() {
    return this.width * this.height;
  }
}

const triangle = new Triangle(3, 4);
const rectangle = new Rectangle(5, 6);

console.log(triangle.area(), rectangle.area());

// Soal 2: Polimofisme dan Antarmuka
class Vehicle {
  public constructor(public brand: string, public type: string, public year: number) {}

  public getInfo(): string {
    return `${this.brand} ${this.type} ${this.year}`;
  }
}

class Car extends Vehicle {
  public override getInfo() {
    return `${super.getInfo()} Car`;
  }
}

class Motorcycle extends Vehicle {
  public override getInfo() {
    return `${super.getInfo()} Motorcycle`;
  }
}

const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getInfo());

const motorcycle = new Motorcycle("Honda", "CBR", 2022);
console.log(motorcycle.getInfo());

// Soal 3: Enkapsulasi dan Validasi Deskripsi
// Ket: Untuk metode ini sebagai pengganti dri underscore sebelum variable (_variable)
// saya menggunakan "private" untuk mengenkapsulasi 
class Student {
  public constructor(private name: string, private age: number, private grade: number) {}

  private doValidation(): void {
    this.ageValidation();
    this.gradeValidation();
  }

  private ageValidation(): void {
    if (this.age < 6 || this.age > 18) throw RangeError("Invalid Age");
  }

  private gradeValidation(): void {
    if (this.grade < 0 || this.grade > 100) throw RangeError("Invalid Grade");
  }

  public getInfo(): string {
    try {
      this.doValidation();
      return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    } catch (e) {
      return (e as RangeError).message;
    }
  }
}

const student1 = new Student("Alice Margatroid", 12, 85);
const student2 = new Student("Bob Skywalker", 20, 95);

console.log(student1.getInfo());
console.log(student2.getInfo());
