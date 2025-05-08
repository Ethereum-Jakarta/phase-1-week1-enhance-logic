/*

Soal 1: Warisan (Inheritance) dan Metode
Deskripsi: Buatlah kelas Shape dengan properti sides yang menunjukkan jumlah sisi bentuk. 
Buatlah kelas turunan Triangle dan Rectangle yang mewarisi dari Shape. Implementasikan metode area di masing-masing kelas turunan.

Contoh Input/Output:

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30

*/



class Shape {
    constructor(x,y){
        this.x = x
        this.y = y
    }

    area(x, y){
        return 0 
    }
}

class Triangle extends Shape{
   area(x, y){
        return (this.x * this.y) / 2
   }
}

class Rectangle extends Shape{
    area(x, y){
        return (this.x * this.y) 
   }
} 

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30
