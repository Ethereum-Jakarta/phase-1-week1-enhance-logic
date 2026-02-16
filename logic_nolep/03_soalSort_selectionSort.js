function groupAnagrams(strs) {
  let data = {};
  for (let str of strs) {
    let huruf = str.split("");
    for (let i = 0; i < huruf.length - 1; i++) {
      let index = i;
      for (let j = i + 1; j < huruf.length; j++) {
        if (huruf[index] > huruf[j]) {
          index = j;
        }
      }
      let temp = huruf[i];
      huruf[i] = huruf[index];
      huruf[index] = temp;
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
