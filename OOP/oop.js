////////////////////////////////////////////////////////////
// PARADIGMA PEMROGRAMAN PROSEDURAL
///////////////////////////////////////////////////////////
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

const hasilTambah = tambah(5, 3);
const hasilKurang = kurang(10, 4);

console.log("ini adalah hasil pertambahan", hasilTambah);
console.log("ini adalah hasil pengurangan", hasilKurang);

//////////////////////////////////////////////////////////////
// PARADIGMA BERORIENTASI OBJECK
/////////////////////////////////////////////////////////////

class Manusia {
  constructor(name, umur) {
    this.name = name;
    this.umur = umur;
  }

  perkenalan() {
    return `Halo, nama saya ${this.name}, dan saya berumur ${this.umur}`;
  }
}

const orang = new Manusia("Epa Crypt", 25);

console.log(orang.perkenalan());

///////////////////////////////////////////////////////
// PARADIGMA PEMROGRAMAN FUNGTIONAL
//////////////////////////////////////////////////////

const angka = [1, 2, 3, 4, 5];

const kuadratkan = angka.map(function (item) {
  return item * item;
});

console.log(kuadratkan);

///////////////////////////////////////////////////////
// PARADIGMA PEMROGRAMAN LOGIKA
//////////////////////////////////////////////////////

function manusia(X, kulit) {
  return mempunyai(X, kulit);
}

function mempunyai(seseorang, objek) {
  return true;
}

const seseorang = "John";
const objek = "kulit";

if (manusia(seseorang, objek) && mempunyai(seseorang, objek)) {
  console.log(`${seseorang} memiliki ${objek}.`);
}
