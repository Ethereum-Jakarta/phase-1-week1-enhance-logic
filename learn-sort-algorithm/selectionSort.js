function selectionSort(array) {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    // loop, keluarkan dulu element dan index sekarang (elemen ke-i),
    let minimumNumber = array[i];
    let indexMinimum = i;
    for (let j = i; j < n; j++) {
      // loop dari index setelah elemen terkecil ditaruh di paling kiri, sampai index terakhir
      // kalau elemen j lebi kecil dari elemen terkecil, masukkan ke variabel minimum di atas
      if (array[j] < minimumNumber) {
        minimumNumber = array[j];
        indexMinimum = j;
      }
    }
    // end loop pencarian angka terkecil, tukarkan elemen terkecil tsb dengan elemen ke-i
    // loop terus sampai urut yg paling kanan adalah elemen terkecil
    let temp = array[i];
    array[i] = minimumNumber;
    array[indexMinimum] = temp;
  }
  return array;
}

// test

const arrayTest1 = [64, 34, 25, 12, 22, 11, 90];
const arrayTest2 = [64, 25, 12, 22, 11];
const arrayTest3 = [12, 11, 13, 5, 6];
const arrayTest4 = [12, 11, 13, 5, 6, 7];

console.log(selectionSort(arrayTest1));
console.log(selectionSort(arrayTest2));
console.log(selectionSort(arrayTest3));
console.log(selectionSort(arrayTest4));

console.log(selectionSort([4, 5, 6, 7, 0, 1, 2]));
console.log(selectionSort([4, 5, 6, 7, 0, 1, 2]));
console.log(selectionSort([1]));
console.log(selectionSort([6, 7, 0, 1, 2, 4, 5]));
console.log(selectionSort([4, 5, 6, 7, 8, 1, 2, 3]));
console.log(selectionSort([3, 4, 5, 6, 7, 8, 1, 2]));
console.log(selectionSort([5, 6, 7, 8, 1, 2, 3, 4]));
console.log(selectionSort([2, 3, 4, 5, 6, 7, 8, 1]));
console.log(selectionSort([3, 1]));
console.log(selectionSort([5, 1, 3]));
