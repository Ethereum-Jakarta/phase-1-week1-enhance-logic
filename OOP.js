class Shape {
    area() {
      return 0;
    }
  }
  
  class Triangle extends Shape {
    constructor(alas,tinggi) {
      super();
      this.alas = alas;
      this.tinggi = tinggi;
    }
  
    area() {
      return this.alas * this.tinggi / 2;
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


  console.log("soal 2")

  class vehicle {
    getInfo() {
      return 0;
    }
  }
  
  class Car extends vehicle {
    constructor(merk,type,tahun) {
      super();
      this.merk = merk;
      this.type = type;
      this.tahun = tahun;
    }
  
    getInfo() {
      return "Output: "+this.merk+" "+this.type+" "+this.tahun+" Car"
    }
  }
  class Motorcycle extends vehicle {
    constructor(merk,type,tahun) {
      super();
      this.merk = merk;
      this.type = type;
      this.tahun = tahun;
    }
  
    getInfo() {
      return "Output: "+this.merk+" "+this.type+" "+this.tahun+" Motorcycle"
    }
  }


const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

console.log("soal 3")

class Student {
    constructor(name,age,grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
      }
    getInfo() {
        // console.log(this.age, this.grade)
      if(this.age<5||this.age>19){
        return "Output: Invalid Age or Grade"
    }else if(this.grade<0||this.grade>100)  {
          return "Output: Invalid Age or Grade"
      }
      return "Output: Name: "+this.name+", Age: "+this.age+", Grade: "+this.grade
    }
  }


const student1 = new Student('Alice', 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student('Bob', 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade