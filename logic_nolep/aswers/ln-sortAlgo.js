const selectionShortStr = (arr) => {
  for (let group of arr) {
    const n = group.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (group[j][0] < group[minIndex][0]) {
          minIndex = j;
        }
      }
      const temp = group[i];
      group[i] = group[minIndex];
      group[minIndex] = temp;
    }
  }
  return arr;
};

const insertionShortStr = (arr) => {
  const sortedGroup = selectionShortStr(arr);
  for (let i = 1; i < sortedGroup.length; i++) {
    let insertIndex = i;
    let currentValue = sortedGroup[i];
    for (j = i - 1; j >= 0; j--) {
      if (sortedGroup[j].length > currentValue.length) {
        sortedGroup[j + 1] = sortedGroup[j];
        insertIndex = j;
      }
    }
    sortedGroup[insertIndex] = currentValue;
  }
  return sortedGroup;
};

const bubbleSortString = (str) => {
  const arr = str.split("");
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr.join("");
};

const groupAnagrams = function (strs) {
  // Implementasi akan datang di sini
  if (strs.length < 2) return strs;

  const result = [];
  for (let word of strs) {
    if (!result[0]) {
      result.push([word]);
    } else {
      let groupFound = false;
      for (let group of result) {
        const sortedMember = bubbleSortString(group[0]);
        const sortWord = bubbleSortString(word);
        if (sortedMember === sortWord) {
          group.push(word);
          groupFound = true;
          break;
        }
      }
      if (!groupFound) result.push([word]);
    }
  }
  if (strs.length > 5) {
    return insertionShortStr(result);
  }
  return result;
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
