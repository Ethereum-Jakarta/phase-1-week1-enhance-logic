// Algoritma Selection Sort
function groupAnagrams(strs) {
  function selectionSort(str) {
    for(let i = 0; i < str.length; i++) {
      let minIndex = i;

      for(let j = i + 1; j < str.length; j++) {
        if(str[j] < str[minIndex]) {
          minIndex = j;
        }
      }

      let temp = str[i];
      str[i] = str[minIndex];
      str[minIndex] = temp;
    }
    return str;
  }

  const result = [];
  const group = {};
  for(let i = 0; i < strs.length; i++) {
    const sorted = selectionSort([...strs[i]]);
    const sortedStr = sorted.join('');

    if(group[sortedStr] == undefined) {
      group[sortedStr] = result.length;
      result[group[sortedStr]] = [strs[i]];
    } else {
      result[group[sortedStr]].push(strs[i]);
    }
  }

  return result;
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
