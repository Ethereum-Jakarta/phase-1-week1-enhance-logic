
// Soal 1: Warisan (Inheritance) dan Metode
// Deskripsi: Buatlah kelas Shape dengan properti sides yang menunjukkan jumlah sisi bentuk. Buatlah kelas turunan Triangle dan Rectangle yang mewarisi dari Shape. Implementasikan metode area di masing-masing kelas turunan.
class Shape{
    constructor(sides,tinggi){
        this.sides = sides;
        this.tinggi = tinggi;
    }
    area(){
        return ;
    }
}

class Triangle extends Shape{
    area(){
        let Side= this.sides;
        let tinggi = this.tinggi;
        let hasil = 0.5 * Side * tinggi;
        return `Output:  ${hasil}`
    }
}

class Rectangle extends Shape{
    area(){
        let Side= this.sides;
        let tinggi = this.tinggi;
        let hasil =  Side * tinggi;
        return `Output:  ${hasil}`
    }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30


// Soal 2: Polimorfisme dan Antarmuka
// Deskripsi: Buatlah kelas Vehicle dengan metode getInfo yang mengembalikan informasi umum tentang kendaraan. Buatlah kelas turunan Car dan Motorcycle yang mewarisi dari Vehicle dan mengimplementasikan metode getInfo yang spesifik.


class Vehicle {
    getInfo(){
        return 0;
    }
}

class Car extends Vehicle {
    constructor(merek, versi, tahun){
        super();
        this.merek = merek;
        this.versi = versi;
        this.tahun = tahun;
    }
    getInfo(){
        return `Output : ${this.merek} ${this.versi} ${this.tahun} car`;
    }
}

class Motorcycle extends Vehicle {
    constructor(merek, versi, tahun){
        super();
        this.merek = merek;
        this.versi = versi;
        this.tahun = tahun;
    }
    getInfo(){
        return `Output : ${this.merek} ${this.versi} ${this.tahun} Motorcycle`;
    }
}


const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle




// Deskripsi: Buatlah kelas Student dengan properti name, age, dan grade. Pastikan bahwa umur
//  berada dalam rentang 6 hingga 18 tahun, dan nilai berada dalam rentang 0 hingga 100. Implementasikan metode getInfo untuk mencetak informasi siswa.

class Student{
    constructor(name, age, grade){
        this._name=name;
        this._age=age;
        this._grade=grade;
    }

    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get grade(){
        return this._grade;
    }
    getInfo(){
        let ageBaru,gradeBaru;
        if((this._age>=6 && this._age<=18)&& (this._grade>=0 && this._grade<=100)){
            ageBaru= this._age;
            gradeBaru= this._grade;
            return `Output: Name: ${this._name}, Age: ${ageBaru}, Grade: ${gradeBaru}`;
        }else{
            return `Output: Invalid Age or Grade`;
        }
    }

}

const student1 = new Student('Alice', 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student('Bob', 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade