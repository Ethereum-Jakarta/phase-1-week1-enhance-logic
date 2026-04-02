/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//* MERGE SORT
function mergeSortString(str) {
  if (str.length <= 1) {
    return str;
  }

  let arr = str.split("");
  let middle = Math.floor(arr.length / 2);
  let left = mergeSortString(arr.slice(0, middle).join(""));
  let right = mergeSortString(arr.slice(middle).join(""));

  return merge(left, right);
}
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  left = left.split("");
  right = right.split("");

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
    .concat(right.slice(rightIndex))
    .join("");
}

function groupAnagrams(strs) {
  let obj = {};

  for (let str of strs) {
    let sortedStr = mergeSortString(str);

    if (!obj[sortedStr]) {
      obj[sortedStr] = [];
    }
    obj[sortedStr].push(str);
  }

  let hasil = [];
  for (let key in obj) {
    hasil.push(obj[key]);
  }

  return hasil;
}

//* BUBBLE SORT
function groupAnagrams(strs) {
  let obj = {};

  for (let str of strs) {
    let arr = str.split("");
    let n = arr.length;
    let tukar;

    do {
      tukar = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          tukar = true;
        }
      }
      n--;
    } while (tukar);

    let sortedStr = arr.join("");

    if (!obj[sortedStr]) {
      obj[sortedStr] = [];
    }
    obj[sortedStr].push(str);
  }

  let hasil = [];
  for (let key in obj) {
    hasil.push(obj[key]);
  }

  return hasil;
}

//*SELECTION SORT
function groupAnagrams(strs) {
  let obj = {};

  for (let str of strs) {
    let arr = str.split("");

    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

    let sortedStr = arr.join("");

    if (!obj[sortedStr]) {
      obj[sortedStr] = [];
    }
    obj[sortedStr].push(str);
  }

  let hasil = [];
  for (let key in obj) {
    hasil.push(obj[key]);
  }

  return hasil;
}

//*INSERTION SORT
function groupAnagrams(strs) {
  let map = {}; //

  for (let str of strs) {
    let arr = str.split("");

    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }

    let sortedStr = arr.join("");

    if (!map[sortedStr]) {
      map[sortedStr] = [];
    }
    map[sortedStr].push(str);
  }

  let result = [];
  for (let key in map) {
    result.push(map[key]);
  }

  return result;
}

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["bat"], ["tan", "nat"], ["eat", "tea", "ate"]]

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
