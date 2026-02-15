function groupAnagrams(strs: string[]): string[][] {
  const results: string[][] = [];
  const index: Record<string, number> = {};
  let i = 0;
  for (const str of strs) {
    const sorted = mergeSort(str);
    if (typeof index[sorted] === "undefined") index[sorted] = i++;
    if (typeof results[index[sorted]] === "undefined") results[index[sorted]] = [];
    results[index[sorted]].push(str);
  }
  return results;
}

function mergeSort(str: string) {
  if (str.length < 2) return str;
  const middle = Math.floor(str.length/2);
  const left = str.slice(0, middle);
  const right = str.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left: string, right: string): string {
  let leftIndex = 0, rightIndex = 0, result = "";

  while(leftIndex < left.length && rightIndex < right.length) {
    if (left.charCodeAt(leftIndex) > right.charCodeAt(rightIndex)) result += left.charAt(leftIndex++);
    else result += right.charAt(rightIndex++);
  }

  return result + left.slice(leftIndex, left.length) + right.slice(rightIndex, right.length);
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
