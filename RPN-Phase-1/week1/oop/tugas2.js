class Vehicle {
	getInfo() {
		return ''
	}
}

class Car extends Vehicle {
	constructor(name, merk, year) {
		super();
		this.name = name;
		this.merk = merk;
		this.year = year;
	}

	getInfo() {
		return `${this.name} ${this.merk} ${this.year} Car`
	}
}

class Motorcycle extends Vehicle {
	constructor(name, merk, year) {
		super();
		this.name = name;
		this.merk = merk;
		this.year = year;
	}

	getInfo() {
		return `${this.name} ${this.merk} ${this.year} Motorcycle`
	}	
}

const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle