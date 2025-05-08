function bubbleSort(array) {
  const n = array.length;
  //loop n-1 kali (element paling akhir tidak perlu)
  for (let i = 0; i < n - 1; i++) {
    //loop dari awal sampai x, di mana x adalah elemen sebelum angka terbesar ditaruh ke index paling kanan
    for (let j = 0; j < n - i - 1; j++) {
      // bandingkan elemen sekarang dengan elemen setelahnya,
      // kalau elemen sekarang lebih besar, tukar dengan setelahnya
      // kalau tidak, abaikan. diulang sampai elemen terbesar berada di paling kanan
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
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

console.log(bubbleSort(arrayTest1));
console.log(bubbleSort(arrayTest2));
console.log(bubbleSort(arrayTest3));
console.log(bubbleSort(arrayTest4));

console.log(bubbleSort([4, 5, 6, 7, 0, 1, 2]));
console.log(bubbleSort([4, 5, 6, 7, 0, 1, 2]));
console.log(bubbleSort([1]));
console.log(bubbleSort([6, 7, 0, 1, 2, 4, 5]));
console.log(bubbleSort([4, 5, 6, 7, 8, 1, 2, 3]));
console.log(bubbleSort([3, 4, 5, 6, 7, 8, 1, 2]));
console.log(bubbleSort([5, 6, 7, 8, 1, 2, 3, 4]));
console.log(bubbleSort([2, 3, 4, 5, 6, 7, 8, 1]));
console.log(bubbleSort([3, 1]));
console.log(bubbleSort([5, 1, 3]));
