// buat dulu 4 fungsi setiap metode algoritma sorting : bubble, selection, insertion, merge.

//! function bubbleSort
// intinya double loop, mulai dari elemen 0 sampai elemen sebelum akhir, dibandingkan dengan elemen setelahnya,
// kalau elemen current lebih besar, geser ke kanan. gitu terus
const bubbleSort = (str) => {
  // setiap awal fungsi, jadikan array dulu
  let array = str.split("");
  let n = array.length;
  // loop dari awal sampai sebelum akhir (n-1)
  for (let i = 0; i < n - 1; i++) {
    // loop di dalam loop, dari awal sampai sebelum akhir dikurangi i,
    // karena semakin besar index loop i, elemen paling kanan adalah elemen terbesar
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  // jadikan ke tipe data str lagi
  return [array.join("")];
};

//! function selectionSort
// intinya loop dari awal sampai akhir (index i), kalau deep loop nemu elemen terkecil, taruh di index i
const selectionSort = (str) => {
  let array = str.split("");
  for (let i = 0; i < array.length; i++) {
    // buat var untuk menampung elemen terkecil dan index nya, dimisalkan dulu index i yg terkecil
    let min = array[i];
    let minIndex = i;
    // deep loop dari index setelah index i sampai akhir,
    // karena nanti index i disandingkan dengan index setelahnya
    for (let j = i + 1; j < array.length; j++) {
      // kalau di deep loop nemu index terkecil, masukkan ke min dan minIndex
      if (array[j] < min) {
        min = array[j];
        minIndex = j;
      }
    }
    // kalau min dan minIndex nya berubah karena ada elemen yg lebih kecil, tukar dengan ke elemen ke i
    if (min !== array[i]) {
      let temp = array[i];
      array[i] = min;
      array[minIndex] = temp;
    }
  }
  let result = array.join("");
  return result;
};

//! function Insertion Sort
// intinya, loop dari index setelah index awal, sampai index akhir. keluarkan dulu elemen i ke temp var (num),
// lalu sandingkan dengan elemen2 sebelumnya. kalau ada elemen yg lebih besar, geser elemen tsb ke kanan
const insertionSort = (str) => {
  let array = str.split("");
  for (let i = 1; i < array.length; i++) {
    let num = array[i];
    // deep loop dari elemen ke i ke arah elemen sebelumnya sampai elemen paling awal
    for (let j = i; j >= 0; j--) {
      if (array[j - 1] > num) {
        array[j] = array[j - 1];
        array[j - 1] = num;
      }
    }
  }
  let result = array.join("");
  return result;
};

//! function mergeSort dan merge
// ada 2 function, function mergeSort(str) untuk membagi jadi array left dan right, dan
// function merge(left,right) untuk menyortir elemen dari yg terkecil
// fungsi rekursif, mergeSort() membagi array sampai 1 array, lalu oleh function
// merge(), left 1 elemen, right 1 elemen, mudah untuk disortir.
// jadi untuk merge(mergeSort(left), mergeSort(right)), parameter nya sudah kesortir karena fungsi rekursif tadi

// function merge
const merge = (left, right) => {
  let result = []; // sediakan array hasil
  // buat index left dan right dari 0
  let leftIndex = 0;
  let rightIndex = 0;
  // selama leftIndex dan rightIndex tidak lebih dari length nya, tetap lakukan sortir
  while (leftIndex < left.length && rightIndex < right.length) {
    // urutkan dari elemen paling awal (sudah kesortir)
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // kalau salah satu array left atau right sudah habis, loop break, lalu concat sisanya ke array result
  result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  // karena ini str, jadikan kembali ke str
  result = result.join("");
  return result;
};

//function mergeSort
const mergeSort = (str) => {
  let array = str.split("");
  let middle = Math.floor(array.length / 2);

  if (str.length <= 1) {
    return str;
  }

  let left = array.slice(0, middle);
  left = left.join("");
  let right = array.slice(middle);
  right = right.join("");

  // bagi terooss array nya sampai length nya 1, nanti merge ngesortir, trus rekursif in lagi ke merge()
  return merge(mergeSort(left), mergeSort(right));
};

//! function groupAnagrams
// ngumpulin semua 4 metode algoritma sorting function
// intinya, bikim object funcResult, lalu loop array berisi banyak string
// kalau di dalam object belum ada key hasil sorting, tambahkan dan isi value nya dengan str (strs[i])
// kalau sudah ada, tinggal push saja. lalu, jadikan object funcResult ke value nya saja
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  // Algoritma Bubble Sort
  let bubbleSortResult = {};
  for (let i = 0; i < strs.length; i++) {
    if (!bubbleSortResult[bubbleSort(strs[i])]) {
      bubbleSortResult[bubbleSort(strs[i])] = [strs[i]];
    } else {
      bubbleSortResult[bubbleSort(strs[i])].push(strs[i]);
    }
  }
  bubbleSortResult = Object.values(bubbleSortResult);

  // Algoritma Selection Sort
  let selectionSortResult = {};
  for (let i = 0; i < strs.length; i++) {
    if (!selectionSortResult[selectionSort(strs[i])]) {
      selectionSortResult[selectionSort(strs[i])] = [strs[i]];
    } else {
      selectionSortResult[selectionSort(strs[i])].push(strs[i]);
    }
  }
  selectionSortResult = Object.values(selectionSortResult);

  // Algoritma Insertion Sort
  let insertionSortResult = {};
  for (let i = 0; i < strs.length; i++) {
    if (!insertionSortResult[insertionSort(strs[i])]) {
      insertionSortResult[insertionSort(strs[i])] = [strs[i]];
    } else {
      insertionSortResult[insertionSort(strs[i])].push(strs[i]);
    }
  }
  insertionSortResult = Object.values(insertionSortResult);

  // Algoritma Merge Sort
  let mergeSortResult = {};
  for (let i = 0; i < strs.length; i++) {
    if (!mergeSortResult[mergeSort(strs[i])]) {
      mergeSortResult[mergeSort(strs[i])] = [strs[i]];
    } else {
      mergeSortResult[mergeSort(strs[i])].push(strs[i]);
    }
  }
  mergeSortResult = Object.values(mergeSortResult);

  // cetak ke console semuanya
  let print = { bubbleSort: bubbleSortResult, selectionSort: selectionSortResult, insertionSort: insertionSortResult, mergeSort: mergeSortResult };
  for (const key in print) {
    console.log(`${key} :`);
    console.log(print[key]);
  }
  return "";
};

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
console.log(groupAnagrams([""]));
// Output: [[""]]

// Test Case 3
console.log(groupAnagrams(["a"]));
// Output: [["a"]]

// Test Case 4
console.log(groupAnagrams(["listen", "silent", "hello", "world"]));
// Output: [["listen","silent"],["hello"],["world"]]

// Test Case 5
console.log(groupAnagrams(["rat", "tar", "art", "car"]));
// Output: [["rat","tar","art"],["car"]]

// Test Case 6
console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"]));
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// Test Case 7
console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"]));
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
