class Shape {
	constructor(sides) {
		this.sides = sides;
	}

	area() {
		return 0
	}
}

class Triangle extends Shape {
	constructor(sides, width) {
		super()
		this.sides = sides;
		this.width = width;
	}

	area() {
		return this.sides * this.width / 2;
	}
}

class Rectangle extends Shape {
	constructor(sides, width) {
		super()
		this.sides = sides;
		this.width = width;
	}

	area() {
		return this.sides * this.width;
	}
}



const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30