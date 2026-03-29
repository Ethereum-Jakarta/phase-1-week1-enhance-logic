/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  // Implementasi akan datang di sini 
  let result = []
  let obj = {}
  
  function bubbleSort(arr) {
    let str = arr.length
    for(let i = 0; i < str -1; i++) {
      for(let j = 0; j < str - i -1; j++) {
        if(str[j] > str[j + 1]) {
          let temp = str[j]
          str[j] = str[j + 1]
          str[j + 1] = temp
        }
      }
    }
    return arr
  }

  for(let i = 0; i <strs.length; i++) {
    let sorting = bubbleSort([...strs[i]])
    let sortingStr = strs.join('')
    if(obj[sorting] === undefined) {
      obj[sortingStr] = result.length;
      result[obj[sortingStr]] = [strs[i]]
    } else {
      result[obj[sorting]].push(strs[i])
    }
  }
  return result
    
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
