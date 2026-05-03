/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  let obj = {};
  for (let str of strs) {
    let sortTheStr = mergeSort(str.split('')).join('');

    if (!obj[sortTheStr]) {
        obj[sortTheStr] = [str];
    } else {
        obj[sortTheStr].push(str);
    }
  }

  return Object.values(obj);
};

function bubleSort(str) {
    let n = str.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (str[j] > str[j + 1]) {
                [str[j], str[j + 1]] = [str[j + 1], str[j]];
            }
        }
    }
    return str;
}

function selectionSort(str) {
    let n = str.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (str[j] < str[minIndex]) {
                minIndex = j;
            }
        }
        let tmp = str[i];
        str[i] = str[minIndex];
        str[minIndex] = tmp;
    }
    return str;
}

function insertionSort(str) {
    let n = str.length;

    for (let i = 1; i < n; i++) {
        let current = str[i];
        let j = i - 1;

        while (j >= 0 && str[j] > current) {
            str[j + 1] = str[j];
            j--;
        }

        str[j + 1] = current;
    }

    return str;
}

function mergeSort(str) {
    if (str.length <= 1) {
        return str;
    }

    const middle = Math.floor(str.length / 2);
    const left = str.slice(0, middle);
    const right = str.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
    let result = [];
    let letfIndex = 0;
    let rightIndex = 0;

    while(letfIndex < left.length && rightIndex < right.length) {
        if (left[letfIndex] < right[rightIndex]) {
            result.push(left[letfIndex]);
            letfIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(letfIndex)).concat(right.slice(rightIndex));
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