/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const bubbleSort = require('./bubbleSort.js');
const selectionSort = require('./selectionSort.js');
const insertionSort = require('./insertionSort.js');
const mergeSort = require('./mergeSort.js');

const groupAnagrams = (strs) => {
  let mergeSortUpdated = mergeSort(strs);
  let groupOfMergeSort = {};
  for (let i = 0; i < mergeSortUpdated.length; i++) {
    let splittedWord = mergeSortUpdated[i].split('').sort().join('');
    if (groupOfMergeSort[splittedWord] === undefined) {
      groupOfMergeSort[splittedWord] = [mergeSortUpdated[i]];
    } else {
      groupOfMergeSort[splittedWord].push(mergeSortUpdated[i])
    }
  }
  const resultMerge = Object.values(groupOfMergeSort);
  return [
    'Bubble sort',
    bubbleSort(strs),
    'Selection Sort',
    selectionSort(strs),
    'Insertion Sort',
    insertionSort(strs),
    'Merge Sort',
    resultMerge
  ];
};

// Test Case 1
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
console.log(groupAnagrams(['']));
// Output: [[""]]

// Test Case 3
console.log(groupAnagrams(['a']));
// Output: [["a"]]

// Test Case 4
console.log(groupAnagrams(['listen', 'silent', 'hello', 'world']));
// Output: [["listen","silent"],["hello"],["world"]]

// Test Case 5
console.log(groupAnagrams(['rat', 'tar', 'art', 'car']));
// Output: [["rat","tar","art"],["car"]]

// Test Case 6
console.log(groupAnagrams(['apple', 'banana', 'leapp', 'grape', 'orange']));
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// Test Case 7
console.log(groupAnagrams(['abcd', 'dcba', 'xyz', 'zyx', 'wxyz']));
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
