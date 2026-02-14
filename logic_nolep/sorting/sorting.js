import { bubbleSort } from "./bubbleSort.js";
import { insertionSort } from "./insertionSort.js";
import { mergeSort } from "./mergeSort.js";
import { selectionSort } from "./selectionSort.js";

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs, sorting) {
  // Implementasi akan datang di sini
  let result = []
  let anagram = {}

  for(let i = 0; i < strs.length; i++) {
    let str = strs[i].split('');
    let arr = sorting(str).join("")
    
    if(!anagram[arr]) {
        anagram[arr] = []
    }

    anagram[arr].push(strs[i])
  }

  for(let key in anagram) {
      result.push(anagram[key])
  }

  for(let i = 0; i < result.length - 1; i++) {
    for(let j = 0; j < result.length - i - 1; j++) {
        if(result[j].length > result[j + 1].length) {
            let temp = result[j]
            result[j] = result[j + 1]
            result[j + 1] = temp
        }
    }
  }

  return result
};

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"], bubbleSort)); 
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
console.log(groupAnagrams([""], bubbleSort)); 
// Output: [[""]]

// Test Case 3
console.log(groupAnagrams(["a"], selectionSort)); 
// Output: [["a"]]

// Test Case 4
console.log(groupAnagrams(["listen", "silent", "hello", "world"], selectionSort)); 
// Output: [["listen","silent"],["hello"],["world"]]

// Test Case 5
console.log(groupAnagrams(["rat", "tar", "art", "car"], insertionSort)); 
// Output: [["rat","tar","art"],["car"]]

// Test Case 6
console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"], insertionSort)); 
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// Test Case 7
console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"], mergeSort)); 
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]