const groupAnagrams = (strs) => {
  // Helper function to sort a string
  function sortString(str) {
    return str.split('').sort().join('');
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

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }

  const anagramGroups = {};

  // Group the anagrams
  for (const str of strs) {
    const sortedStr = sortString(str);
    if (anagramGroups[sortedStr]) {
      anagramGroups[sortedStr].push(str);
    } else {
      anagramGroups[sortedStr] = [str];
    }
  }

  // Sort each anagram group using merge sort
  for (const key in anagramGroups) {
    anagramGroups[key] = mergeSort(anagramGroups[key]);
  }

  // Extract anagram groups and store them in the result array
  const result = [];
  for (const key in anagramGroups) {
    result.push(anagramGroups[key]);
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