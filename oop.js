class Shape {
	area() {
		return 0;
	}
}

class Triangle extends Shape {
	constructor(base, height) {
		super();
		this.base = base;
		this.height = height;
	}

	area() {
		return 0.5 * this.base * this.height;
	}
}

class Rectangle extends Shape {
	constructor(length, width) {
		super();
		this.length = length;
		this.width = width;
	}

	area() {
		return this.length * this.width;
	}
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30

console.log("");

class Vehicle {
	getInfo() {
		return;
	}
}

class Car extends Vehicle {
	constructor(product, type, year) {
		super();
		this.product = product;
		this.type = type;
		this.year = year;
	}

	getInfo() {
		return `${this.product} ${this.type} ${this.year} Car`;
	}
}

class Motorcycle extends Vehicle {
	constructor(product, type, year) {
		super();
		this.product = product;
		this.type = type;
		this.year = year;
	}

	getInfo() {
		return `${this.product} ${this.type} ${this.year} Motorcycle`;
	}
}

const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle("Honda", "CBR", 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

console.log("");

class Student {
	constructor(name, age, grade) {
		this._name = name;
		this._age = age;
		this._grade = grade;
	}

	getInfo() {
		if (this._age >= 6 && this._age <= 18 && this._grade <= 100 && this._grade >= 0) {
			return `Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`;
		} else {
			return "Invalid Age or Grade";
		}
	}
}

const student1 = new Student("Alice", 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student("Bob", 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade
