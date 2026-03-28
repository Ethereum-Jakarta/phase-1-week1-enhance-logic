/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Bubble Sort
function bubbleSort(str) {
  let n = str.length;

  for (let j = 0; j < n - 1; j++) {
    for (let k = 0; k < n - j - 1; k++) {
      if (str[k] > str[k + 1]) {
        let temp = str[k];
        str[k] = str[k + 1];
        str[k + 1] = temp;
      }
    }
  }

  return str;
}

// Selection Sort
function selectionSort(str) {
  let n = str.length;

  for (let j = 0; j < n - 1; j++) {
    let minIndex = j;

    for (let k = j + 1; k < n; k++) {
      if (str[k] < str[minIndex]) {
        minIndex = k;
      }
    }

    let temp = str[j];
    str[j] = str[minIndex];
    str[minIndex] = temp;
  }

  return str;
}

// Insertion Sort
function insertionSort(str) {
  let n = str.length;

  for (let j = 1; j < n; j++) {
    let current = str[j];
    let k = j - 1;

    while (k >= 0 && str[k] > current) {
      str[k + 1] = str[k];
      k--;
    }

    str[k + 1] = current;
  }

  return str;
}

// Merge Sort
function mergeSort(str) {
  if (str.length <= 1) return str;
  let n = str.length;
  let mid = Math.floor(n / 2);
  let left = str.slice(0, mid);
  let right = str.slice(mid);

  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
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

  return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}

// groupAnagrams Function
const groupAnagrams = function (strs, sortFunc) {
  // Implementasi akan datang di sini
  if (strs.length === 1) return [strs];

  let n = strs.length;
  let obj = {};

  for (let i = 0; i < n; i++) {
    let word = strs[i].split("");
    let wordSorted = sortFunc(word).join("");
    if (!obj[wordSorted]) obj[wordSorted] = [];
    obj[wordSorted].push(strs[i]);
  }

  let result = [];
  for (let arr in obj) {
    result.push(obj[arr]);
  }

  return result;
};

// Test Case 1
console.log(
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"], bubbleSort)
);
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
console.log(groupAnagrams([""], selectionSort));
// Output: [[""]]

// Test Case 3
console.log(groupAnagrams(["a"], insertionSort));
// Output: [["a"]]

// Test Case 4
console.log(groupAnagrams(["listen", "silent", "hello", "world"], mergeSort));
// Output: [["listen","silent"],["hello"],["world"]]

// Test Case 5
console.log(groupAnagrams(["rat", "tar", "art", "car"], mergeSort));
// Output: [["rat","tar","art"],["car"]]

// Test Case 6
console.log(
  groupAnagrams(["apple", "banana", "leapp", "grape", "orange"], mergeSort)
);
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// Test Case 7
console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"], mergeSort));
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
