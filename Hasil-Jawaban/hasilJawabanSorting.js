/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  // Implementasi akan datang di sini
  const map = new Map();
  for (const kata of strs) {
    let key = kata.split("");

    for (let i = 0; i < key.length; i++) {
      for (let q = 0; q < key.length - 1; q++) {
        if (key[q] <  key[q + 1]) {
        [key[q], key[q + 1]] = [key[q + 1], key[q]];
        }
      }
    }
    key = key.join("");

    if (!map.has(key)) {
        map.set(key, []);
    }
    map.get(key).push(kata);
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