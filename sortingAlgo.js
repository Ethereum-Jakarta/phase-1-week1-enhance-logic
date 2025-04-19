function quickSort(arr) {
  const n = arr.length;

  if (n <= 1) return arr;

  const pivot = arr[0],
    left = [],
    right = [];

  for (let i = 1; i < n; i++) {
    if (pivot > arr[i]) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

const groupAnagrams = function (strs) {
  const results = {};

  for (const word of strs) {
    const sortingWord = quickSort(word.split("")).join("");

    if (results[sortingWord]) {
      results[sortingWord].push(word);
    } else {
      results[sortingWord] = [word];
    }
  }

  return Object.values(results);
};

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log("");

// Test Case 2
console.log(groupAnagrams([""]));
// Output: [[""]]
console.log("");

// Test Case 3
console.log(groupAnagrams(["a"]));
// Output: [["a"]]
console.log("");

// Test Case 4
console.log(groupAnagrams(["listen", "silent", "hello", "world"]));
// Output: [["listen","silent"],["hello"],["world"]]
console.log("");

// Test Case 5
console.log(groupAnagrams(["rat", "tar", "art", "car"]));
// Output: [["rat","tar","art"],["car"]]

// Test Case 6
console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"]));
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// Test Case 7
console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"]));
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
