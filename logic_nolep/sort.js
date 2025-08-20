// # LOGIC NOLEP (sortingAlgo.js)
// Diberikan sebuah array dari string strs, kelompokkan anagram-anagram secara bersama-sama.
// Anda bisa mengembalikan jawaban dalam urutan apa pun.

const bubbleSort = require("./sort/buble");
const insertionSort = require("./sort/insertion");
const mergeSort = require("./sort/merge");
const selectionSort = require("./sort/select");

// Sebuah Anagram adalah kata atau frasa yang terbentuk dari pengurutan ulang huruf-huruf dari kata
// atau frasa lain yang berbeda, biasanya menggunakan semua huruf asli tepat sekali.

// Contoh 1:
// ```
// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// ```

// Contoh 2:
// ```
// Input: strs = [""]

// Output: [[""]]
// ```

// Contoh 3:
// ```
// Input: strs = ["a"]

// Output: [["a"]]
// ```

// Constraints:

// - 1 <= strs.length <= 104
// - 0 <= strs[i].length <= 100
// - strs[i] terdiri dari huruf-huruf kecil dalam bahasa Inggris.

// ```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs, algo = "insertion") => {
  // Implementasi akan datang di sini
  const map = {};
  for (let index = 0; index < strs.length; index++) {
    const arrayText = strs[index].split("");
    let key;
    switch (algo) {
      case "bubble":
        key = bubbleSort(arrayText).join("");
        break;
      case "selection":
        key = selectionSort(arrayText).join("");
        break;
      case "insertion":
        key = insertionSort(arrayText).join("");
        break;
      case "merge":
        key = mergeSort(arrayText).join("");
        break;

      default:
        key = arrayText.sort().join("");
        break;
    }

    if (!map[key]) map[key] = [];
    map[key].push(strs[index]);
  }
  return Object.values(map);
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
// ```

// kerjakan 1 soal ini dengan 4 sorting algo yang kita sudah pelajarin,
// boleh kalian buat modular function setiap sorting dan implement ke groupAnagrams().
