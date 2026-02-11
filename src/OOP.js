/*Soal 1*/

class Shape {

    _sides

    constructor(sides) {
        this._sides = sides;
    }

    area() {
        return this._sides
    }

}

export class Triangle extends Shape {

    constructor(base, height) {
        super((base * height) / 2);
    }
}

export class Rectangle extends Shape {
    constructor(base, height) {
        super((base * height));
    }
}


/*Soal 2*/

class Vehicle {

    _brand
    _type
    _year
    _category


    constructor(brand, type, year, category) {
        this._brand = brand;
        this._type = type;
        this._year = year;
        this._category = category;
    }

    getInfo() {
        return `${this._brand} ${this._type} ${this._year} ${this._category}`
        //Honda CBR 2022 Motorcycle
    }

}

export class Car extends Vehicle {


    constructor(brand, type, year) {
        super(brand, type, year, "Car");
    }

}

export class Motorcycle extends Vehicle {

    constructor(brand, type, year) {
        super(brand, type, year, "Motorcycle");
    }

}

/*Soal 3*/

export class Student {

    _name
    _age //6-18
    _grade //0-100

    constructor(name, age, grade) {
        this._name = name;
        this._age = age;
        this._grade = grade;
    }

    isValidAge() {

        //Less than 6
        if (this._age < 6) {
            return false
        }

        //More than 18
        if (this._age > 18) {
            return false
        }

        return true;
    }

    isValidGrade() {

        //Less than 6
        if (this._grade < 0) {
            return false
        }

        //More than 18
        if (this._grade > 100) {
            return false
        }

        return true;
    }

    getInfo() {

        if (this.isValidAge() && this.isValidGrade()) {
            return {
                name: this._name,
                age: this._age,
                grade: this._grade
            };
        }

        return "Invalid Age or Grade"

    }

}