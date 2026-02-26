const bubbleSort = (arr) => {
  // bubble sort item
  for (let j = 0; j < arr.length - 1; j++) {
    for (let k = 0; k < arr.length - j - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        let temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }
  }
};

const selectionSort = (arr) => {
  // selection sort
  for (let j = 0; j < arr.length - 1; j++) {
    let minIndex = j;

    for (let k = j + 1; k < arr.length; k++) {
      if (arr[k] < arr[minIndex]) {
        minIndex = k;
      }
    }

    let temp = arr[j];
    arr[j] = arr[minIndex];
    arr[minIndex] = temp;
  }
};

const insertionSort = (arr) => {
  // insertionSort

  for (let j = 1; j < arr.length; j++) {
    let current = arr[j];
    let k = j - 1;

    while (k >= 0 && arr[k] > current) {
      arr[k + 1] = arr[k];
      k--;
    }

    arr[k + 1] = current;
  }
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);

  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
};

const merge = (sortedLeft, sortedRight) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
      result.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      result.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  return result
    .concat(sortedLeft.slice(leftIndex))
    .concat(sortedRight.slice(rightIndex));
};

const sortItem = (sortingAlgo, arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const str = [...arr[i]];

    let word = "";

    if (sortingAlgo.name == "mergeSort") {
      // mergeSort use return value
      const strSorted = sortingAlgo(str);
      word = strSorted.join("");
    } else {
      sortingAlgo(str);
      word = str.join("");
    }

    if (!obj[word]) {
      obj[word] = [arr[i]];
    } else {
      obj[word].push(arr[i]);
    }
  }

  const result = [];

  for (let key in obj) {
    result.push(obj[key]);
  }

  return result;
};

const groupAnagrams = function (strs) {
  // Implementasi akan datang di sini
  // const result = sortItem(bubbleSort, strs);
  // const result = sortItem(selectionSort, strs);
  // const result = sortItem(insertionSort, strs);
  const result = sortItem(mergeSort, strs);
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
