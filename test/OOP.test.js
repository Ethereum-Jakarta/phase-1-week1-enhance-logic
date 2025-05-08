import {test, expect, beforeEach, afterEach} from '@jest/globals'
import {Rectangle, Triangle, Car, Motorcycle, Student} from '../src/OOP'

test("OOP", () => {

    const triangle = new Triangle(3, 4);
    expect(triangle.area()).toStrictEqual(6); // Output: 6

    const rectangle = new Rectangle(5, 6);
    expect(rectangle.area()).toStrictEqual(30); // Output: 30

    const car = new Car('Toyota', 'Corolla', 2020);
    expect(car.getInfo()).toStrictEqual("Toyota Corolla 2020 Car"); // Output: Toyota Corolla 2020 Car

    const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
    expect(motorcycle.getInfo()).toStrictEqual("Honda CBR 2022 Motorcycle"); // Output: Honda CBR 2022 Motorcycle

    const student1 = new Student('Alice', 12, 85);
    expect(student1.getInfo()).toStrictEqual(
        {
            name: "Alice",
            age: 12,
            grade: 85
        }
    ); // Output: Name: Alice, Age: 12, Grade: 85

    const student2 = new Student('Bob', 20, 95);
    expect(student2.getInfo()).toStrictEqual(
        "Invalid Age or Grade"
    ); // Output: Invalid Age or Grade

});