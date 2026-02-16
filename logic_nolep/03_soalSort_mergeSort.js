function groupAnagrams(strs) {
  let data = {};
  for (let str of strs) {
    let huruf = str.split("");
    huruf = sort(huruf);
    function sort(huruf) {
      if (huruf.length <= 1) return huruf;
      let mid = Math.floor(huruf.length / 2);
      let left = huruf.slice(0, mid);
      let right = huruf.slice(mid);

      let sortedLeft = sort(left);
      let sortedRight = sort(right);
      return merge(sortedLeft, sortedRight);
    }
    function merge(left, right) {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
      return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
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
