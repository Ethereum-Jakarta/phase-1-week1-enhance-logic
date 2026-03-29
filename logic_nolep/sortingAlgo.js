import { bubbleSort } from "./sortingFunction/bubbleSort.js";
import { selectionSort } from "./sortingFunction/selectionSort.js";
import { insertionSort } from "./sortingFunction/insertionSort.js";
import { mergeSort } from "./sortingFunction/mergeSort.js";

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    // Implementasi akan datang di sini

    let save = {}

    for (let i = 0; i < strs.length; i++){
        const sorted = mergeSort(strs[i].split(""))

        if(save[sorted]){
            save[sorted].push(strs[i])
        } else {
            save[sorted] = [strs[i]]
        }
    }

    let hasil = Object.values(save)

    return hasil
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