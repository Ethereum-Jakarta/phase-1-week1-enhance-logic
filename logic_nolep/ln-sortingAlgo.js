const sortAlgo = {
  bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      let swapped = false;
      for (let j = 1; j < array.length - i; j++) {
        if (array[j - 1] > array[j]) {
          [array[j - 1], array[j]] = [array[j], array[j - 1]];
          swapped = true;
        }
      }
      if (!swapped) break;
    }
    return array;
  },

  selectionSort(array) {
    let arrLen = array.length;

    for (let i = 0; i < arrLen; i++) {
      let minIdx = i;

      for (let j = i + 1; j < arrLen; j++) {
        if (array[j] < array[minIdx]) {
          minIdx = j;
        }
      }

      [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }
    return array;
  },

  insertionSort(array) {
    let arrLen = array.length;
    for (let i = 1; i < arrLen; i++) {
      let curr = array[i];
      let j = i - 1;

      while (j >= 0 && array[j] > curr) {
        array[j + 1] = array[j];
        j--;
      }

      array[j + 1] = curr;
    }

    return array;
  },

  mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }

    // Bagi arrayay menjadi dua bagian
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Rekursif: Urutkan kedua bagian
    const sortedLeft = sortAlgo.mergeSort(left);
    const sortedRight = sortAlgo.mergeSort(right);

    // Gabungkan dua bagian yang telah diurutkan
    return sortAlgo.merge(sortedLeft, sortedRight);
  },
  merge(left, right) {
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

    // Sisa elemen pada kedua array
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  },
};

const groupAnagrams = function (strs) {
  // early exit
  if (strs.length <= 1) {
    return {
      bubble: [strs],
      selection: [strs],
      insertion: [strs],
      merge: [strs],
    };
  }

  const len = strs.length;
  const split = strs.map((str) => [...str]);

  const algorithm = {
    bubble: sortAlgo.bubbleSort,
    selection: sortAlgo.selectionSort,
    insertion: sortAlgo.insertionSort,
    merge: sortAlgo.mergeSort,
  };

  let groupedByAlgorithm = {};
  for (const [name, algo] of Object.entries(algorithm)) {
    const sortedArr = split.map((str) => algo([...str]));
    let obj = {};
    for (let i = 0; i < len; i++) {
      const key = sortedArr[i].join("");
      if (!obj[key]) obj[key] = [];
      obj[key].push(strs[i]);
    }
    groupedByAlgorithm[name] = Object.values(obj);
  }

  return groupedByAlgorithm;
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
