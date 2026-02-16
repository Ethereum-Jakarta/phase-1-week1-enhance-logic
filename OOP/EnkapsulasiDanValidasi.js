// Soal 3: Enkapsulasi dan Validasi
// Deskripsi: Buatlah kelas Student dengan properti name, age, dan grade. 
//Pastikan bahwa umur berada dalam rentang 6 hingga 18 tahun, 
//dan nilai berada dalam rentang 0 hingga 100. Implementasikan metode getInfo untuk mencetak informasi siswa.

// Contoh Input/Output:

// const student1 = new Student('Alice', 12, 85);
// console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

// const student2 = new Student('Bob', 20, 95);
// console.log(student2.getInfo()); // Output: Invalid Age or Grade


// Catatan: Pastikan untuk memeriksa batasan umur dan nilai dalam konstruktor 
//atau metode lainnya untuk menghindari data yang tidak valid.

class Student{
    constructor(name,age,grade){
        this._name = name;
        this._age = age;
        this._grade = grade;
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
        if(this.age > 18 || this.age < 1 || this.grade < 0 || this.grade > 100){
            return "Invalid Age or Grade"
        }
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }

    
}


const student1 = new Student('Alice', 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student('Bob', 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade