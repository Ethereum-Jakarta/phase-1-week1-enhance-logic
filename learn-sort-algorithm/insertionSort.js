function insertionSort(array) {
  let n = array.length;
  // loop dimulai dari index ke 2
  for (let i = 1; i < n; i++) {
    // keluarkan dulu index ke-i,
    let currentNum = array[i];
    // lalu loop lagi dari sebelah kirinya index ke-i (index ke-j), ke arah element awal.
    for (let j = i - 1; j >= 0; j--) {
      // kalau index ke-j lebih dari "elemen yg dikeluarkan", geser index ke-j ke kanan
      // taruh index yg dikeluarkan ke index ke-j
      // kalau tidak, abaikan
      // loop terus sampai index j adalah index 0
      if (array[j] > currentNum) {
        array[j + 1] = array[j];
        array[j] = currentNum;
      }
    }
  }
  return array;
}

// test

const arrayTest1 = [64, 34, 25, 12, 22, 11, 90];
const arrayTest2 = [64, 25, 12, 22, 11];
const arrayTest3 = [12, 11, 13, 5, 6];
const arrayTest4 = [12, 11, 13, 5, 6, 7];

console.log(insertionSort(arrayTest1));
console.log(insertionSort(arrayTest2));
console.log(insertionSort(arrayTest3));
console.log(insertionSort(arrayTest4));

console.log(insertionSort([4, 5, 6, 7, 0, 1, 2]));
console.log(insertionSort([4, 5, 6, 7, 0, 1, 2]));
console.log(insertionSort([1]));
console.log(insertionSort([6, 7, 0, 1, 2, 4, 5]));
console.log(insertionSort([4, 5, 6, 7, 8, 1, 2, 3]));
console.log(insertionSort([3, 4, 5, 6, 7, 8, 1, 2]));
console.log(insertionSort([5, 6, 7, 8, 1, 2, 3, 4]));
console.log(insertionSort([2, 3, 4, 5, 6, 7, 8, 1]));
console.log(insertionSort([3, 1]));
console.log(insertionSort([5, 1, 3]));
