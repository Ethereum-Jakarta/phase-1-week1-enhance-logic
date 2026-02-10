class Student {
	constructor(name, age, grade) {
		this._name = name;
		this._age = age;
		this._grade = grade;
	}

	getInfo () {
		if ( this._age >= 6 && this._age <= 18 ) {
			return `Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`
		}

		return `Invalid Age or Grade`
	}
}


const student1 = new Student('Alice', 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student('Bob', 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade