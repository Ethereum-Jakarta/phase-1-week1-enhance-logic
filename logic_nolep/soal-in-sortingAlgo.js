/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Fungsi Bubble Sort
function bubbleSort(arr) {
  const sortedArr = [...arr]; // Menyalin array
  const n = sortedArr.length;
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (sortedArr[j] > sortedArr[j + 1]) {
              // Tukar
              [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
          }
      }
  }
  return sortedArr;
}

// Fungsi Selection Sort
function selectionSort(arr) {
  const sortedArr = [...arr]; // Menyalin array
  const n = sortedArr.length;
  for (let i = 0; i < n; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
          if (sortedArr[j] < sortedArr[minIndex]) {
              minIndex = j;
          }
      }
      // Tukar
      [sortedArr[i], sortedArr[minIndex]] = [sortedArr[minIndex], sortedArr[i]];
  }
  return sortedArr;
}

// Fungsi Insertion Sort
function insertionSort(arr) {
  const sortedArr = [...arr]; // Menyalin array
  const n = sortedArr.length;
  for (let i = 1; i < n; i++) {
      let key = sortedArr[i];
      let j = i - 1;
      while (j >= 0 && sortedArr[j] > key) {
          sortedArr[j + 1] = sortedArr[j];
          j--;
      }
      sortedArr[j + 1] = key;
  }
  return sortedArr;
}

// Fungsi Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
      } else {
          result.push(right[j]);
          j++;
      }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

const groupAnagrams = function(strs) {
    // Implementasi akan datang di sini
    const map = new Map();

    for (const str of strs) {
        // Mengurutkan karakter dari setiap string
        const sortedStr = bubbleSort(str.split('')).join(''); // Menggunakan Bubble Sort
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
