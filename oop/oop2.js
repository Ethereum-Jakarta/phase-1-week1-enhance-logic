/*
Soal 2: Polimorfisme dan Antarmuka
Deskripsi: Buatlah kelas Vehicle dengan metode getInfo yang mengembalikan informasi umum tentang kendaraan. 
Buatlah kelas turunan Car dan Motorcycle yang mewarisi dari Vehicle dan mengimplementasikan metode getInfo yang spesifik.

Contoh Input/Output:

const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

*/

class Vehicle {
    getInfo(){
        return ''
    }
}

class Car extends Vehicle {
    constructor(brand, name, year){
        super()
        this.brand = brand
        this.name = name
        this.year = year
    }

    getInfo(){
        return this.brand + " " + this.name + " " + this.year + " " + "Car"
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, name, year){
        super()
        this.brand = brand
        this.name = name
        this.year = year
    }

    getInfo(){
        return this.brand + " " + this.name + " " + this.year + " " + "Motorcycle"
    }
}

const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

