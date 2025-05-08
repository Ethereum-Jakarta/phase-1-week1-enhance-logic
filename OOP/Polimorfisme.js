// Soal 2: Polimorfisme dan Antarmuka
// Deskripsi: Buatlah kelas Vehicle dengan metode getInfo 
//yang mengembalikan informasi umum tentang kendaraan. 
//Buatlah kelas turunan Car dan Motorcycle yang mewarisi dari Vehicle 
//dan mengimplementasikan metode getInfo yang spesifik.

// Contoh Input/Output:

// const car = new Car('Toyota', 'Corolla', 2020);
// console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

// const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
// console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

class Vehicle {
    
    
    getInfo(){
        return 0;
    }
}

class Car extends Vehicle{
    constructor(brand,merek,tahun){
        super();
        this.brand = brand;
        this.merek = merek;
        this.tahun = tahun;
        this.category = "Car";
    }

   getInfo(){
    return `${this.brand} ${this.merek} ${this.tahun} ${this.category}`
   }

}


class Motorcycle extends Vehicle{
    constructor(brand,merek,tahun){
        super();
        this.brand = brand;
        this.merek = merek;
        this.tahun = tahun;
        this.category = "Motorcycle";
    }
 
    getInfo(){
     return `${this.brand} ${this.merek} ${this.tahun} ${this.category}`
    }
 
 }


 
const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle