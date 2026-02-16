/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 1. Bubble Sort
function bubbleSort(str) {
  let chars = str.split("");
  let n = chars.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (chars[j] > chars[j + 1]) {
        let temp = chars[j];
        chars[j] = chars[j + 1];
        chars[j + 1] = temp;
      }
    }
  }

  return chars.join("");
}

// 2. Selection Sort
function selectionSort(str) {
  let chars = str.split("");
  let n = chars.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (chars[j] < chars[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = chars[i];
      chars[i] = chars[minIndex];
      chars[minIndex] = temp;
    }
  }

  return chars.join("");
}

// 3. Insertion Sort
function insertionSort(str) {
  let chars = str.split("");
  let n = chars.length;

  for (let i = 1; i < n; i++) {
    let current = chars[i];
    let j = i - 1;

    while (j >= 0 && chars[j] > current) {
      chars[j + 1] = chars[j];
      j--;
    }

    chars[j + 1] = current;
  }

  return chars.join("");
}

// 4. Merge Sort
function mergeSort(str) {
  const chars = str.split("");
  const sortedArray = recursiveMergeSort(chars);

  return sortedArray.join("");
}

function recursiveMergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(recursiveMergeSort(left), recursiveMergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const groupAnagrams = function (strs) {
  const groups = {};

  for (let word of strs) {
    // 1. bubbleSort
    // const sortedKey = bubbleSort(word);
    // 2. selectionSort
    // const sortedKey = selectionSort(word);
    // 3. InsertionSort
    // const sortedKey = insertionSort(word);
    // 4. MergeSort
    const sortedKey = mergeSort(word);

    if (!groups[sortedKey]) {
      groups[sortedKey] = [];
    }

    groups[sortedKey].push(word);
  }

  return Object.values(groups);
};

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// // Test Case 2
console.log(groupAnagrams([""]));
// // Output: [[""]]

// // Test Case 3
console.log(groupAnagrams(["a"]));
// // Output: [["a"]]

// // Test Case 4
console.log(groupAnagrams(["listen", "silent", "hello", "world"]));
// // Output: [["listen","silent"],["hello"],["world"]]

// // Test Case 5
console.log(groupAnagrams(["rat", "tar", "art", "car"]));
// // Output: [["rat","tar","art"],["car"]]

// // Test Case 6
console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"]));
// // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// // Test Case 7
console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"]));
// // Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
