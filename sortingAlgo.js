
const groupAnagrams = function(strs) {
    // Implementasi akan datang di sini
    let result = {};
    let receipt = [];

    // Loop luar untuk melakukan iterasi
    for (let i = 0; i < strs.length; i++) {
        let index = strs[i].split("")
        for(let j = 0; j < index.length - 1;j++){
            for(let k = 0; k < index.length - 1 - j; k++){
                if (index[k] > index[k + 1]) {
                    // Tukar index[k] dan index[k+1]
                    let temp = index[k];
                    index[k] = index[k + 1];
                    index[k + 1] = temp;
                  }
            }
        }
        let hasilSort = index.join("")
        if (result[hasilSort]) {
            result[hasilSort].push(strs[i]);
          } else {
            result[hasilSort] = [strs[i]];
          }
  }
  for(const key in result){
    receipt.push(result[key]);
  }
  return receipt;
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