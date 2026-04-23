/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// const groupAnagrams = function(strs) {
//   // Implementasi akan datang di sini
//   let memo = {};
//   let result = [];
//   const hash = (str) => {
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//       result += str.charCodeAt(i)
//     }
//     return result;
//   }
//   for (let i = 0; i < strs.length; i++) {
//     const hashed = hash(strs[i]);
//     if (memo[hashed] === undefined) {
//       memo[hashed] = result.length;
//       result[memo[hashed]] = [strs[i]];
//     } else {
//       result[memo[hashed]].push(strs[i])
//     }
//   }
//   return result;
// };

const groupAnagrams = function(strs) {
  // Implementasi akan datang di sini
  let memo = {};
  let result = [];
  const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  for (let i = 0; i < strs.length; i++) {
    sorted = bubbleSort([...strs[i]]);
    sortedStr = sorted.join('');
    if (memo[sortedStr] === undefined) {
      memo[sortedStr] = result.length;
      result[memo[sortedStr]] = [strs[i]];
    } else {
      result[memo[sortedStr]].push(strs[i])
    }
  }
  console.log(memo)
  return result;
};

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// // Test Case 2
// console.log(groupAnagrams([""])); 
// // Output: [[""]]

// // Test Case 3
// console.log(groupAnagrams(["a"])); 
// Output: [["a"]]

// // Test Case 4
// console.log(groupAnagrams(["listen", "silent", "hello", "world"])); 
// // Output: [["listen","silent"],["hello"],["world"]]

// // Test Case 5
// console.log(groupAnagrams(["rat", "tar", "art", "car"])); 
// // Output: [["rat","tar","art"],["car"]]

// // Test Case 6
// console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"])); 
// // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// // Test Case 7
// console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"])); 
// // Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]