// # LOGIC NOLEP (sortingAlgo.js)
// Diberikan sebuah array dari string strs, kelompokkan anagram-anagram secara bersama-sama. Anda bisa mengembalikan jawaban dalam urutan apa pun.

// Sebuah Anagram adalah kata atau frasa yang terbentuk dari pengurutan ulang huruf-huruf dari kata atau frasa lain yang berbeda, biasanya menggunakan semua huruf asli tepat sekali.

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





/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  // Implementasi akan datang di sini
  let groups = {};

  for(let s of strs) {
    
    let normalize = inserationSort(s);


    if(groups[normalize] === undefined) groups[normalize] = [];

    groups[normalize].push(s);
  }

  
  return Object.values(groups);
};

// ==== BUBLE SORT ====
function bubleSort(value) {
  let str = value.split('');
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < str.length - 1 - i; j++) {
      if(str[j] > str[j + 1]) {
        [str[j], str[j + 1]] = [str[j + 1], str[j]];
      }
    }
  }
  return str.join('');
}


// ==== MERGE SORT ====
function mergeSort(str) {
  

  if(str.length <= 1) return str;

  const mid = Math.floor(str.length / 2);
  let arr1 = str.slice(0, mid);
  let arr2 = str.slice(mid);

  const sortedLeft = mergeSort(arr1);
  const sortedRight = mergeSort(arr2);

  return merge(sortedLeft, sortedRight);
}


function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)).join('');
}


// ==== SELECTION SORT ====
function selectionSort(value) {
  let str = value.split('');

  for(let i = 0; i < str.length; i++) {
    let minIndex = i;

    for(let j = i + 1; j < str.length; j++) {
      if(str[j] < str[minIndex]) {
        minIndex = j;
      }
    }

    [str[i], str[minIndex]] = [str[minIndex], str[i]];
  }

  return str.join('');
}

// ==== INSERATION SORT ====
function inserationSort(value) {
  let str = value.split('');
  let n = str.length;

  for(let i = 1; i < n; i++) {
    let current = str[i];
    let j = i - 1;

    while(j >= 0 && str[j] > current) {
      str[j + 1] = str[j];
      j--;
    }

    str[j + 1] = current;
  }

  return str.join('');
}
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


// kerjakan 1 soal ini dengan 4 sorting algo yang kita sudah pelajarin, boleh kalian buat modular function setiap sorting dan implement ke groupAnagrams(). 
