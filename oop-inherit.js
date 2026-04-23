/*
Buatlah kelas Shape dengan properti sides yang menunjukkan jumlah sisi bentuk.
Buatlah kelas turunan Triangle dan Rectangle yang mewarisi dari Shape.
Implementasikan metode area di masing-masing kelas turunan.
*/

class shape {
  constructor(s1,s2) {
    this.s1 = s1;
    this.s2 = s2;
  }
}

class Triangle extends shape {
  area() {
    return this.s1 * this.s2 / 2;
  }
}

class Rectangle extends shape {
  area() {
    return this.s1 * this.s2;
  }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30