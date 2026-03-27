//Inheritance
class Shape {
    constructor(sides){
        this.sides = sides;
    }

    area(){
        console.log(`${this.sides} Masih belum ada`)
    }
}

class Triangle extends Shape {
    constructor(width, height){
        super(3) //3 Sides
        this.width = width;
        this.height= height;
    }

    area(){
        return (this.width*this.height)/2
    }
   
}

class Rectangle extends Shape {
    constructor(width,height){
        super(4) //4 Sides
        this.width = width;
        this.height = height
    }
    area(){
        return this.width*this.height
    }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30

//Polimorphism

class Vehicle {
    getInfo(){
        return "Belom, Sabar"
    }
}

class Car extends Vehicle {
    constructor(brand, variant, year){
        super();
        this.brand = brand;
        this.variant = variant;
        this.year = year
    }
    getInfo(){
        return `${this.brand} ${this.variant} ${this.year} Car`
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, variant, year){
        super();
        this.brand = brand;
        this.variant = variant;
        this.year = year
    }
    getInfo(){
        return `${this.brand} ${this.variant} ${this.year} Motorcycle`
    }
}


const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

//Encapsulation

class Student {
    constructor(name, age, grade){
        this._name = name;
        this._age = age;
        this._grade = grade;
    }
    
    getInfo(){
        if (this.isValidAge() && this.isValidGrade()) {
            return `Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`;
        } else {
            return "Invalid Age or Grade";
        }
    }

    isValidAge() {
        return this._age > 5 && this._age < 19; 
    }

    isValidGrade() {
        return this._grade > -1 && this._grade < 101;
    }
}

const student1 = new Student('Alice', 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student('Bob', 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade