import bubbleSort from "./sorting/bubbleSort.mjs";
import selectionSort from "./sorting/selectionSort.mjs";
import insertionSort from "./sorting/insertionSort.mjs";
import mergeSort from "./sorting/mergeSort.mjs";

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = function (strs) {
  // Implementasi akan datang di sini
  const obj = {};

  for (let i = 0; i < strs.length; i++) {
    const str = mergeSort(strs[i].split(""), true);
    if (obj[str]) {
      obj[str].push(strs[i]);
    } else {
      obj[str] = [strs[i]];
    }
  }

  const result = mergeSort(Object.values(obj), false);

  for (let i = 0; i < result.length; i++) {
    result[i] = mergeSort(result[i], false);
  }

  return result;
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
