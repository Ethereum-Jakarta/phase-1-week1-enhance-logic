function groupAnagrams(strs) {
  let data = {};
  for (let str of strs) {
    let huruf = str.split("");
    for (let i = 0; i < huruf.length; i++) {
      for (let j = 0; j < huruf.length - i; j++) {
        if (huruf[i] < huruf[j]) {
          let simpan = huruf[i];
          huruf[i] = huruf[j];
          huruf[j] = simpan;
        }
      }
    }
    huruf = huruf.join("");
    if (!data[huruf]) {
      data[huruf] = [str];
    } else {
      data[huruf].push(str);
    }
  }
  return Object.values(data);
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
