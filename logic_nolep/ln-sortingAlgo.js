// # LOGIC NOLEP (sortingAlgo.js)
// Diberikan sebuah array dari string strs, kelompokkan anagram-anagram secara bersama-sama. Anda bisa mengembalikan jawaban dalam urutan apa pun.

// Sebuah Anagram adalah kata atau frasa yang terbentuk dari pengurutan ulang huruf-huruf dari kata atau frasa lain yang berbeda, 
// biasanya menggunakan semua huruf asli tepat sekali.

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
const groupAnagrams = function (strs) {
  function bubbleSortString(str) {
    let arr = str.split('');
    console.log('before',arr);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        console.log('arr j', arr[j], arr[j + 1], arr[j] > arr[j + 1])
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          console.log([arr[j + 1], arr[j]])
        }
      }
    }
    console.log('after',arr, arr.join(''));
    return arr.join('');
  }
  const map = new Map();

  for (const word of strs) {
    const sortedWord = bubbleSortString(word);
    console.log(`word: ${word}, sortedWord: ${sortedWord}`);
    if (!map.has(sortedWord)) {
      map.set(sortedWord, []);
    }
    map.get(sortedWord).push(word);
  }
  // console.log(`map: ${map.values()}`);
  return Array.from(map.values());
};

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
// console.log(groupAnagrams([""]));
// // Output: [[""]]

// // Test Case 3
// console.log(groupAnagrams(["a"]));
// // Output: [["a"]]

// // Test Case 4
// console.log(groupAnagrams(["listen", "silent", "hello", "world"]));
// // Output: [["listen","silent"],["hello"],["world"]]

// // Test Case 5
// console.log(groupAnagrams(["rat", "tar", "art", "car"]));
// // Output: [["rat","tar","art"],["car"]]

// // Test Case 6
// console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"]));
// // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// // Test Case 7
// console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"]));
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
// ```

// kerjakan 1 soal ini dengan 4 sorting algo yang kita sudah pelajarin, boleh kalian buat modular function setiap sorting dan implement ke groupAnagrams(). 
