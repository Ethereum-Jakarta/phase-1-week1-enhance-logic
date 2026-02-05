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
  let arr = strs.map((str) => {
    return sortAlgo.selectionSort(str.split(""));
  });

  let obj = {};
  for (let i = 0; i < strs.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = [];
    obj[arr[i]].push(strs[i]);
  }
  return Object.values(obj);
};

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
console.log(groupAnagrams([""]));
// Output: [[""]]

// // Test Case 3
console.log(groupAnagrams(["a"]));
// Output: [["a"]]

// // Test Case 4
console.log(groupAnagrams(["listen", "silent", "hello", "world"]));
// // Output: [["listen","silent"],["hello"],["world"]]

// // Test Case 5
console.log(groupAnagrams(["rat", "tar", "art", "car"]));
// Output: [["rat","tar","art"],["car"]]

// // Test Case 6
console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"]));
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// // Test Case 7
console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"]));
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
