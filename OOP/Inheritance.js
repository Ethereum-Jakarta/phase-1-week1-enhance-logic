// Soal 1: Warisan (Inheritance) dan Metode
// Deskripsi: Buatlah kelas Shape dengan properti sides yang menunjukkan jumlah sisi bentuk. Buatlah kelas turunan Triangle dan Rectangle yang mewarisi dari Shape. Implementasikan metode area di masing-masing kelas turunan.

// Contoh Input/Output:

// const triangle = new Triangle(3, 4);
// console.log(triangle.area()); // Output: 6

// const rectangle = new Rectangle(5, 6);
// console.log(rectangle.area()); // Output: 30

class Shape{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
}

class Triangle extends Shape{
    area(){
        return this.a * this.b /2;
    }
}

class Rectangle extends Shape{
    area(){
        return this.a * this.b;
    }
}



const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30