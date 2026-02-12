// LOGIC NOLEP (sortingAlgo.js)
// Diberikan sebuah array dari string strs, kelompokkan anagram-anagram secara bersama-sama. Anda bisa mengembalikan jawaban dalam urutan apa pun.

// Sebuah Anagram adalah kata atau frasa yang terbentuk dari pengurutan ulang huruf-huruf dari kata atau frasa lain yang berbeda, biasanya menggunakan semua huruf asli tepat sekali.

// Contoh 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Contoh 2:
// Input: strs = [""]

// Output: [[""]]

// Contoh 3:
// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] terdiri dari huruf-huruf kecil dalam bahasa Inggris.

// kerjakan 1 soal ini dengan 4 sorting algo yang kita sudah pelajarin, boleh kalian buat modular function setiap sorting dan implement ke groupAnagrams()

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Bubble Sort
function bubbleSort(str) {
  let arr = str.split('');
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  return arr.join('');
}

// Selection Sort
function selectionSort(str) {
  let arr = str.split('');
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < length; j++) {
          if (arr[j] < arr[minIdx]) {
              minIdx = j;
          }
      }
      let temp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = temp;
  }
  return arr.join('');
}

// Insertion Sort
function insertionSort(str) {
  let arr = str.split('');
  let length = arr.length;
  for (let i = 1; i < length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
      }
      arr[j + 1] = key;
  }
  return arr.join('');
}

// Merge Sort
function mergeSort(str) {
  if (str.length <= 1) {
      return str;
  }
  const arr = str.split('');
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle).join('');
  const right = arr.slice(middle).join('');
  
  return merge(
      mergeSort(left),
      mergeSort(right)
  ).join('');
}

function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  left = left.split('');
  right = right.split('');
  
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
      } else {
          resultArray.push(right[rightIndex]);
          rightIndex++;
      }
  }
  
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

const groupAnagrams = function (strs) {
    // Implementasi akan datang di sini
    const map = new Map();
    for (const str of strs) {
        const sortedStr = bubbleSort(str);
        // const sortedStr = selectionSort(str);
        // const sortedStr = insertionSort(str);
        // const sortedStr = mergeSort(str);
        
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
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
  