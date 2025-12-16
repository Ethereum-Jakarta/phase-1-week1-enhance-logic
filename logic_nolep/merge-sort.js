/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const mergeSortString = (str) => {
  if (str.length <= 1) return str;

  const mid = Math.floor(str.length / 2);
  const left = mergeSortString(str.slice(0, mid));
  const right = mergeSortString(str.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  let result = "";
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result += left[i];
      i++;
    } else {
      result += right[j];
      j++;
    }
  }

  result += left.slice(i);
  result += right.slice(j);

  return result;
};

const groupAnagrams = function (strs) {
  let map = {};

  for (let word of strs) {
    let sortedWord = mergeSortString(word);

    if (!map[sortedWord]) {
      map[sortedWord] = [];
    }

    map[sortedWord].push(word);
  }

  return Object.values(map);
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
