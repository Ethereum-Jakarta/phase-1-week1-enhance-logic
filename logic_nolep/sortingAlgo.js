/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const bubbleSort = require('./sorting/bubbleSort');
const selectionSort = require('./sorting/selectionSort');
const insertionSort = require('./sorting/insertionSort');
const mergeSort = require('./sorting/mergeSort');

const groupAnagrams = function(strs, algo = 'merge') {
  // Implementasi akan datang di sini
  const map = {};
  for (let str of strs) {
    let arr = str.split('');
    let key;
    if (algo === 'bubble') key = bubbleSort(arr).join('');
    else if (algo === 'selection') key = selectionSort(arr).join('');
    else if (algo === 'insertion') key = insertionSort(arr).join('');
    else if (algo === 'merge') key = mergeSort(arr).join('');
    else key = arr.sort().join(''); // fallback ke default sort
    if (!map[key]) map[key] = [];
    map[key].push(str);
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