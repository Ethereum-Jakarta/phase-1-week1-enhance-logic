/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// sorting function 
function bubbleSort(arr){
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        // menukar arr[i] dengan arr[minIndex]
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

function insertionSort(arr) {
    // mulai dari elemen kedua alias index 1
    for (let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j];
            j--;
        }

        // menempatkan element current pada posisi yg tepat
        arr[j + 1] = current;
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // ambil elemen terkecil
    while (i < left.length && j < right.length){
        if (left[i] < right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    // sisa elemen
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// buat milih sort
function normalizeWords(word){
    let chars = word.split('');
    let sorted = mergeSort(chars);
    return sorted.join('');
}

// main function
const groupAnagrams = function(strs) {
  // Implementasi akan datang di sini
  const groups = {};

  for (const words of strs){
    const key = normalizeWords(words);
    if (!groups[key]) groups[key] = [];
    groups[key].push(words);
  }
  return Object.values(groups);
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